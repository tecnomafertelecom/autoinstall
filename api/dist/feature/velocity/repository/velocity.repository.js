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
exports.DashboardVelocityRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let DashboardVelocityRepository = class DashboardVelocityRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.dashboardVelocity.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.dashboardVelocity.findMany();
    }
    async findById(id) {
        const velocity = await this.prisma.dashboardVelocity.findUnique({
            where: { id },
        });
        if (!velocity)
            throw new common_1.NotFoundException(`Velocidade com ID ${id} não encontrada`);
        return velocity;
    }
    async update(id, data) {
        const velocity = await this.findById(id);
        if (!velocity) {
            throw new common_1.NotFoundException(`Velocidade com ID ${id} não encontrada`);
        }
        const updatedVelocity = await this.prisma.dashboardVelocity.update({
            where: {
                id,
            },
            data,
        });
        if (updatedVelocity) {
            console.log('Velocidade atualizada com sucesso:', updatedVelocity);
            return {
                message: 'Velocidade atualizada com sucesso',
                velocity: updatedVelocity,
            };
        }
        else {
            throw new common_1.InternalServerErrorException('Erro ao atualizar velocidade');
        }
    }
    async delete(id) {
        await this.findById(id);
        return this.prisma.dashboardVelocity.delete({
            where: {
                id,
            },
        });
    }
    async findByTitle(title) {
        return this.prisma.dashboardVelocity.findFirst({
            where: {
                title,
            },
        });
    }
    async initializeDefaultVelocities() {
        const defaultVelocities = [
            { title: 'GNS', value: 90 },
            { title: 'TMF', value: 20 },
            { title: 'TXA', value: 50 },
            { title: 'TMR', value: 6 },
        ];
        const promises = defaultVelocities.map((velocity) => this.prisma.dashboardVelocity.create({
            data: velocity,
        }));
        return Promise.all(promises);
    }
};
exports.DashboardVelocityRepository = DashboardVelocityRepository;
exports.DashboardVelocityRepository = DashboardVelocityRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardVelocityRepository);
//# sourceMappingURL=velocity.repository.js.map