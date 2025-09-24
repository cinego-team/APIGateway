import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroservicioVentasModule } from './microservicio_ventas/microservicio_ventas.module';
import { MicroservicioPromocionesModule } from './microservicio_promociones/microservicio_promociones.module';
import { MicroservicioFuncionesYSalasModule } from './microservicio_funciones-y-salas/microservicio_funciones-y-salas.module';
import { MicroservicioPeliculasModule } from './microservicio_peliculas/microservicio_peliculas.module';
import { MicroservicioUsuariosModule } from './microservicio_usuarios/microservicio_usuarios.module';

@Module({
  imports: [MicroservicioVentasModule, MicroservicioPromocionesModule, MicroservicioFuncionesYSalasModule, MicroservicioPeliculasModule, MicroservicioUsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
