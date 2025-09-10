/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ChatMessageResponseDto {
  @ApiProperty({ description: 'ID сообщения' })
  @Expose()
  id: string;

  @ApiProperty({ description: 'Текст сообщения' })
  @Expose()
  text: string;

  @ApiProperty({ description: 'Дата создания сообщения' })
  @Expose()
  createTs: Date;

  @ApiProperty({ description: 'Дата обновления сообщения' })
  @Expose()
  updateTs: Date;

  @ApiProperty({ description: 'Было ли сообщение отредактировано' })
  @Expose()
  edited: boolean;

  @ApiProperty({ description: 'Тип сообщения' })
  @Expose()
  type: string;

  @ApiProperty({ description: 'Статус сообщения' })
  @Expose()
  status: string;

  @ApiProperty({ description: 'ID сообщения, на которое отвечают', required: false })
  @Expose()
  replyTo?: string;
}
