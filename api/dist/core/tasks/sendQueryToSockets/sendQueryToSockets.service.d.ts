import { SocketService } from 'src/socket/socket.service';
export declare class ScheduledTaskService {
    private readonly socketService;
    private readonly destroy$;
    private readonly runningFunctions;
    constructor(socketService: SocketService);
    startScheduledTask(): Promise<void>;
    stopScheduledTask(): void;
}
