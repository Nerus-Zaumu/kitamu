"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('KITAMU API')
        .setDescription('The documentation for the KITAMU API. It is valid for both web and mobile versions of the application')
        .setVersion('1.0')
        .addTag('KITAMU')
        .addServer('/api')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const PORT = configService.get('PORT') || 3000;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map