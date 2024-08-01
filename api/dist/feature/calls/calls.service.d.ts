import { CallsRepository } from './repository/calls.repository';
import { CallsDTO } from './dto/create-calls.dto';
export declare class CallsService {
    private readonly callsRepository;
    constructor(callsRepository: CallsRepository);
    paginate(page: number, size: number, sort: string, order: 'asc' | 'desc', search: string): Promise<{
        results: {
            id: string;
            agentId: string;
            linkedId: string;
            source: string;
            status: string;
            destination: string;
            extensionAnswered: string;
            recording: string;
            startDate: Date;
            answeredDate: Date;
            endDate: Date;
            realDirection: string;
            direction: string;
            queue: string;
            hangupNum: string;
            hangupCause: string;
            feedback: boolean;
            tratativa: string;
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
    findAll(): Promise<CallsDTO[]>;
    findOne(id: string): Promise<CallsDTO | null>;
    create(data: CallsDTO): Promise<CallsDTO>;
    update(id: string, data: CallsDTO): Promise<CallsDTO | null>;
    remove(id: string): Promise<CallsDTO | null>;
}
