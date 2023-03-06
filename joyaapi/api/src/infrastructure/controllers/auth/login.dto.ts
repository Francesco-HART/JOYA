import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ILoginDTO } from '../../../domain/ports/auth.port';

class LoginDTO implements ILoginDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export { LoginDTO };
