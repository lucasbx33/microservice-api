import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtValidationService {
  private readonly secret: string = process.env.JWT_SECRET || 'default_secret';

  validateToken(token: string): { valid: boolean; payload?: any; error?: string } {
    try {
      const payload = jwt.verify(token, this.secret);
      return { valid: true, payload };
    } catch (error: any) {
      return { valid: false, error: error.message };
    }
  }
}
