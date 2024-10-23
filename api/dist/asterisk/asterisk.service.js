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
exports.AsteriskService = void 0;
const common_1 = require("@nestjs/common");
const env_service_1 = require("../env/env.service");
const asterisk_events_1 = require("./event/asterisk.events");
const Manager = require("asterisk-ami-client");
let AsteriskService = class AsteriskService {
    constructor(asteriskEvents, config) {
        this.asteriskEvents = asteriskEvents;
        this.config = config;
    }
    async onModuleInit() {
        this.connectToAsterisk();
    }
    connectToAsterisk() {
        this.amiClient = new Manager({
            reconnect: true,
            attemptsDelay: 2000,
            keepAlive: true,
            keepAliveDelay: 2000,
            emitEventsByTypes: true,
            eventTypeToLowerCase: false,
            emitResponsesById: true,
        });
        this.amiClient
            .connect(this.config.get('AMI_USERNAME'), this.config.get('AMI_PASSWORD'), {
            host: this.config.get('AMI_HOST'),
            port: this.config.get('AMI_PORT'),
        })
            .then(async () => {
            this.amiClient
                .on('connect', () => console.log('connect'))
                .on('response', (response) => {
                console.log('Resposta do Servidor IPBX');
                console.log(response);
            })
                .on('disconnect', () => console.log('disconnect'))
                .on('reconnection', () => console.log('reconnection'))
                .on('internalError', (error) => console.log(error))
                .action({
                Action: 'Ping',
            });
            this.amiClient.on('QueueMemberAdded', (evt) => this.asteriskEvents.handleQueueMemberAdded(evt));
            this.amiClient.on('DialBegin', (evt) => this.asteriskEvents.handleQueueMemberDialBegin(evt));
            this.amiClient.on('BridgeEnter', (evt) => this.asteriskEvents.handleQueueMemberBridgeEnter(evt));
            this.amiClient.on('Hangup', (evt) => this.asteriskEvents.handleQueueMemberHangup(evt));
            this.amiClient.on('DialEnd', (evt) => this.asteriskEvents.handleQueueMemberDialEnd(evt));
            this.amiClient.on('QueueCallerAbandon', (evt) => this.asteriskEvents.handleQueueCallerAbandon(evt));
            this.amiClient.on('QueueParams', (evt) => this.asteriskEvents.handleQueueParams(evt));
            this.amiClient.on('QueueMemberStatus', (evt) => {
                console.log("Queue member", evt);
                this.asteriskEvents.handleQueueMemberStatus(evt);
            });
            this.amiClient.on('QueueMemberPause', (evt) => {
                console.log("Queue member Pause", evt);
                this.asteriskEvents.handleQueueMemberPause(evt);
            });
            this.amiClient.on('QueueMemberRemoved', (evt) => {
                console.log("Queue member Removed", evt);
                this.asteriskEvents.handleQueueMemberRemoved(evt);
            });
            this.amiClient.on('Agents', (evt) => console.log(evt));
        })
            .catch((error) => console.log(error));
    }
};
exports.AsteriskService = AsteriskService;
exports.AsteriskService = AsteriskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [asterisk_events_1.AsteriskEventsHandler,
        env_service_1.EnvService])
], AsteriskService);
//# sourceMappingURL=asterisk.service.js.map