import { OnGatewayConnection } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { SocketService } from './socket.service';
export declare class SocketGateway implements OnGatewayConnection {
    private readonly socketService;
    private server;
    constructor(socketService: SocketService);
    handleConnection(socket: Socket): void;
}
