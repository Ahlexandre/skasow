import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { AuthenticatedUser } from '../common/types/authenticated-user.type';
import { UpsertReviewDto } from './dto/upsert-review.dto';
import { ReviewsService } from './reviews.service';

@ApiTags('reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('public')
  findPublic() {
    return this.reviewsService.findPublic();
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findMine(@CurrentUser() user: AuthenticatedUser) {
    return this.reviewsService.findMine(user.id);
  }

  @Post('me')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  createMine(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: UpsertReviewDto,
  ) {
    return this.reviewsService.createMine(user.id, dto);
  }

  @Patch('me')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  updateMine(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: UpsertReviewDto,
  ) {
    return this.reviewsService.updateMine(user.id, dto);
  }

  @Delete('me')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  deleteMine(@CurrentUser() user: AuthenticatedUser) {
    return this.reviewsService.deleteMine(user.id);
  }
}
