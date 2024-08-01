import { OnModuleInit } from '@nestjs/common';
import { EnvService } from 'src/env/env.service';
import { AsteriskEventsHandler } from './event/asterisk.events';
export declare class AsteriskService implements OnModuleInit {
    private asteriskEvents;
    private config;
    private amiClient;
    constructor(asteriskEvents: AsteriskEventsHandler, config: EnvService);
    onModuleInit(): Promise<void>;
    connectToAsterisk(): void;
}
