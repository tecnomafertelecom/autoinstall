import { CreatePauseDto } from './create-pause.dto';
import { PauseReason } from './enums/pause-reason.enum';
declare const UpdatePauseDto_base: import("@nestjs/common").Type<Partial<CreatePauseDto>>;
export declare class UpdatePauseDto extends UpdatePauseDto_base {
    reason: PauseReason;
    start: Date;
    end: Date;
    duration: number;
    agentId: string;
}
export {};
