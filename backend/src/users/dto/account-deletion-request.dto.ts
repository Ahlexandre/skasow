import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class AccountDeletionRequestDto {
  @ApiProperty({ example: 'Mauvais service' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  reason!: string;
}
