import { Exclude, Expose } from 'class-transformer';

export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  phoneNumber: number;

  @Expose()
  firstName: string;

  @Expose()
  secondName: string;

  @Expose()
  avatar: string;

  @Expose()
  createAccountTs: Date;

  @Expose()
  lastSeenTs: Date;

  @Exclude()
  password: string;
}
