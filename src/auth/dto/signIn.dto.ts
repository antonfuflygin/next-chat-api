import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  phoneNumber: number;

  @IsNotEmpty()
  password: string;
}
