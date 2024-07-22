import { Module } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';
import { WebsocketGateway } from './websocket.gateway';

@Module({
    imports: [WebsocketGateway],
    controllers: [],
    providers: [],
})

export class SocketGatewayModule {}