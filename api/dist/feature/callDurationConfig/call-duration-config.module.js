"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallDurationConfigModule = void 0;
const prisma_module_1 = require("../../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const call_duration_config_controller_1 = require("./call-duration-config.controller");
const call_duration_config_service_1 = require("./call-duration-config.service");
const call_duration_config_repository_1 = require("./repository/call-duration-config.repository");
let CallDurationConfigModule = class CallDurationConfigModule {
};
exports.CallDurationConfigModule = CallDurationConfigModule;
exports.CallDurationConfigModule = CallDurationConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [call_duration_config_controller_1.CallDurationConfigController],
        providers: [call_duration_config_service_1.CallDurationConfigService, call_duration_config_repository_1.CallDurationConfigRepository],
    })
], CallDurationConfigModule);
//# sourceMappingURL=call-duration-config.module.js.map