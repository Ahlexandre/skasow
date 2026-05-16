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
import { UpdateAnalysisDto } from './dto/update-analysis.dto';

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

  async updateForUser(
    id: string,
    user: AuthenticatedUser,
    dto: UpdateAnalysisDto,
  ) {
    const existingAnalysis = await this.findAnalysisEntityForUser(id, user);
    const nextDto = this.mergeAnalysisDto(existingAnalysis, dto);
    const generated = this.scoring.generate(nextDto, {
      email: existingAnalysis.user.email,
      phone: existingAnalysis.user.phone,
    });

    const analysis = await this.prisma.analysis.update({
      where: { id },
      data: {
        projectType: nextDto.projectType,
        city: nextDto.city.trim(),
        district: nextDto.district?.trim() || null,
        budget: nextDto.budget ? new Prisma.Decimal(nextDto.budget) : null,
        propertyType: nextDto.propertyType?.trim() || null,
        surface: nextDto.surface || null,
        urgency: nextDto.urgency,
        objective: nextDto.objective?.trim() || null,
        message: nextDto.message?.trim() || null,
        consentAccepted: nextDto.consentAccepted,
        score: generated.score,
        maturityLevel: generated.maturityLevel,
        commercialPriority: generated.commercialPriority,
        profileType: generated.profileType,
        recommendedService: generated.recommendedService,
        strengths: generated.strengths,
        missingInfo: generated.missingInfo,
        recommendations: generated.recommendations,
        nextAction: generated.nextAction,
      },
      include: analysisWithUserInclude,
    });

    await this.prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'ANALYSIS_UPDATE',
        entity: 'Analysis',
        entityId: analysis.id,
      },
    });

    return this.serializeAnalysis(analysis);
  }

  async deleteForUser(id: string, user: AuthenticatedUser) {
    const existingAnalysis = await this.findAnalysisEntityForUser(id, user);

    await this.prisma.$transaction([
      this.prisma.auditLog.create({
        data: {
          userId: user.id,
          action: 'ANALYSIS_DELETE',
          entity: 'Analysis',
          entityId: existingAnalysis.id,
        },
      }),
      this.prisma.analysis.delete({ where: { id } }),
    ]);

    return { success: true };
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

  private async findAnalysisEntityForUser(id: string, user: AuthenticatedUser) {
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

    return analysis;
  }

  private mergeAnalysisDto(
    analysis: AnalysisWithUser,
    dto: UpdateAnalysisDto,
  ): CreateAnalysisDto {
    return {
      projectType: dto.projectType ?? analysis.projectType,
      city: dto.city ?? analysis.city,
      district: dto.district ?? analysis.district ?? undefined,
      budget:
        dto.budget ?? (analysis.budget ? Number(analysis.budget) : undefined),
      propertyType: dto.propertyType ?? analysis.propertyType ?? undefined,
      surface: dto.surface ?? analysis.surface ?? undefined,
      urgency: dto.urgency ?? analysis.urgency,
      objective: dto.objective ?? analysis.objective ?? undefined,
      message: dto.message ?? analysis.message ?? undefined,
      consentAccepted: dto.consentAccepted ?? analysis.consentAccepted,
    };
  }
}
