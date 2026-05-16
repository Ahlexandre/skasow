import { ApiProperty } from '@nestjs/swagger';
import { ListingApplicationStatus } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class UpdateListingApplicationStatusDto {
  @ApiProperty({ enum: ListingApplicationStatus })
  @IsEnum(ListingApplicationStatus)
  status: ListingApplicationStatus;
}
