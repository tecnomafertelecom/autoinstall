import { UniqueEntityID } from './unique-entity-id';
export declare class Entity<Props> {
    private _id;
    protected props: Props;
    get id(): string;
    protected constructor(props: Props, id?: UniqueEntityID);
    equals(entity: Entity<unknown>): boolean;
}
