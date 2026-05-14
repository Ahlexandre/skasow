import { ApiProperty } from '@nestjs/swagger';
import { AnalysisStatus } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class UpdateAnalysisStatusDto {
  @ApiProperty({ enum: AnalysisStatus })
  @IsEnum(AnalysisStatus)
  status: AnalysisStatus;
}
