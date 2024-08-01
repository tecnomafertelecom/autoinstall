import { DashboardVelocityService } from './velocity.service';
import { DashboardVelocityDTO } from './dto/create-velocity.dto';
import { updateDashboardVelocityDTO } from './dto/update-velocity.dto';
export declare class DashboardVelocityController {
    private readonly service;
    constructor(service: DashboardVelocityService);
    create(data: DashboardVelocityDTO): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    update(id: string, data: updateDashboardVelocityDTO): Promise<any>;
    delete(id: string): Promise<any>;
}
