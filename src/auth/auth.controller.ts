import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';
import { UserResponseDto } from '../users/dto/user-response.dto';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';

interface IAuthRequest extends Request {
  user: UserResponseDto;
}

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
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
  async registration(@Body() creds: RegisterDto, @Req() req) {
    const user = this.usersService.create(creds);
    
  }
}
