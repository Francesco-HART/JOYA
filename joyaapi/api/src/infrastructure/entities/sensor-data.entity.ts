import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { SensorData } from '../../domain/models/SensorData';

@Schema()
class SensorDataEntity implements SensorData {
  _id: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
  })
  serial_number: string;

  @Prop({
    type: Number,
    required: true,
  })
  temperature: number;

  @Prop({
    type: Number,
    required: true,
  })
  humidity: number;

  @Prop({
    type: Number,
    required: true,
  })
  luminosity: number;

  @Prop({
    type: Number,
    required: true,
  })
  soil_fertillity: number;

  @Prop({
    type: Date,
    default: Date.now(),
  })
  created_at: Date;
}

type SensorDataDocument = SensorDataEntity & Document;

const SensorDataSchema = SchemaFactory.createForClass(SensorDataEntity);

export { SensorDataEntity, SensorDataDocument, SensorDataSchema };
