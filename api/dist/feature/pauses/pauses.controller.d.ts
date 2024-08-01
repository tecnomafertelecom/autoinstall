import { PausesService } from './pauses.service';
import { CreatePauseDto } from './dto/create-pause.dto';
import { UpdatePauseDto } from './dto/update-pause.dto';
export declare class PausesController {
    private readonly pausesService;
    constructor(pausesService: PausesService);
    create(createPauseDto: CreatePauseDto): Promise<{
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
    update(id: string, updatePauseDto: UpdatePauseDto): Promise<{
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
