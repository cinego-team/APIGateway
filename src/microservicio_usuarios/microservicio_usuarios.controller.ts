import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { MicroservicioUsuariosService } from './microservicio_usuarios.service';
import { Request } from 'express';

//AÑADIR GUARD!!!
@Controller('microservicio-usuarios')
export class MicroservicioUsuariosController {
    constructor(private service: MicroservicioUsuariosService) { }

    @Post('usuario/login')
    login(@Body() loginBody) {
        return this.service.login(loginBody);
    }

    @Post('usuario/register')
    register(@Body() registerBody) {
        return this.service.register(registerBody);
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
