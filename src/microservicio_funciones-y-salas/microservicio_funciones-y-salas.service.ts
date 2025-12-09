import { HttpException, Injectable } from '@nestjs/common';
import { axiosServicioFunciones } from 'src/axios_service/axios.client';
import { config } from 'src/axios_service/env';

@Injectable()
export class MicroservicioFuncionesYSalasService {
    async findAllByPeliculaId(peliculaId: number) {
        try {
            return await axiosServicioFunciones.get(
                config.MSFuncionesUrls.getFuncionesByPeliculaId(peliculaId),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async findAllDisponibilidadByFuncionId(funcionId: number) {
        try {
            return await axiosServicioFunciones.get(
                config.MSFuncionesUrls.getDisponibilidadByFuncionId(funcionId),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getFuncionById(id: number) {
        try {
            return await axiosServicioFunciones.get(
                config.MSFuncionesUrls.getFuncionById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
