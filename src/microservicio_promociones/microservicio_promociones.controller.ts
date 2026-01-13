import {
    Controller,
    Get,
    Param,
    Post,
    Put,
    Body,
    Delete,
    UseGuards,
    Req,
} from '@nestjs/common';
import { MicroservicioPromocionesService } from './microservicio_promociones.service';
import { AuthGuard } from 'src/middleware/auth.middleware';
import { Permissions } from 'src/middleware/decorators/permissions.decorator';

@UseGuards(AuthGuard)
@Controller('microservicio-promociones')
export class MicroservicioPromocionesController {
    constructor(private readonly service: MicroservicioPromocionesService) {}
    @Permissions('EMPLEADO')
    @Get('promocion/admin/all')
    getAllPromociones() {
        return this.service.getAllPromociones();
    }
    @Permissions('EMPLEADO')
    @Get('promocion/admin/:id')
    getPromocionById(@Param('id') id: number) {
        return this.service.getPromocionById(id);
    }
    @Permissions('EMPLEADO')
    @Post('promocion/admin/new')
    registrarPromocion(@Body() promocionBody) {
        return this.service.registrarPromocion(promocionBody);
    }
    @Permissions('EMPLEADO')
    @Put('promocion/admin/:id')
    actualizarPromocion(@Param('id') id: number, @Body() promocionBody) {
        return this.service.actualizarPromocion(id, promocionBody);
    }
    @Permissions('EMPLEADO')
    @Delete('promocion/admin/:id')
    eliminarPromocion(@Param('id') id: number) {
        return this.service.eliminarPromocion(id);
    }
    @Permissions('EMPLEADO')
    @Post('dia/admin/new')
    registrarDia(@Body() diaBody) {
        return this.service.registrarDia(diaBody);
    }
    @Permissions('EMPLEADO')
    @Put('dia/admin/:id')
    actualizarDia(@Param('id') id: number, @Body() diaBody) {
        return this.service.actualizarDia(id, diaBody);
    }
    @Permissions('EMPLEADO')
    @Get('dia/admin/all')
    getAllDias() {
        return this.service.getAllDias();
    }
    @Permissions('EMPLEADO')
    @Get('dia/admin/:id')
    getDiaById(@Param('id') id: number) {
        return this.service.getDiaById(id);
    }
    @Permissions('EMPLEADO')
    @Delete('dia/admin/:id')
    eliminarDia(@Param('id') id: number) {
        return this.service.eliminarDia(id);
    }
    @Get('promocion/verificar-promocion')
    verificarPromocion(@Req() req) {
        return this.service.verificarPromocionById(req.user.id);
    }
}
