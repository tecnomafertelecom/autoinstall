import { CallsService } from './calls.service';
import { CallsDTO } from './dto/create-calls.dto';
export declare class CallsController {
    private readonly callsService;
    constructor(callsService: CallsService);
    paginate(request: any): Promise<{
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
    findOne(id: string): Promise<CallsDTO>;
    create(createCallDto: CallsDTO): Promise<CallsDTO>;
    update(id: string, updateCallDto: CallsDTO): Promise<CallsDTO>;
    remove(id: string): Promise<CallsDTO>;
}
