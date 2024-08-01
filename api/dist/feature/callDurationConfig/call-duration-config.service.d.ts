import { OnModuleInit } from '@nestjs/common';
import { CallDurationConfigRepository } from './repository/call-duration-config.repository';
import { CallDurationConfigDto } from './dto/create-call-duration-config.dto';
import { updateCallDurationConfigDto } from './dto/update-call-duration-config.dto';
export declare class CallDurationConfigService implements OnModuleInit {
    private readonly repository;
    constructor(repository: CallDurationConfigRepository);
    onModuleInit(): Promise<void>;
    create(data: CallDurationConfigDto): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    update(id: string, data: updateCallDurationConfigDto): Promise<any>;
    delete(id: string): Promise<any>;
    initializeDefaultConfigurations(): Promise<void>;
    private createDefaultConfiguration;
}
