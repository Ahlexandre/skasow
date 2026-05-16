import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class AccountDeletionRequestDto {
  @ApiPropertyOptional({ example: 'Je ne souhaite plus utiliser le service.' })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  reason?: string;
}
