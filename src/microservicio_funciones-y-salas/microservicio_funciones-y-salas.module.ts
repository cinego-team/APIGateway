import { Module } from '@nestjs/common';
import { MicroservicioFuncionesYSalasService } from './microservicio_funciones-y-salas.service';
import { MicroservicioFuncionesYSalasController } from './microservicio_funciones-y-salas.controller';

@Module({
  controllers: [MicroservicioFuncionesYSalasController],
  providers: [MicroservicioFuncionesYSalasService],
})
export class MicroservicioFuncionesYSalasModule {}
