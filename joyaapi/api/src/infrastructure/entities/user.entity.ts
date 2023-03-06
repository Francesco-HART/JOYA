import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { UserModel, UserTypesEnum } from '../../domain/models/user';

@Schema()
class UserEntity implements UserModel {
  _id: Types.ObjectId;

  @Prop({
    type: String,
    enum: UserTypesEnum,
    default: UserTypesEnum.USER,
  })
  type: UserTypesEnum;

  @Prop({
    type: Boolean,
    default: true,
  })
  critical_alert_enabled: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  warning_alert_enabled: boolean;

  @Prop({
    type: Date,
  })
  date_critical_alert_send: boolean;

  @Prop({
    type: Boolean,
  })
  date_warning_alert_send: boolean;

  @Prop({
    type: String,
  })
  lastname: string;

  @Prop({
    type: String,
  })
  firstname: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;
}

type UserDocument = UserEntity & Document;

const UserSchema = SchemaFactory.createForClass(UserEntity);

export { UserEntity, UserDocument, UserSchema };
