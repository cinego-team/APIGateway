import { Controller, Get, Param } from '@nestjs/common';
import { MicroservicioFuncionesYSalasService } from './microservicio_funciones-y-salas.service';

@Controller('microservicio-funciones-y-salas')
export class MicroservicioFuncionesYSalasController {
    constructor(private service: MicroservicioFuncionesYSalasService) {}
    @Get('funciones-por-pelicula/:id')
    findAllByPeliculaId(@Param('id') id: number) {
        return this.service.findAllByPeliculaId(id);
    }
    @Get('butaca-por-funcion/:id')
    findAllDisponibilidadByFuncionId(@Param('id') id: number) {
        return this.service.findAllDisponibilidadByFuncionId(id);
    }
}
