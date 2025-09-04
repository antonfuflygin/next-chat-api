import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Message } from './message.entity';

@Entity('chats')
export class Chat {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  contactId: string;

  @Column()
  contactName: string;

  @Column()
  contactUserName: string;

  @Column({ default: false })
  isOnline: boolean;

  @Column({ type: 'timestamp', nullable: true })
  onlineDateTimeTs: Date;

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];
}
