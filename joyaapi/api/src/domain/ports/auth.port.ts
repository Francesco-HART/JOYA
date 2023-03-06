import { Types } from 'mongoose';
import { UserModel, UserTypesEnum } from '../models/user';

interface ILoginDTO {
  email: string;
  password: string;
}

interface IUserCredentialsDTO {
  _id: Types.ObjectId;
  type: UserTypesEnum;
  email: string;
}

abstract class IAuthPort {
  abstract login(jwtService: any, dto: UserModel): string;
  abstract getProfile(id: string): Promise<UserModel>;

  abstract verifyIfPasswordIsValid(
    hashedPassword: string,
    password: string,
  ): Promise<boolean>;
}

export { IAuthPort, ILoginDTO, IUserCredentialsDTO };
