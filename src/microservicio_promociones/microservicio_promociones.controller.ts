import { Controller } from '@nestjs/common';
import { MicroservicioPromocionesService } from './microservicio_promociones.service';

@Controller('microservicio-promociones')
export class MicroservicioPromocionesController {
  constructor(private readonly microservicioPromocionesService: MicroservicioPromocionesService) {}
}
