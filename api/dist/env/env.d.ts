import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    DATABASE_URL: z.ZodString;
    AMI_PORT: z.ZodString;
    AMI_HOST: z.ZodString;
    AMI_USERNAME: z.ZodString;
    AMI_PASSWORD: z.ZodString;
    JWT_PRIVATE_KEY: z.ZodString;
    JWT_PUBLIC_KEY: z.ZodString;
    PORT: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    DATABASE_URL?: string;
    AMI_PORT?: string;
    AMI_HOST?: string;
    AMI_USERNAME?: string;
    AMI_PASSWORD?: string;
    JWT_PRIVATE_KEY?: string;
    JWT_PUBLIC_KEY?: string;
    PORT?: number;
}, {
    DATABASE_URL?: string;
    AMI_PORT?: string;
    AMI_HOST?: string;
    AMI_USERNAME?: string;
    AMI_PASSWORD?: string;
    JWT_PRIVATE_KEY?: string;
    JWT_PUBLIC_KEY?: string;
    PORT?: number;
}>;
export type Env = z.infer<typeof envSchema>;
