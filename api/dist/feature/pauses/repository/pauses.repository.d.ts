import { CreatePauseDto } from '../dto/create-pause.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PausesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    paginate(page: number, size: number, sort: string, order: string, search: string): Promise<{
        results: {
            id: string;
            reason: string;
            start: Date;
            end: Date;
            duration: number;
            agentId: string;
        }[];
        totalItems: number;
    }>;
    create(createPauseDto: CreatePauseDto): Promise<{
        id: string;
        reason: string;
        start: Date;
        end: Date;
        duration: number;
        agentId: string;
    }>;
    findAll(): Promise<({
        agent: {
            id: string;
            name: string;
            email: string;
            extension: number;
            photo: string;
            login: string;
            password: string;
            token: string;
            status: string;
            refreshToken: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        reason: string;
        start: Date;
        end: Date;
        duration: number;
        agentId: string;
    })[]>;
    findById(id: string): Promise<{
        agent: {
            id: string;
            name: string;
            email: string;
            extension: number;
            photo: string;
            login: string;
            password: string;
            token: string;
            status: string;
            refreshToken: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        reason: string;
        start: Date;
        end: Date;
        duration: number;
        agentId: string;
    }>;
    update(id: string, updatePauseDto: CreatePauseDto): Promise<{
        id: string;
        reason: string;
        start: Date;
        end: Date;
        duration: number;
        agentId: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        reason: string;
        start: Date;
        end: Date;
        duration: number;
        agentId: string;
    }>;
}
