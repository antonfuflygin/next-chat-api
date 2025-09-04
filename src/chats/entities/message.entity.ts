import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Chat } from './chat.entity';

@Entity('messages')
export class Message {
  @PrimaryColumn('uuid')
  messageId: string;

  @Column('uuid')
  senderId: string;

  @Column('text')
  text: string;

  @Column('timestamp')
  datetimeTs: string;

  @Column('boolean')
  hasBeenRead: boolean;

  @ManyToOne(() => Chat, (chat) => chat.messages)
  @JoinColumn({ name: 'chat_id' })
  chat: Chat;
}
