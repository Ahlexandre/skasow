import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminService } from './admin.service';
import { AdminAnalysisQueryDto } from './dto/admin-analysis-query.dto';
import { UpdateAnalysisStatusDto } from './dto/update-analysis-status.dto';

@ApiTags('admin')
@ApiBearerAuth()
@Roles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dashboard/stats')
  getDashboardStats() {
    return this.adminService.getDashboardStats();
  }

  @Get('analyses')
  getAnalyses(@Query() query: AdminAnalysisQueryDto) {
    return this.adminService.findAnalyses(query);
  }

  @Get('analyses/top')
  getTopAnalyses(@Query() query: AdminAnalysisQueryDto) {
    return this.adminService.findTopAnalyses(query);
  }

  @Get('analyses/by-service')
  getAnalysesByService() {
    return this.adminService.getAnalysesByService();
  }

  @Get('analyses/:id')
  getAnalysis(@Param('id') id: string) {
    return this.adminService.findAnalysis(id);
  }

  @Patch('analyses/:id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateAnalysisStatusDto) {
    return this.adminService.updateStatus(id, dto.status);
  }
}
