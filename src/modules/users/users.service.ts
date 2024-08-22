import { Injectable } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { ArticleRepository } from '../repository/services/article.repository';
import { UserRepository } from '../repository/services/user.repository';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly logger: LoggerService,
    private readonly userRepository: UserRepository,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<any> {
    return await this.userRepository.save({
      name: 'Anton',
      email: 'test@gmail.com',
      password: 'Sfsdgds4534535',
    });
  }

  public async findAll(): Promise<any> {
    return `This action returns all users`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async findMe(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async updateMe(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async removeMe(id: number): Promise<any> {
    return `This action removes a #${id} user`;
  }
}
