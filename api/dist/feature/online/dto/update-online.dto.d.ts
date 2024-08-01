import { CreateOnlineDto } from './create-online.dto';
import { OnlineReason } from './enum/online-reason.enum';
declare const UpdateOnlineDto_base: import("@nestjs/common").Type<Partial<CreateOnlineDto>>;
export declare class UpdateOnlineDto extends UpdateOnlineDto_base {
    reason: OnlineReason;
    start: Date;
    end: Date;
    duration: number;
    agentId: string;
}
export {};
