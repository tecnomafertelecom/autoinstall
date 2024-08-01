"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardVelocityModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const velocity_service_1 = require("./velocity.service");
const velocity_repository_1 = require("./repository/velocity.repository");
const velocity_controler_1 = require("./velocity.controler");
let DashboardVelocityModule = class DashboardVelocityModule {
};
exports.DashboardVelocityModule = DashboardVelocityModule;
exports.DashboardVelocityModule = DashboardVelocityModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [velocity_controler_1.DashboardVelocityController],
        providers: [velocity_service_1.DashboardVelocityService, velocity_repository_1.DashboardVelocityRepository],
    })
], DashboardVelocityModule);
//# sourceMappingURL=velocity.module.js.map