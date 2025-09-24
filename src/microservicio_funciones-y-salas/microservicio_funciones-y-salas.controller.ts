import { Controller } from '@nestjs/common';
import { MicroservicioFuncionesYSalasService } from './microservicio_funciones-y-salas.service';

@Controller('microservicio-funciones-y-salas')
export class MicroservicioFuncionesYSalasController {
  constructor(private readonly microservicioFuncionesYSalasService: MicroservicioFuncionesYSalasService) {}
}
