import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioFuncionesYSalasController } from './microservicio_funciones-y-salas.controller';
import { MicroservicioFuncionesYSalasService } from './microservicio_funciones-y-salas.service';

describe('MicroservicioFuncionesYSalasController', () => {
  let controller: MicroservicioFuncionesYSalasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroservicioFuncionesYSalasController],
      providers: [MicroservicioFuncionesYSalasService],
    }).compile();

    controller = module.get<MicroservicioFuncionesYSalasController>(MicroservicioFuncionesYSalasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
