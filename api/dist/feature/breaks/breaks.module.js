"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreaksModule = void 0;
const common_1 = require("@nestjs/common");
const breaks_controller_1 = require("./breaks.controller");
const breaks_service_1 = require("./breaks.service");
const prisma_module_1 = require("../../prisma/prisma.module");
const breaks_repository_1 = require("./repository/breaks.repository");
let BreaksModule = class BreaksModule {
};
exports.BreaksModule = BreaksModule;
exports.BreaksModule = BreaksModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [breaks_controller_1.BreaksController],
        providers: [breaks_service_1.BreaksService, breaks_repository_1.BreaksRepository],
    })
], BreaksModule);
//# sourceMappingURL=breaks.module.js.map