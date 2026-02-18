import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: [
            `http://localhost:${process.env.PUERTO_FRONTEND_USUARIO}`,
            `http://localhost:${process.env.PUERTO_FRONTEND_EMPLEADO}`,
        ],
        credentials: true
    });
    await app.listen(process.env.PUERTO_APIGATEWAY!);
}
bootstrap();
