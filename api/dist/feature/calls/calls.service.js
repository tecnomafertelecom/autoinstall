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
exports.CallsService = void 0;
const common_1 = require("@nestjs/common");
const calls_repository_1 = require("./repository/calls.repository");
const class_validator_1 = require("class-validator");
let CallsService = class CallsService {
    constructor(callsRepository) {
        this.callsRepository = callsRepository;
    }
    async paginate(page, size, sort, order, search) {
        const { results, totalItems } = await this.callsRepository.paginate(page, size, sort, order, search);
        const totalPages = Math.ceil(totalItems / size);
        const currentPage = Number(page);
        return {
            results,
            pagination: {
                length: totalItems,
                size,
                lastPage: totalPages - 1,
                page: currentPage,
                startIndex: currentPage * size,
                endIndex: Math.min(currentPage * size + (size - 1), totalItems - 1),
            },
        };
    }
    async findAll() {
        return this.callsRepository.findAll();
    }
    async findOne(id) {
        const errors = await (0, class_validator_1.validate)({ id });
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        const call = await this.callsRepository.findOne(id);
        if (!call) {
            throw new common_1.NotFoundException(`Chamada com o ID ${id} não encontrada.`);
        }
        return call;
    }
    async create(data) {
        const errors = await (0, class_validator_1.validate)(data);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        return this.callsRepository.create(data);
    }
    async update(id, data) {
        const errors = await (0, class_validator_1.validate)({ id, ...data });
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        const call = await this.callsRepository.update(id, data);
        if (!call) {
            throw new common_1.NotFoundException(`Chamada com o ID ${id} não encontrada.`);
        }
        return call;
    }
    async remove(id) {
        const errors = await (0, class_validator_1.validate)({ id });
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        const call = await this.callsRepository.remove(id);
        if (!call) {
            throw new common_1.NotFoundException(`Chamada com o ID ${id} não encontrada.`);
        }
        return call;
    }
};
exports.CallsService = CallsService;
exports.CallsService = CallsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [calls_repository_1.CallsRepository])
], CallsService);
//# sourceMappingURL=calls.service.js.map