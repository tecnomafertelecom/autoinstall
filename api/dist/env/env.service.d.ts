import { ConfigService } from '@nestjs/config';
import { Env } from './env';
export declare class EnvService {
    private configService;
    constructor(configService: ConfigService<Env, true>);
    get<T extends keyof Env>(key: T): import("@nestjs/config").PathValue<{
        DATABASE_URL?: string;
        AMI_PORT?: string;
        AMI_HOST?: string;
        AMI_USERNAME?: string;
        AMI_PASSWORD?: string;
        JWT_PRIVATE_KEY?: string;
        JWT_PUBLIC_KEY?: string;
        PORT?: number;
    }, T>;
}
