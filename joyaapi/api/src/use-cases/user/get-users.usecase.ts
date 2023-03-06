import { Injectable } from '@nestjs/common';
import { UserModel } from '../../domain/models/user';
import { IUpdateUserDTO, IUserPort } from '../../domain/ports/user.port';

@Injectable()
class GetUsersUseCase {
  constructor(private readonly userPort: IUserPort) {}

  async execute(): Promise<UserModel[]> {
    return await this.userPort.fetch();
  }
}

export { GetUsersUseCase };
