import axios from 'axios';
import { config } from './env';

export const axiosServicioUsuarios = axios.create({
    baseURL: config.MSUsuariosUrls.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosServicioFunciones = axios.create({
    baseURL: config.MSFuncionesUrls.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosServicioPeliculas = axios.create({
    baseURL: config.MSPeliculasUrls.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const axiosServicioVentas = axios.create({
    baseURL: config.MSVentasUrls.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosServicioPromociones = axios.create({
    baseURL: config.MSPromocionesUrls.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});
