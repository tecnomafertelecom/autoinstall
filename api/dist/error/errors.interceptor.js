"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let ErrorsInterceptor = class ErrorsInterceptor {
    intercept(context, next) {
        return next
            .handle()
            .pipe((0, operators_1.catchError)((err) => {
            if (err?.response)
                throw new common_1.NotFoundException('Record not found.');
            const code = err?.code;
            const fieldName = (err.meta && 'cause' in err.meta) ? err.meta.cause : err?.meta?.target[0];
            console.log('Codigo do error:' + code);
            console.log("FildName: " + fieldName);
            switch (code) {
                case 'P2002':
                    throw new common_1.ConflictException(`A record with the data of the field ${fieldName} already exists.`);
                case 'P2025':
                    throw new common_1.NotFoundException('Record not found.');
                case 'P3001':
                    throw new common_1.BadRequestException('Migration possible with destructive changes and possible data loss.');
                case 'P3054':
                    throw new common_1.UnauthorizedException('Access denied.');
                case 'P1000':
                    throw new common_1.BadRequestException('Authentication failed against the database server.');
                case 'P1001':
                    throw new common_1.BadRequestException('Can\'t reach the database server.');
                case 'P1010':
                    throw new common_1.UnauthorizedException(`User ${fieldName} was denied access on the database.`);
                case 'P3000':
                    throw new common_1.BadGatewayException(`Failed to create the database: ${err.message}`);
                case 'P3005':
                    throw new common_1.BadRequestException('The database schema is not empty.');
                case 'P5002':
                    throw new common_1.BadRequestException('The datasource provided is invalid.');
                case 'P5003':
                    throw new common_1.NotFoundException('Requested resource does not exist.');
                case 'P6001':
                    throw new common_1.BadRequestException('The URL is malformed.');
                case 'P6003':
                    throw new common_1.BadRequestException('Plan limit reached.');
                default:
                    throw new common_1.BadGatewayException();
            }
        }));
    }
};
exports.ErrorsInterceptor = ErrorsInterceptor;
exports.ErrorsInterceptor = ErrorsInterceptor = __decorate([
    (0, common_1.Injectable)()
], ErrorsInterceptor);
//# sourceMappingURL=errors.interceptor.js.map