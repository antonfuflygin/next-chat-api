import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private chatsRepository: Repository<Chat>
  ) {}

  create(createChatDto: CreateChatDto) {
    return this.chatsRepository.create(createChatDto);
  }

  findAll(userId: string) {
    return this.chatsRepository
      .createQueryBuilder('chat')
      .innerJoin('chat.users', 'user')
      .where('user.id = :userId', { userId })
      .getMany();
  }

  findOne(id: string) {
    return this.chatsRepository.findOne({ where: { id } });
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
