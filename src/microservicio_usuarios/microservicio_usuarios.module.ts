import { Module } from '@nestjs/common';
import { MicroservicioUsuariosService } from './microservicio_usuarios.service';
import { MicroservicioUsuariosController } from './microservicio_usuarios.controller';

@Module({
  controllers: [MicroservicioUsuariosController],
  providers: [MicroservicioUsuariosService],
})
export class MicroservicioUsuariosModule {}
