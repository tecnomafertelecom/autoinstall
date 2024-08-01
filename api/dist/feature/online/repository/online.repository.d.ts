import { CreateOnlineDto } from '../dto/create-online.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class OnlineRepository {
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
    create(createOnlineDto: CreateOnlineDto): Promise<{
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
    update(id: string, updateOnlineDto: CreateOnlineDto): Promise<{
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
