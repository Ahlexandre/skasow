import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpsertReviewDto } from './dto/upsert-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async findPublic() {
    const reviews = await this.prisma.review.findMany({
      where: {
        rating: { gte: 4 },
        user: { deletedAt: null },
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: [{ updatedAt: 'desc' }],
      take: 100,
    });

    return reviews.map((review) => this.serializeReview(review));
  }

  async findMine(userId: string) {
    const review = await this.prisma.review.findUnique({
      where: { userId },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return review ? this.serializeReview(review) : null;
  }

  async createMine(userId: string, dto: UpsertReviewDto) {
    const existingReview = await this.prisma.review.findUnique({
      where: { userId },
      select: { id: true },
    });

    if (existingReview) {
      throw new BadRequestException('Review already exists');
    }

    const review = await this.prisma.review.create({
      data: this.reviewData(userId, dto),
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'USER_REVIEW_CREATE',
        entity: 'Review',
        entityId: review.id,
        metadata: { rating: review.rating },
      },
    });

    return this.serializeReview(review);
  }

  async updateMine(userId: string, dto: UpsertReviewDto) {
    const existingReview = await this.prisma.review.findUnique({
      where: { userId },
      select: { id: true },
    });

    if (!existingReview) {
      throw new NotFoundException('Review not found');
    }

    const review = await this.prisma.review.update({
      where: { userId },
      data: {
        rating: dto.rating,
        comment: dto.comment.trim(),
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'USER_REVIEW_UPDATE',
        entity: 'Review',
        entityId: review.id,
        metadata: { rating: review.rating },
      },
    });

    return this.serializeReview(review);
  }

  async deleteMine(userId: string) {
    const existingReview = await this.prisma.review.findUnique({
      where: { userId },
      select: { id: true, rating: true },
    });

    if (!existingReview) {
      throw new NotFoundException('Review not found');
    }

    await this.prisma.$transaction([
      this.prisma.review.delete({ where: { userId } }),
      this.prisma.auditLog.create({
        data: {
          userId,
          action: 'USER_REVIEW_DELETE',
          entity: 'Review',
          entityId: existingReview.id,
          metadata: { rating: existingReview.rating },
        },
      }),
    ]);

    return { success: true };
  }

  private reviewData(userId: string, dto: UpsertReviewDto) {
    return {
      userId,
      rating: dto.rating,
      comment: dto.comment.trim(),
    };
  }

  private serializeReview(review: {
    id: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
      firstName: string;
      lastName: string;
    };
  }) {
    return {
      id: review.id,
      userId: review.userId,
      rating: review.rating,
      comment: review.comment,
      authorName: `${review.user.firstName} ${review.user.lastName.charAt(0)}.`,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
    };
  }
}
