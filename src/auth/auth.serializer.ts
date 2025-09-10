import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserResponseDto } from '../users/dto/user-response.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(private usersService: UsersService) {
    super();
  }

  serializeUser(user: UserResponseDto, done: (err: any, id?: string) => void): void {
    done(null, user.id);
  }

  async deserializeUser(id: string, done: (err: any, user?: UserResponseDto | null) => void): Promise<void> {
    try {
      const user = await this.usersService.findById(id);

      if (!user) {
        return done(null, null);
      }

      done(null, user);
    } catch (error) {
      done(error);
    }
  }
}
