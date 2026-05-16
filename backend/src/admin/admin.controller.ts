import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { AuthenticatedUser } from '../common/types/authenticated-user.type';
import { AdminService } from './admin.service';
import { AdminAnalysisQueryDto } from './dto/admin-analysis-query.dto';
import { AdminUserQueryDto } from './dto/admin-user-query.dto';
import { UpdateAnalysisStatusDto } from './dto/update-analysis-status.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';

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

  @Get('activity')
  getRecentActivity() {
    return this.adminService.getRecentActivity();
  }

  @Get('history')
  getHistory() {
    return this.adminService.getHistory();
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

  @Get('users')
  getUsers(@Query() query: AdminUserQueryDto) {
    return this.adminService.findUsers(query);
  }

  @Get('users/:id')
  getUser(@Param('id') id: string) {
    return this.adminService.findUser(id);
  }

  @Patch('users/:id/role')
  updateUserRole(
    @Param('id') id: string,
    @Body() dto: UpdateUserRoleDto,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.adminService.updateUserRole(id, dto.role, currentUser.id);
  }

  @Delete('users/:id')
  deleteUser(
    @Param('id') id: string,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.adminService.deleteUser(id, currentUser.id);
  }

  @Get('analyses/:id')
  getAnalysis(@Param('id') id: string) {
    return this.adminService.findAnalysis(id);
  }

  @Patch('analyses/:id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateAnalysisStatusDto) {
    return this.adminService.updateStatus(id, dto.status);
  }

  @Delete('analyses/:id')
  deleteAnalysis(
    @Param('id') id: string,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.adminService.deleteAnalysis(id, currentUser.id);
  }
}
