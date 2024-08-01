import { AgentRepository } from './repository/agent.repository';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
export declare class AgentsService {
    private readonly repository;
    constructor(repository: AgentRepository);
    paginate(page: number, size: number, sort: string, order: string, search: string): Promise<{
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
    getOne(extension: number): Promise<{
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
    create(createAgentDto: CreateAgentDto): Promise<{
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
