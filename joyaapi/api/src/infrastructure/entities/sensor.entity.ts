import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { SensorModel } from '../../domain/models/sensor';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from './user.entity';
import { PlantEntity } from './plant.entity';
import { UserModel } from '../../domain/models/user';
import { PlantModel } from '../../domain/models/plant';

@Schema()
class SensorEntity implements SensorModel {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: UserEntity.name })
  user: UserModel;

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: PlantEntity.name })
  plant: PlantModel;

  @ApiProperty()
  _id: Types.ObjectId;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  serial_number;

  @ApiProperty()
  @Prop({
    type: String,
  })
  name: string;

  @ApiProperty()
  @Prop({
    type: String,
  })
  location?: string;

  @ApiProperty()
  @Prop({
    type: Number,
    min: 0,
    max: 100,
    default: 0,

  })
  humidity_alert: number;
  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,

  })
  humidity_alert_enabled: boolean;
  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,

  })
  humidity_alert_sent: boolean;

  @ApiProperty()
  @Prop({
    type: Number,
    min: 0,
    max: 100,
    default: 0,

  })
  temperature_alert: number;
  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,

  })
  temperature_alert_enabled: boolean;
  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,

  })
  temperature_alert_sent: boolean;

  @ApiProperty()
  @Prop({
    type: Number,
    min: 0,
    max: 100,
    default: 0,

  })
  luminosity_alert: number;
  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,

  })
  luminosity_alert_enabled: boolean;
  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,

  })
  luminosity_alert_sent: boolean;

  @ApiProperty()
  @Prop({
    type: Number,
    min: 0,
    max: 100,
    default: 0,

  })
  soil_fertillity_alert: number;
  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,
  })
  soil_fertillity_alert_enabled: boolean;
  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,
  })
  soil_fertillity_alert_sent: boolean;
}

type SensorDocument = SensorEntity & Document;

const SensorSchema = SchemaFactory.createForClass(SensorEntity);

export { SensorEntity, SensorDocument, SensorSchema };
