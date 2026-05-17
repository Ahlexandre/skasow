import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  Listing,
  ListingApplicationStatus,
  ListingStatus,
  Prisma,
} from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateListingApplicationDto } from './dto/create-listing-application.dto';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingApplicationDto } from './dto/update-listing-application.dto';
import { UpdateListingApplicationStatusDto } from './dto/update-listing-application-status.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

const applicationInclude = {
  user: {
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
    },
  },
} satisfies Prisma.ListingApplicationInclude;

const listingInclude = {
  applications: {
    include: applicationInclude,
    orderBy: { createdAt: 'desc' },
  },
} satisfies Prisma.ListingInclude;

@Injectable()
export class ListingsService {
  constructor(private readonly prisma: PrismaService) {}

  async findPublished(userId?: string) {
    const listings = await this.prisma.listing.findMany({
      where: { status: ListingStatus.PUBLISHED },
      include: {
        applications: userId
          ? {
              where: { userId },
              select: { id: true, status: true, createdAt: true },
            }
          : false,
      },
      orderBy: { createdAt: 'desc' },
    });

    return listings.map((listing) => this.serializeListing(listing, userId));
  }

  async findPublishedOne(id: string, userId?: string) {
    const listing = await this.prisma.listing.findFirst({
      where: { id, status: ListingStatus.PUBLISHED },
      include: {
        applications: userId
          ? {
              where: { userId },
              select: { id: true, status: true, createdAt: true },
            }
          : false,
      },
    });

    if (!listing) {
      throw new NotFoundException('Listing not found');
    }

    return this.serializeListing(listing, userId);
  }

  async findAdminAll() {
    const listings = await this.prisma.listing.findMany({
      include: {
        applications: { select: { id: true, status: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return listings.map((listing) => this.serializeListing(listing));
  }

  async findAdminOne(id: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
      include: listingInclude,
    });

    if (!listing) {
      throw new NotFoundException('Listing not found');
    }

    return this.serializeListingWithApplications(listing);
  }

  async createAdmin(dto: CreateListingDto, adminId: string) {
    const listing = await this.prisma.listing.create({
      data: {
        ...this.toCreateListingData(dto),
        createdById: adminId,
      },
      include: {
        applications: { select: { id: true, status: true } },
      },
    });

    await this.prisma.auditLog.create({
      data: {
        userId: adminId,
        action: 'ADMIN_LISTING_CREATE',
        entity: 'Listing',
        entityId: listing.id,
        metadata: { title: listing.title, status: listing.status },
      },
    });

    return this.serializeListing(listing);
  }

  async updateAdmin(id: string, dto: UpdateListingDto, adminId: string) {
    const existing = await this.prisma.listing.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!existing) {
      throw new NotFoundException('Listing not found');
    }

    const listing = await this.prisma.listing.update({
      where: { id },
      data: this.toListingData(dto),
      include: {
        applications: { select: { id: true, status: true } },
      },
    });

    await this.prisma.auditLog.create({
      data: {
        userId: adminId,
        action: 'ADMIN_LISTING_UPDATE',
        entity: 'Listing',
        entityId: id,
        metadata: { title: listing.title, status: listing.status },
      },
    });

    return this.serializeListing(listing);
  }

  async deleteAdmin(id: string, adminId: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
      select: { id: true, title: true, status: true },
    });

    if (!listing) {
      throw new NotFoundException('Listing not found');
    }

    await this.prisma.$transaction([
      this.prisma.listing.delete({ where: { id } }),
      this.prisma.auditLog.create({
        data: {
          userId: adminId,
          action: 'ADMIN_LISTING_DELETE',
          entity: 'Listing',
          entityId: id,
          metadata: { title: listing.title, status: listing.status },
        },
      }),
    ]);

    return { success: true };
  }

  async apply(
    listingId: string,
    userId: string,
    dto: CreateListingApplicationDto,
  ) {
    const listing = await this.prisma.listing.findFirst({
      where: { id: listingId, status: ListingStatus.PUBLISHED },
      select: { id: true, title: true },
    });

    if (!listing) {
      throw new NotFoundException('Listing not found');
    }

    const user = await this.prisma.user.findFirst({
      where: { id: userId, deletedAt: null },
      select: { id: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const existingApplication = await this.prisma.listingApplication.findUnique(
      {
        where: { listingId_userId: { listingId, userId } },
        select: { id: true },
      },
    );

    if (existingApplication) {
      throw new ConflictException('Vous avez deja postule a cette annonce.');
    }

    const application = await this.prisma.listingApplication.create({
      data: {
        listingId,
        userId,
        budget: dto.budget.trim(),
        phone: dto.phone.trim(),
        profession: this.optionalText(dto.profession),
        maritalStatus: dto.maritalStatus,
        hasChildren: dto.hasChildren,
        childrenCount: dto.hasChildren ? dto.childrenCount : null,
        message: this.optionalText(dto.message),
      },
      include: applicationInclude,
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'LISTING_APPLICATION_CREATE',
        entity: 'ListingApplication',
        entityId: application.id,
        metadata: { listingId, listingTitle: listing.title },
      },
    });

    return this.serializeApplication(application);
  }

  async findMyApplications(userId: string) {
    const applications = await this.prisma.listingApplication.findMany({
      where: { userId },
      include: {
        listing: true,
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return applications.map((application) => ({
      ...this.serializeApplication(application),
      listing: this.serializeListing(application.listing),
    }));
  }

  async updateMyApplication(
    id: string,
    userId: string,
    dto: UpdateListingApplicationDto,
  ) {
    const application = await this.prisma.listingApplication.findFirst({
      where: { id, userId },
      include: applicationInclude,
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    if (application.status === ListingApplicationStatus.RESERVED) {
      throw new BadRequestException(
        'Une candidature reservee ne peut plus etre modifiee.',
      );
    }

    const updated = await this.prisma.listingApplication.update({
      where: { id },
      data: {
        budget: dto.budget?.trim(),
        phone: dto.phone?.trim(),
        profession:
          dto.profession === undefined
            ? undefined
            : this.optionalText(dto.profession),
        maritalStatus: dto.maritalStatus,
        hasChildren: dto.hasChildren,
        childrenCount:
          dto.hasChildren === undefined
            ? undefined
            : dto.hasChildren
              ? dto.childrenCount
              : null,
        message:
          dto.message === undefined
            ? undefined
            : this.optionalText(dto.message),
        status:
          application.status === ListingApplicationStatus.CANCELLED
            ? ListingApplicationStatus.INTERESTED
            : undefined,
      },
      include: applicationInclude,
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'LISTING_APPLICATION_UPDATE',
        entity: 'ListingApplication',
        entityId: id,
        metadata: { listingId: updated.listingId },
      },
    });

    return this.serializeApplication(updated);
  }

  async updateApplicationStatus(
    id: string,
    dto: UpdateListingApplicationStatusDto,
    adminId: string,
  ) {
    const application = await this.prisma.listingApplication.findUnique({
      where: { id },
      include: applicationInclude,
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    if (dto.status === ListingApplicationStatus.RESERVED) {
      const reservedApplication =
        await this.prisma.listingApplication.findFirst({
          where: {
            listingId: application.listingId,
            status: ListingApplicationStatus.RESERVED,
            id: { not: id },
          },
          select: { id: true },
        });

      if (reservedApplication) {
        throw new BadRequestException(
          'Cette annonce a deja une candidature reservee.',
        );
      }
    }

    const updated = await this.prisma.listingApplication.update({
      where: { id },
      data: { status: dto.status },
      include: applicationInclude,
    });

    await this.prisma.auditLog.create({
      data: {
        userId: adminId,
        action: 'ADMIN_LISTING_APPLICATION_STATUS_UPDATE',
        entity: 'ListingApplication',
        entityId: id,
        metadata: {
          listingId: updated.listingId,
          previousStatus: application.status,
          nextStatus: updated.status,
        },
      },
    });

    return this.serializeApplication(updated);
  }

  private toListingData(dto: CreateListingDto | UpdateListingDto) {
    return {
      title: dto.title?.trim(),
      description: dto.description?.trim(),
      propertyType: dto.propertyType?.trim(),
      city: dto.city?.trim(),
      district:
        dto.district === undefined
          ? undefined
          : this.optionalText(dto.district),
      address:
        dto.address === undefined ? undefined : this.optionalText(dto.address),
      surface: dto.surface,
      price: dto.price,
      priceLabel:
        dto.priceLabel === undefined
          ? undefined
          : this.optionalText(dto.priceLabel),
      rooms: dto.rooms,
      imageUrls: dto.imageUrls,
      status: dto.status,
    };
  }

  private toCreateListingData(dto: CreateListingDto) {
    return {
      title: dto.title.trim(),
      description: dto.description.trim(),
      propertyType: dto.propertyType.trim(),
      city: dto.city.trim(),
      district: this.optionalText(dto.district),
      address: this.optionalText(dto.address),
      surface: dto.surface,
      price: dto.price,
      priceLabel: this.optionalText(dto.priceLabel),
      rooms: dto.rooms,
      imageUrls: dto.imageUrls ?? [],
      status: dto.status,
    };
  }

  private serializeListing(
    listing: Listing & {
      applications?: Array<{
        id: string;
        status: ListingApplicationStatus;
        createdAt?: Date;
      }>;
    },
    userId?: string,
  ) {
    const myApplication = userId ? listing.applications?.[0] : undefined;
    return {
      id: listing.id,
      title: listing.title,
      description: listing.description,
      propertyType: listing.propertyType,
      city: listing.city,
      district: listing.district,
      address: listing.address,
      surface: listing.surface,
      price: listing.price ? listing.price.toString() : null,
      priceLabel: listing.priceLabel,
      rooms: listing.rooms,
      imageUrls: listing.imageUrls,
      status: listing.status,
      createdAt: listing.createdAt,
      updatedAt: listing.updatedAt,
      applicationsCount: listing.applications?.length ?? 0,
      myApplication: myApplication
        ? {
            id: myApplication.id,
            status: myApplication.status,
            createdAt: myApplication.createdAt,
          }
        : null,
    };
  }

  private serializeListingWithApplications(
    listing: Prisma.ListingGetPayload<{ include: typeof listingInclude }>,
  ) {
    return {
      ...this.serializeListing(listing),
      applications: listing.applications.map((application) =>
        this.serializeApplication(application),
      ),
    };
  }

  private serializeApplication(
    application: Prisma.ListingApplicationGetPayload<{
      include: typeof applicationInclude;
    }>,
  ) {
    return {
      id: application.id,
      listingId: application.listingId,
      userId: application.userId,
      budget: application.budget,
      phone: application.phone,
      profession: application.profession,
      maritalStatus: application.maritalStatus,
      hasChildren: application.hasChildren,
      childrenCount: application.childrenCount,
      message: application.message,
      status: application.status,
      createdAt: application.createdAt,
      updatedAt: application.updatedAt,
      user: application.user,
    };
  }

  private optionalText(value?: string | null) {
    return value?.trim() || null;
  }
}
