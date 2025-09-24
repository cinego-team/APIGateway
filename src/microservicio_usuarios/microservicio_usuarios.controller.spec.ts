import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioUsuariosController } from './microservicio_usuarios.controller';
import { MicroservicioUsuariosService } from './microservicio_usuarios.service';

describe('MicroservicioUsuariosController', () => {
  let controller: MicroservicioUsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroservicioUsuariosController],
      providers: [MicroservicioUsuariosService],
    }).compile();

    controller = module.get<MicroservicioUsuariosController>(MicroservicioUsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
