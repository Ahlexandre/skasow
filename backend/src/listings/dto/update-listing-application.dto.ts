import { PartialType } from '@nestjs/swagger';
import { CreateListingApplicationDto } from './create-listing-application.dto';

export class UpdateListingApplicationDto extends PartialType(
  CreateListingApplicationDto,
) {}
