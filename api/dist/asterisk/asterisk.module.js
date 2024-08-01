"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsteriskModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const asterisk_service_1 = require("./asterisk.service");
const asterisk_events_1 = require("./event/asterisk.events");
const env_module_1 = require("../env/env.module");
const socket_module_1 = require("../socket/socket.module");
const socket_service_1 = require("../socket/socket.service");
const call_duration_config_service_1 = require("../feature/callDurationConfig/call-duration-config.service");
const call_duration_config_repository_1 = require("../feature/callDurationConfig/repository/call-duration-config.repository");
const pauses_service_1 = require("../feature/pauses/pauses.service");
const pauses_repository_1 = require("../feature/pauses/repository/pauses.repository");
const breaks_repository_1 = require("../feature/breaks/repository/breaks.repository");
const breaks_service_1 = require("../feature/breaks/breaks.service");
const agents_service_1 = require("../feature/agents/agents.service");
const agent_repository_1 = require("../feature/agents/repository/agent.repository");
const schedule_1 = require("@nestjs/schedule");
let AsteriskModule = class AsteriskModule {
};
exports.AsteriskModule = AsteriskModule;
exports.AsteriskModule = AsteriskModule = __decorate([
    (0, common_1.Module)({
        imports: [env_module_1.EnvModule, socket_module_1.SocketModule, prisma_module_1.PrismaModule, schedule_1.ScheduleModule.forRoot()],
        providers: [
            asterisk_service_1.AsteriskService,
            asterisk_events_1.AsteriskEventsHandler,
            socket_service_1.SocketService,
            call_duration_config_repository_1.CallDurationConfigRepository,
            call_duration_config_service_1.CallDurationConfigService,
            pauses_service_1.PausesService,
            pauses_repository_1.PausesRepository,
            breaks_repository_1.BreaksRepository,
            breaks_service_1.BreaksService,
            agents_service_1.AgentsService,
            agent_repository_1.AgentRepository,
        ],
        exports: [asterisk_service_1.AsteriskService, asterisk_events_1.AsteriskEventsHandler],
    })
], AsteriskModule);
//# sourceMappingURL=asterisk.module.js.map