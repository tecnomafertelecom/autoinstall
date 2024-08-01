import { BreaksDto } from './create-breaks.dto';
declare const UpdateBreaksDto_base: import("@nestjs/common").Type<Partial<BreaksDto>>;
export declare class UpdateBreaksDto extends UpdateBreaksDto_base {
    reason?: string;
    time?: number;
}
export {};
