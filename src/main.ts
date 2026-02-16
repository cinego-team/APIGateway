import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: [
            `https://localhost:${process.env.PUERTO_FRONTEND_USUARIO}`,
            `https://localhost:${process.env.PUERTO_FRONTEND_EMPLEADO}`,
        ],
        credentials: true
    });
    // app.use((req, res, next) => {
    //     if (req.method === 'OPTIONS') {
    //         return res.sendStatus(204);
    //     }
    //     next();
    // });
    await app.listen(process.env.PUERTO_APIGATEWAY!);
}
bootstrap();
