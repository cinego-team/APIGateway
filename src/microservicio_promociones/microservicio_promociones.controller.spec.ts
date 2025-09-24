import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioPromocionesController } from './microservicio_promociones.controller';
import { MicroservicioPromocionesService } from './microservicio_promociones.service';

describe('MicroservicioPromocionesController', () => {
  let controller: MicroservicioPromocionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroservicioPromocionesController],
      providers: [MicroservicioPromocionesService],
    }).compile();

    controller = module.get<MicroservicioPromocionesController>(MicroservicioPromocionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
