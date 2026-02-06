import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.enableCors({
        origin: [
            'https://fronted-usuario.vercel.app',
            'https://fronted_empleado.vercel.app'
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true
    });
    await app.listen(3000);
}
bootstrap();
