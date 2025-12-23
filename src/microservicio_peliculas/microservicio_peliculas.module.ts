import { Module } from '@nestjs/common';
import { MicroservicioPeliculasService } from './microservicio_peliculas.service';
import { MicroservicioPeliculasController } from './microservicio_peliculas.controller';
import { JwtModule } from 'src/services/jwt_service/jwt.module';
import { MicroservicioUsuariosModule } from 'src/microservicio_usuarios/microservicio_usuarios.module';

@Module({
    controllers: [MicroservicioPeliculasController],
    providers: [MicroservicioPeliculasService],
    imports: [JwtModule, MicroservicioUsuariosModule]
})
export class MicroservicioPeliculasModule { }
