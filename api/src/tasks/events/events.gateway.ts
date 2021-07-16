import { Logger } from '@nestjs/common';
import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  @WebSocketGateway()
  export class EventsGateway implements OnGatewayInit, OnGatewayConnection, 
    OnGatewayDisconnect
    {
    private logger = new Logger('EventGateway')

    @WebSocketServer()
    server: Server;
    afterInit(server: any) {
      this.logger.log('Initialize Gateway');
    }

    handleConnection(client: any){
      this.logger.log('New Client Connected')
      client.emit('connection', 'Successfully connected to server')
    }

    handleDisconnect(client: any){
      this.logger.log('Client Disconnected')
    }

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