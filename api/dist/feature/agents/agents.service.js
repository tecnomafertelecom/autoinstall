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
exports.AgentsService = void 0;
const common_1 = require("@nestjs/common");
const agent_repository_1 = require("./repository/agent.repository");
const sync_agents_1 = require("../../core/syncOnStart/sync_agents");
let AgentsService = class AgentsService {
    constructor(repository) {
        this.repository = repository;
    }
    async paginate(page, size, sort, order, search) {
        const { results, totalItems } = await this.repository.paginate(page, size, sort, order, search);
        const totalPages = Math.ceil(totalItems / size) - 1;
        const currentPage = Number(page);
        return {
            results,
            pagination: {
                length: totalItems,
                size: size,
                lastPage: totalPages,
                page: currentPage,
                startIndex: currentPage * size,
                endIndex: currentPage * size + (size - 1),
            },
        };
    }
    async findAll() {
        return this.repository.findAll();
    }
    async getOne(extension) {
        await (0, sync_agents_1.SyncAgents)();
        return await this.repository.getOne(extension);
    }
    async findById(id) {
        return await this.repository.findById(id);
    }
    async create(createAgentDto) {
        return await this.repository.create(createAgentDto);
    }
    async update(id, updateAgentDto) {
        return await this.repository.update(id, updateAgentDto);
    }
    async delete(id) {
        return await this.repository.delete(id);
    }
};
exports.AgentsService = AgentsService;
exports.AgentsService = AgentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [agent_repository_1.AgentRepository])
], AgentsService);
//# sourceMappingURL=agents.service.js.map