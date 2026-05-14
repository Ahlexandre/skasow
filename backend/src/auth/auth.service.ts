import {
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Role, User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';
import { Request } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

type TokenPayload = {
  sub: string;
  email: string;
  role: Role;
};

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async register(dto: RegisterDto, request: Request) {
    const email = dto.email.trim().toLowerCase();
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);
    const user = await this.prisma.user.create({
      data: {
        firstName: dto.firstName.trim(),
        lastName: dto.lastName.trim(),
        email,
        phone: dto.phone?.trim() || null,
        passwordHash,
        role: Role.USER,
      },
    });

    await this.audit(user.id, 'AUTH_REGISTER', 'User', user.id);
    this.logger.log(`User registered: ${user.id}`);

    return this.issueTokens(user, request);
  }

  async login(dto: LoginDto, request: Request) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.trim().toLowerCase() },
    });

    if (!user || user.deletedAt) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    await this.audit(user.id, 'AUTH_LOGIN', 'User', user.id);
    return this.issueTokens(user, request);
  }

  async refresh(refreshToken: string, request: Request) {
    const tokenRecord = await this.findRefreshToken(refreshToken);

    if (!tokenRecord || tokenRecord.user.deletedAt) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    await this.prisma.refreshToken.update({
      where: { id: tokenRecord.id },
      data: { revokedAt: new Date() },
    });

    return this.issueTokens(tokenRecord.user, request);
  }

  async logout(refreshToken?: string, userId?: string) {
    if (refreshToken) {
      const tokenRecord = await this.findRefreshToken(refreshToken, userId);
      if (tokenRecord) {
        await this.prisma.refreshToken.update({
          where: { id: tokenRecord.id },
          data: { revokedAt: new Date() },
        });
      }
    }

    return { success: true };
  }

  async me(userId: string) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { id: userId, deletedAt: null },
    });

    return this.toPublicUser(user);
  }

  private async issueTokens(user: User, request: Request) {
    const payload: TokenPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = randomBytes(64).toString('base64url');
    const refreshTokenHash = await bcrypt.hash(refreshToken, 12);
    const expiresInDays = this.config.get<number>(
      'JWT_REFRESH_EXPIRES_IN_DAYS',
      30,
    );
    const expiresAt = new Date(
      Date.now() + expiresInDays * 24 * 60 * 60 * 1000,
    );

    await this.prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: refreshTokenHash,
        expiresAt,
        userAgent: request.headers['user-agent'],
        ipAddress: request.ip,
      },
    });

    return {
      accessToken,
      refreshToken,
      user: this.toPublicUser(user),
    };
  }

  private async findRefreshToken(refreshToken: string, userId?: string) {
    const tokenRecords = await this.prisma.refreshToken.findMany({
      where: {
        userId,
        revokedAt: null,
        expiresAt: { gt: new Date() },
      },
      include: { user: true },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    for (const tokenRecord of tokenRecords) {
      if (await bcrypt.compare(refreshToken, tokenRecord.tokenHash)) {
        return tokenRecord;
      }
    }

    return null;
  }

  private toPublicUser(user: User) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  private async audit(
    userId: string,
    action: string,
    entity: string,
    entityId?: string,
  ) {
    await this.prisma.auditLog.create({
      data: { userId, action, entity, entityId },
    });
  }
}
