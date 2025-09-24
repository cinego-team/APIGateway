import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicioPeliculasService } from './microservicio_peliculas.service';

describe('MicroservicioPeliculasService', () => {
  let service: MicroservicioPeliculasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroservicioPeliculasService],
    }).compile();

    service = module.get<MicroservicioPeliculasService>(MicroservicioPeliculasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
