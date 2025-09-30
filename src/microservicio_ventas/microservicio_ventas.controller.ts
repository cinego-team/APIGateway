import { Body, Controller, Post } from '@nestjs/common';
import { MicroservicioVentasService } from './microservicio_ventas.service';

@Controller('microservicio-ventas')
export class MicroservicioVentasController {
    constructor(private readonly service: MicroservicioVentasService) {}

    @Post('proceso-pago')
    iniciarProcesoPago(@Body() idDisponibilidades: number[]) {
        return this.service.iniciarProcesoPago(idDisponibilidades);
    }
}
