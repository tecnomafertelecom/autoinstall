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
exports.PausesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pauses_service_1 = require("./pauses.service");
const create_pause_dto_1 = require("./dto/create-pause.dto");
const update_pause_dto_1 = require("./dto/update-pause.dto");
let PausesController = class PausesController {
    constructor(pausesService) {
        this.pausesService = pausesService;
    }
    async create(createPauseDto) {
        return this.pausesService.create(createPauseDto);
    }
    async pagination(request) {
        return await this.pausesService.paginate(request.query.hasOwnProperty('page') ? request.query.page : 0, request.query.hasOwnProperty('size') ? request.query.size : 10, request.query.hasOwnProperty('sort') ? request.query.sort : 'reason', request.query.hasOwnProperty('order') ? request.query.order : 'asc', request.query.hasOwnProperty('search') ? request.query.search : '');
    }
    async findById(id) {
        return this.pausesService.findById(id);
    }
    async update(id, updatePauseDto) {
        return this.pausesService.update(id, updatePauseDto);
    }
    async delete(id) {
        return this.pausesService.delete(id);
    }
};
exports.PausesController = PausesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova pausa' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pausa criada com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Erro de validação ou campos ausentes',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pause_dto_1.CreatePauseDto]),
    __metadata("design:returntype", Promise)
], PausesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as pausas com paginação' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de pausas recuperada com sucesso',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PausesController.prototype, "pagination", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma pausa pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pausa recuperada com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Pausa não encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PausesController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma pausa pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pausa atualizada com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Pausa não encontrada' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Erro de validação ou campos ausentes',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pause_dto_1.UpdatePauseDto]),
    __metadata("design:returntype", Promise)
], PausesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Excluir uma pausa pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pausa excluída com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Pausa não encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PausesController.prototype, "delete", null);
exports.PausesController = PausesController = __decorate([
    (0, swagger_1.ApiTags)('Pauses'),
    (0, common_1.Controller)('pauses'),
    __metadata("design:paramtypes", [pauses_service_1.PausesService])
], PausesController);
//# sourceMappingURL=pauses.controller.js.map