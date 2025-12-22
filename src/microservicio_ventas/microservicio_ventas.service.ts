import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { axiosServicioVentas } from 'src/services/axios_service/axios.client';
import { config } from 'src/services/axios_service/env';

@Injectable()
export class MicroservicioVentasService {
    async iniciarProcesoPago(idDisponibilidades: number[]) {
        try {
            const response = await axiosServicioVentas.post(
                config.MSVentasUrls.iniciarProcesoPago,
                { body: { idDisponibilidades } },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
