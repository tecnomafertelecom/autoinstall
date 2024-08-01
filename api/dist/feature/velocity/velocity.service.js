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
exports.DashboardVelocityService = void 0;
const common_1 = require("@nestjs/common");
const velocity_repository_1 = require("./repository/velocity.repository");
let DashboardVelocityService = class DashboardVelocityService {
    constructor(repository) {
        this.repository = repository;
    }
    async onModuleInit() {
        await this.initializeDefaultVelocities();
    }
    async create(data) {
        const existingVelocity = await this.repository.findByTitle(data.title);
        if (existingVelocity) {
            throw new common_1.ConflictException(`Já existe uma velocidade com o título ${data.title}`);
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
        console.log(id, data);
        if (data === undefined) {
            throw new common_1.NotFoundException('Os dados de atualização estão faltando.');
        }
        if (data.value === undefined || data.title === undefined) {
            throw new common_1.NotFoundException('Alguns campos necessários para atualização estão faltando.');
        }
        return this.repository.update(id, data);
    }
    async delete(id) {
        return this.repository.delete(id);
    }
    async initializeDefaultVelocities() {
        const defaultVelocities = [
            { title: 'GNS', value: 90 },
            { title: 'TMF', value: 20 },
            { title: 'TXA', value: 25 },
            { title: 'TMR', value: 6 },
        ];
        for (const velocity of defaultVelocities) {
            const existingVelocity = await this.repository.findByTitle(velocity.title);
            if (!existingVelocity) {
                await this.repository.create(velocity);
            }
        }
    }
};
exports.DashboardVelocityService = DashboardVelocityService;
exports.DashboardVelocityService = DashboardVelocityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [velocity_repository_1.DashboardVelocityRepository])
], DashboardVelocityService);
//# sourceMappingURL=velocity.service.js.map