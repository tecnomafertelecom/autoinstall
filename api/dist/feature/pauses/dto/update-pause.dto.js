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
exports.UpdatePauseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pause_dto_1 = require("./create-pause.dto");
const class_validator_1 = require("class-validator");
const pause_reason_enum_1 = require("./enums/pause-reason.enum");
class UpdatePauseDto extends (0, swagger_1.PartialType)(create_pause_dto_1.CreatePauseDto) {
}
exports.UpdatePauseDto = UpdatePauseDto;
__decorate([
    (0, class_validator_1.IsEnum)(pause_reason_enum_1.PauseReason, { message: 'Motivo inválido' }),
    (0, class_validator_1.IsString)({ message: 'É necessário fornecer um motivo válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O motivo não pode estar vazio' }),
    (0, swagger_1.ApiProperty)({ description: 'Motivo da pausa' }),
    __metadata("design:type", String)
], UpdatePauseDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Data de início inválida' }),
    (0, swagger_1.ApiProperty)({ description: 'Data de início da pausa' }),
    __metadata("design:type", Date)
], UpdatePauseDto.prototype, "start", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Data de término inválida' }),
    (0, swagger_1.ApiProperty)({ description: 'Data de término da pausa' }),
    __metadata("design:type", Date)
], UpdatePauseDto.prototype, "end", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Duração inválida' }),
    (0, swagger_1.ApiProperty)({ description: 'Duração da pausa' }),
    __metadata("design:type", Number)
], UpdatePauseDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'ID do agente inválido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O ID do agente não pode estar vazio' }),
    (0, swagger_1.ApiProperty)({ description: 'ID do agente associado à pausa' }),
    __metadata("design:type", String)
], UpdatePauseDto.prototype, "agentId", void 0);
//# sourceMappingURL=update-pause.dto.js.map