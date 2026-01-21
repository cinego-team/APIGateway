import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from 'src/services/jwt_service/jwt.service';
import { Payload } from 'src/services/jwt_service/payload.interface';

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
