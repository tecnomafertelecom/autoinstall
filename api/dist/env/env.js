"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    DATABASE_URL: zod_1.z.string().url(),
    AMI_PORT: zod_1.z.string(),
    AMI_HOST: zod_1.z.string(),
    AMI_USERNAME: zod_1.z.string(),
    AMI_PASSWORD: zod_1.z.string(),
    JWT_PRIVATE_KEY: zod_1.z.string(),
    JWT_PUBLIC_KEY: zod_1.z.string(),
    PORT: zod_1.z.coerce.number().optional().default(3333),
});
//# sourceMappingURL=env.js.map