import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  namespace: 'chats',
  cors: {
    origin: '*',
  },
})
export class ChatsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('chats')
  handleEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket): string {
    client.emit('chats', {
      type: 'response',
      originalData: data,
      timestamp: new Date().toISOString(),
      message: 'Server received your message!',
    });
    return data;
  }
}
