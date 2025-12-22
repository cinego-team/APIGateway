import { Module } from '@nestjs/common';
import { MicroservicioUsuariosService } from './microservicio_usuarios.service';
import { MicroservicioUsuariosController } from './microservicio_usuarios.controller';
import { CaptchaService } from 'src/services/captcha_service/captcha-service';
import { JwtModule } from 'src/services/jwt_service/jwt.module';

@Module({
    controllers: [MicroservicioUsuariosController],
    providers: [MicroservicioUsuariosService, CaptchaService],
    exports: [MicroservicioUsuariosService],
    imports: [JwtModule]
})
export class MicroservicioUsuariosModule { }
