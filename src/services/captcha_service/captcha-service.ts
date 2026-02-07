import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CaptchaService {
    async validateCaptcha(token: string) {
        const secret = "6LcICREsAAAAAA2CasYcSYZ9gdRdf45R8goPWEwp";
        const url = `https://www.google.com/recaptcha/api/siteverify`;

        const response = await axios.post(
            url,
            new URLSearchParams({
                secret,
                response: token,
            }),
        );

        const data = response.data;

        if (!data.success) {
            console.log('Captcha inválido:', data);
            throw new BadRequestException('Captcha inválido');
        }

        return true;
    }
}
