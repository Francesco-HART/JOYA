import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserModel } from '../../domain/models/user';
import { IAuthPort, ILoginDTO } from '../../domain/ports/auth.port';
import { IUserPort } from '../../domain/ports/user.port';

@Injectable()
class ValidateCredentialsUseCase {
  constructor(
    private readonly authPort: IAuthPort,
    private readonly userPort: IUserPort,
  ) {}

  async execute(dto: ILoginDTO): Promise<UserModel> {
    const user = await this.userPort.getOneByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isValidPassword = await this.authPort.verifyIfPasswordIsValid(
      user.password,
      dto.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException('Password incorrect');
    }
    return user;
  }
}

export { ValidateCredentialsUseCase };
