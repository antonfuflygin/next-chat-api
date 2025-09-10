/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Exclude, Expose, Type } from 'class-transformer';
import { ChatMessageResponseDto } from './chat-message-response.dto';

@Exclude()
export class ChatResponseDto {
  @Expose()
  id: string;

  @Expose()
  contactId: string;

  @Expose()
  pinned: boolean;

  @Expose()
  createTs: Date;

  @Expose()
  updateTs: Date;

  @Expose()
  @Type(() => ChatMessageResponseDto)
  messages: ChatMessageResponseDto[];

  @Expose()
  archived: boolean;
}
