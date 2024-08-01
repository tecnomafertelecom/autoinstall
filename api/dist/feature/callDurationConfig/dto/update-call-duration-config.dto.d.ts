import { CallDurationConfigDto } from './create-call-duration-config.dto';
declare const updateCallDurationConfigDto_base: import("@nestjs/common").Type<Partial<CallDurationConfigDto>>;
export declare class updateCallDurationConfigDto extends updateCallDurationConfigDto_base {
    limit: number;
    limitForType: string;
}
export {};
