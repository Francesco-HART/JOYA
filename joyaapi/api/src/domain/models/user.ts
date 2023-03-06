import { Types } from 'mongoose';

enum UserTypesEnum {
  USER = 'user',
  ADMIN = 'admin',
}

interface UserModel {
  _id: Types.ObjectId;
  type: UserTypesEnum;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  critical_alert_enabled: boolean;
  warning_alert_enabled: boolean;
}

export { UserModel, UserTypesEnum };
