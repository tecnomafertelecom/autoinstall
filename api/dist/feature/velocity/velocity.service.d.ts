import { OnModuleInit } from '@nestjs/common';
import { DashboardVelocityRepository } from './repository/velocity.repository';
import { DashboardVelocityDTO } from './dto/create-velocity.dto';
import { updateDashboardVelocityDTO } from './dto/update-velocity.dto';
export declare class DashboardVelocityService implements OnModuleInit {
    private readonly repository;
    constructor(repository: DashboardVelocityRepository);
    onModuleInit(): Promise<void>;
    create(data: DashboardVelocityDTO): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    update(id: string, data: updateDashboardVelocityDTO): Promise<any>;
    delete(id: string): Promise<any>;
    private initializeDefaultVelocities;
}
