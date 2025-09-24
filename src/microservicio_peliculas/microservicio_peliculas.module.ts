import { Module } from '@nestjs/common';
import { MicroservicioPeliculasService } from './microservicio_peliculas.service';
import { MicroservicioPeliculasController } from './microservicio_peliculas.controller';

@Module({
  controllers: [MicroservicioPeliculasController],
  providers: [MicroservicioPeliculasService],
})
export class MicroservicioPeliculasModule {}
