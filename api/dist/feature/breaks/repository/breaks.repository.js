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
exports.BreaksRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let BreaksRepository = class BreaksRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.breaks.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.breaks.findMany();
    }
    async findById(id) {
        const breaks = await this.prisma.breaks.findFirst({
            where: { id },
        });
        if (!breaks)
            throw new common_1.NotFoundException(`Pausa com ID ${id} não encontrada`);
        return breaks;
    }
    async update(id, data) {
        const breakItem = await this.findById(id);
        if (!breakItem) {
            throw new common_1.NotFoundException(`Pausa com ID ${id} não encontrada`);
        }
        return this.prisma.breaks.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        await this.findById(id);
        return this.prisma.breaks.delete({
            where: {
                id,
            },
        });
    }
    async findByReason(reason) {
        return this.prisma.breaks.findFirst({
            where: {
                reason,
            },
        });
    }
};
exports.BreaksRepository = BreaksRepository;
exports.BreaksRepository = BreaksRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BreaksRepository);
//# sourceMappingURL=breaks.repository.js.map