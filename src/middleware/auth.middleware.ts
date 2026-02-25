import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '../services/jwt_service/jwt.service';
import { Payload } from '../services/jwt_service/payload.interface';
/**
 * AuthGuard
 *
 * Guard de autenticación y autorización basado en JWT.
 *
 * Este guard se encarga de:
 *
 * 1) Verificar que la request HTTP contenga el header Authorization.
 * 2) Extraer y validar el token JWT enviado como Bearer token.
 * 3) Obtener el payload del token (información del usuario autenticado).
 * 4) Adjuntar el payload al objeto request.user para su uso posterior.
 * 5) Validar que el usuario posea los permisos requeridos por el endpoint.
 *
 * Si:
 * - No existe el header Authorization → UnauthorizedException.
 * - El token es inválido o mal formado → UnauthorizedException.
 * - El usuario no posee los permisos necesarios → ForbiddenException.
 *
 * Este componente permite implementar:
 * - Seguridad basada en JWT.
 * - Control de acceso basado en permisos.
 * - Protección de endpoints críticos del sistema.
 */
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private reflector: Reflector,
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new UnauthorizedException('Missing Authorization header');
        }

        const token = authHeader.replace('Bearer ', '');
        if (!token) {
            throw new UnauthorizedException('Invalid token format');
        }

        const payload = this.jwtService.getPayload(token) as Payload;
        request.user = payload;

        const requiredPermissions =
            this.reflector.get<string[]>('permissions', context.getHandler()) ||
            [];

        if (requiredPermissions.length === 0) {
            return true;
        }

        const hasPermission = requiredPermissions.every((p) =>
            payload.permissions.includes(p),
        );

        if (!hasPermission) {
            throw new ForbiddenException('Permission denied');
        }

        return true;
    }
}
