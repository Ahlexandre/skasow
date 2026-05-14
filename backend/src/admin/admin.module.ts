import { Module } from '@nestjs/common';
import { AnalysesModule } from '../analyses/analyses.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [AnalysesModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
