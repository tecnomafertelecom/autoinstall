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
exports.ScheduledTaskService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const rxjs_1 = require("rxjs");
const socket_service_1 = require("../../../socket/socket.service");
const peaks_1 = require("../../php/peaks");
const ura_queue_1 = require("../../php/ura_queue");
let ScheduledTaskService = class ScheduledTaskService {
    constructor(socketService) {
        this.socketService = socketService;
        this.destroy$ = new rxjs_1.Subject();
        this.runningFunctions = new Set();
    }
    async startScheduledTask() {
        const functionsToRun = [
            { name: 'SyncPeaks', fn: peaks_1.SyncPeaks },
            { name: 'SyncUraQueues', fn: ura_queue_1.SyncUraQueues },
        ];
        if (socket_service_1.agentsOnline.size > 0) {
            await Promise.all(functionsToRun.map(async ({ name, fn }) => {
                if (this.runningFunctions.has(name)) {
                    return;
                }
                try {
                    this.runningFunctions.add(name);
                    const result = await fn();
                    this.socketService.emitEvent(name, JSON.stringify(result));
                }
                catch (error) {
                    console.error(`Error in ${name}:`, error);
                }
                finally {
                    this.runningFunctions.delete(name);
                }
            }));
        }
    }
    stopScheduledTask() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
exports.ScheduledTaskService = ScheduledTaskService;
__decorate([
    (0, schedule_1.Cron)('*/1 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScheduledTaskService.prototype, "startScheduledTask", null);
exports.ScheduledTaskService = ScheduledTaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [socket_service_1.SocketService])
], ScheduledTaskService);
//# sourceMappingURL=sendQueryToSockets.service.js.map