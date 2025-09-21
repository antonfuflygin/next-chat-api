import { Chat } from 'src/chats/entities/chat.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 50, nullable: true })
  username: string;

  @Column({ type: 'bigint' })
  phoneNumber: number;

  @Column()
  password: string;

  @Column({ length: 100, nullable: true })
  firstName: string;

  @Column({ length: 100, nullable: true })
  secondName: string;

  @Column({ nullable: true })
  avatar: string;

  @CreateDateColumn({ type: 'timestamp' })
  createAccountTs: Date;

  @Column({ type: 'timestamp', nullable: true })
  lastSeenTs: Date;

  @ManyToMany(() => Chat, (chat) => chat.users)
  @JoinTable({
    name: 'user_chats', // имя таблицы связи
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'chat_id',
      referencedColumnName: 'id',
    },
  })
  chats: Chat[];
}
