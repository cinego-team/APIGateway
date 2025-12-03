import { HttpException, Injectable } from '@nestjs/common';
import { axiosServicioPeliculas } from 'src/axios_service/axios.client';
import { config } from 'src/axios_service/env';

@Injectable()
export class MicroservicioPeliculasService {
    async getAllPeliculas() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllPeliculas,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

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

    async registrarPelicula(peliculaBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarPelicula,
                { body: peliculaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarPelicula(id: number, peliculaBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarPeliculaById(id),
                { body: peliculaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarPelicula(id: number) {
        try {
            return await axiosServicioPeliculas.delete(
                config.MSPeliculasUrls.deletePeliculaById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarGenero(generoBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarGenero,
                { body: generoBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarGenero(id: number, generoBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarGeneroById(id),
                { body: generoBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllGeneros() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllGeneros,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getGeneroById(id: number) {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getGeneroById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarGenero(id: number) {
        try {
            return await axiosServicioPeliculas.delete(
                config.MSPeliculasUrls.deleteGeneroById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarIdioma(idiomaBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarIdioma,
                { body: idiomaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarIdioma(id: number, idiomaBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarIdiomaById(id),
                { body: idiomaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllIdiomas() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllIdiomas,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getIdiomaById(id: number) {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getIdiomaById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarClasificacion(clasificacionBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarClasificacion,
                { body: clasificacionBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarClasificacion(id: number, clasificacionBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarClasificacionById(id),
                { body: clasificacionBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllClasificaciones() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllClasificaciones,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getClasificacionById(id: number) {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getClasificacionById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);

        }
    }

    async eliminarClasificacion(id: number) {
        try {
            return await axiosServicioPeliculas.delete(
                config.MSPeliculasUrls.deleteClasificacionById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarEstadoPelicula(estadoBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarEstadoPelicula,
                { body: estadoBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarEstadoPelicula(id: number, estadoBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarEstadoPeliculaById(id),
                { body: estadoBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllEstadosPelicula() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllEstadosPelicula,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getEstadoPeliculaById(id: number) {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getEstadoPeliculaById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async eliminarEstadoPelicula(id: number) {
        try {
            return await axiosServicioPeliculas.delete(
                config.MSPeliculasUrls.deleteEstadoPeliculaById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarFormato(formatoBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarFormato,
                { body: formatoBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarFormato(id: number, formatoBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarFormatoById(id),
                { body: formatoBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllFormatos() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllFormatos,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarSala(salaBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarSala,
                { body: salaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarSala(id: number, salaBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarSalaById(id),
                { body: salaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllSalas() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllSalas,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarFuncion(funcionBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarFuncion,
                { body: funcionBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarFuncion(id: number, funcionBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarFuncionById(id),
                { body: funcionBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllFunciones() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllFunciones,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarFila(filaBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarFila,
                { body: filaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarFila(id: number, filaBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarFilaById(id),
                { body: filaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllFilas() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllFilas,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registrarButaca(butacaBody: any) {
        try {
            return await axiosServicioPeliculas.post(
                config.MSPeliculasUrls.registrarButaca,
                { body: butacaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async actualizarButaca(id: number, butacaBody: any) {
        try {
            return await axiosServicioPeliculas.put(
                config.MSPeliculasUrls.actualizarButacaById(id),
                { body: butacaBody },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getAllButacas() {
        try {
            return await axiosServicioPeliculas.get(
                config.MSPeliculasUrls.getAllButacas,
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
