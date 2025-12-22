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
                        Authorization: access_token || "",
                        "refresh-token": refresh_token || ""
                    }
                }
            );
            return response.data
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

    async registrarGenero(generoBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarGenero,
                { body: generoBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarGenero(id: number, generoBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarGeneroById(id),
                { body: generoBody },
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

    async registrarIdioma(idiomaBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarIdioma,
                { body: idiomaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarIdioma(id: number, idiomaBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarIdiomaById(id),
                { body: idiomaBody },
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
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllIdiomas,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getIdiomaById(id: number) {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getIdiomaById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarClasificacion(clasificacionBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarClasificacion,
                { body: clasificacionBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
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

    async registrarFormato(formatoBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarFormato,
                { body: formatoBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarFormato(id: number, formatoBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarFormatoById(id),
                { body: formatoBody },
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
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllFormatos,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarSala(salaBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarSala,
                { body: salaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarSala(id: number, salaBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarSalaById(id),
                { body: salaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllSalas() {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllSalas,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarFuncion(funcionBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarFuncion,
                { body: funcionBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarFuncion(id: number, funcionBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarFuncionById(id),
                { body: funcionBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllFunciones() {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllFunciones,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarFila(filaBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarFila,
                { body: filaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarFila(id: number, filaBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarFilaById(id),
                { body: filaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllFilas() {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllFilas,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarButaca(butacaBody: any) {
        try {
            const response = await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarButaca,
                { body: butacaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarButaca(id: number, butacaBody: any) {
        try {
            const response = await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarButacaById(id),
                { body: butacaBody },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllButacas() {
        try {
            const response = await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllButacas,
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
