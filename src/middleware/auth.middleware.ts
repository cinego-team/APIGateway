import {
    CanActivate,
    ExecutionContext,
    HttpException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import axios from 'axios';
import { Permissions } from './decorators/permissions.decorator';
import { RequestWithUserInput } from 'src/microservicio_usuarios/request-with-user.interface';
import { JwtService } from 'src/services/jwt_service/jwt.service';
import { MicroservicioUsuariosService } from 'src/microservicio_usuarios/microservicio_usuarios.service';

const LOCALHOST_URL = `http://localhost:3004`;
const PRODUCCION_URL = null;

// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private reflector: Reflector) { }

//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const request: RequestWithUserInput = context.switchToHttp().getRequest();
//         const token = request.headers.authorization;
//         if (!token) {
//             throw new HttpException('Authorization token missing', 401);
//         }
//         const user = await this..findByEmail(payload.email);
//         if (!user) {
//             throw new HttpException('User not found', 401);
//         }
//         request.user = user;
//         const permissions: string[] =
//             this.reflector.get<string[]>(Permissions, context.getHandler()) ||
//             [];

//         try {
//             const url = PRODUCCION_URL || LOCALHOST_URL;
//             for (const permission of permissions) {
//                 //son los permisos requeridos, hace una peticion por permiso por que asi funciona el can-do de users
//                 await axios.get(`${url}/can-do/${permission}`, {
//                     headers: {
//                         Authorization: token,
//                     },
//                 });
//             }

//             return true; // Si no falló ningún permiso, está autorizado
//         } catch (err) {
//             const status = err.response?.status || 403;
//             const message = err.response?.data?.message || 'Unauthorized';
//             throw new HttpException(message, status);
//         }
//     }
// }
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private reflector: Reflector,
        private readonly servicioUsuarios: MicroservicioUsuariosService
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            // Obtiene el token de la request
            // [
            const request: RequestWithUserInput = context.switchToHttp().getRequest();
            const authHeader = request.headers.authorization;
            if (!authHeader) {
                throw new HttpException('Token not found', 401);
            }
            const token = authHeader.replace('Bearer ', '');
            if (!token) {
                throw new HttpException('Token not found', 401);
            }
            // ]
            //Decodifica el token y obtiene el payload (email) y luego obtiene el usuario
            // [
            const payload = this.jwtService.getPayload(token); //Llama getPayload() donde se usa verify()
            const user = await this.servicioUsuarios.findByEmail(payload.email);
            if (!user) {
                throw new HttpException('User not found', 401);
            }
            request.user = user;
            // ]
            //Logica de permisos
            // [
            const permissions: string[] = this.reflector.get(Permissions, context.getHandler()); //Obtiene los permisos requeridos del decorador
            if (!permissions || permissions.length === 0) {
                return true;
            }
            const userPermissions: string[] = user.role.permissions.map(p => p.code) || []; //Obtiene los permisos del usuario
            const hasPermission: boolean = permissions.every(p => userPermissions.includes(p)); //Verifica si el usuario tiene todos los permisos requeridos
            if (!hasPermission) {
                throw new HttpException('Unauthorized', 401);
            }
            // ]
            // console.log(permissions)
            return true;
        }
        catch (error) {
            throw new UnauthorizedException(error?.message);
        }
    }
}
