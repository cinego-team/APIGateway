import { Module } from '@nestjs/common';
import { MicroservicioPromocionesService } from './microservicio_promociones.service';
import { MicroservicioPromocionesController } from './microservicio_promociones.controller';
import { JwtModule } from 'src/services/jwt_service/jwt.module';
import { MicroservicioUsuariosModule } from 'src/microservicio_usuarios/microservicio_usuarios.module';

@Module({
    controllers: [MicroservicioPromocionesController],
    providers: [MicroservicioPromocionesService],
    imports: [JwtModule, MicroservicioUsuariosModule]
})
export class MicroservicioPromocionesModule { }
