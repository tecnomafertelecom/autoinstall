import { Socket } from 'socket.io';
export declare const agentsOnline: Map<string, string>;
export declare class SocketService {
    handleConnection(socket: Socket): void;
    emitEvent(eventName: string, data: any): void;
}
