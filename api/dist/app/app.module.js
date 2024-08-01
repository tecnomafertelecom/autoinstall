"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const env_module_1 = require("../env/env.module");
const env_1 = require("../env/env");
const config_1 = require("@nestjs/config");
const asterisk_module_1 = require("../asterisk/asterisk.module");
const socket_module_1 = require("../socket/socket.module");
const agents_module_1 = require("../feature/agents/agents.module");
const pauses_module_1 = require("../feature/pauses/pauses.module");
const online_module_1 = require("../feature/online/online.module");
const calls_module_1 = require("../feature/calls/calls.module");
const sendQueryToSockets_module_1 = require("../core/tasks/sendQueryToSockets/sendQueryToSockets.module");
const breaks_module_1 = require("../feature/breaks/breaks.module");
const call_duration_config_module_1 = require("../feature/callDurationConfig/call-duration-config.module");
const velocity_module_1 = require("../feature/velocity/velocity.module");
const auth_module_1 = require("../auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validate: (env) => env_1.envSchema.parse(env),
                isGlobal: true,
            }),
            env_module_1.EnvModule,
            socket_module_1.SocketModule,
            agents_module_1.AgentsModule,
            pauses_module_1.PausesModule,
            online_module_1.OnlineModule,
            calls_module_1.CallsModule,
            breaks_module_1.BreaksModule,
            call_duration_config_module_1.CallDurationConfigModule,
            velocity_module_1.DashboardVelocityModule,
            asterisk_module_1.AsteriskModule,
            sendQueryToSockets_module_1.ScheduledTaskServiceModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map