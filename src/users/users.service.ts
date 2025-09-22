import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(userData: Pick<User, 'phoneNumber' | 'password'>): Promise<User> {
    const isUserExist = await this.findByPhoneNumber(userData.phoneNumber);
    if (isUserExist) {
      throw new ConflictException('Пользователь с таким телефонным номером уже существует');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });

    return await this.userRepository.save(user);
  }

  async findById(id: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findByPhoneNumber(phoneNumber: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { phoneNumber } });
  }

  async findByUsername(username: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { username } });
  }
}
