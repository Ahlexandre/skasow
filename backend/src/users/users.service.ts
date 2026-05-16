import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { AccountDeletionRequestStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AccountDeletionRequestDto } from './dto/account-deletion-request.dto';
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

  async requestAccountDeletion(userId: string, dto: AccountDeletionRequestDto) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { id: userId, deletedAt: null },
    });

    const existingPending = await this.prisma.accountDeletionRequest.findFirst({
      where: {
        userId,
        status: AccountDeletionRequestStatus.PENDING,
      },
    });

    if (existingPending) {
      throw new BadRequestException(
        'Une demande de suppression de compte est déjà en cours.',
      );
    }

    const request = await this.prisma.accountDeletionRequest.create({
      data: {
        userId,
        reason: dto.reason.trim(),
        userSnapshot: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          role: user.role,
          createdAt: user.createdAt,
        },
      },
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'ACCOUNT_DELETION_REQUESTED',
        entity: 'AccountDeletionRequest',
        entityId: request.id,
        metadata: {
          reason: request.reason,
          userEmail: user.email,
        },
      },
    });

    return {
      success: true,
      requestId: request.id,
      status: request.status,
      message:
        'Votre demande a ete enregistree. Un administrateur traitera la suppression de votre compte.',
    };
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
