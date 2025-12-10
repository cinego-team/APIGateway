import {
    Controller,
    Get,
    Param,
    Post,
    Put,
    Body,
    Delete,
} from '@nestjs/common';
import { MicroservicioPromocionesService } from './microservicio_promociones.service';

@Controller('microservicio-promociones')
export class MicroservicioPromocionesController {
    constructor(private readonly service: MicroservicioPromocionesService) {}
    @Get('promociones')
    getAllPromociones() {
        return this.service.getAllPromociones();
    }

    @Get('promocion/:id')
    getPromocionById(@Param('id') id: number) {
        return this.service.getPromocionById(id);
    }

    @Post('promocion/new')
    registrarPromocion(@Body() promocionBody) {
        return this.service.registrarPromocion(promocionBody);
    }

    @Put('promocion/:id')
    actualizarPromocion(@Param('id') id: number, @Body() promocionBody) {
        return this.service.actualizarPromocion(id, promocionBody);
    }

    @Delete('promocion/:id')
    eliminarPromocion(@Param('id') id: number) {
        return this.service.eliminarPromocion(id);
    }
    @Post('dia/new')
    registrarDia(@Body() diaBody) {
        return this.service.registrarDia(diaBody);
    }

    @Put('dia/:id')
    actualizarDia(@Param('id') id: number, @Body() diaBody) {
        return this.service.actualizarDia(id, diaBody);
    }

    @Get('dias')
    getAllDias() {
        return this.service.getAllDias();
    }

    @Get('dia/:id')
    getDiaById(@Param('id') id: number) {
        return this.service.getDiaById(id);
    }

    @Delete('dia/:id')
    eliminarDia(@Param('id') id: number) {
        return this.service.eliminarDia(id);
    }
    @Get('promocion/verificar-promocion/:id')
    verificarPromocionById(@Param('id') id: number) {
        return this.service.verificarPromocionById(id);
    }
}
