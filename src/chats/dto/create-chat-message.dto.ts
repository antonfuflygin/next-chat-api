/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateChatMessageDto {
  @IsString()
  text: string;

  @IsBoolean()
  @IsOptional()
  edited?: boolean;

  @IsString()
  type: string;

  @IsString()
  status: string;

  @IsUUID()
  @IsOptional()
  replyTo?: string;
}
