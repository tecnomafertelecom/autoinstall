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
exports.AgentRepository = void 0;
const prisma_service_1 = require("../../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let AgentRepository = class AgentRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async paginate(page, size, sort, order, search) {
        const results = await this.prisma.agent.findMany({
            skip: page * size,
            take: Number(size),
            where: { name: { contains: search } },
            orderBy: { [sort]: order },
        });
        const totalItems = await this.prisma.agent.count({
            where: { name: { contains: search, mode: 'insensitive' } },
        });
        return { results, totalItems };
    }
    async findAll() {
        return this.prisma.agent.findMany();
    }
    async getOne(extension) {
        const agent = await this.prisma.agent.findFirst({
            where: { extension },
        });
        if (!agent)
            throw new common_1.NotFoundException('Record not found.');
        return agent;
    }
    async findById(id) {
        const agent = await this.prisma.agent.findFirst({
            where: { id },
        });
        if (!agent)
            throw new common_1.NotFoundException('Record not found.');
        return agent;
    }
    async create(createAgentDto) {
        const AgentExist = await this.prisma.agent.findFirst({
            where: { extension: Number(createAgentDto.extension) },
        });
        if (AgentExist) {
            return AgentExist;
        }
        else {
            const createdAgent = await this.prisma.agent.create({
                data: createAgentDto,
            });
            return createdAgent;
        }
    }
    async update(id, updateAgentDto) {
        const updateAgent = await this.prisma.agent.update({
            where: { id },
            data: updateAgentDto,
        });
        return updateAgent;
    }
    async delete(id) {
        return await this.prisma.agent.delete({
            where: { id },
        });
    }
};
exports.AgentRepository = AgentRepository;
exports.AgentRepository = AgentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AgentRepository);
//# sourceMappingURL=agent.repository.js.map