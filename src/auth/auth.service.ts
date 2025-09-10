import { Injectable } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  // async signIn(phoneNumber: number, pass: string): Promise<any> {
  //   const user = await this.usersService.findByPhoneNumber(phoneNumber);
  //   if (user) {
  //     const success = await bcrypt.compare(pass, user?.password);

  //     if (!success) {
  //       throw new UnauthorizedException();
  //     }

  //     const { password, ...result } = user;
  //     // TODO: Generate a JWT and return it here
  //     // instead of the user object
  //     return result;
  //   }
  // }

  async validateUser(phoneNumber: number, pass: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findByPhoneNumber(phoneNumber);
    if (user && (await bcrypt.compare(pass, user?.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
