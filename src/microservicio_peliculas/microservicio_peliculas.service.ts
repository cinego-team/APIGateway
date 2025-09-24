import { HttpException, Injectable } from '@nestjs/common';
import { axiosServicioPeliculas } from 'src/axios_service/axios.client';
import { config } from 'src/axios_service/env';

@Injectable()
export class MicroservicioPeliculasService {
    async getPeliculaById(id: number) {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getPeliculaById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
