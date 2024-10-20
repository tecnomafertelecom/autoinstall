"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const online_controller_1 = require("./online.controller");
const online_service_1 = require("./online.service");
const online_repository_1 = require("./repository/online.repository");
let OnlineModule = class OnlineModule {
};
exports.OnlineModule = OnlineModule;
exports.OnlineModule = OnlineModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [online_controller_1.OnlineController],
        providers: [online_service_1.OnlineService, online_repository_1.OnlineRepository],
    })
], OnlineModule);
//# sourceMappingURL=online.module.js.map