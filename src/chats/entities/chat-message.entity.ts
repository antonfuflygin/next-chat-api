import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Chat } from './chat.entity';

@Entity('chat_messages')
export class ChatMessage {
  @PrimaryColumn('uuid')
  id: string;

  @Column('text')
  text: string;

  @Column('uuid')
  fromUserId: string;

  @Column('uuid')
  toUserId: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTs: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updateTs: Date;

  @Column({ default: false })
  edited: boolean;

  @Column()
  type: string;

  @Column()
  status: string;

  @Column({ nullable: true })
  replyTo?: string;

  @ManyToOne(() => Chat, (chat) => chat.messages, { onDelete: 'CASCADE' })
  chat: Chat;

  @Column('uuid')
  chatId: string;
}
