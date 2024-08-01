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
exports.PausesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let PausesRepository = class PausesRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async paginate(page, size, sort, order, search) {
        const results = await this.prisma.pauses.findMany({
            skip: page * size,
            take: Number(size),
            where: { reason: { contains: search } },
            orderBy: { [sort]: order },
        });
        const totalItems = await this.prisma.pauses.count({
            where: { reason: { contains: search, mode: 'insensitive' } },
        });
        return { results, totalItems };
    }
    async create(createPauseDto) {
        return this.prisma.pauses.create({
            data: createPauseDto,
        });
    }
    async findAll() {
        return this.prisma.pauses.findMany({
            include: {
                agent: true,
            },
        });
    }
    async findById(id) {
        const pause = await this.prisma.pauses.findUnique({
            where: { id },
            include: {
                agent: true,
            },
        });
        if (!pause) {
            throw new common_1.NotFoundException('Pausa não encontrada');
        }
        return pause;
    }
    async update(id, updatePauseDto) {
        const updatedPause = await this.prisma.pauses.update({
            where: { id },
            data: updatePauseDto,
        });
        if (!updatedPause) {
            throw new common_1.NotFoundException('Pausa não encontrada');
        }
        return updatedPause;
    }
    async delete(id) {
        const deletedPause = await this.prisma.pauses.delete({
            where: { id },
        });
        if (!deletedPause) {
            throw new common_1.NotFoundException('Pausa não encontrada');
        }
        return deletedPause;
    }
};
exports.PausesRepository = PausesRepository;
exports.PausesRepository = PausesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PausesRepository);
//# sourceMappingURL=pauses.repository.js.map