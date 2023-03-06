import { Injectable } from '@nestjs/common';
import { UserModel } from '../../domain/models/user';
import { IUpdateUserDTO, IUserPort } from '../../domain/ports/user.port';

@Injectable()
class DeleteUserUseCase {
  constructor(private readonly userPort: IUserPort) {}

  async execute(userId: string): Promise<UserModel> {
    return await this.userPort.deleteUser(userId);
  }
}

export { DeleteUserUseCase };
