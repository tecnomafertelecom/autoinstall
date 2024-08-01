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
exports.CreateAgentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAgentDto {
}
exports.CreateAgentDto = CreateAgentDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'O nome não é válido' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'O e-mail não é válido' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A extensão não pode ser vazia' }),
    (0, class_validator_1.IsInt)({ message: 'A extensão deve ser um número inteiro' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateAgentDto.prototype, "extension", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O caminho da foto não é válido' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O login não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'O login não é válido' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "login", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A senha não pode ser vazia' }),
    (0, class_validator_1.IsString)({ message: 'A senha não é válida' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O token não é válido' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O refresh token não é válido' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "refreshToken", void 0);
//# sourceMappingURL=create-agent.dto.js.map