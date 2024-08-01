import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
export declare class AgentsController {
    private readonly agentsService;
    constructor(agentsService: AgentsService);
    pagination(request: any): Promise<{
        results: {
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
    findAll(): Promise<any[]>;
    findById(id: string): Promise<{
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
    }>;
    create(createAgetDto: CreateAgentDto): Promise<{
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
    }>;
    update(id: string, updateAgentDto: UpdateAgentDto): Promise<{
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
    }>;
    delete(id: string): Promise<{
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
    }>;
}
