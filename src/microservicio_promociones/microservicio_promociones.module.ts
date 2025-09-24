import { Module } from '@nestjs/common';
import { MicroservicioPromocionesService } from './microservicio_promociones.service';
import { MicroservicioPromocionesController } from './microservicio_promociones.controller';

@Module({
  controllers: [MicroservicioPromocionesController],
  providers: [MicroservicioPromocionesService],
})
export class MicroservicioPromocionesModule {}
