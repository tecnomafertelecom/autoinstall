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
exports.OnlineController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const online_service_1 = require("./online.service");
const create_online_dto_1 = require("./dto/create-online.dto");
const update_online_dto_1 = require("./dto/update-online.dto");
let OnlineController = class OnlineController {
    constructor(onlineService) {
        this.onlineService = onlineService;
    }
    async create(createOnlineDto) {
        return this.onlineService.create(createOnlineDto);
    }
    async pagination(request) {
        return await this.onlineService.paginate(request.query.hasOwnProperty('page') ? request.query.page : 0, request.query.hasOwnProperty('size') ? request.query.size : 10, request.query.hasOwnProperty('sort') ? request.query.sort : 'reason', request.query.hasOwnProperty('order') ? request.query.order : 'asc', request.query.hasOwnProperty('search') ? request.query.search : '');
    }
    async findById(id) {
        return this.onlineService.findById(id);
    }
    async update(id, updateOnlineDto) {
        return this.onlineService.update(id, updateOnlineDto);
    }
    async delete(id) {
        return this.onlineService.delete(id);
    }
};
exports.OnlineController = OnlineController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo agente online' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Agente Online criado com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Erro de validação ou campos ausentes',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_online_dto_1.CreateOnlineDto]),
    __metadata("design:returntype", Promise)
], OnlineController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os agentes onlines com paginação' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de agente onlines recuperado com sucesso',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OnlineController.prototype, "pagination", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um agente online pelo ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Agente Online recuperado com sucesso',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Agente Online não encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OnlineController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um agente online pelo ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Agente Online atualizado com sucesso',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Agente Online não encontrado' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Erro de validação ou campos ausentes',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_online_dto_1.UpdateOnlineDto]),
    __metadata("design:returntype", Promise)
], OnlineController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Excluir um agente online pelo ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Agente Online excluído com sucesso',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Agente Online não encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OnlineController.prototype, "delete", null);
exports.OnlineController = OnlineController = __decorate([
    (0, swagger_1.ApiTags)('Online'),
    (0, common_1.Controller)('online'),
    __metadata("design:paramtypes", [online_service_1.OnlineService])
], OnlineController);
//# sourceMappingURL=online.controller.js.map