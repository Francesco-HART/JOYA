import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { SensorDataPresenter } from '../../../infrastructure/controllers/sensor-data/sensor-data.presenter';

@WebSocketGateway({
  cors: {
    origin: '*',
    transports: ['websocket'],
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  clientConnectedID: string;
  private logger: Logger = new Logger('AppGateway');

  sendSensorData(payload: SensorDataPresenter) {
    this.server.emit(payload.serial_number, payload);
    return payload;
  }

  @SubscribeMessage('event')
  handleMessage(payload: string): void {
    this.server.emit('event', 'payload');
  }

  afterInit(server: Server) {
    this.logger.log('Init  web socket server');
    this.server = server;
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
