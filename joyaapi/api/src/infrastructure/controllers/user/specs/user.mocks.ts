import { UserTypesEnum } from '../../../../domain/models/user';
import { ICreateUserDto } from '../../../../domain/ports/user.port';

export const create_bob_admin_mock: ICreateUserDto = {
  email: 'bob@bob.com',
  password: 'admin12345!',
  type: UserTypesEnum.ADMIN,
};

export const create_lea_user_mock: ICreateUserDto = {
  email: 'lea@lea.com',
  password: 'user12345!',
};
