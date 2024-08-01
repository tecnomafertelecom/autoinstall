import { OnlineReason } from './enum/online-reason.enum';
export declare class CreateOnlineDto {
    reason: OnlineReason;
    start: Date;
    end: Date;
    duration: number;
    agentId: string;
}
