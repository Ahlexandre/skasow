import { Injectable, NotFoundException } from '@nestjs/common';
import {
  AnalysisStatus,
  CommercialPriority,
  Prisma,
  ProjectType,
  Urgency,
} from '@prisma/client';
import {
  AnalysesService,
  analysisWithUserInclude,
} from '../analyses/analyses.service';
import { getPagination, paginatedResponse } from '../common/utils/pagination';
import { PrismaService } from '../prisma/prisma.service';
import { AdminAnalysisQueryDto } from './dto/admin-analysis-query.dto';

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
        'Parametres',
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

  async updateStatus(id: string, status: AnalysisStatus) {
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
}
