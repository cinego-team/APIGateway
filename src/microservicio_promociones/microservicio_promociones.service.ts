import { Injectable, HttpException } from '@nestjs/common';
import { axiosServicioPromociones } from 'src/axios_service/axios.client';
import { config } from 'src/axios_service/env';

@Injectable()
export class MicroservicioPromocionesService {
    async getAllPromociones() {
        try {
            return await axiosServicioPromociones.get(
                config.MSPromocionesUrls.getAllPromociones,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getPromocionById(id: number) {
        try {
            return await axiosServicioPromociones.get(
                config.MSPromocionesUrls.getPromocionById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarPromocion(promocionBody: any) {
        try {
            return await axiosServicioPromociones.post(
                config.MSPromocionesUrls.registrarPromocion,
                { body: promocionBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarPromocion(id: number, promocionBody: any) {
        try {
            return await axiosServicioPromociones.put(
                config.MSPromocionesUrls.actualizarPromocionById(id),
                { body: promocionBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarPromocion(id: number) {
        try {
            return await axiosServicioPromociones.delete(
                config.MSPromocionesUrls.deletePromocionById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async getAllDias() {
        try {
            return await axiosServicioPromociones.get(
                config.MSPromocionesUrls.getAllDias,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getDiaById(id: number) {
        try {
            return await axiosServicioPromociones.get(
                config.MSPromocionesUrls.getDiaById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarDia(diaBody: any) {
        try {
            return await axiosServicioPromociones.post(
                config.MSPromocionesUrls.registrarDia,
                { body: diaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarDia(id: number, diaBody: any) {
        try {
            return await axiosServicioPromociones.put(
                config.MSPromocionesUrls.actualizarDiaById(id),
                { body: diaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarDia(id: number) {
        try {
            return await axiosServicioPromociones.delete(
                config.MSPromocionesUrls.deleteDiaById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
