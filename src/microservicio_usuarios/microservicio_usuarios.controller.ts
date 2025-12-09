import { Body, Controller, Get, Param, Post, Req, Headers } from '@nestjs/common';
import { MicroservicioUsuariosService } from './microservicio_usuarios.service';
import { Request } from 'express';
import { CaptchaService } from 'src/captcha_service/captcha-service';

//AÑADIR GUARD!!!
@Controller('microservicio-usuarios')
export class MicroservicioUsuariosController {
    constructor(
        private service: MicroservicioUsuariosService,
        private captchaService: CaptchaService
    ) { }

    @Post('usuario/login')
    async login(
        @Body() loginBody,
        @Headers('x-captcha-token') captchaToken: string,
        @Headers('authorization') access_token: string,
        @Headers('refresh-token') refresh_token: string
    ) {
        await this.captchaService.validateCaptcha(captchaToken);
        return this.service.login(loginBody, access_token, refresh_token);
    }

    @Post('usuario/register')
    async register(@Body() registerBody,
        @Headers('x-captcha-token') captchaToken: string,
        @Headers('authorization') access_token: string,
        @Headers('refresh-token') refresh_token: string
    ) {
        await this.captchaService.validateCaptcha(captchaToken);
        return this.service.register(registerBody, access_token, refresh_token);
    }

    @Post('register/empleado')
    registerEmpleado(@Body() registerBody) {
        return this.service.registerEmpleado(registerBody);
    }

    @Get('refresh-token')
    refreshToken(@Req() request: Request) {
        return this.service.refreshToken(
            request.headers['refresh-token'] as string,
        );
    }

    @Get('datos-cliente/:id')
    getDatosClienteById(@Param('id') id: number) {
        return this.service.getDatosClienteById(id);
    }

    @Get('datos-empleado/:id')
    getDatosEmpleadoById(@Param('id') id: number) {
        return this.service.getDatosEmpleadoById(id);
    }

    @Get('validar-existencia-tipoCliente/:id')
    verificarExistenciaTipoClienteById(@Param('id') id: number) {
        return this.service.verificarExistenciaTipoClienteById(id);
    }
}
