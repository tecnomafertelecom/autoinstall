import { PrismaService } from 'src/prisma/prisma.service';
import { BreaksDto } from '../dto/create-breaks.dto';
export declare class BreaksRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: BreaksDto): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    update(id: string, data: BreaksDto): Promise<any>;
    delete(id: string): Promise<any>;
    findByReason(reason: string): Promise<any | null>;
}
