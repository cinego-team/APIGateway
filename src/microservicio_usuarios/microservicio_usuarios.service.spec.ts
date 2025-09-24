import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioUsuariosService } from './microservicio_usuarios.service';

describe('MicroservicioUsuariosService', () => {
  let service: MicroservicioUsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroservicioUsuariosService],
    }).compile();

    service = module.get<MicroservicioUsuariosService>(MicroservicioUsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
