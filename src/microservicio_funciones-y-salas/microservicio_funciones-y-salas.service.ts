import { HttpException, Injectable } from '@nestjs/common';
import { axiosServicioFunciones } from 'src/services/axios_service/axios.client';
import { config } from 'src/services/axios_service/env';

@Injectable()
export class MicroservicioFuncionesYSalasService {
    async findAllByPeliculaId(peliculaId: number, access_token: string, refresh_token: string) {
        try {
            const response = await axiosServicioFunciones.get(
                config.MSFuncionesUrls.getFuncionesByPeliculaId(peliculaId),
                {
                    headers: {
                        Authorization: access_token || "",
                        "refresh-token": refresh_token || ""
                    }
                }
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async findAllDisponibilidadByFuncionId(funcionId: number) {
        try {
            const response = await axiosServicioFunciones.get(
                config.MSFuncionesUrls.getDisponibilidadByFuncionId(funcionId),
            );
            return response.data;
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
