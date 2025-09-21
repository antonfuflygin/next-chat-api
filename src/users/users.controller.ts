import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CookieAuthenticationGuard } from '../auth/cookie.guard';
import type { IAuthRequest } from '../shared/types/user.types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('me')
  @UseGuards(CookieAuthenticationGuard)
  async getMe(@Req() req: IAuthRequest) {
    return await this.userService.findById(req.user.id);
  }
}
