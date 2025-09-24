import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioVentasService } from './microservicio_ventas.service';

describe('MicroservicioVentasService', () => {
  let service: MicroservicioVentasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroservicioVentasService],
    }).compile();

    service = module.get<MicroservicioVentasService>(MicroservicioVentasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
