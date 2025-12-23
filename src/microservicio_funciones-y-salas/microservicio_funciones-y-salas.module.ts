import { Module } from '@nestjs/common';
import { MicroservicioFuncionesYSalasService } from './microservicio_funciones-y-salas.service';
import { MicroservicioFuncionesYSalasController } from './microservicio_funciones-y-salas.controller';
import { JwtModule } from 'src/services/jwt_service/jwt.module';
import { MicroservicioUsuariosModule } from 'src/microservicio_usuarios/microservicio_usuarios.module';

@Module({
    controllers: [MicroservicioFuncionesYSalasController],
    providers: [MicroservicioFuncionesYSalasService],
    imports: [JwtModule, MicroservicioUsuariosModule]
})
export class MicroservicioFuncionesYSalasModule { }
