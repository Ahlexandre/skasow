import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { mkdirSync, renameSync } from 'node:fs';
import { extname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { AuthenticatedUser } from '../common/types/authenticated-user.type';
import { CreateListingApplicationDto } from './dto/create-listing-application.dto';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingApplicationStatusDto } from './dto/update-listing-application-status.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { ListingsService } from './listings.service';

type RequestWithMaybeUser = {
  user?: AuthenticatedUser;
};

type UploadedListingFile = {
  filename: string;
  originalname: string;
  mimetype: string;
  path: string;
  size: number;
};

const listingUploadDir = join(process.cwd(), 'uploads', 'listings');
mkdirSync(listingUploadDir, { recursive: true });

const imageMimeTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);

@ApiTags('listings')
@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get('admin/all')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAdminAll() {
    return this.listingsService.findAdminAll();
  }

  @Get('admin/:id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAdminOne(@Param('id') id: string) {
    return this.listingsService.findAdminOne(id);
  }

  @Post('admin')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createAdmin(
    @Body() dto: CreateListingDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.listingsService.createAdmin(dto, user.id);
  }

  @Post('admin/uploads')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      dest: listingUploadDir,
      limits: { fileSize: 5 * 1024 * 1024 },
      fileFilter: (_request, file: UploadedListingFile, callback) => {
        if (!imageMimeTypes.has(file.mimetype)) {
          callback(
            new BadRequestException('Format image non supporte.'),
            false,
          );
          return;
        }

        callback(null, true);
      },
    }),
  )
  uploadListingImage(@UploadedFile() file?: UploadedListingFile) {
    if (!file) {
      throw new BadRequestException('Image manquante.');
    }

    const extension = extname(file.originalname).toLowerCase() || '.jpg';
    const filename = `${randomUUID()}${extension}`;
    const targetPath = join(listingUploadDir, filename);
    renameSync(file.path, targetPath);

    return {
      url: `/uploads/listings/${filename}`,
      filename,
      size: file.size,
    };
  }

  @Patch('admin/:id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateAdmin(
    @Param('id') id: string,
    @Body() dto: UpdateListingDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.listingsService.updateAdmin(id, dto, user.id);
  }

  @Delete('admin/:id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteAdmin(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.listingsService.deleteAdmin(id, user.id);
  }

  @Patch('admin/applications/:id/status')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateApplicationStatus(
    @Param('id') id: string,
    @Body() dto: UpdateListingApplicationStatusDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.listingsService.updateApplicationStatus(id, dto, user.id);
  }

  @Get('me/applications')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findMyApplications(@CurrentUser() user: AuthenticatedUser) {
    return this.listingsService.findMyApplications(user.id);
  }

  @Post(':id/applications')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  apply(
    @Param('id') id: string,
    @Body() dto: CreateListingApplicationDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.listingsService.apply(id, user.id, dto);
  }

  @Get(':id')
  findPublishedOne(
    @Param('id') id: string,
    @Req() request: RequestWithMaybeUser,
  ) {
    return this.listingsService.findPublishedOne(id, request.user?.id);
  }

  @Get()
  findPublished(@Req() request: RequestWithMaybeUser) {
    return this.listingsService.findPublished(request.user?.id);
  }
}
