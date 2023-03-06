import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Needs, PlantModel } from '../../domain/models/plant';
import { ApiProperty } from '@nestjs/swagger';

const NeedsType = { max: { type: Number }, min: { type: Number } };

class NeedsEntity implements Needs {
  @ApiProperty()
  @Prop({
    type: Number,
    required: true,
  })
  max: number;

  @ApiProperty()
  @Prop({
    type: Number,
    required: true,
  })
  min: number;
}

@Schema()
class PlantEntity implements PlantModel {
  @ApiProperty()
  _id: Types.ObjectId;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  name: string;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  type: string;

  @ApiProperty()
  @Prop({
    type: NeedsType,
    required: true,
  })
  luminosity_needs: NeedsEntity;

  @ApiProperty()
  @Prop({
    type: NeedsType,
    required: true,
  })
  temperature_needs: NeedsEntity;

  @ApiProperty()
  @Prop({
    type: NeedsType,
    required: true,
  })
  humidity_needs: NeedsEntity;

  @ApiProperty()
  @Prop({
    type: Number,
    required: true,
  })
  fertility_needs: number;
}

type PlantDocument = PlantEntity & Document;

const PlantSchema = SchemaFactory.createForClass(PlantEntity);

export { PlantEntity, PlantDocument, PlantSchema, NeedsType };
