import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAuthPort } from '../../domain/ports/auth.port';
import { IUserPort } from '../../domain/ports/user.port';
import { LoginDTO } from '../../infrastructure/controllers/auth/login.dto';

@Injectable()
class LoginUseCase {
  constructor(
    private readonly authPort: IAuthPort,
    private readonly userPort: IUserPort,
    private readonly jwtService: JwtService,
  ) {}

  async execute(dto: LoginDTO): Promise<string> {
    const user = await this.userPort.getOneByEmail(dto.email);
    return await this.authPort.login(this.jwtService, user);
  }
}

export { LoginUseCase };
