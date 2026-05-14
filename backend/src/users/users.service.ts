import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findMe(userId: string) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { id: userId, deletedAt: null },
    });

    return this.toPublicUser(user);
  }

  async updateMe(userId: string, dto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        firstName: dto.firstName?.trim(),
        lastName: dto.lastName?.trim(),
        phone: dto.phone?.trim() || null,
      },
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'USER_PROFILE_UPDATE',
        entity: 'User',
        entityId: userId,
      },
    });

    return this.toPublicUser(user);
  }

  async deleteMe(userId: string) {
    const anonymizedEmail = `deleted-${userId}@ds-conseil.local`;

    await this.prisma.$transaction([
      this.prisma.refreshToken.updateMany({
        where: { userId, revokedAt: null },
        data: { revokedAt: new Date() },
      }),
      this.prisma.user.update({
        where: { id: userId },
        data: {
          firstName: 'Deleted',
          lastName: 'User',
          email: anonymizedEmail,
          phone: null,
          passwordHash: 'deleted',
          deletedAt: new Date(),
        },
      }),
      this.prisma.auditLog.create({
        data: {
          userId,
          action: 'USER_ACCOUNT_DELETE',
          entity: 'User',
          entityId: userId,
        },
      }),
    ]);

    return { success: true };
  }

  private toPublicUser(user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    role: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
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
}
