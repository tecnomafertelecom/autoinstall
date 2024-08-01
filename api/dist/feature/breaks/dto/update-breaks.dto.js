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
exports.UpdateBreaksDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_breaks_dto_1 = require("./create-breaks.dto");
class UpdateBreaksDto extends (0, swagger_1.PartialType)(create_breaks_dto_1.BreaksDto) {
}
exports.UpdateBreaksDto = UpdateBreaksDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Nova razão para a pausa (opcional)' }),
    __metadata("design:type", String)
], UpdateBreaksDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({
        description: 'Novo tempo de pausa em segundos (opcional)',
        minimum: 0,
    }),
    __metadata("design:type", Number)
], UpdateBreaksDto.prototype, "time", void 0);
//# sourceMappingURL=update-breaks.dto.js.map