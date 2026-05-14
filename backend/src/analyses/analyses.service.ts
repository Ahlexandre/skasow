import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AnalysisStatus, Prisma, Role } from '@prisma/client';
import { AuthenticatedUser } from '../common/types/authenticated-user.type';
import { PrismaService } from '../prisma/prisma.service';
import { AnalysisScoringService } from './analysis-scoring.service';
import { CreateAnalysisDto } from './dto/create-analysis.dto';

export const analysisWithUserInclude = {
  user: {
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
    },
  },
} as const;

export type AnalysisWithUser = Prisma.AnalysisGetPayload<{
  include: typeof analysisWithUserInclude;
}>;

@Injectable()
export class AnalysesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly scoring: AnalysisScoringService,
  ) {}

  async create(userId: string, dto: CreateAnalysisDto) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { id: userId, deletedAt: null },
    });
    const generated = this.scoring.generate(dto, {
      email: user.email,
      phone: user.phone,
    });

    const analysis = await this.prisma.analysis.create({
      data: {
        userId,
        projectType: dto.projectType,
        city: dto.city.trim(),
        district: dto.district?.trim() || null,
        budget: dto.budget ? new Prisma.Decimal(dto.budget) : null,
        propertyType: dto.propertyType?.trim() || null,
        surface: dto.surface || null,
        urgency: dto.urgency,
        objective: dto.objective?.trim() || null,
        message: dto.message?.trim() || null,
        consentAccepted: dto.consentAccepted,
        score: generated.score,
        maturityLevel: generated.maturityLevel,
        commercialPriority: generated.commercialPriority,
        profileType: generated.profileType,
        recommendedService: generated.recommendedService,
        strengths: generated.strengths,
        missingInfo: generated.missingInfo,
        recommendations: generated.recommendations,
        nextAction: generated.nextAction,
        status:
          generated.commercialPriority === 'HIGH'
            ? AnalysisStatus.PRIORITY
            : AnalysisStatus.SENT,
      },
      include: analysisWithUserInclude,
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'ANALYSIS_CREATE',
        entity: 'Analysis',
        entityId: analysis.id,
      },
    });

    return this.serializeAnalysis(analysis);
  }

  async findMy(userId: string) {
    const analyses = await this.prisma.analysis.findMany({
      where: { userId },
      include: analysisWithUserInclude,
      orderBy: { createdAt: 'desc' },
    });

    return analyses.map((analysis) => this.serializeAnalysis(analysis));
  }

  async findOneForUser(id: string, user: AuthenticatedUser) {
    const analysis = await this.prisma.analysis.findUnique({
      where: { id },
      include: analysisWithUserInclude,
    });

    if (!analysis) {
      throw new NotFoundException('Analysis not found');
    }

    if (user.role !== Role.ADMIN && analysis.userId !== user.id) {
      throw new ForbiddenException('You cannot access this analysis');
    }

    return this.serializeAnalysis(analysis);
  }

  serializeAnalysis(analysis: AnalysisWithUser) {
    return {
      ...analysis,
      budget: analysis.budget ? Number(analysis.budget) : null,
      user: {
        id: analysis.user.id,
        firstName: analysis.user.firstName,
        lastName: analysis.user.lastName,
        email: analysis.user.email,
        phone: analysis.user.phone,
      },
    };
  }
}
