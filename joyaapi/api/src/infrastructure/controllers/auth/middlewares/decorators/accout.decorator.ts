import { SetMetadata } from '@nestjs/common';
import { UserTypesEnum } from '../../../../../domain/models/user';

export const AccountTypes = (accountTypes: UserTypesEnum[]) =>
  SetMetadata('types', accountTypes);
