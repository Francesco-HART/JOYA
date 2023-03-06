import { IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';
import { UserTypesEnum } from '../../../domain/models/user';
import { IUserCredentialsDTO } from '../../../domain/ports/auth.port';

class UserCredentialDTO implements IUserCredentialsDTO {
  @IsNotEmpty()
  _id: Types.ObjectId;

  @IsNotEmpty()
  type: UserTypesEnum;

  @IsNotEmpty()
  email: string;
}

export { UserCredentialDTO };
