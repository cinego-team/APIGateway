import {
    CanActivate,
    ExecutionContext,
    HttpException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import axios from 'axios';
import { Permissions as PermissionsDecorator } from './decorators/permissions.decorator';
import { RequestWithUserInput } from 'src/microservicio_usuarios/request-with-user.interface';
import { JwtService } from 'src/services/jwt_service/jwt.service';
import { Payload } from 'src/services/jwt_service/payload.interface';

const LOCALHOST_URL = `http://localhost:3004`;
const PRODUCCION_URL = null;

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
        //desencriptamos el payload
        const payload = this.jwtService.getPayload(token) as Payload;

        console.log('PAYLOAD:', payload);
        request.user = payload;
        //manejo de permisos
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
            throw new UnauthorizedException('Permission denied');
        }

        return true;
    }
}
