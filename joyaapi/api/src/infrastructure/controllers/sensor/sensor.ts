import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  ICreateSensorDTO,
  IUpdateSensorAlertsDTO,
  IUpdateSensorDTO,
} from '../../../domain/ports/sensor.port';
import { Types } from 'mongoose';

abstract class CreateSensorDTO implements ICreateSensorDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  serial_number: string;
}

abstract class UpdateSensorDTO implements IUpdateSensorDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  plant_id: Types.ObjectId;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  location: string;
}

abstract class UpdateSensorAlertsDTO implements IUpdateSensorAlertsDTO {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  humidity_alert: number;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  humidity_alert_enabled: boolean;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  humidity_alert_sent: boolean;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  temperature_alert: number;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  temperature_alert_enabled: boolean;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  temperature_alert_sent: boolean;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  luminosity_alert: number;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  luminosity_alert_enabled: boolean;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  luminosity_alert_sent: boolean;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  soil_fertillity_alert: number;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  soil_fertillity_alert_enabled: boolean;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  soil_fertillity_alert_sent: boolean;
}

export { CreateSensorDTO, UpdateSensorDTO, UpdateSensorAlertsDTO };
