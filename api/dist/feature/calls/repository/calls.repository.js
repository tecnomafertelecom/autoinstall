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
exports.CallsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let CallsRepository = class CallsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async paginate(page = 0, size = 10, sort = 'linkedId', order = 'asc', search = '') {
        const results = await this.prisma.calls.findMany({
            skip: page * size,
            take: size,
            where: { linkedId: { contains: search } },
            orderBy: { [sort]: order },
        });
        const totalItems = await this.prisma.calls.count({
            where: { linkedId: { contains: search, mode: 'insensitive' } },
        });
        const totalPages = Math.ceil(totalItems / size);
        return {
            results,
            totalItems,
            totalPages,
            currentPage: page + 1,
            pageSize: size,
        };
    }
    async findAll() {
        return await this.prisma.calls.findMany();
    }
    async findOne(id) {
        const call = await this.prisma.calls.findUnique({
            where: { id },
        });
        if (!call) {
            throw new common_1.NotFoundException(`Call with ID ${id} not found`);
        }
        return call;
    }
    async create(createCallsDto) {
        return this.prisma.calls.create({
            data: createCallsDto,
        });
    }
    async update(id, data) {
        const call = await this.prisma.calls.update({
            where: { id },
            data,
        });
        if (!call) {
            throw new common_1.NotFoundException(`Call with ID ${id} not found`);
        }
        return call;
    }
    async remove(id) {
        const call = await this.prisma.calls.delete({
            where: { id },
        });
        if (!call) {
            throw new common_1.NotFoundException(`Call with ID ${id} not found`);
        }
        return call;
    }
};
exports.CallsRepository = CallsRepository;
exports.CallsRepository = CallsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CallsRepository);
//# sourceMappingURL=calls.repository.js.map