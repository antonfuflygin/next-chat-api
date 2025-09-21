import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { User } from './../../users/entities/user.entity';
import { ChatMessage } from './chat-message.entity';

@Entity('chats')
export class Chat {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  contactId: string;

  @Column({ default: false })
  pinned: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTs: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updateTs: Date;

  @OneToMany(() => ChatMessage, (message) => message.chat, { cascade: true })
  messages: ChatMessage[];

  @Column({ default: false })
  archived: boolean;

  @ManyToMany(() => User, (user) => user.chats)
  users: User[];
}
