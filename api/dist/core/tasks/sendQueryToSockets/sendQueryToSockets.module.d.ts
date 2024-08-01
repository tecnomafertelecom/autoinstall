import { OnModuleInit } from '@nestjs/common';
import { ScheduledTaskService } from './sendQueryToSockets.service';
export declare class ScheduledTaskServiceModule implements OnModuleInit {
    private readonly scheduledTaskService;
    constructor(scheduledTaskService: ScheduledTaskService);
    onModuleInit(): void;
}
