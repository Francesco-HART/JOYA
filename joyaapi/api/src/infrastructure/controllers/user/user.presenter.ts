import { ApiProperty } from '@nestjs/swagger';
import { UserModel, UserTypesEnum } from '../../../domain/models/user';

class UserPresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  type: UserTypesEnum;
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;

  constructor(user: UserModel) {
    this.id = user._id.toString();
    this.email = user.email;
    this.type = user.type;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
  }
}

export { UserPresenter };
