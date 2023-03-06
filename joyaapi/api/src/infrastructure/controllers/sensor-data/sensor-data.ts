import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ICreateSensorDataDto } from '../../../domain/ports/sensor-data.port';

class CreateSensorDataDTO implements ICreateSensorDataDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  serial_number: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  temperature: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  humidity: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  luminosity: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  soil_fertillity: number;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  created_at?: Date;
}

export { CreateSensorDataDTO };
