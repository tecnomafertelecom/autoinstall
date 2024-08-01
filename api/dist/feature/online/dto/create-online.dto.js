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
exports.CreateOnlineDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const online_reason_enum_1 = require("./enum/online-reason.enum");
class CreateOnlineDto {
    constructor() {
        this.reason = online_reason_enum_1.OnlineReason.DISPONIVEL;
    }
}
exports.CreateOnlineDto = CreateOnlineDto;
__decorate([
    (0, class_validator_1.IsEnum)(online_reason_enum_1.OnlineReason, { message: 'Motivo inválido' }),
    (0, class_validator_1.IsString)({ message: 'Motivo inválido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O motivo não pode estar vazio' }),
    (0, swagger_1.ApiProperty)({ description: 'Motivo da atividade online' }),
    __metadata("design:type", String)
], CreateOnlineDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Data de início inválida' }),
    (0, swagger_1.ApiProperty)({ description: 'Data de início da pausa' }),
    __metadata("design:type", Date)
], CreateOnlineDto.prototype, "start", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Data de término inválida' }),
    (0, swagger_1.ApiProperty)({ description: 'Data de término da pausa' }),
    __metadata("design:type", Date)
], CreateOnlineDto.prototype, "end", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Duração inválida' }),
    (0, swagger_1.ApiProperty)({ description: 'Duração da pausa' }),
    __metadata("design:type", Number)
], CreateOnlineDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'ID do agente inválido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O ID do agente não pode estar vazio' }),
    (0, swagger_1.ApiProperty)({ description: 'ID do agente associado à pausa' }),
    __metadata("design:type", String)
], CreateOnlineDto.prototype, "agentId", void 0);
//# sourceMappingURL=create-online.dto.js.map