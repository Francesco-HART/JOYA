import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ValidateCredentialsUseCase } from '../../../../use-cases/auth/validate-credentials.usecase';
import { ILoginDTO } from '../../../../domain/ports/auth.port';

@Injectable()
class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validateCredentialsUseCase: ValidateCredentialsUseCase) {
    super();
  }

  async validate(dto: ILoginDTO): Promise<any> {
    return await this.validateCredentialsUseCase.execute(dto);
  }
}

export { LocalStrategy };
