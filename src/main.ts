import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: [
            'http://localhost:4200',
            'http://localhost:4201',
            'https://increasingly-thomas-subsidiaries-benefit.trycloudflare.com' //link solo valido para pc rama
        ],
        credentials: true
    });
    await app.listen(Number(process.env.PUERTO_APIGATEWAY));
}
bootstrap();
