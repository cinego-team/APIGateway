import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioVentasController } from './microservicio_ventas.controller';
import { MicroservicioVentasService } from './microservicio_ventas.service';

describe('MicroservicioVentasController', () => {
  let controller: MicroservicioVentasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroservicioVentasController],
      providers: [MicroservicioVentasService],
    }).compile();

    controller = module.get<MicroservicioVentasController>(MicroservicioVentasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
