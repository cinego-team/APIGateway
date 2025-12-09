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

axiosServicioFunciones.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (token) {
        config.headers.Authorization = token;
    }
    if (refreshToken) {
        config.headers['refresh-token'] = refreshToken;
    }

    return config;
});
export const axiosServicioPeliculas = axios.create({
    baseURL: config.MSPeliculasUrls.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosServicioPeliculas.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (token) {
        config.headers.Authorization = token;
    }
    if (refreshToken) {
        config.headers['refresh-token'] = refreshToken;
    }

    return config;
});

export const axiosServicioVentas = axios.create({
    baseURL: config.MSVentasUrls.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosServicioVentas.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (token) {
        config.headers.Authorization = token;
    }
    if (refreshToken) {
        config.headers['refresh-token'] = refreshToken;
    }

    return config;
});
export const axiosServicioPromociones = axios.create({
    baseURL: config.MSPromocionesUrls.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosServicioPromociones.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (token) {
        config.headers.Authorization = token;
    }
    if (refreshToken) {
        config.headers['refresh-token'] = refreshToken;
    }

    return config;
});
