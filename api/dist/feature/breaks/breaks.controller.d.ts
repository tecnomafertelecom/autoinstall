import { BreaksService } from './breaks.service';
import { BreaksDto } from './dto/create-breaks.dto';
export declare class BreaksController {
    private readonly service;
    constructor(service: BreaksService);
    create(data: BreaksDto): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    update(id: string, data: BreaksDto): Promise<any>;
    delete(id: string): Promise<any>;
}
