import { Module } from '@nestjs/common';
import { AnalysisScoringService } from './analysis-scoring.service';
import { AnalysesController } from './analyses.controller';
import { AnalysesService } from './analyses.service';

@Module({
  controllers: [AnalysesController],
  providers: [AnalysesService, AnalysisScoringService],
  exports: [AnalysesService, AnalysisScoringService],
})
export class AnalysesModule {}
