import {
    Delete,
    Param,
    Body,
    Controller,
    Post,
    UseGuards,
    Get,
    Query,
    Req,
} from '@nestjs/common';
import { MicroservicioVentasService } from './microservicio_ventas.service';
import { AuthGuard } from 'src/middleware/auth.middleware';
import { DefaultValuePipe, ParseIntPipe } from '@nestjs/common/pipes';
import { Permissions } from 'src/middleware/decorators/permissions.decorator';

@UseGuards(AuthGuard)
@Controller('microservicio-ventas')
export class MicroservicioVentasController {
    constructor(private readonly service: MicroservicioVentasService) {}

    @Post('proceso-pago')
    iniciarProcesoPago(@Body() idDisponibilidades: number[]) {
        return this.service.iniciarProcesoPago(idDisponibilidades);
    }
    @Permissions('EMPLEADO')
    @Get('admin/reportes/horarios-mas-elegidos/actual')
    obtenerHorarioMasElegidoActual() {
        return this.service.getHorariosMasElegidos();
    }
    @Permissions('EMPLEADO')
    @Get('admin/reportes/entradas-por-dia-semana/actual')
    async getEntradasPorDiaSemanaMesActual() {
        return await this.service.getEntradasPorDiaSemanaMesActual();
    }
    @Permissions('EMPLEADO')
    @Get('admin/reportes/peliculas-rango-ventas/trimestral')
    getPeliculasPorRangoVentasTrimestral(
        @Query(
            'trimestre',
            new DefaultValuePipe(Math.ceil((new Date().getMonth() + 1) / 3)),
            ParseIntPipe,
        )
        trimestre: number,

        @Query(
            'anio',
            new DefaultValuePipe(new Date().getFullYear()),
            ParseIntPipe,
        )
        anio: number,
    ) {
        return this.service.getPeliculasPorRangoVentasTrimestral(
            trimestre,
            anio,
        );
    }

    @Permissions('EMPLEADO')
    @Get('venta/admin/all')
    findAllVentas() {
        return this.service.findAllVentas();
    }
    @Permissions('EMPLEADO')
    @Post('estado-venta/admin/new')
    crearEstadoVenta(@Body() dato: any) {
        return this.service.crearEstadoVenta(dato);
    }
    @Permissions('EMPLEADO')
    @Get('estado-venta/admin/all')
    findAllEstadoVenta() {
        return this.service.findAllEstadoVenta();
    }
    @Permissions('EMPLEADO')
    @Get('estado-venta/admin/:id')
    getEstadoVentaById(@Param('id') id: number) {
        return this.service.getEstadoVentaById(id);
    }
    @Permissions('EMPLEADO')
    @Delete('estado-venta/admin/:id')
    eliminarEstadoVenta(@Param('id') id: number) {
        return this.service.eliminarEstadoVenta(id);
    }
    @Post('entrada')
    crearEntradaPorDisponibilidadIds(@Body() ids: number[]) {
        return this.service.crearEntradaPorDisponibilidadIds(ids);
    }
    @Post('venta/abrir-venta')
    @Post('abrir-venta')
    abrirVenta(@Req() req, @Body() dato: any) {
        return this.service.abrirVenta(req.user, dato);
    }
    @Post('venta/cerrar-venta/:id')
    cerrarVenta(@Param('id') id: number, @Body() data: any) {
        return this.service.cerrarVenta(id, data);
    }
}
