import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';

export const ADMIN_ANALYSIS_STATUSES = [
  'SENT',
  'FAVORITE',
  'IN_PROGRESS',
  'PRIORITY',
  'INCOMPLETE',
  'PROCESSED',
  'TO_RECONTACT',
  'ARCHIVED',
] as const;

export type AdminAnalysisStatus = (typeof ADMIN_ANALYSIS_STATUSES)[number];

export class UpdateAnalysisStatusDto {
  @ApiProperty({ enum: ADMIN_ANALYSIS_STATUSES })
  @IsIn(ADMIN_ANALYSIS_STATUSES)
  status: AdminAnalysisStatus;
}
