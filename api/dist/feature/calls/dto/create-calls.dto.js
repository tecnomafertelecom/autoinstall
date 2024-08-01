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
exports.CallsDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CallsDTO {
}
exports.CallsDTO = CallsDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'id deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'id não pode ser vazio' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O ID do agente não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'O ID do agente deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "agentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'linkedId não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'linkedId deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "linkedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'source deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'status deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'destination deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'extensionAnswered deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "extensionAnswered", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'recording deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "recording", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'startDate deve ser uma data válida' }),
    __metadata("design:type", Date)
], CallsDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'answeredDate deve ser uma data válida' }),
    __metadata("design:type", Date)
], CallsDTO.prototype, "answeredDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'endDate deve ser uma data válida' }),
    __metadata("design:type", Date)
], CallsDTO.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'realDirection deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "realDirection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'direction deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "direction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'queue deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "queue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'hangupNum deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "hangupNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'hangupCause deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "hangupCause", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)({ message: 'feedback deve ser um valor booleano' }),
    __metadata("design:type", Boolean)
], CallsDTO.prototype, "feedback", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'tratativa deve ser uma string' }),
    __metadata("design:type", String)
], CallsDTO.prototype, "tratativa", void 0);
//# sourceMappingURL=create-calls.dto.js.map