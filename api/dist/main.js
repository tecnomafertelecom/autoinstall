"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const env_service_1 = require("./env/env.service");
const http_exception_filter_1 = require("./error/http-exception.filter");
const errors_interceptor_1 = require("./error/errors.interceptor");
const swagger_1 = require("@nestjs/swagger");
const sync_agents_1 = require("./core/syncOnStart/sync_agents");
const sync_trunks_1 = require("./core/syncOnStart/sync_trunks");
const sync_breaks_1 = require("./core/syncOnStart/sync_breaks");
const fs = require("fs");
async function bootstrap() {
    try {
        const httpsOptions = {
            key: fs.readFileSync('/etc/pki/tls/private/localhost.key'),
            cert: fs.readFileSync('/etc/pki/tls/certs/localhost.crt'),
        };
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
        app.enableShutdownHooks();
        const configService = app.get(env_service_1.EnvService);
        const port = configService.get('PORT');
        app.enableCors({
            origin: '*',
            methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
            credentials: true,
            preflightContinue: false,
            optionsSuccessStatus: 204,
        });
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Tecnomafer')
            .setDescription('API documentation')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
        app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
        app.useGlobalInterceptors(new errors_interceptor_1.ErrorsInterceptor());
        await app.listen(port);
        (0, sync_agents_1.SyncAgents)();
        (0, sync_trunks_1.SyncTrunks)();
        (0, sync_breaks_1.SyncBreaks)();
        console.log('Chamou SyncAgents');
        console.log(`Server running on port ${port}`);
    }
    catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map