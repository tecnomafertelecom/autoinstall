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
exports.OnlineRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let OnlineRepository = class OnlineRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async paginate(page, size, sort, order, search) {
        const results = await this.prisma.online.findMany({
            skip: page * size,
            take: Number(size),
            where: { reason: { contains: search } },
            orderBy: { [sort]: order },
        });
        const totalItems = await this.prisma.online.count({
            where: { reason: { contains: search, mode: 'insensitive' } },
        });
        return { results, totalItems };
    }
    async create(createOnlineDto) {
        return this.prisma.online.create({
            data: createOnlineDto,
        });
    }
    async findAll() {
        return this.prisma.online.findMany({
            include: {
                agent: true,
            },
        });
    }
    async findById(id) {
        const online = await this.prisma.online.findUnique({
            where: { id },
            include: {
                agent: true,
            },
        });
        if (!online) {
            throw new common_1.NotFoundException('Registro não encontrado');
        }
        return online;
    }
    async update(id, updateOnlineDto) {
        const updatedOnline = await this.prisma.online.update({
            where: { id },
            data: updateOnlineDto,
        });
        if (!updatedOnline) {
            throw new common_1.NotFoundException('Registro não encontrado');
        }
        return updatedOnline;
    }
    async delete(id) {
        const deletedOnline = await this.prisma.online.delete({
            where: { id },
        });
        if (!deletedOnline) {
            throw new common_1.NotFoundException('Registro não encontrado');
        }
        return deletedOnline;
    }
};
exports.OnlineRepository = OnlineRepository;
exports.OnlineRepository = OnlineRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OnlineRepository);
//# sourceMappingURL=online.repository.js.map