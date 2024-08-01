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
exports.CallDurationConfigService = void 0;
const common_1 = require("@nestjs/common");
const call_duration_config_repository_1 = require("./repository/call-duration-config.repository");
let CallDurationConfigService = class CallDurationConfigService {
    constructor(repository) {
        this.repository = repository;
    }
    async onModuleInit() {
        await this.initializeDefaultConfigurations();
    }
    async create(data) {
        const existingConfig = await this.repository.findByLimitForType(data.limitForType);
        if (existingConfig) {
            throw new Error('Já existe uma configuração para o mesmo tipo de limite no banco de dados.');
        }
        return this.repository.create(data);
    }
    async findAll() {
        return this.repository.findAll();
    }
    async findById(id) {
        return this.repository.findById(id);
    }
    async update(id, data) {
        return this.repository.update(id, data);
    }
    async delete(id) {
        return this.repository.delete(id);
    }
    async initializeDefaultConfigurations() {
        const existingConfigAtendidas = await this.repository.findByLimitForType('tempoEsperaAtendidas');
        const existingConfigAbandono = await this.repository.findByLimitForType('tempoEsperaAbandono');
        if (!existingConfigAtendidas) {
            await this.createDefaultConfiguration('tempoEsperaAtendidas', 20);
        }
        if (!existingConfigAbandono) {
            await this.createDefaultConfiguration('tempoEsperaAbandono', 20);
        }
    }
    async createDefaultConfiguration(limitForType, limit) {
        const defaultConfig = {
            limit: limit,
            limitForType: limitForType,
        };
        await this.repository.create(defaultConfig);
    }
};
exports.CallDurationConfigService = CallDurationConfigService;
exports.CallDurationConfigService = CallDurationConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [call_duration_config_repository_1.CallDurationConfigRepository])
], CallDurationConfigService);
//# sourceMappingURL=call-duration-config.service.js.map