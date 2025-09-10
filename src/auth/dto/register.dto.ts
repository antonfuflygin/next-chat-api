import { IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  phoneNumber: number;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
