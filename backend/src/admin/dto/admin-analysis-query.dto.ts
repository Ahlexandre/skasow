import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  AnalysisStatus,
  CommercialPriority,
  MaturityLevel,
  ProjectType,
} from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

export class AdminAnalysisQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ enum: ProjectType })
  @IsOptional()
  @IsEnum(ProjectType)
  projectType?: ProjectType;

  @ApiPropertyOptional({ enum: MaturityLevel })
  @IsOptional()
  @IsEnum(MaturityLevel)
  maturityLevel?: MaturityLevel;

  @ApiPropertyOptional({ enum: CommercialPriority })
  @IsOptional()
  @IsEnum(CommercialPriority)
  commercialPriority?: CommercialPriority;

  @ApiPropertyOptional({ enum: AnalysisStatus })
  @IsOptional()
  @IsEnum(AnalysisStatus)
  status?: AnalysisStatus;

  @ApiPropertyOptional({ minimum: 0, maximum: 100 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  minScore?: number;
}
