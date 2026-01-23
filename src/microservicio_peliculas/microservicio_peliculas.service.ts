import { HttpException, Injectable } from '@nestjs/common';
import { axiosServicioPeliculas } from 'src/services/axios_service/axios.client';
import { config } from 'src/services/axios_service/env';

@Injectable()
export class MicroservicioPeliculasService {
    async getAllPeliculas(access_token, refresh_token) {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllPeliculas,
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

    async getPeliculaById(id: number) {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getPeliculaById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarPelicula(peliculaBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarPelicula,
                { body: peliculaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarPelicula(id: number, peliculaBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarPeliculaById(id),
                { body: peliculaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarPelicula(id: number) {
        try {
            const response = await axiosServicioPeliculas.delete(
                config.MSPeliculasUrls.deletePeliculaById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async ponerEnCartelera(id: number) {
        try {
            const response = await axiosServicioPeliculas.patch(
                `${config.MSPeliculasUrls.actualizarPeliculaById(id)}/poner-en-cartelera`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async sacarDeCartelera(id: number) {
        try {
            const response = await axiosServicioPeliculas.patch(
                `${config.MSPeliculasUrls.actualizarPeliculaById(id)}/sacar-de-cartelera`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    // ================= PELICULA ADMIN =================

    async getPeliculasParaSelec() {
        try {
            const response = await axiosServicioPeliculas.get(
                '/pelicula/admin/selec',
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getPeliculasAdmin() {
        try {
            const response = await axiosServicioPeliculas.get(
                '/pelicula/admin/all',
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getPeliculaAdminById(id: number) {
        try {
            const response = await axiosServicioPeliculas.get(
                `/pelicula/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async crearPeliculaAdmin(body: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                '/pelicula/admin/new',
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarPeliculaAdmin(id: number, body: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                `/pelicula/admin/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarPeliculaAdmin(id: number) {
        try {
            const response = await axiosServicioPeliculas.delete(
                `/pelicula/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarGenero(body: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarGenero,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarGenero(id: number, body: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarGeneroById(id),
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarGeneroParcial(id: number, body: any) {
        try {
            const response = await axiosServicioPeliculas.patch(
                `/genero/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllGeneros() {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllGeneros,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getGeneroById(id: number) {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getGeneroById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarGenero(id: number) {
        try {
            const response = await axiosServicioPeliculas.delete(
                config.MSPeliculasUrls.deleteGeneroById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllGenerosAdmin(page = 1, quantity = 10) {
        try {
            const response = await axiosServicioPeliculas.get(
                `/genero/admin/all?page=${page}&quantity=${quantity}`
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getGeneroAdminById(id: number) {
        try {
            const response = await axiosServicioPeliculas.get(
                `/genero/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarGeneroAdmin(id: number, body: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                `/genero/admin/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarGeneroAdmin(id: number) {
        try {
            const response = await axiosServicioPeliculas.delete(
                `/genero/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarClasificacion(clasificacionBody: { nombre: string }) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarClasificacion,
                clasificacionBody, // ✅ ASÍ
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 500;
            const message =
                err.response?.data?.message ||
                'Error al registrar clasificación';
            throw new HttpException(message, status);
        }
    }

    async actualizarClasificacion(id: number, clasificacionBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarClasificacionById(id),
                { body: clasificacionBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllClasificaciones() {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllClasificaciones,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getClasificacionById(id: number) {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getClasificacionById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarClasificacion(id: number) {
        try {
            const response = await axiosServicioPeliculas.delete(
                config.MSPeliculasUrls.deleteClasificacionById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async crearClasificacion(body: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                '/clasificacion/admin/new',
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllClasificacionesAdmin() {
        try {
            const response = await axiosServicioPeliculas.get(
                '/clasificacion/admin/all',
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getClasificacionAdminById(id: number) {
        try {
            const response = await axiosServicioPeliculas.get(
                `/clasificacion/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async actualizarClasificacionAdmin(id: number, body: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                `/clasificacion/admin/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async eliminarClasificacionAdmin(id: number) {
        try {
            const response = await axiosServicioPeliculas.delete(
                `/clasificacion/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarClasificacionParcial(id: number, body: any) {
        try {
            const response = await axiosServicioPeliculas.patch(
                `/clasificacion/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarEstadoPelicula(estadoBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarEstadoPelicula,
                { body: estadoBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarEstadoPelicula(id: number, estadoBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarEstadoPeliculaById(id),
                { body: estadoBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllEstadosPelicula() {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllEstadosPelicula,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getEstadoPeliculaById(id: number) {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getEstadoPeliculaById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarEstadoPelicula(id: number) {
        try {
            const response = await axiosServicioPeliculas.delete(
                config.MSPeliculasUrls.deleteEstadoPeliculaById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async crearEstadoPelicula(body: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                '/estado-pelicula/admin/new',
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllEstadosPeliculasAdmin() {
        try {
            const response = await axiosServicioPeliculas.get(
                '/estado-pelicula/admin/all',
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getEstadoPeliculaAdminById(id: number) {
        try {
            const response = await axiosServicioPeliculas.get(
                `/estado-pelicula/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarEstadoPeliculaAdmin(id: number, body: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                `/estado-pelicula/admin/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarEstadoPeliculaParcial(id: number, body: any) {
        try {
            const response = await axiosServicioPeliculas.patch(
                `/estado-pelicula/${id}`,
                body,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarEstadoPeliculaAdmin(id: number) {
        try {
            const response = await axiosServicioPeliculas.delete(
                `/estado-pelicula/admin/${id}`,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
