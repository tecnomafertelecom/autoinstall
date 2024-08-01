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
exports.updateDashboardVelocityDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_velocity_dto_1 = require("./create-velocity.dto");
class updateDashboardVelocityDTO extends (0, swagger_1.PartialType)(create_velocity_dto_1.DashboardVelocityDTO) {
}
exports.updateDashboardVelocityDTO = updateDashboardVelocityDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'Título ou nome associado ao valor da velocidade',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateDashboardVelocityDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'Valor numérico da velocidade' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], updateDashboardVelocityDTO.prototype, "value", void 0);
//# sourceMappingURL=update-velocity.dto.js.map