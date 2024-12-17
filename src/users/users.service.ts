import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.repo.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.repo.save(newUser);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.find({ where: { id } });
  }
}
