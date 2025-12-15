import { Controller, Get, Headers, Param } from '@nestjs/common';
import { MicroservicioFuncionesYSalasService } from './microservicio_funciones-y-salas.service';

@Controller('microservicio-funciones-y-salas')
export class MicroservicioFuncionesYSalasController {
    constructor(private service: MicroservicioFuncionesYSalasService) { }
    @Get('funciones-por-pelicula/:id')
    findAllByPeliculaId(
        @Param('id') id: number,
        @Headers('authorization') access_token: string,
        @Headers('refresh-roken') refresh_token: string) {
        return this.service.findAllByPeliculaId(id, access_token, refresh_token);
    }
    @Get('butaca-por-funcion/:id')
    findAllDisponibilidadByFuncionId(@Param('id') id: number) {
        return this.service.findAllDisponibilidadByFuncionId(id);
    }

    @Get('funcion/:id')
    getFuncionById(@Param('id') id: number) {
        return this.service.getFuncionById(id);
    }
}
