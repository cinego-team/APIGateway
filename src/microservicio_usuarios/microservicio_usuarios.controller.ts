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

@UseGuards(AuthGuard)
@Controller('microservicio-usuarios')
export class MicroservicioUsuariosController {
    constructor(
        private service: MicroservicioUsuariosService,
        private captchaService: CaptchaService,
    ) {}

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
    @Get('datos-empleado/:id')
    getDatosEmpleadoById(@Param('id') id: number) {
        return this.service.getDatosEmpleadoById(id);
    }

    @Get('tipo-cliente/validar-existencia-tipoCliente/:id')
    verificarExistenciaTipoClienteById(@Param('id') id: number) {
        return this.service.verificarExistenciaTipoClienteById(id);
    }
    @Get('find-by-email/:email')
    findByEmail(@Param('email') email: string) {
        return this.service.findByEmail(email);
    }
    @Get('tipo-cliente/admin/:id')
    getTipoClienteById(@Param('id') id: number) {
        return this.service.getTipoClienteById(id);
    }
    @Get('tipo-cliente/admin/all')
    getAllTipoClientes() {
        return this.service.getAllTipoClientes();
    }
    @Delete('tipo-cliente/admin/:id')
    deleteTipoCliente(@Param('id') id: number) {
        return this.service.deleteTipoCliente(id);
    }
    @Post('tipo-cliente/admin/new')
    createTipoCliente(@Body() createTipoClienteDto: any) {
        return this.service.createTipoCliente(createTipoClienteDto);
    }
    @Put('tipo-cliente/admin/:id')
    updateTipoCliente(
        @Param('id') id: number,
        @Body() updateTipoClienteDto: any,
    ) {
        return this.service.updateTipoCliente(id, updateTipoClienteDto);
    }
    @Post('roles/create')
    createRoles(@Body('name') name: string) {
        return this.service.createRoles(name);
    }
    @Get('roles/admin/all')
    getAllRoles() {
        return this.service.getAllRoles();
    }
    @Post('permissions/admin/create')
    createPermissions(@Body('code') code: string) {
        return this.service.createPermissions(code);
    }
    @Get('permissions/admin/all')
    getAllPermissions() {
        return this.service.getAllPermissions();
    }
}
