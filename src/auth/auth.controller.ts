import { Body, Controller, Delete, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request, Response } from 'express';
import type { IAuthRequest } from '../shared/types/user.types';
import { UsersService } from '../users/users.service';
import { CookieAuthenticationGuard } from './cookie.guard';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req: IAuthRequest) {
    return new Promise((resolve, reject) => {
      req.login(req.user, (err) => {
        if (err) {
          reject(new Error(err));
        }
        resolve(req.user);
      });
    });
  }

  @Post('registration')
  async registration(@Body() creds: RegisterDto, @Req() req: IAuthRequest) {
    const user = await this.usersService.create(creds);

    return new Promise((resolve, reject) => {
      req.login(user, (err) => {
        if (err) {
          reject(new Error(err));
        }
        resolve(req.user);
      });
    });
  }

  @Delete('logout')
  @UseGuards(CookieAuthenticationGuard)
  logout(@Req() req: Request, @Res() res: Response) {
    req.logOut((err) => {
      if (err) {
        return res.status(500).json({ message: 'Logout error' });
      }

      return res.json({ message: 'Logout success' });
    });
  }
}
