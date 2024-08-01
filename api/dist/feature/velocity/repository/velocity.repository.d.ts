import { PrismaService } from 'src/prisma/prisma.service';
import { DashboardVelocityDTO } from '../dto/create-velocity.dto';
import { updateDashboardVelocityDTO } from '../dto/update-velocity.dto';
export declare class DashboardVelocityRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: DashboardVelocityDTO): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    update(id: string, data: updateDashboardVelocityDTO): Promise<any>;
    delete(id: string): Promise<any>;
    findByTitle(title: string): Promise<any | null>;
    initializeDefaultVelocities(): Promise<any>;
}
