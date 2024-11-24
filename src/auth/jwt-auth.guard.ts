import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtValidationService } from './jwt-validation.service';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtValidationService: JwtValidationService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false; 
    }

    const token = authHeader.split(' ')[1];
    const result = this.jwtValidationService.validateToken(token);

    if (!result.valid) {
      return false; 
    }

    request['user'] = result.payload;
    return true;
  }
}
