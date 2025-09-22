import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { CookieAuthenticationGuard } from '../auth/cookie.guard';
import type { IRequestWithUser } from '../shared/types/user.types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('me')
  @UseGuards(CookieAuthenticationGuard)
  async getMe(@Req() req: IRequestWithUser) {
    return await this.userService.findById(req.user.id);
  }

  @Get('users')
  @UseGuards(CookieAuthenticationGuard)
  async findByUsername(@Query('username') username: string) {
    return await this.userService.findByUsername(username);
  }
}
