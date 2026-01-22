import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Req,
    Headers,
    UseGuards,
    Put,
    Delete,
} from '@nestjs/common';
import { MicroservicioUsuariosService } from './microservicio_usuarios.service';
import { CaptchaService } from 'src/services/captcha_service/captcha-service';
import { AuthGuard } from 'src/middleware/auth.middleware';
import { Permissions } from 'src/middleware/decorators/permissions.decorator';

@Controller('microservicio-usuarios')
export class MicroservicioUsuariosController {
    constructor(
        private service: MicroservicioUsuariosService,
        private captchaService: CaptchaService,
    ) { }

    @Post('usuario/login')
    async login(
        @Body() loginBody,
        @Headers('x-captcha-token') captchaToken: string,
        @Headers('authorization') access_token: string,
        @Headers('refresh-token') refresh_token: string,
    ) {
        await this.captchaService.validateCaptcha(captchaToken);
        return this.service.login(loginBody, access_token, refresh_token);
    }

    @Post('usuario/register')
    async register(
        @Body() registerBody,
        @Headers('x-captcha-token') captchaToken: string,
        @Headers('authorization') access_token: string,
        @Headers('refresh-token') refresh_token: string,
    ) {
        await this.captchaService.validateCaptcha(captchaToken);
        return this.service.register(registerBody, access_token, refresh_token);
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Post('usaurio/register/empleado')
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
        @Headers('refresh-token') refresh_token: string,
    ) {
        return this.service.getDatosClienteById(access_token, refresh_token);
    }
    //admin
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('datos-empleado')
    getDatosEmpleadoById(
        @Headers('authorization') access_token: string,
        @Headers('refresh-token') refresh_token: string,
    ) {
        return this.service.getDatosEmpleadoById(access_token, refresh_token);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('tipo-cliente/validar-existencia-tipoCliente/:id')
    verificarExistenciaTipoClienteById(@Param('id') id: number) {
        return this.service.verificarExistenciaTipoClienteById(id);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('find-by-email/:email')
    findByEmail(@Param('email') email: string) {
        return this.service.findByEmail(email);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('tipo-cliente/admin/all')
    getAllTipoClientes() {
        return this.service.getAllTipoClientes();
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('tipo-cliente/admin/:id')
    getTipoClienteById(@Param('id') id: number) {
        return this.service.getTipoClienteById(id);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Delete('tipo-cliente/admin/:id')
    deleteTipoCliente(@Param('id') id: number) {
        return this.service.deleteTipoCliente(id);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Post('tipo-cliente/admin/new')
    createTipoCliente(@Body() createTipoClienteDto: any) {
        return this.service.createTipoCliente(createTipoClienteDto);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Put('tipo-cliente/admin/:id')
    updateTipoCliente(
        @Param('id') id: number,
        @Body() updateTipoClienteDto: any,
    ) {
        return this.service.updateTipoCliente(id, updateTipoClienteDto);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Post('roles/create')
    createRoles(@Body('name') name: string) {
        return this.service.createRoles(name);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('roles/admin/all')
    getAllRoles() {
        return this.service.getAllRoles();
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Post('permissions/admin/create')
    createPermissions(@Body('code') code: string) {
        return this.service.createPermissions(code);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('permissions/admin/all')
    getAllPermissions() {
        return this.service.getAllPermissions();
    }
}
