import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  
  @WebSocketGateway()
  export class EventsGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('createTask')
    createTask(@MessageBody() data: string): string {
      return data
    }
  
    // @SubscribeMessage('events')
    // findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    //   return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    // }
  
    // @SubscribeMessage('identity')
    // async identity(@MessageBody() data: number): Promise<number> {
    //   return data;
    // }
  }