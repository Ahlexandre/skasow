import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AccountDeletionRequestStatus, Prisma } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import {
  analysisWithUserInclude,
  type AnalysisWithUser,
} from '../analyses/analyses.service';
import { buildAnalysisSnapshot } from '../analyses/analysis-history.util';
import { PrismaService } from '../prisma/prisma.service';
import { AccountDeletionRequestDto } from './dto/account-deletion-request.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { buildAccountDeletionSnapshot } from './user-snapshot.util';

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
    const currentUser = await this.prisma.user.findFirstOrThrow({
      where: { id: userId, deletedAt: null },
    });
    const nextEmail = dto.email?.trim().toLowerCase();

    if (nextEmail && nextEmail !== currentUser.email) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: nextEmail },
        select: { id: true },
      });

      if (existingUser) {
        throw new ConflictException('Email already registered');
      }
    }

    if (dto.newPassword) {
      if (!dto.currentPassword) {
        throw new BadRequestException('Current password is required');
      }

      const isPasswordValid = await bcrypt.compare(
        dto.currentPassword,
        currentUser.passwordHash,
      );

      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid current password');
      }
    }

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        firstName: dto.firstName?.trim(),
        lastName: dto.lastName?.trim(),
        phone: dto.phone === undefined ? undefined : dto.phone.trim() || null,
        email: nextEmail,
        passwordHash: dto.newPassword
          ? await bcrypt.hash(dto.newPassword, 12)
          : undefined,
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
      include: {
        analyses: {
          select: this.analysisSnapshotSelect(),
        },
      },
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

    const now = new Date();
    const request = await this.prisma.accountDeletionRequest.create({
      data: {
        userId,
        reason: dto.reason.trim(),
        userSnapshot: buildAccountDeletionSnapshot(user, {
          reason: dto.reason.trim(),
          requestedAt: now,
          deletedBy: 'user',
          analyses: user.analyses,
        }),
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
    const user = await this.prisma.user.findFirstOrThrow({
      where: { id: userId, deletedAt: null },
      include: {
        analyses: {
          include: analysisWithUserInclude,
        },
        accountDeletionRequests: {
          where: { status: AccountDeletionRequestStatus.PENDING },
          select: { createdAt: true, reason: true },
          take: 1,
        },
      },
    });
    const now = new Date();
    const anonymizedEmail = `deleted-${userId}@ds-conseil.local`;
    const pendingDeletionRequest = user.accountDeletionRequests[0];
    const userSnapshot = buildAccountDeletionSnapshot(user, {
      reason:
        pendingDeletionRequest?.reason ??
        'Suppression directe du compte par l utilisateur.',
      requestedAt: pendingDeletionRequest?.createdAt,
      processedAt: now,
      deletedBy: 'user',
      analyses: user.analyses,
    });

    const operations: Prisma.PrismaPromise<unknown>[] = [
      ...user.analyses.map((analysis) =>
        this.prisma.analysisHistory.create({
          data: this.buildAnalysisHistoryData(analysis, 'user-account'),
        }),
      ),
      pendingDeletionRequest
        ? this.prisma.accountDeletionRequest.updateMany({
            where: {
              userId,
              status: AccountDeletionRequestStatus.PENDING,
            },
            data: {
              status: AccountDeletionRequestStatus.PROCESSED,
              userSnapshot,
              processedAt: now,
            },
          })
        : this.prisma.accountDeletionRequest.create({
            data: {
              userId,
              reason: 'Suppression directe du compte par l utilisateur.',
              status: AccountDeletionRequestStatus.PROCESSED,
              userSnapshot,
              processedAt: now,
            },
          }),
      this.prisma.refreshToken.updateMany({
        where: { userId, revokedAt: null },
        data: { revokedAt: now },
      }),
      this.prisma.user.update({
        where: { id: userId },
        data: {
          firstName: 'Deleted',
          lastName: 'User',
          email: anonymizedEmail,
          phone: null,
          passwordHash: 'deleted',
          deletedAt: now,
        },
      }),
      this.prisma.auditLog.create({
        data: {
          userId,
          action: 'USER_ACCOUNT_DELETE',
          entity: 'User',
          entityId: userId,
          metadata: {
            userSnapshot,
            analysisSnapshotsCount: user.analyses.length,
          },
        },
      }),
    ];

    await this.prisma.$transaction(operations);

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

  private buildAnalysisHistoryData(
    analysis: AnalysisWithUser,
    deletedBy: string,
  ) {
    return {
      originalAnalysisId: analysis.id,
      userId: analysis.userId,
      userEmail: analysis.user.email,
      userFirstName: analysis.user.firstName,
      userLastName: analysis.user.lastName,
      userPhone: analysis.user.phone,
      snapshot: buildAnalysisSnapshot(analysis),
      deletedBy,
    };
  }

  private analysisSnapshotSelect() {
    return {
      id: true,
      projectType: true,
      city: true,
      district: true,
      score: true,
      commercialPriority: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    } satisfies Prisma.AnalysisSelect;
  }
}
