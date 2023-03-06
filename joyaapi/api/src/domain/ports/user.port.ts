import { UserModel, UserTypesEnum } from '../models/user';

abstract class ICreateUserDto {
  type?: UserTypesEnum;
  lastname?: string;
  firstname?: string;
  email: string;
  password: string;
}

abstract class IUpdateUserDTO {
  type?: UserTypesEnum;
  lastname?: string;
  firstname?: string;
  email?: string;
  password?: string;
}

abstract class IUserPort {
  abstract create(createUserDTO: ICreateUserDto): Promise<UserModel>;
  abstract fetch(): Promise<UserModel[]>;
  abstract getOneByEmail(email: string): Promise<UserModel>;
  abstract getOneById(id: string): Promise<UserModel>;
  abstract updateUser(userId: string, dto: IUpdateUserDTO): Promise<UserModel>;
  abstract deleteUser(userId: string): Promise<UserModel>;

  //abstract fetchAllAssociatedBySensor(): Promise<UserModel>;
}
export { IUserPort, ICreateUserDto, IUpdateUserDTO };
