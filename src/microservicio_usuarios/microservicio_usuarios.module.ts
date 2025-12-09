import { Module } from '@nestjs/common';
import { MicroservicioUsuariosService } from './microservicio_usuarios.service';
import { MicroservicioUsuariosController } from './microservicio_usuarios.controller';
import { CaptchaService } from 'src/captcha_service/captcha-service';

@Module({
    controllers: [MicroservicioUsuariosController],
    providers: [MicroservicioUsuariosService, CaptchaService],
})
export class MicroservicioUsuariosModule { }
