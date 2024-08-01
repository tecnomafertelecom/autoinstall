import { OnlineService } from './online.service';
import { CreateOnlineDto } from './dto/create-online.dto';
import { UpdateOnlineDto } from './dto/update-online.dto';
export declare class OnlineController {
    private readonly onlineService;
    constructor(onlineService: OnlineService);
    create(createOnlineDto: CreateOnlineDto): Promise<{
        id: string;
        reason: string;
        start: Date;
        end: Date;
        duration: number;
        agentId: string;
    }>;
    pagination(request: any): Promise<{
        results: {
            id: string;
            reason: string;
            start: Date;
            end: Date;
            duration: number;
            agentId: string;
        }[];
        pagination: {
            length: number;
            size: number;
            lastPage: number;
            page: number;
            startIndex: number;
            endIndex: number;
        };
    }>;
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
    update(id: string, updateOnlineDto: UpdateOnlineDto): Promise<{
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
