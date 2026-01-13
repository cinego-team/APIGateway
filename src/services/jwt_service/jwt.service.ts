import { Injectable, UnauthorizedException } from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { Payload } from './payload.interface';

@Injectable()
export class JwtService {
    // config.ts
    // [
    config = {
        auth: {
            secret: 'authSecret',
            expiresIn: '15m',
        },
        refresh: {
            secret: 'refreshSecret',
            expiresIn: '1d',
        },
    };
    // ]

    // verifica el token y obtiene el payload desencriptado
    // [
    getPayload(token: string, type: 'refresh' | 'auth' = 'auth'): Payload {
        try {
            const decoded = verify(token, this.config[type].secret);

            if (!decoded || typeof decoded === 'string') {
                throw new UnauthorizedException('Invalid token');
            }

            // Validar que las propiedades mínimas existen
            const { sub, email, role, permissions } = decoded as any;
            if (!sub || !email || !role || !permissions) {
                throw new UnauthorizedException('Invalid token payload');
            }

            return decoded as Payload;
        } catch (err) {
            throw new UnauthorizedException('Token verification failed');
        }
    }
    // ]
}
