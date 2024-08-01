"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PausesModule = void 0;
const common_1 = require("@nestjs/common");
const pauses_service_1 = require("./pauses.service");
const prisma_module_1 = require("../../prisma/prisma.module");
const pauses_controller_1 = require("./pauses.controller");
const pauses_repository_1 = require("./repository/pauses.repository");
let PausesModule = class PausesModule {
};
exports.PausesModule = PausesModule;
exports.PausesModule = PausesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [pauses_controller_1.PausesController],
        providers: [pauses_service_1.PausesService, pauses_repository_1.PausesRepository],
    })
], PausesModule);
//# sourceMappingURL=pauses.module.js.map