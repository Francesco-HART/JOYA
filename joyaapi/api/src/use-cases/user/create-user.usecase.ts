import { ICreateUserDto, IUserPort } from '../../domain/ports/user.port';
import { Injectable } from '@nestjs/common';

@Injectable()
class CreateUserUseCase {
  constructor(private readonly userPorts: IUserPort) {}

  async execute(user: ICreateUserDto) {
    return await this.userPorts.create(user);
  }
}

export { CreateUserUseCase };
