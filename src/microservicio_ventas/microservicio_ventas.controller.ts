import { Controller } from '@nestjs/common';
import { MicroservicioVentasService } from './microservicio_ventas.service';

@Controller('microservicio-ventas')
export class MicroservicioVentasController {
  constructor(private readonly microservicioVentasService: MicroservicioVentasService) {}
}
