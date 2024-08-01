import { SocketService } from './../../socket/socket.service';
import { MetricsType } from './../type/MetricsType';
import { PausesService } from '../../feature/pauses/pauses.service';
import { OnModuleInit } from '@nestjs/common';
import { ExceededLimittype } from '../type/ExceededLimitType';
import { CustomMetricsType } from '../type/CustomMetricsType';
import { CallDurationConfigService } from 'src/feature/callDurationConfig/call-duration-config.service';
import { BreaksService } from 'src/feature/breaks/breaks.service';
import { AgentsService } from 'src/feature/agents/agents.service';
export declare const agentInfo: Map<any, any>;
export declare let metricsArray: MetricsType[];
export declare let customMetrics: CustomMetricsType[];
export declare const abandonedCalls: any[];
export declare let pausedWithExceededLimit: ExceededLimittype[];
export declare function clearPausedWithExceededLimit(): void;
export declare function getCallDuration(): Promise<any>;
export declare class AsteriskEventsHandler implements OnModuleInit {
    private readonly SocketService;
    private readonly CallDurationConfigService;
    private readonly PausesService;
    private readonly BreaksService;
    private readonly AgentsService;
    constructor(SocketService: SocketService, CallDurationConfigService: CallDurationConfigService, PausesService: PausesService, BreaksService: BreaksService, AgentsService: AgentsService);
    onModuleInit(): void;
    initializeDefaultCallDurationConfigurations(): Promise<void>;
    handleQueueMemberAdded(evt: any): Promise<void>;
    handleQueueMemberDialBegin(evt: any): void;
    handleQueueMemberBridgeEnter(evt: any): void;
    handleQueueMemberHangup(evt: any): void;
    handleQueueMemberDialEnd(evt: any): void;
    handleQueueCallerAbandon(evt: any): void;
    handleQueueParams(evt: any): void;
    handleQueueMemberStatus(evt: any): void;
    handleQueueMemberPause(evt: any): Promise<void>;
    handleQueueMemberRemoved(evt: any): void;
    incrementCallCount(ramal: any, callType: any): void;
    incrementCallDuration(ramal: string, duration: number, callType: any): void;
    calculateGNS(): number;
    calculateTMF(): number;
    calculateTXA(): number;
    calculateTMR(): number;
    storeMetrics(): MetricsType;
    calculateCallMetrics(): CustomMetricsType;
    getTrunkType(trunkName: any): "PABX" | "Operadora" | "GSM" | "Desconhecido";
    millisecondsToSeconds(duracaoEmMilissegundos: number): number;
    executeOnDayChange(): void;
    clearMapsAndInstances(): void;
}
