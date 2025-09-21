import { Request } from 'express';
import { UserResponseDto } from './../../users/dto/user-response.dto';

export interface IAuthRequest extends Request {
  user: UserResponseDto;
}
