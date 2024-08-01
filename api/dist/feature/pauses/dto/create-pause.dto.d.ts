import { PauseReason } from './enums/pause-reason.enum';
export declare class CreatePauseDto {
    reason: PauseReason;
    start: Date;
    end: Date;
    duration: number;
    agentId: string;
}
