import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatsService {
  findAll(): string {
    return 'chats';
  }
}
