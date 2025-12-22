import { Request } from 'express';

export interface RequestWithUser extends Request {
    user: {
        id: number;
    };
}

export interface RequestWithUserInput extends Request {
    user?: {
        id: number;
        email: string;
    }
}
