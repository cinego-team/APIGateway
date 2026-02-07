import { Injectable, HttpException } from '@nestjs/common';
import { axiosServicioPromociones } from '../services/axios_service/axios.client';
import { config } from '../services/axios_service/env';

@Injectable()
export class MicroservicioPromocionesService {
    async getAllPromociones(token: string) {
        const response = await axiosServicioPromociones.get(
            config.MSPromocionesUrls.getAllPromociones,
            { headers: { Authorization: token } }
        );
        return response.data;
    }

    async getPromocionById(id: number) {
        try {
            const response = await axiosServicioPromociones.get(
                config.MSPromocionesUrls.getPromocionById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarPromocion(promocionBody: any, token: string) {
        try {
            const response = await axiosServicioPromociones.post(
                config.MSPromocionesUrls.registrarPromocion,
                promocionBody,
                { headers: { Authorization: token } }  // Agregar headers
            )
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarPromocion(id: number, promocionBody: any, token: string) {
        try {
            const response = await axiosServicioPromociones.put(
                config.MSPromocionesUrls.actualizarPromocionById(id),
                promocionBody,
                { headers: { Authorization: token } }
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarPromocion(id: number) {
        try {
            const response = await axiosServicioPromociones.delete(
                config.MSPromocionesUrls.deletePromocionById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async getAllDias() {
        try {
            const response = await axiosServicioPromociones.get(
                config.MSPromocionesUrls.getAllDias,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getDiaById(id: number) {
        try {
            const response = await axiosServicioPromociones.get(
                config.MSPromocionesUrls.getDiaById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarDia(diaBody: any) {
        try {
            const response = await axiosServicioPromociones.post(
                config.MSPromocionesUrls.registrarDia,
                { body: diaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarDia(id: number, diaBody: any) {
        try {
            const response = await axiosServicioPromociones.put(
                config.MSPromocionesUrls.actualizarDiaById(id),
                { body: diaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarDia(id: number) {
        try {
            const response = await axiosServicioPromociones.delete(
                config.MSPromocionesUrls.deleteDiaById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async verificarPromocionById(Userid: number) {
        try {
            const response = await axiosServicioPromociones.get(
                config.MSPromocionesUrls.verificarPromocionById(Userid),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
