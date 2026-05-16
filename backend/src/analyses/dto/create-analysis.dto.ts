import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MaritalStatus, ProjectType, Urgency } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  Equals,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';

export class CreateAnalysisDto {
  @ApiProperty({ enum: ProjectType })
  @IsEnum(ProjectType)
  projectType: ProjectType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  district?: string;

  @ApiPropertyOptional({ example: 35000000 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  budget?: number;

  @ApiPropertyOptional({ example: '10 000 000 — 20 000 000 FCFA' })
  @IsOptional()
  @IsString()
  budgetRange?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  propertyType?: string;

  @ApiPropertyOptional({ example: 120 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  surface?: number;

  @ApiPropertyOptional({ example: '100 — 200 m²' })
  @IsOptional()
  @IsString()
  surfaceRange?: string;

  @ApiProperty({ enum: Urgency })
  @IsEnum(Urgency)
  urgency: Urgency;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  objective?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  message?: string;

  @ApiPropertyOptional({ example: 'Ingénieur civil' })
  @IsOptional()
  @IsString()
  profession?: string;

  @ApiPropertyOptional({ enum: MaritalStatus })
  @IsOptional()
  @IsEnum(MaritalStatus)
  maritalStatus?: MaritalStatus;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  hasChildren?: boolean;

  @ApiPropertyOptional({ example: 2 })
  @ValidateIf((dto: CreateAnalysisDto) => dto.hasChildren === true)
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(20)
  childrenCount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  personalNotes?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @Equals(true, { message: 'consentAccepted must be true' })
  consentAccepted: boolean;
}
