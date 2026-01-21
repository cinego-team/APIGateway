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

    async register(
        registerBody: any,
        access_token: string,
        refresh_token: string,
    ) {
        try {
            const response = await axiosServicioUsuarios.post(
                config.MSUsuariosUrls.register,
                registerBody,
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
                    headers: { 'refresh-token': refreshToken || '' },
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
                        Authorization: `Bearer ${access_token}`,
                        'refresh-token': refresh_token || '',
                    },
                },
            );
            return response.data;
        } catch (err) {
            console.log(err.message);
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
    async getTipoClienteById(id: number) {
        try {
            const response = await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.GetTipoClienteById(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async getAllTipoClientes() {
        try {
            const response = await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.GetAllTipoClientes(),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async deleteTipoCliente(id: number) {
        try {
            const response = await axiosServicioUsuarios.delete(
                config.MSUsuariosUrls.DeleteTipoCliente(id),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async createTipoCliente(createTipoClienteDto: any) {
        try {
            const response = await axiosServicioUsuarios.post(
                config.MSUsuariosUrls.CreateTipoCliente,createTipoClienteDto
                
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async updateTipoCliente(id: number, updateTipoClienteDto: any) {
        try {
            const response = await axiosServicioUsuarios.put(
                config.MSUsuariosUrls.UpdateTipoCliente(id),
                {
                    body: updateTipoClienteDto,
                },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async createRoles(name: string) {
        try {
            const response = await axiosServicioUsuarios.post(
                config.MSUsuariosUrls.CreateRole,
                {
                    body: name,
                },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async createPermissions(code: string) {
        try {
            const response = await axiosServicioUsuarios.post(
                config.MSUsuariosUrls.CreatePermission,
                {
                    body: code,
                },
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async getAllRoles() {
        try {
            const response = await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.GetAllRoles(),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
    async getAllPermissions() {
        try {
            const response = await axiosServicioUsuarios.get(
                config.MSUsuariosUrls.GetAllPermissions(),
            );
            return response.data;
        } catch (err) {
            const status = err.response?.status || 403;
            const message = err.response?.data?.message || 'Unauthorized';
            throw new HttpException(message, status);
        }
    }
}
