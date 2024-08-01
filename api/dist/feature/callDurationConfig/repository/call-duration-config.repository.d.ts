import { PrismaService } from 'src/prisma/prisma.service';
import { CallDurationConfigDto } from '../dto/create-call-duration-config.dto';
import { updateCallDurationConfigDto } from '../dto/update-call-duration-config.dto';
export declare class CallDurationConfigRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CallDurationConfigDto): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    update(id: string, data: updateCallDurationConfigDto): Promise<any>;
    delete(id: string): Promise<any>;
    findByLimitForType(limitForType: string): Promise<any | null>;
}
