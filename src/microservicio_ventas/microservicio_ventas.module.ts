import { Module } from '@nestjs/common';
import { MicroservicioVentasService } from './microservicio_ventas.service';
import { MicroservicioVentasController } from './microservicio_ventas.controller';

@Module({
  controllers: [MicroservicioVentasController],
  providers: [MicroservicioVentasService],
})
export class MicroservicioVentasModule {}
