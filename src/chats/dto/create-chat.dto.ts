import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsOptional, IsUUID, ValidateNested } from 'class-validator';
import { CreateChatMessageDto } from './create-chat-message.dto';

export class CreateChatDto {
  @ApiProperty({
    description: 'UUID контакта для создания чата',
    example: '123e4567-e89b-12d3-a456-426614174000',
    format: 'uuid',
  })
  @IsUUID()
  contactId: string;

  @ApiProperty({
    description: 'Закреплен ли чат',
    example: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  pinned?: boolean;

  @ApiProperty({
    description: 'Сообщения чата',
    type: [CreateChatMessageDto],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateChatMessageDto)
  @IsOptional()
  messages?: CreateChatMessageDto[];

  @ApiProperty({
    description: 'Архивирован ли чат',
    example: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  archived?: boolean;
}
