import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioFuncionesYSalasService } from './microservicio_funciones-y-salas.service';

describe('MicroservicioFuncionesYSalasService', () => {
  let service: MicroservicioFuncionesYSalasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroservicioFuncionesYSalasService],
    }).compile();

    service = module.get<MicroservicioFuncionesYSalasService>(MicroservicioFuncionesYSalasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
