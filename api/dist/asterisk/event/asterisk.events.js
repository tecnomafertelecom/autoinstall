"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsteriskEventsHandler = exports.getCallDuration = exports.clearPausedWithExceededLimit = exports.pausedWithExceededLimit = exports.abandonedCalls = exports.customMetrics = exports.metricsArray = exports.agentInfo = void 0;
const socket_service_1 = require("./../../socket/socket.service");
const pauses_service_1 = require("../../feature/pauses/pauses.service");
const common_1 = require("@nestjs/common");
const sync_agents_1 = require("../../core/syncOnStart/sync_agents");
const sync_trunks_1 = require("../../core/syncOnStart/sync_trunks");
const call_duration_config_service_1 = require("../../feature/callDurationConfig/call-duration-config.service");
const breaks_service_1 = require("../../feature/breaks/breaks.service");
const axios_1 = require("axios");
const agents_service_1 = require("../../feature/agents/agents.service");
const schedule_1 = require("@nestjs/schedule");
const pauseCountMap = new Map();
const callsMap = new Map();
exports.agentInfo = new Map();
exports.metricsArray = [];
exports.customMetrics = [];
const callCountMap = new Map();
exports.abandonedCalls = [];
const callDurationMap = new Map();
exports.pausedWithExceededLimit = [];
function clearPausedWithExceededLimit() {
    exports.pausedWithExceededLimit = [];
}
exports.clearPausedWithExceededLimit = clearPausedWithExceededLimit;
let callDurationConfigurations;
async function getCallDuration() {
    try {
        const response = await axios_1.default.get('http://localhost:3333/call-duration-config');
        callDurationConfigurations = response.data;
        return response.data;
    }
    catch (error) {
        console.error('Erro ao obter dados de duração de chamada:', error);
        throw error;
    }
}
exports.getCallDuration = getCallDuration;
let AsteriskEventsHandler = class AsteriskEventsHandler {
    constructor(SocketService, CallDurationConfigService, PausesService, BreaksService, AgentsService) {
        this.SocketService = SocketService;
        this.CallDurationConfigService = CallDurationConfigService;
        this.PausesService = PausesService;
        this.BreaksService = BreaksService;
        this.AgentsService = AgentsService;
        this.executeOnDayChange();
    }
    onModuleInit() {
        this.initializeDefaultCallDurationConfigurations();
    }
    async initializeDefaultCallDurationConfigurations() {
        callDurationConfigurations = await this.CallDurationConfigService.findAll();
        const agentProps = await this.AgentsService.findAll();
        agentProps.forEach((agent) => {
            sync_agents_1.storedAgents.set(agent.extension, agent);
            exports.agentInfo.set(agent.extension, agent);
        });
    }
    async handleQueueMemberAdded(evt) {
        const agentInterface = evt?.Interface.split('/')[1];
        const currentTime = Date.now();
        let foundAgent = null;
        for (const [key, value] of exports.agentInfo.entries()) {
            const extensionString = String(value.extension);
            if (extensionString.includes(agentInterface)) {
                foundAgent = key;
                break;
            }
        }
        if (foundAgent !== null) {
            const agent = exports.agentInfo.get(foundAgent);
            exports.agentInfo.set(foundAgent, {
                ...agent,
                status: 'Online',
                reason: 'Disponível',
                interface: evt.Interface,
                startTime: currentTime,
                endTime: null,
                ultimo_login: currentTime,
            });
        }
        else {
            try {
                const agent = await this.AgentsService.getOne(Number(agentInterface));
                exports.agentInfo.set(agent.extension, {
                    ...agent,
                    status: 'Online',
                    reason: 'Disponível',
                    interface: evt.Interface,
                    startTime: currentTime,
                    endTime: null,
                    ultimo_login: currentTime,
                });
            }
            catch (error) {
                console.error('Erro ao buscar agente:', error);
                return;
            }
        }
        const transformedData = {};
        for (const [key, value] of exports.agentInfo.entries()) {
            transformedData[key] = {
                ...value,
                interface: `SIP/${key}`,
            };
        }
        this.SocketService.emitEvent('QueueMemberAdded', JSON.stringify(transformedData));
    }
    handleQueueMemberDialBegin(evt) {
        const callInfo = {
            channel: evt.Channel,
            callerIDNum: evt.CallerIDNum,
            callerIDName: evt.CallerIDName,
            connectedLineName: evt.ConnectedLineName,
            connectedLineNum: evt.ConnectedLineNum,
            destChannel: evt.DestChannel,
            destCallerIDNum: evt.DestCallerIDNum,
            destExten: evt.DestExten,
            dialString: evt.DialString,
            linkedid: evt.Linkedid,
        };
        callsMap.set(evt.Linkedid, callInfo);
        const callInfoFromMap = callsMap.get(evt.Linkedid);
        if (callInfoFromMap) {
            const callerIDName = callInfoFromMap.callerIDName;
            let foundAgent = null;
            exports.agentInfo.forEach((value, key) => {
                const extensionString = String(value.extension);
                if (extensionString.includes(callerIDName) ||
                    evt.CallerIDNum === value.extension) {
                    foundAgent = key;
                }
            });
            if (foundAgent !== null) {
                const agent = exports.agentInfo.get(foundAgent);
                const currentTime = Date.now();
                if (agent) {
                    exports.agentInfo.set(foundAgent, {
                        ...agent,
                        trunkName: this.getTrunkType(callInfoFromMap.destChannel),
                        status: 'Online',
                        reason: 'Chamando',
                        startTime: currentTime,
                        dialBeginStartTime: currentTime,
                    });
                    this.SocketService.emitEvent('DialBegin', JSON.stringify(Object.fromEntries(exports.agentInfo)));
                }
            }
            else {
                console.error('Agent entry not found for DialBegin event:', evt);
            }
        }
    }
    handleQueueMemberBridgeEnter(evt) {
        const existingInfo = callsMap.get(evt.Linkedid) || {};
        const callInfo = {
            ...existingInfo,
            channel: evt.Channel,
            callerIDNum: evt.CallerIDNum,
            callerIDName: evt.CallerIDName,
            connectedLineName: evt.ConnectedLineName,
            connectedLineNum: evt.ConnectedLineNum,
            destExten: evt.DestExten,
            dialString: evt.DialString,
            linkedid: evt.Linkedid,
        };
        callsMap.set(evt.Linkedid, callInfo);
        const callInfoFromMap = callsMap.get(evt.Linkedid);
        if (callInfoFromMap) {
            const callerIDName = callInfoFromMap.callerIDName;
            const connectedLineNum = callInfoFromMap.connectedLineNum;
            let foundAgent = null;
            exports.agentInfo.forEach((value, key) => {
                const extensionString = String(value.extension);
                if (extensionString.includes(callerIDName) ||
                    extensionString.includes(connectedLineNum)) {
                    foundAgent = key;
                }
            });
            if (foundAgent !== null) {
                const agent = exports.agentInfo.get(foundAgent);
                const currentTime = Date.now();
                if (agent && evt.Context.includes('from-trunk')) {
                    const ramal = agent.extension;
                    const duration = currentTime - agent.dialBeginStartTime;
                    this.incrementCallDuration(ramal, this.millisecondsToSeconds(duration), 'tempoEsperaAtendidas');
                    this.incrementCallCount(ramal, 'contagemPosChamada');
                    exports.agentInfo.set(foundAgent, {
                        ...agent,
                        status: 'Online',
                        reason: 'Ocupado',
                        startTime: currentTime,
                        bridgeEnterStartTime: currentTime,
                    });
                    this.SocketService.emitEvent('BridgeEnter', JSON.stringify(Object.fromEntries(exports.agentInfo)));
                }
            }
            else {
                console.error('Agent entry not found for BridgeEnter event:', evt);
            }
        }
    }
    handleQueueMemberHangup(evt) {
        const existingInfo = callsMap.get(evt.Linkedid) || {};
        const callInfo = {
            ...existingInfo,
            channel: evt.Channel,
            callerIDNum: evt.CallerIDNum,
            callerIDName: evt.CallerIDName,
            connectedLineName: evt.ConnectedLineName,
            connectedLineNum: evt.ConnectedLineNum,
            linkedid: evt.Linkedid,
        };
        callsMap.set(evt.Linkedid, callInfo);
        const callInfoFromMap = callsMap.get(evt.Linkedid);
        if (callInfoFromMap) {
            const callerIDName = callInfoFromMap.callerIDName;
            const connectedLineNum = callInfoFromMap.connectedLineNum;
            let foundAgent = null;
            exports.agentInfo.forEach((value, key) => {
                const extensionString = String(value.extension);
                if (extensionString.includes(callerIDName) ||
                    extensionString.includes(connectedLineNum)) {
                    foundAgent = key;
                }
            });
            if (foundAgent !== null) {
                const agent = exports.agentInfo.get(foundAgent);
                const ramal = agent.extension;
                const currentTime = Date.now();
                const duration = currentTime - agent.bridgeEnterStartTime;
                if (evt.Context.includes('from-trunk') &&
                    agent.dialStatus === 'ANSWER') {
                    this.incrementCallDuration(ramal, this.millisecondsToSeconds(duration), 'tempoAtendimento');
                    this.incrementCallCount(ramal, 'atendidas');
                }
                if (agent) {
                    exports.agentInfo.set(foundAgent, {
                        ...agent,
                        status: 'Online',
                        reason: 'Disponível',
                        startTime: currentTime,
                        ultimo_telefone: evt.ConnectedLineNum,
                        duration: duration,
                    });
                    this.SocketService.emitEvent('Hangup', JSON.stringify(Object.fromEntries(exports.agentInfo)));
                }
            }
            else {
                console.error('Agent entry not found for Hangup event:', evt);
            }
        }
    }
    handleQueueMemberDialEnd(evt) {
        const existingInfo = callsMap.get(evt.Linkedid) || {};
        const callInfo = {
            ...existingInfo,
            channel: evt.Channel,
            callerIDNum: evt.CallerIDNum,
            callerIDName: evt.CallerIDName,
            connectedLineName: evt.ConnectedLineName,
            connectedLineNum: evt.ConnectedLineNum,
            destChannel: evt.DestChannel,
            destCallerIDNum: evt.DestCallerIDNum,
            destExten: evt.DestExten,
            dialString: evt.DialString,
            linkedid: evt.Linkedid,
            dialStatus: evt.DialStatus,
        };
        callsMap.set(evt.Linkedid, callInfo);
        const linkedid = callInfo.linkedid;
        const callInfoFromMap = callsMap.get(linkedid);
        if (callInfoFromMap) {
            const callerIDName = callInfoFromMap.callerIDName;
            let foundAgent = null;
            exports.agentInfo.forEach((value, key) => {
                const extensionString = String(value.extension);
                if (extensionString.includes(callerIDName)) {
                    foundAgent = key;
                }
            });
            if (foundAgent !== null) {
                const agent = exports.agentInfo.get(foundAgent);
                const ramal = agent.extension;
                const dialStatus = evt.DialStatus || '';
                const currentTime = Date.now();
                if (dialStatus === 'CANCEL') {
                    const duration = currentTime - agent.dialBeginStartTime;
                    this.incrementCallDuration(ramal, this.millisecondsToSeconds(duration), 'tempoEsperaAbandono');
                    this.incrementCallCount(ramal, 'abandonadas');
                    const abandonInfo = {
                        ramal: agent.extension,
                        name: agent.name,
                        startTime: agent.startTime,
                        duration: this.millisecondsToSeconds(duration),
                        ultimo_telefone: evt.DestCallerIDNum,
                        endTime: currentTime,
                    };
                    exports.abandonedCalls.push(abandonInfo);
                    this.SocketService.emitEvent('abandonedCalls', JSON.stringify(exports.abandonedCalls));
                }
                if (agent) {
                    exports.agentInfo.set(foundAgent, {
                        ...agent,
                        status: 'Online',
                        dialStatus: dialStatus,
                    });
                    this.SocketService.emitEvent('DialEnd', JSON.stringify(Object.fromEntries(exports.agentInfo)));
                }
            }
            else {
                console.error('Agent entry not found for DialEnd event:', evt);
            }
        }
    }
    handleQueueCallerAbandon(evt) {
    }
    handleQueueParams(evt) {
    }
    handleQueueMemberStatus(evt) {
    }
    async handleQueueMemberPause(evt) {
        const agentInterface = evt?.Interface.split('/')[1];
        let foundAgent = null;
        exports.agentInfo.forEach((value, key) => {
            const extensionString = String(value.extension);
            if (extensionString.includes(agentInterface)) {
                foundAgent = key;
            }
        });
        const agent = exports.agentInfo.get(foundAgent);
        if (evt?.Paused === '1') {
            const currentPauseCount = pauseCountMap.get(agentInterface) || 0;
            pauseCountMap.set(agentInterface, currentPauseCount + 1);
            const currentTime = Date.now();
            exports.agentInfo.set(foundAgent, {
                ...agent,
                status: 'Paused',
                interface: evt.Interface,
                reason: evt.Reason,
                pauseCount: currentPauseCount + 1,
                isTimeLimitExceeded: false,
                isHalfTime: false,
                formattedElapsedTime: 0,
                startTime: currentTime,
                endTime: null,
            });
        }
        else if (evt?.Paused === '0') {
            const currentTime = Date.now();
            try {
                if (agent.id) {
                    const createPauseDto = {
                        reason: agent.reason,
                        start: new Date(agent.startTime),
                        end: new Date(currentTime),
                        duration: currentTime - agent.startTime,
                        agentId: agent.id,
                    };
                    await this.PausesService.create(createPauseDto);
                }
                else {
                    throw new common_1.NotFoundException('Agente Não cadastrado.');
                }
            }
            catch (e) {
                console.log(e.message);
            }
            const breaksResponse = await this.BreaksService.findAll();
            const matchingBreak = breaksResponse.find((item) => item.reason.includes(agent.reason));
            const startTime = agent.startTime;
            const duration = startTime !== undefined ? Date.now() - startTime : 0;
            if (matchingBreak) {
                if (this.millisecondsToSeconds(duration) > matchingBreak.time) {
                    const exceededLimitInfo = {
                        status: agent.status,
                        duration: this.millisecondsToSeconds(duration),
                        interface: agent.extension,
                        name: agent.name,
                        startTime: agent.startTime,
                        reason: agent.reason,
                        endTime: Date.now(),
                    };
                    exports.pausedWithExceededLimit.push(exceededLimitInfo);
                }
            }
            exports.agentInfo.set(agent.extension, {
                ...agent,
                status: 'Online',
                interface: evt.Interface,
                reason: 'Disponível',
                startTime: currentTime,
                endTime: null,
            });
        }
        this.SocketService.emitEvent('QueueMemberPause', JSON.stringify(Object.fromEntries(exports.agentInfo)));
        this.SocketService.emitEvent('ExceededLimit', JSON.stringify(exports.pausedWithExceededLimit));
    }
    handleQueueMemberRemoved(evt) {
        const agentInterface = evt?.Interface.split('/')[1];
        const currentTime = Date.now();
        let foundAgent = null;
        exports.agentInfo.forEach((value, key) => {
            const extensionString = String(value.extension);
            if (extensionString.includes(agentInterface)) {
                foundAgent = key;
            }
        });
        const agent = exports.agentInfo.get(foundAgent);
        if (agent.status !== 'Offline') {
            exports.agentInfo.set(foundAgent, {
                ...agent,
                status: 'Offline',
                reason: 'Offline',
                interface: evt.Interface,
                startTime: agent.startTime,
                endTime: currentTime,
            });
            this.SocketService.emitEvent('QueueMemberRemoved', JSON.stringify(Object.fromEntries(exports.agentInfo)));
        }
    }
    incrementCallCount(ramal, callType) {
        const currentCallCount = callCountMap.get(ramal) || {
            atendidas: 0,
            contagemPosChamada: 0,
            abandonadas: 0,
            atendidas_menor_x: 0,
            abandonadas_menor_x: 0,
        };
        currentCallCount[callType] = (currentCallCount[callType] || 0) + 1;
        callCountMap.set(ramal, currentCallCount);
        const agent = exports.agentInfo.get(ramal);
        if (agent) {
            agent.atendidas = currentCallCount.atendidas;
            agent.contagemPosChamada = currentCallCount.contagemPosChamada;
            agent.abandonadas = currentCallCount.abandonadas;
            agent.atendidas_menor_x = currentCallCount.atendidas_menor_x;
            agent.abandonadas_menor_x = currentCallCount.abandonadas_menor_x;
            exports.agentInfo.set(ramal, agent);
        }
        else {
            console.log(`Agent not found for ramal: ${ramal}`);
        }
        const metricsObject = this.storeMetrics();
        metricsObject.txa;
        metricsObject.tmf;
        metricsObject.gns;
        metricsObject.tmr;
        this.calculateCallMetrics();
    }
    incrementCallDuration(ramal, duration, callType) {
        const currentCallInfo = callDurationMap.get(ramal) || {
            tempoAtendimento: 0,
            tempoEsperaAbandono: 0,
            tempoEsperaAtendidas: 0,
        };
        currentCallInfo[callType] += duration;
        for (const config of callDurationConfigurations) {
            if (config.limitForType === callType && duration <= config.limit) {
                if (callType === 'tempoEsperaAtendidas') {
                    this.incrementCallCount(ramal, 'atendidas_menor_x');
                }
                if (callType === 'tempoEsperaAbandono') {
                    this.incrementCallCount(ramal, 'abandonadas_menor_x');
                }
            }
        }
        callDurationMap.set(ramal, currentCallInfo);
        const agent = exports.agentInfo.get(ramal);
        if (agent) {
            agent.tempoAtendimento = currentCallInfo.tempoAtendimento;
            agent.tempoEsperaAbandono = currentCallInfo.tempoEsperaAbandono;
            agent.tempoEsperaAtendidas = currentCallInfo.tempoEsperaAtendidas;
            exports.agentInfo.set(ramal, agent);
        }
        else {
            console.log(`Agent not found for ramal: ${ramal}`);
        }
        this.calculateCallMetrics();
    }
    calculateGNS() {
        let atendidas_menor_x = 0;
        let atendidas = 0;
        callCountMap.forEach((callCount) => {
            atendidas_menor_x += callCount.atendidas_menor_x || 0;
            atendidas += callCount.atendidas || 0;
        });
        if (atendidas !== 0) {
            return (atendidas_menor_x / atendidas) * 100;
        }
        else {
            return 0;
        }
    }
    calculateTMF() {
        let totalChamadas = 0;
        let tempoTotalSegundos = 0;
        callCountMap.forEach((callCount) => {
            totalChamadas += callCount.atendidas + callCount.abandonadas;
        });
        callDurationMap.forEach((callDurationCount) => {
            tempoTotalSegundos += callDurationCount.tempoEsperaAtendidas;
        });
        const tempoTotalMinutos = tempoTotalSegundos / 60;
        if (totalChamadas !== 0) {
            return tempoTotalMinutos / totalChamadas;
        }
        else {
            return 0;
        }
    }
    calculateTXA() {
        let totalAbandonadas = 0;
        let totalRecebidas = 0;
        let txa = 0;
        callCountMap.forEach((callCount) => {
            totalAbandonadas += callCount.abandonadas;
            totalRecebidas += callCount.atendidas + callCount.abandonadas;
        });
        if (totalRecebidas > 0) {
            txa = (totalAbandonadas / totalRecebidas) * 100;
        }
        else {
            txa = 0;
        }
        return txa;
    }
    calculateTMR() {
        let tempoTotalChamadas = 0;
        let totalChamadasAtendidas = 0;
        callDurationMap.forEach((callDuration) => {
            tempoTotalChamadas += callDuration.tempoEsperaAtendidas || 0;
            totalChamadasAtendidas += callDuration.tempoAtendimento || 0;
        });
        if (totalChamadasAtendidas !== 0) {
            return tempoTotalChamadas / totalChamadasAtendidas;
        }
        else {
            return 0;
        }
    }
    storeMetrics() {
        const gns = this.calculateGNS();
        const tmf = this.calculateTMF();
        const txa = this.calculateTXA();
        const tmr = this.calculateTMR();
        const timestamp = new Date();
        const metricsObject = { gns, tmf, txa, tmr, timestamp };
        exports.metricsArray = [metricsObject];
        this.SocketService.emitEvent('Metrics', JSON.stringify(exports.metricsArray));
        return metricsObject;
    }
    calculateCallMetrics() {
        let abandono = 0;
        let abandono_x = 0;
        let complete = 0;
        let complete_x = 0;
        const callCountArray = Array.from(callCountMap);
        const totalAbandonadas = callCountArray.reduce((total, [, current]) => total + current.abandonadas, 0);
        const totalConcluidas = callCountArray.reduce((total, [, current]) => total + current.contagemPosChamada, 0);
        if (totalConcluidas + totalAbandonadas !== 0) {
            abandono = Math.round((totalAbandonadas / (totalConcluidas + totalAbandonadas)) * 100);
        }
        const totalAbandonadasMenorx = callCountArray.reduce((total, [, current]) => total + current.abandonadas_menor_x, 0);
        if (totalConcluidas + totalAbandonadas !== 0) {
            abandono_x = Math.round((totalAbandonadasMenorx / (totalConcluidas + totalAbandonadas)) * 100);
        }
        if (totalConcluidas + totalAbandonadas !== 0) {
            complete = Math.round((totalConcluidas / (totalConcluidas + totalAbandonadas)) * 100);
        }
        const totalATendidasMenorx = callCountArray.reduce((total, [, current]) => total + current.atendidas_menor_x, 0);
        if (totalConcluidas + totalAbandonadas !== 0) {
            complete_x = Math.round((totalATendidasMenorx / (totalConcluidas + totalAbandonadas)) * 100);
        }
        const callMetrics = { abandono, abandono_x, complete, complete_x };
        exports.customMetrics = [callMetrics];
        this.SocketService.emitEvent('CustomMetrics', JSON.stringify(exports.customMetrics));
        return callMetrics;
    }
    getTrunkType(trunkName) {
        const trunkInfo = sync_trunks_1.trunksServer.get(trunkName.split('/')[0]);
        if (trunkInfo) {
            const name = trunkInfo.name.toLowerCase();
            if (name.includes('pabx')) {
                return 'PABX';
            }
            else if (name.includes('operadora')) {
                return 'Operadora';
            }
            else if (name.includes('gsm')) {
                return 'GSM';
            }
        }
        return 'Desconhecido';
    }
    millisecondsToSeconds(duracaoEmMilissegundos) {
        return duracaoEmMilissegundos / 1000;
    }
    executeOnDayChange() {
        this.clearMapsAndInstances();
        this.initializeDefaultCallDurationConfigurations();
    }
    clearMapsAndInstances() {
        pauseCountMap.clear();
        callsMap.clear();
        exports.agentInfo.clear();
        callCountMap.clear();
        callDurationMap.clear();
        exports.abandonedCalls.splice(0, exports.abandonedCalls.length);
        exports.customMetrics.splice(0, exports.customMetrics.length);
        exports.metricsArray.splice(0, exports.metricsArray.length);
        (0, sync_agents_1.SyncAgents)();
    }
};
exports.AsteriskEventsHandler = AsteriskEventsHandler;
__decorate([
    (0, schedule_1.Cron)('0 0 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AsteriskEventsHandler.prototype, "executeOnDayChange", null);
exports.AsteriskEventsHandler = AsteriskEventsHandler = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [socket_service_1.SocketService,
        call_duration_config_service_1.CallDurationConfigService,
        pauses_service_1.PausesService,
        breaks_service_1.BreaksService,
        agents_service_1.AgentsService])
], AsteriskEventsHandler);
//# sourceMappingURL=asterisk.events.js.map