import { Injectable } from '@nestjs/common';
import { UserModel } from '../../domain/models/user';
import { IUpdateUserDTO, IUserPort } from '../../domain/ports/user.port';

@Injectable()
class UpdateUserUseCase {
  constructor(private readonly userPort: IUserPort) {}

  async execute(userId: string, dto: IUpdateUserDTO): Promise<UserModel> {
    return await this.userPort.updateUser(userId, dto);
  }
}

export { UpdateUserUseCase };
