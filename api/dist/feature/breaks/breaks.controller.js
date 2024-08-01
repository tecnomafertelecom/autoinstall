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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreaksController = void 0;
const common_1 = require("@nestjs/common");
const breaks_service_1 = require("./breaks.service");
const create_breaks_dto_1 = require("./dto/create-breaks.dto");
const swagger_1 = require("@nestjs/swagger");
let BreaksController = class BreaksController {
    constructor(service) {
        this.service = service;
    }
    async create(data) {
        return this.service.create(data);
    }
    async findAll() {
        return this.service.findAll();
    }
    async findById(id) {
        return this.service.findById(id);
    }
    async update(id, data) {
        return this.service.update(id, data);
    }
    async delete(id) {
        return this.service.delete(id);
    }
};
exports.BreaksController = BreaksController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pausa criada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Pedido inválido' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_breaks_dto_1.BreaksDto]),
    __metadata("design:returntype", Promise)
], BreaksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de todas as pausas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BreaksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalhes da pausa' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pausa não encontrada' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da pausa' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BreaksController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pausa atualizada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pausa não encontrada' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da pausa' }),
    (0, swagger_1.ApiBody)({
        type: create_breaks_dto_1.BreaksDto,
        description: 'Dados da pausa a serem atualizados',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_breaks_dto_1.BreaksDto]),
    __metadata("design:returntype", Promise)
], BreaksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pausa excluída com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pausa não encontrada' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da pausa' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BreaksController.prototype, "delete", null);
exports.BreaksController = BreaksController = __decorate([
    (0, common_1.Controller)('breaks'),
    (0, swagger_1.ApiTags)('breaks'),
    __metadata("design:paramtypes", [breaks_service_1.BreaksService])
], BreaksController);
//# sourceMappingURL=breaks.controller.js.map