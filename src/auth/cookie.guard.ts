import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CookieAuthenticationGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const isAuthenticated = request.isAuthenticated();

    if (!isAuthenticated) {
      throw new UnauthorizedException();
    }

    return isAuthenticated;
  }
}
