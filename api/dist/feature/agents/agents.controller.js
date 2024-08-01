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
exports.AgentsController = void 0;
const common_1 = require("@nestjs/common");
const agents_service_1 = require("./agents.service");
const create_agent_dto_1 = require("./dto/create-agent.dto");
const update_agent_dto_1 = require("./dto/update-agent.dto");
const swagger_1 = require("@nestjs/swagger");
let AgentsController = class AgentsController {
    constructor(agentsService) {
        this.agentsService = agentsService;
    }
    async pagination(request) {
        return await this.agentsService.paginate(request.query.hasOwnProperty('page') ? request.query.page : 0, request.query.hasOwnProperty('size') ? request.query.size : 10, request.query.hasOwnProperty('sort') ? request.query.sort : 'name', request.query.hasOwnProperty('order') ? request.query.order : 'asc', request.query.hasOwnProperty('search') ? request.query.search : '');
    }
    async findAll() {
        return this.agentsService.findAll();
    }
    async findById(id) {
        return await this.agentsService.findById(id);
    }
    async create(createAgetDto) {
        return await this.agentsService.create(createAgetDto);
    }
    async update(id, updateAgentDto) {
        return await this.agentsService.update(id, updateAgentDto);
    }
    async delete(id) {
        return await this.agentsService.delete(id);
    }
};
exports.AgentsController = AgentsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas os Agents com paginação' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de Agents recuperada com sucesso',
    }),
    (0, common_1.Get)('pages?'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "pagination", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de todos os agent' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um Agent pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Agent encontrado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Agent não encontrado' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma novo Agent' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Agent criado com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Erro de validação ou campos ausentes',
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agent_dto_1.CreateAgentDto]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um Agent pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Agent atualizado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Agent não encontrada' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Erro de validação ou campos ausentes',
    }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agent_dto_1.UpdateAgentDto]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Excluir um Agent pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Agent excluído com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Agent não encontrado' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "delete", null);
exports.AgentsController = AgentsController = __decorate([
    (0, swagger_1.ApiTags)('Agents'),
    (0, common_1.Controller)('agents'),
    __metadata("design:paramtypes", [agents_service_1.AgentsService])
], AgentsController);
//# sourceMappingURL=agents.controller.js.map