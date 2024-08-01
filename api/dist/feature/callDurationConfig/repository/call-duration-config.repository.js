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
exports.CallDurationConfigRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let CallDurationConfigRepository = class CallDurationConfigRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.callDurationConfig.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.callDurationConfig.findMany();
    }
    async findById(id) {
        const callDurationConfig = await this.prisma.callDurationConfig.findFirst({
            where: { id },
        });
        if (!callDurationConfig)
            throw new common_1.NotFoundException(`Configuração de duração de chamada com ID ${id} não encontrada`);
        return callDurationConfig;
    }
    async update(id, data) {
        const callDurationConfigItem = await this.findById(id);
        if (!callDurationConfigItem) {
            throw new common_1.NotFoundException(`Configuração de duração de chamada com ID ${id} não encontrada`);
        }
        return this.prisma.callDurationConfig.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        await this.findById(id);
        return this.prisma.callDurationConfig.delete({
            where: {
                id,
            },
        });
    }
    async findByLimitForType(limitForType) {
        return this.prisma.callDurationConfig.findFirst({
            where: {
                limitForType,
            },
        });
    }
};
exports.CallDurationConfigRepository = CallDurationConfigRepository;
exports.CallDurationConfigRepository = CallDurationConfigRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CallDurationConfigRepository);
//# sourceMappingURL=call-duration-config.repository.js.map