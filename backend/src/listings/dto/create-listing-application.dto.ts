import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MaritalStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  ValidateIf,
} from 'class-validator';

export class CreateListingApplicationDto {
  @ApiProperty({ example: '25 000 000 - 35 000 000 FCFA' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  budget: string;

  @ApiPropertyOptional({ example: 'Entrepreneur' })
  @IsOptional()
  @IsString()
  @MaxLength(120)
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
  @ValidateIf((dto: CreateListingApplicationDto) => dto.hasChildren === true)
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(20)
  childrenCount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(1200)
  message?: string;
}
