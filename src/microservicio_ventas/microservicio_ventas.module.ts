import { Module } from '@nestjs/common';
import { MicroservicioVentasService } from './microservicio_ventas.service';
import { MicroservicioVentasController } from './microservicio_ventas.controller';
import { JwtModule } from 'src/services/jwt_service/jwt.module';
import { MicroservicioUsuariosModule } from 'src/microservicio_usuarios/microservicio_usuarios.module';

@Module({
    controllers: [MicroservicioVentasController],
    providers: [MicroservicioVentasService],
    imports: [JwtModule, MicroservicioUsuariosModule]
})
export class MicroservicioVentasModule { }
