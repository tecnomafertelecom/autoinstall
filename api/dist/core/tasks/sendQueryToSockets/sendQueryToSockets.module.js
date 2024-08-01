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
exports.ScheduledTaskServiceModule = void 0;
const common_1 = require("@nestjs/common");
const sendQueryToSockets_service_1 = require("./sendQueryToSockets.service");
const socket_module_1 = require("../../../socket/socket.module");
const socket_service_1 = require("../../../socket/socket.service");
const schedule_1 = require("@nestjs/schedule");
let ScheduledTaskServiceModule = class ScheduledTaskServiceModule {
    constructor(scheduledTaskService) {
        this.scheduledTaskService = scheduledTaskService;
    }
    onModuleInit() {
        this.scheduledTaskService.startScheduledTask();
    }
};
exports.ScheduledTaskServiceModule = ScheduledTaskServiceModule;
exports.ScheduledTaskServiceModule = ScheduledTaskServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [socket_module_1.SocketModule, schedule_1.ScheduleModule.forRoot()],
        providers: [sendQueryToSockets_service_1.ScheduledTaskService, socket_service_1.SocketService],
        exports: [sendQueryToSockets_service_1.ScheduledTaskService],
    }),
    __metadata("design:paramtypes", [sendQueryToSockets_service_1.ScheduledTaskService])
], ScheduledTaskServiceModule);
//# sourceMappingURL=sendQueryToSockets.module.js.map