import { HttpException, Injectable } from '@nestjs/common';
import { axiosServicioFunciones } from 'src/services/axios_service/axios.client';
import { config } from 'src/services/axios_service/env';

@Injectable()
export class MicroservicioFuncionesYSalasService {
    async findAllByPeliculaId(
        peliculaId: number,
        access_token: string,
        refresh_token: string,
    ) {
        try {
            const response = await axiosServicioFunciones.get(
                config.MSFuncionesUrls.getFuncionesByPeliculaId(peliculaId),
                {
                    headers: {
                        Authorization: access_token || '',
                        'refresh-token': refresh_token || '',
                    },
                },
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
    // funciones
    async getFunciones() {
        try {
            const response = await axiosServicioFunciones.get(
                config.MSFuncionesUrls.getFunciones(),
            );
            return response.data;  // <-- Agregar .data
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async deleteFuncion(id: number) {
        try {
            const url = config.MSFuncionesUrls.deleteFuncion(id);
            const response = await axiosServicioFunciones.delete(url);
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Error al eliminar función';
            throw new HttpException(message, status);
        }
    }

    async createFuncion(body: any, token: string) {
    const response = await axiosServicioFunciones.post(
        config.MSFuncionesUrls.createFuncion,
        body,
        { headers: { Authorization: token } }
    );
    return response.data;
    }

    async updateFuncion(id: number, body: any) {
        try {
            const response = await axiosServicioFunciones.put(
                config.MSFuncionesUrls.updateFuncion(id),
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Error al actualizar función';
            throw new HttpException(message, status);
        }
    }

    // BUTACA

    async getAllButacas() {
        try {
            const response = await axiosServicioFunciones.get(
                config.MSFuncionesUrls.getAllButacas,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getButacaById(id: number) {
        try {
            const response = await axiosServicioFunciones.get(
                config.MSFuncionesUrls.actualizarButacaById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async updateButaca(id: number, body: any) {
        try {
            const response = await axiosServicioFunciones.put(
                config.MSFuncionesUrls.actualizarButacaById(id),
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async deleteButaca(id: number) {
        try {
            const response = await axiosServicioFunciones.delete(
                config.MSFuncionesUrls.actualizarButacaById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    //DISPONIBILIDAD BUTACA

    async getAllDisponibilidadButaca() {
        try {
            const response = await axiosServicioFunciones.get(
                '/disponibilidad-butaca',
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getDisponibilidadButacaById(id: number) {
        try {
            const response = await axiosServicioFunciones.get(
                `/disponibilidad-butaca/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async updateDisponibilidadButaca(id: number, body: any) {
        try {
            const response = await axiosServicioFunciones.put(
                `/disponibilidad-butaca/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async reservarButacas(body: { disponibilidadButacaIds: number[] }) {
        try {
            const response = await axiosServicioFunciones.patch(
                `/disponibilidad-butaca/reservar`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async ocuparButacas(body: { disponibilidadButacaIds: number[] }) {
        try {
            const response = await axiosServicioFunciones.patch(
                `/disponibilidad-butaca/ocupar`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async deleteDisponibilidadButaca(id: number) {
        try {
            const response = await axiosServicioFunciones.delete(
                `/disponibilidad-butaca/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    // ESTADO DISPONIBILIDAD BUTACA
    async createEstadoDisponibilidad(body: any) {
        try {
            const response = await axiosServicioFunciones.post(
                '/estado-disponibilidad-butaca',
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllEstadoDisponibilidad() {
        try {
            const response = await axiosServicioFunciones.get(
                '/estado-disponibilidad-butaca',
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getEstadoDisponibilidadById(id: number) {
        try {
            const response = await axiosServicioFunciones.get(
                `/estado-disponibilidad-butaca/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async updateEstadoDisponibilidad(id: number, body: any) {
        try {
            const response = await axiosServicioFunciones.put(
                `/estado-disponibilidad-butaca/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async deleteEstadoDisponibilidad(id: number) {
        try {
            const response = await axiosServicioFunciones.delete(
                `/estado-disponibilidad-butaca/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    //fila
    async getAllFilas() {
        try {
            const response = await axiosServicioFunciones.get('/fila');
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getFilaById(id: number) {
        try {
            const response = await axiosServicioFunciones.get(`/fila/${id}`);
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async updateFila(id: number, body: any) {
        try {
            const response = await axiosServicioFunciones.put(
                `/fila/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async deleteFila(id: number) {
        try {
            const response = await axiosServicioFunciones.delete(`/fila/${id}`);
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    //formato
    async createFormato(body: any) {
        try {
            const response = await axiosServicioFunciones.post(
                config.MSFuncionesUrls.registrarFormato,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllFormatos() {
        try {
            const response = await axiosServicioFunciones.get('/formato');
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getFormatoById(id: number) {
        try {
            const response = await axiosServicioFunciones.get(`/formato/${id}`);
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async updateFormato(id: number, body: any) {
        try {
            const response = await axiosServicioFunciones.put(
                `/formato/admin/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async deleteFormato(id: number) {
        try {
            const response = await axiosServicioFunciones.delete(
                `/formato/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllFormatosAdmin() {
        try {
            const response =
                await axiosServicioFunciones.get('/formato/admin/all');
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getFormatoAdminById(id: number) {
        try {
            const response = await axiosServicioFunciones.get(
                `/formato/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getFormatoForPut(id: number) {
        try {
            const response = await axiosServicioFunciones.get(
                `/formato/${id}/admin`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    //idioma
    async createIdioma(body: any) {
        try {
            const response = await axiosServicioFunciones.post(
                '/idioma/admin/new',
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllIdiomas() {
        try {
            const response =
                await axiosServicioFunciones.get('/idioma/admin/all');
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getIdiomaById(id: number) {
        try {
            const response = await axiosServicioFunciones.get(
                `/idioma/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async updateIdioma(id: number, body: any) {
        try {
            const response = await axiosServicioFunciones.put(
                `/idioma/admin/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async updateIdiomaPartial(id: number, body: any) {
        try {
            const response = await axiosServicioFunciones.patch(
                `/idioma/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async deleteIdioma(id: number) {
        try {
            const response = await axiosServicioFunciones.delete(
                `/idioma/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    //sala
    async createSala(body: any, authorization: string) {
        try {
            const response = await axiosServicioFunciones.post(
                config.MSFuncionesUrls.registrarSala,
                body,
                {
                    headers: {
                        Authorization: authorization,
                    },
                },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getSalaById(id: number) {
        try {
            const response = await axiosServicioFunciones.get(
                `/salas/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async updateSala(id: number, body: any) {
        try {
            const response = await axiosServicioFunciones.put(
                `/salas/admin/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async deleteSala(id: number, authorization: string) {
        try {
            const response = await axiosServicioFunciones.delete(
                config.MSFuncionesUrls.deleteSalaById(id),
                {
                    headers: {
                        Authorization: authorization,
                    },
                },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getSalasForSelect() {
        try {
            const response =
                await axiosServicioFunciones.get('/salas/admin/selec');
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async getAllSalasAdmin(req: any) {
        try {
            const authHeader =
                req.headers?.authorization ||
                req.headers?.get?.('authorization');

            if (!authHeader) {
                throw new HttpException('Missing Authorization header', 401);
            }

            const response = await axiosServicioFunciones.get(
                '/salas/admin/all',
                {
                    headers: {
                        Authorization: authHeader,
                    },
                },
            );

            return response.data;
        } catch (err) {
            const status = err.response?.status || 500;
            const message =
                err.response?.data?.message ||
                'Error calling salas microservice';

            throw new HttpException(message, status);
        }
    }
}
