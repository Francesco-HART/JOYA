import { Injectable } from '@nestjs/common';
import { UserModel } from '../../domain/models/user';
import { IUpdateUserDTO, IUserPort } from '../../domain/ports/user.port';

@Injectable()
class GetUserUseCase {
  constructor(private readonly userPort: IUserPort) {}

  async execute(id: string): Promise<UserModel> {
    return await this.userPort.getOneById(id);
  }
}

export { GetUserUseCase };
