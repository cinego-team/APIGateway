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
    async getHorariosMasElegidos() {
        const response = await axiosServicioVentas.get(
            config.MSVentasUrls.getHorariosMasElegidos,
        );
        return response.data;  
}
    async getEntradasPorDiaSemanaMesActual() {
        const response = await axiosServicioVentas.get(
            config.MSVentasUrls.getEntradasPorDiaSemanaMesActual,
        );
        return response.data;
    }
    async getPeliculasPorRangoVentasTrimestral(
        trimestre: number,
        anio: number,
    ) {
        const response = await axiosServicioVentas.get(
            config.MSVentasUrls.getPeliculasPorRangoVentasTrimestral,
            {
                params: { trimestre, anio },
            },
        );

        return response.data;
    }
    async findAllVentas() {
        const response = await axiosServicioVentas.get(
            config.MSVentasUrls.findAllVentas,
        );

        return response.data;
    }

    async crearEstadoVenta(dato: any) {
        const data = await axiosServicioVentas.post(
            config.MSVentasUrls.crearEstadoVenta,
            dato,
        );
        return data;
    }
    async findAllEstadoVenta() {
        const data = await axiosServicioVentas.get(
            config.MSVentasUrls.findAllEstadoVenta,
        );
        return data;
    }
    async getEstadoVentaById(id: number) {
        const data = await axiosServicioVentas.get(
            config.MSVentasUrls.getEstadoVentaById(id),
        );
        return data;
    }
    async eliminarEstadoVenta(id: number) {
        const data = await axiosServicioVentas.delete(
            config.MSVentasUrls.eliminarEstadoVenta(id),
        );
        return data;
    }
    async crearEntradaPorDisponibilidadIds(ids: number[]) {
        const response = await axiosServicioVentas.post(
            config.MSVentasUrls.crearEntradaPorDisponibilidadIds,
            { body: { ids } },
        );
        return response.data;
    }
    async abrirVenta(usuario: any, dato: any) {
    try {
        // Metemos el ID del usuario dentro del body para que el microservicio lo vea
        const body = {
            ...dato,
            usuarioId: usuario.id 
        };

        const { data } = await axiosServicioVentas.post(
            config.MSVentasUrls.abrirVenta,
            body,
        );
        return data;
    } catch (error: any) {
        throw new HttpException(
            error.response?.data || 'Error al abrir la venta',
            error.response?.status || 500,
        );
    }
}
    async cerrarVenta(idVenta: number, data: any) {
        try {
            const { data: response } = await axiosServicioVentas.post(
                config.MSVentasUrls.cerrarVenta(idVenta),
                data,
            );

            return response;
        } catch (error: any) {
            // Si el microservicio devuelve error, lo reenvía; si no, mensaje genérico
            throw new HttpException(
                error.response?.data || 'Error al cerrar la venta',
                error.response?.status || 500,
            );
        }
    }
}
