import { HttpException, Injectable } from '@nestjs/common';
import { axiosServicioUsuarios } from 'src/axios_service/axios.client';
import { config } from 'src/axios_service/env';

@Injectable()
export class MicroservicioUsuariosService {
    async login(loginBody: any, access_token: string, refresh_token: string) {
        try {
            const response = await axiosServicioUsuarios.post(
                config.MSUsuariosUrls.login,
                loginBody,
                {
                    headers: {
                        Authorization: access_token || "",
                        "refresh-token": refresh_token || ""
                    }
                }
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            console.log(message)
            throw new HttpException(message, status);
        }
    }

    async register(registerBody: any, access_token: string, refresh_token: string) {
        try {
            const response = await axiosServicioUsuarios.post(
                config.MSUsuariosUrls.register,
                registerBody,
                {
                    headers: {
                        Authorization: access_token || "",
                        "refresh-token": refresh_token || ""
                    }
                }
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async registerEmpleado(registerBody: any) {
        try {
            return await axiosServicioUsuarios.post(
                config.MSUsuariosUrls.registerEmpleado,
                {
                    body: registerBody,
                },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async refreshToken(refreshToken: string) {
        try {
            return await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.refreshToken,
                {
                    headers: { 'refresh-token': refreshToken },
                },
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getDatosClienteById(id: number) {
        try {
            return await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.getDatosClienteById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getDatosEmpleadoById(id: number) {
        try {
            return await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.getDatosEmpleadoById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async verificarExistenciaTipoClienteById(id: number) {
        try {
            return await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.verificarExistenciaTipoClienteById(id),
            );
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
