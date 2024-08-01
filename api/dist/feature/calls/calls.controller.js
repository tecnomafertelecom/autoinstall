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
exports.CallsController = void 0;
const common_1 = require("@nestjs/common");
const calls_service_1 = require("./calls.service");
const create_calls_dto_1 = require("./dto/create-calls.dto");
const swagger_1 = require("@nestjs/swagger");
let CallsController = class CallsController {
    constructor(callsService) {
        this.callsService = callsService;
    }
    async paginate(request) {
        return this.callsService.paginate(request.query.hasOwnProperty('page') ? request.query.page : 0, request.query.hasOwnProperty('size') ? request.query.size : 10, request.query.hasOwnProperty('sort') ? request.query.sort : 'linkedId', request.query.hasOwnProperty('order') ? request.query.order : 'asc', request.query.hasOwnProperty('search') ? request.query.search : '');
    }
    async findAll() {
        return this.callsService.findAll();
    }
    async findOne(id) {
        return this.callsService.findOne(id);
    }
    async create(createCallDto) {
        return this.callsService.create(createCallDto);
    }
    async update(id, updateCallDto) {
        return this.callsService.update(id, updateCallDto);
    }
    async remove(id) {
        return this.callsService.remove(id);
    }
};
exports.CallsController = CallsController;
__decorate([
    (0, common_1.Get)('paginate'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CallsController.prototype, "paginate", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna todas as chamadas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CallsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da chamada' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna uma chamada pelo ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CallsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_calls_dto_1.CallsDTO }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Cria uma nova chamada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_calls_dto_1.CallsDTO]),
    __metadata("design:returntype", Promise)
], CallsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da chamada' }),
    (0, swagger_1.ApiBody)({ type: create_calls_dto_1.CallsDTO }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Atualiza uma chamada pelo ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_calls_dto_1.CallsDTO]),
    __metadata("design:returntype", Promise)
], CallsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da chamada' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Remove uma chamada pelo ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CallsController.prototype, "remove", null);
exports.CallsController = CallsController = __decorate([
    (0, swagger_1.ApiTags)('calls'),
    (0, common_1.Controller)('calls'),
    __metadata("design:paramtypes", [calls_service_1.CallsService])
], CallsController);
//# sourceMappingURL=calls.controller.js.map