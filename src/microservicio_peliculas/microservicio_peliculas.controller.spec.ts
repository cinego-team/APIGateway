import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioPeliculasController } from './microservicio_peliculas.controller';
import { MicroservicioPeliculasService } from './microservicio_peliculas.service';

describe('MicroservicioPeliculasController', () => {
  let controller: MicroservicioPeliculasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroservicioPeliculasController],
      providers: [MicroservicioPeliculasService],
    }).compile();

    controller = module.get<MicroservicioPeliculasController>(MicroservicioPeliculasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
