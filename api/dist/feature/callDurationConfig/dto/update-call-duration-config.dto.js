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
exports.updateCallDurationConfigDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_call_duration_config_dto_1 = require("./create-call-duration-config.dto");
class updateCallDurationConfigDto extends (0, swagger_1.PartialType)(create_call_duration_config_dto_1.CallDurationConfigDto) {
}
exports.updateCallDurationConfigDto = updateCallDurationConfigDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ description: 'Limite de duração em segundos', minimum: 0 }),
    __metadata("design:type", Number)
], updateCallDurationConfigDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'Tipo de limite', example: 'Tipo de chamada' }),
    __metadata("design:type", String)
], updateCallDurationConfigDto.prototype, "limitForType", void 0);
//# sourceMappingURL=update-call-duration-config.dto.js.map