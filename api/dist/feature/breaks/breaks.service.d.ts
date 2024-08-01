import { BreaksRepository } from './repository/breaks.repository';
import { BreaksDto } from './dto/create-breaks.dto';
export declare class BreaksService {
    private readonly repository;
    constructor(repository: BreaksRepository);
    create(data: BreaksDto): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    update(id: string, data: BreaksDto): Promise<any>;
    delete(id: string): Promise<any>;
}
