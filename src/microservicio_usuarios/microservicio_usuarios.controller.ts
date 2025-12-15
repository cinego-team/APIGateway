import { Body, Controller, Get, Param, Post, Req, Headers, UseGuards } from '@nestjs/common';
import { MicroservicioUsuariosService } from './microservicio_usuarios.service';
import { Request } from 'express';
import { CaptchaService } from 'src/captcha_service/captcha-service';
import { RequestWithUser } from './request-with-user.interface';
import { AuthGuard } from 'src/middleware/auth.middleware';

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
    refreshToken(@Headers('refresh-token') refresh_token: string) {
        return this.service.refreshToken(refresh_token);
    }

    @UseGuards(AuthGuard)
    @Get('datos-cliente')
    getDatosClienteById(
        @Headers('authorization') access_token: string,
        @Headers('refresh-token') refresh_token: string
    ) {
        return this.service.getDatosClienteById(access_token, refresh_token);
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
