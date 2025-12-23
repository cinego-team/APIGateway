import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { MicroservicioVentasService } from './microservicio_ventas.service';
import { AuthGuard } from 'src/middleware/auth.middleware';

@UseGuards(AuthGuard)
@Controller('microservicio-ventas')
export class MicroservicioVentasController {
    constructor(private readonly service: MicroservicioVentasService) { }

    @Post('proceso-pago')
    iniciarProcesoPago(@Body() idDisponibilidades: number[]) {
        return this.service.iniciarProcesoPago(idDisponibilidades);
    }
}
