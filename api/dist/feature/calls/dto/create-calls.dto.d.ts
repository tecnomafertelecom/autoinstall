export declare class CallsDTO {
    id: string;
    agentId: string;
    linkedId: string;
    source?: string;
    status?: string;
    destination?: string;
    extensionAnswered?: string;
    recording?: string;
    startDate?: Date;
    answeredDate?: Date;
    endDate?: Date;
    realDirection?: string;
    direction?: string;
    queue?: string;
    hangupNum?: string;
    hangupCause?: string;
    feedback: boolean;
    tratativa?: string;
}
