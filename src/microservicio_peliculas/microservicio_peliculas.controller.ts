import { Controller, Get, Param } from '@nestjs/common';
import { MicroservicioPeliculasService } from './microservicio_peliculas.service';

@Controller('microservicio-peliculas')
export class MicroservicioPeliculasController {
    constructor(
        private readonly microservicioPeliculasService: MicroservicioPeliculasService,
    ) {}

    @Get('pelicula/:id')
    getPeliculaById(@Param('id') id: number) {
        return this.microservicioPeliculasService.getPeliculaById(id);
    }
}
