import { Request } from 'express';
import { UserResponseDto } from 'src/users/dto/user-response.dto';

export interface IRequestWithUser extends Request {
  user: UserResponseDto;
}
