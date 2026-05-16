import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  AccountDeletionRequestStatus,
  AnalysisStatus,
  CommercialPriority,
  Prisma,
  ProjectType,
  Role,
  Urgency,
} from '@prisma/client';
import {
  AnalysesService,
  analysisWithUserInclude,
} from '../analyses/analyses.service';
import { buildAnalysisSnapshot } from '../analyses/analysis-history.util';
import { getPagination, paginatedResponse } from '../common/utils/pagination';
import { PrismaService } from '../prisma/prisma.service';
import { buildAccountDeletionSnapshot } from '../users/user-snapshot.util';
import { AdminAnalysisQueryDto } from './dto/admin-analysis-query.dto';
import { AdminUserQueryDto } from './dto/admin-user-query.dto';
import { AdminAnalysisStatus } from './dto/update-analysis-status.dto';

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly analysesService: AnalysesService,
  ) {}

  async getDashboardStats() {
    const [
      totalProspects,
      totalAnalyses,
      highPriority,
      completeFiles,
      projectTypeDistribution,
    ] = await Promise.all([
      this.prisma.analysis
        .groupBy({ by: ['userId'] })
        .then((rows) => rows.length),
      this.prisma.analysis.count(),
      this.prisma.analysis.count({
        where: { commercialPriority: CommercialPriority.HIGH },
      }),
      this.prisma.analysis.count({
        where: {
          budget: { not: null },
          district: { not: null },
          propertyType: { not: null },
          surface: { not: null },
          user: { phone: { not: null } },
        },
      }),
      this.prisma.analysis.groupBy({
        by: ['projectType'],
        _count: { _all: true },
      }),
    ]);

    const distribution = Object.values(ProjectType).reduce<
      Record<ProjectType, number>
    >(
      (acc, projectType) => {
        acc[projectType] = 0;
        return acc;
      },
      {} as Record<ProjectType, number>,
    );

    for (const row of projectTypeDistribution) {
      distribution[row.projectType] = row._count._all;
    }

    return {
      totalProspects,
      totalAnalyses,
      highPriorityProspects: highPriority,
      completeFilesRate:
        totalAnalyses === 0
          ? 0
          : Math.round((completeFiles / totalAnalyses) * 100),
      projectTypeDistribution: distribution,
      sections: [
        'Achat',
        'Location',
        'Vente',
        'Investissement',
        'Prospects prioritaires',
        'Dossiers a completer',
        'Conversations chatbot',
      ],
    };
  }

  async findAnalyses(query: AdminAnalysisQueryDto) {
    const { skip, take, page, limit } = getPagination(query.page, query.limit);
    const where = this.buildWhere(query);
    const [items, total] = await Promise.all([
      this.prisma.analysis.findMany({
        where,
        include: analysisWithUserInclude,
        orderBy: { [query.sortBy]: query.sortOrder },
        skip,
        take,
      }),
      this.prisma.analysis.count({ where }),
    ]);

    return paginatedResponse(
      items.map((item) => this.analysesService.serializeAnalysis(item)),
      total,
      page,
      limit,
    );
  }

  async findTopAnalyses(query: AdminAnalysisQueryDto) {
    const topQuery: AdminAnalysisQueryDto = {
      ...query,
      minScore: Math.max(query.minScore ?? 75, 75),
      commercialPriority: CommercialPriority.HIGH,
    };
    const { skip, take, page, limit } = getPagination(
      topQuery.page,
      topQuery.limit,
    );
    const where: Prisma.AnalysisWhereInput = {
      ...this.buildWhere(topQuery),
      urgency: Urgency.HIGH,
      user: {
        email: { not: '' },
        phone: { not: null },
      },
    };
    const [items, total] = await Promise.all([
      this.prisma.analysis.findMany({
        where,
        include: analysisWithUserInclude,
        orderBy: [{ score: 'desc' }, { createdAt: 'desc' }],
        skip,
        take,
      }),
      this.prisma.analysis.count({ where }),
    ]);

    return paginatedResponse(
      items.map((item) => this.analysesService.serializeAnalysis(item)),
      total,
      page,
      limit,
    );
  }

  async findAnalysis(id: string) {
    const analysis = await this.prisma.analysis.findUnique({
      where: { id },
      include: analysisWithUserInclude,
    });

    if (!analysis) {
      throw new NotFoundException('Analysis not found');
    }

    return this.analysesService.serializeAnalysis(analysis);
  }

  async updateStatus(id: string, status: AdminAnalysisStatus) {
    const existingAnalysis = await this.prisma.analysis.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!existingAnalysis) {
      throw new NotFoundException('Analysis not found');
    }

    const analysis = await this.prisma.analysis.update({
      where: { id },
      data: { status },
      include: analysisWithUserInclude,
    });

    await this.prisma.auditLog.create({
      data: {
        action: 'ADMIN_ANALYSIS_STATUS_UPDATE',
        entity: 'Analysis',
        entityId: id,
      },
    });

    return this.analysesService.serializeAnalysis(analysis);
  }

  async deleteAnalysis(id: string, currentAdminId: string) {
    const existingAnalysis = await this.prisma.analysis.findUnique({
      where: { id },
      include: analysisWithUserInclude,
    });

    if (!existingAnalysis) {
      throw new NotFoundException('Analysis not found');
    }

    if (existingAnalysis.status !== AnalysisStatus.ARCHIVED) {
      throw new BadRequestException('Only archived analyses can be deleted');
    }

    const snapshot = buildAnalysisSnapshot(existingAnalysis);

    await this.prisma.$transaction([
      this.prisma.analysisHistory.create({
        data: {
          originalAnalysisId: existingAnalysis.id,
          userId: existingAnalysis.userId,
          userEmail: existingAnalysis.user.email,
          userFirstName: existingAnalysis.user.firstName,
          userLastName: existingAnalysis.user.lastName,
          userPhone: existingAnalysis.user.phone,
          snapshot,
          deletedBy: 'admin',
        },
      }),
      this.prisma.analysis.delete({
        where: { id },
      }),
      this.prisma.auditLog.create({
        data: {
          userId: currentAdminId,
          action: 'ADMIN_ANALYSIS_DELETE',
          entity: 'Analysis',
          entityId: id,
          metadata: { historySnapshot: true },
        },
      }),
    ]);

    return { success: true };
  }

  async getAnalysesByService() {
    const rows = await this.prisma.analysis.groupBy({
      by: ['recommendedService'],
      _count: { _all: true },
      orderBy: { _count: { recommendedService: 'desc' } },
    });

    return rows.map((row) => ({
      service: row.recommendedService,
      count: row._count._all,
    }));
  }

  async findUsers(query: AdminUserQueryDto) {
    const { skip, take, page, limit } = getPagination(query.page, query.limit);
    const where = this.buildUserWhere(query);
    const [items, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        select: this.adminUserSelect(),
        orderBy: { [query.sortBy]: query.sortOrder },
        skip,
        take,
      }),
      this.prisma.user.count({ where }),
    ]);

    return paginatedResponse(
      items.map((item) => this.serializeAdminUser(item)),
      total,
      page,
      limit,
    );
  }

  async findUser(id: string) {
    const user = await this.prisma.user.findFirst({
      where: { id, deletedAt: null },
      select: {
        ...this.adminUserSelect(),
        analyses: {
          orderBy: { createdAt: 'desc' },
          take: 10,
          select: {
            id: true,
            projectType: true,
            city: true,
            district: true,
            score: true,
            commercialPriority: true,
            status: true,
            createdAt: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.serializeAdminUser(user);
  }

  async updateUserRole(id: string, role: Role, currentAdminId: string) {
    const user = await this.prisma.user.findFirst({
      where: { id, deletedAt: null },
      select: { id: true, role: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (id === currentAdminId && role !== Role.ADMIN) {
      throw new ForbiddenException('You cannot remove your own admin role');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: { role },
      select: this.adminUserSelect(),
    });

    await this.prisma.auditLog.create({
      data: {
        userId: currentAdminId,
        action: 'ADMIN_USER_ROLE_UPDATE',
        entity: 'User',
        entityId: id,
        metadata: {
          previousRole: user.role,
          nextRole: role,
        },
      },
    });

    return this.serializeAdminUser(updatedUser);
  }

  async deleteUser(id: string, currentAdminId: string) {
    const user = await this.prisma.user.findFirst({
      where: { id, deletedAt: null },
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

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (id === currentAdminId) {
      throw new ForbiddenException('You cannot delete your own account');
    }

    const now = new Date();
    const pendingDeletionRequest = user.accountDeletionRequests[0];
    const userSnapshot = buildAccountDeletionSnapshot(user, {
      reason:
        pendingDeletionRequest?.reason ??
        'Suppression directe du compte par un administrateur.',
      requestedAt: pendingDeletionRequest?.createdAt,
      processedAt: now,
      processedByAdminId: currentAdminId,
      deletedBy: 'admin',
      analyses: user.analyses,
    });

    const operations: Prisma.PrismaPromise<unknown>[] = [
      ...user.analyses.map((analysis) =>
        this.prisma.analysisHistory.create({
          data: {
            originalAnalysisId: analysis.id,
            userId: analysis.userId,
            userEmail: analysis.user.email,
            userFirstName: analysis.user.firstName,
            userLastName: analysis.user.lastName,
            userPhone: analysis.user.phone,
            snapshot: buildAnalysisSnapshot(analysis),
            deletedBy: 'admin-user',
          },
        }),
      ),
      pendingDeletionRequest
        ? this.prisma.accountDeletionRequest.updateMany({
            where: {
              userId: id,
              status: AccountDeletionRequestStatus.PENDING,
            },
            data: {
              status: AccountDeletionRequestStatus.PROCESSED,
              userSnapshot,
              processedAt: now,
              processedByAdminId: currentAdminId,
            },
          })
        : this.prisma.accountDeletionRequest.create({
            data: {
              userId: id,
              reason: 'Suppression directe du compte par un administrateur.',
              status: AccountDeletionRequestStatus.PROCESSED,
              userSnapshot,
              processedAt: now,
              processedByAdminId: currentAdminId,
            },
          }),
      this.prisma.refreshToken.updateMany({
        where: { userId: id, revokedAt: null },
        data: { revokedAt: now },
      }),
      this.prisma.user.update({
        where: { id },
        data: {
          firstName: 'Deleted',
          lastName: 'User',
          email: `deleted-admin-${id}@ds-conseil.local`,
          phone: null,
          passwordHash: 'deleted',
          role: Role.USER,
          deletedAt: now,
        },
      }),
      this.prisma.auditLog.create({
        data: {
          userId: currentAdminId,
          action: 'ADMIN_USER_DELETE',
          entity: 'User',
          entityId: id,
          metadata: {
            email: user.email,
            userSnapshot,
            analysisSnapshotsCount: user.analyses.length,
          },
        },
      }),
    ];

    await this.prisma.$transaction(operations);

    return { success: true };
  }

  private buildWhere(query: AdminAnalysisQueryDto): Prisma.AnalysisWhereInput {
    const where: Prisma.AnalysisWhereInput = {};

    if (query.projectType) where.projectType = query.projectType;
    if (query.maturityLevel) where.maturityLevel = query.maturityLevel;
    if (query.commercialPriority)
      where.commercialPriority = query.commercialPriority;
    if (query.status) where.status = query.status;
    if (query.minScore !== undefined) where.score = { gte: query.minScore };

    if (query.search?.trim()) {
      const search = query.search.trim();
      where.OR = [
        { city: { contains: search, mode: 'insensitive' } },
        { district: { contains: search, mode: 'insensitive' } },
        { propertyType: { contains: search, mode: 'insensitive' } },
        { user: { firstName: { contains: search, mode: 'insensitive' } } },
        { user: { lastName: { contains: search, mode: 'insensitive' } } },
        { user: { email: { contains: search, mode: 'insensitive' } } },
        { user: { phone: { contains: search, mode: 'insensitive' } } },
      ];
    }

    return where;
  }

  private buildUserWhere(query: AdminUserQueryDto): Prisma.UserWhereInput {
    const where: Prisma.UserWhereInput = { deletedAt: null };

    if (query.role) where.role = query.role;

    if (query.search?.trim()) {
      const search = query.search.trim();
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
      ];
    }

    return where;
  }

  private adminUserSelect() {
    return {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      role: true,
      createdAt: true,
      updatedAt: true,
      _count: {
        select: {
          analyses: true,
          refreshTokens: {
            where: {
              revokedAt: null,
              expiresAt: { gt: new Date() },
            },
          },
        },
      },
    } satisfies Prisma.UserSelect;
  }

  private serializeAdminUser(user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    _count: {
      analyses: number;
      refreshTokens: number;
    };
    analyses?: Array<{
      id: string;
      projectType: ProjectType;
      city: string;
      district: string | null;
      score: number;
      commercialPriority: CommercialPriority;
      status: AnalysisStatus;
      createdAt: Date;
    }>;
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
      analysesCount: user._count.analyses,
      activeSessionsCount: user._count.refreshTokens,
      analyses: user.analyses ?? [],
    };
  }

  async getRecentActivity() {
    const history = await this.getHistory();
    return history.recentActivity;
  }

  async deleteAnalysisHistory(id: string, currentAdminId: string) {
    const entry = await this.prisma.analysisHistory.findUnique({
      where: { id },
    });

    if (!entry) {
      throw new NotFoundException('Analysis history not found');
    }

    await this.prisma.$transaction([
      this.prisma.analysisHistory.delete({ where: { id } }),
      this.prisma.auditLog.create({
        data: {
          userId: currentAdminId,
          action: 'ADMIN_ANALYSIS_HISTORY_PERMANENT_DELETE',
          entity: 'AnalysisHistory',
          entityId: id,
          metadata: {
            originalAnalysisId: entry.originalAnalysisId,
            userId: entry.userId,
            userEmail: entry.userEmail,
            deletedAt: entry.deletedAt,
          },
        },
      }),
    ]);

    return { success: true };
  }

  async deleteAccountDeletionHistory(id: string, currentAdminId: string) {
    const entry = await this.prisma.accountDeletionRequest.findUnique({
      where: { id },
    });

    if (!entry) {
      throw new NotFoundException('Account deletion history not found');
    }

    await this.prisma.$transaction([
      this.prisma.accountDeletionRequest.delete({ where: { id } }),
      this.prisma.auditLog.create({
        data: {
          userId: currentAdminId,
          action: 'ADMIN_ACCOUNT_DELETION_HISTORY_PERMANENT_DELETE',
          entity: 'AccountDeletionRequest',
          entityId: id,
          metadata: {
            userId: entry.userId,
            status: entry.status,
            createdAt: entry.createdAt,
            processedAt: entry.processedAt,
          },
        },
      }),
    ]);

    return { success: true };
  }

  async getHistory() {
    const [analysisHistories, accountDeletionRequests, recentActivity] =
      await Promise.all([
        this.prisma.analysisHistory.findMany({
          orderBy: { deletedAt: 'desc' },
          take: 100,
        }),
        this.prisma.accountDeletionRequest.findMany({
          orderBy: { createdAt: 'desc' },
          take: 100,
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                deletedAt: true,
              },
            },
          },
        }),
        this.prisma.auditLog.findMany({
          where: {
            action: {
              in: [
                'ANALYSIS_DELETE',
                'ACCOUNT_DELETION_REQUESTED',
                'USER_ACCOUNT_DELETE',
                'ADMIN_USER_DELETE',
              ],
            },
          },
          orderBy: { createdAt: 'desc' },
          take: 30,
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
        }),
      ]);

    return {
      analysisHistories: analysisHistories.map((entry) => ({
        ...entry,
        snapshot: entry.snapshot,
      })),
      accountDeletionRequests: accountDeletionRequests.map((request) => ({
        id: request.id,
        userId: request.userId,
        reason: request.reason,
        status: request.status,
        userSnapshot: request.userSnapshot,
        createdAt: request.createdAt,
        processedAt: request.processedAt,
        processedByAdminId: request.processedByAdminId,
        user: request.user,
      })),
      recentActivity: recentActivity.map((log) => ({
        id: log.id,
        action: log.action,
        entity: log.entity,
        entityId: log.entityId,
        metadata: log.metadata,
        createdAt: log.createdAt,
        user: log.user,
      })),
    };
  }
}
