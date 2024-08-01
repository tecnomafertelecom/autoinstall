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
exports.DashboardVelocityController = void 0;
const common_1 = require("@nestjs/common");
const velocity_service_1 = require("./velocity.service");
const create_velocity_dto_1 = require("./dto/create-velocity.dto");
const swagger_1 = require("@nestjs/swagger");
const update_velocity_dto_1 = require("./dto/update-velocity.dto");
let DashboardVelocityController = class DashboardVelocityController {
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
exports.DashboardVelocityController = DashboardVelocityController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Velocidade criada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Pedido inválido' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_velocity_dto_1.DashboardVelocityDTO]),
    __metadata("design:returntype", Promise)
], DashboardVelocityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de todas as velocidades' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardVelocityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalhes da velocidade' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Velocidade não encontrada' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da velocidade' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DashboardVelocityController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Velocidade atualizada com sucesso',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Velocidade não encontrada' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da velocidade' }),
    (0, swagger_1.ApiBody)({
        type: update_velocity_dto_1.updateDashboardVelocityDTO,
        description: 'Dados da velocidade a serem atualizados',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_velocity_dto_1.updateDashboardVelocityDTO]),
    __metadata("design:returntype", Promise)
], DashboardVelocityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Velocidade excluída com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Velocidade não encontrada' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da velocidade' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DashboardVelocityController.prototype, "delete", null);
exports.DashboardVelocityController = DashboardVelocityController = __decorate([
    (0, common_1.Controller)('dashboard-velocity'),
    (0, swagger_1.ApiTags)('dashboard-velocity'),
    __metadata("design:paramtypes", [velocity_service_1.DashboardVelocityService])
], DashboardVelocityController);
//# sourceMappingURL=velocity.controler.js.map