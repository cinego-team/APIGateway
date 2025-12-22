import { HttpException, Injectable } from '@nestjs/common';
import { axiosServicioUsuarios } from 'src/services/axios_service/axios.client';
import { config } from 'src/services/axios_service/env';

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
            const response = await axiosServicioUsuarios.post(
                config.MSUsuariosUrls.registerEmpleado,
                {
                    body: registerBody,
                },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async refreshToken(refreshToken: string) {
        try {
            const response = await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.refreshToken,
                {
                    headers: { 'refresh-token': refreshToken || "" },
                },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getDatosClienteById(access_token, refresh_token) {
        try {
            const response = await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.getDatosCliente,
                {
                    headers: {
                        Authorization: access_token || "",
                        "refresh-token": refresh_token || ""
                    }
                });
            return response.data;
        } catch (err) {
            console.log(err.message)
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async getDatosEmpleadoById(id: number) {
        try {
            const response = await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.getDatosEmpleadoById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async verificarExistenciaTipoClienteById(id: number) {
        try {
            const response = await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.verificarExistenciaTipoClienteById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }

    async findByEmail(email: string) {
        try {
            const response = await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.findUserByEmail(email),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
