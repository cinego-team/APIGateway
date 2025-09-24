import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioPromocionesService } from './microservicio_promociones.service';

describe('MicroservicioPromocionesService', () => {
  let service: MicroservicioPromocionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroservicioPromocionesService],
    }).compile();

    service = module.get<MicroservicioPromocionesService>(MicroservicioPromocionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
