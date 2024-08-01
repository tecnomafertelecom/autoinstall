import { CallDurationConfigService } from './call-duration-config.service';
import { CallDurationConfigDto } from './dto/create-call-duration-config.dto';
import { updateCallDurationConfigDto } from './dto/update-call-duration-config.dto';
export declare class CallDurationConfigController {
    private readonly service;
    constructor(service: CallDurationConfigService);
    create(data: CallDurationConfigDto): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    update(id: string, data: updateCallDurationConfigDto): Promise<any>;
    delete(id: string): Promise<any>;
}
