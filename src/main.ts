import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: [
            'https://fronted-usuario.vercel.app',
            'https://fronted_empleado.vercel.app'
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedheaders: 'Content-Type, Authorization',
        credentials: true
    });
    app.use((req, res, next) => {
        if (req.method === 'OPTIONS') {
            return res.sendStatus(204);
        }
        next();
    });
    await app.listen(3000);
}
bootstrap();
