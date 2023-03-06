import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Needs } from '../../../domain/models/plant';
import { ICreatePlantDto } from '../../../domain/ports/plant.port';

abstract class NeedsCreateDto implements Needs {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  max: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  min: number;
}

abstract class CreatePlantDto implements ICreatePlantDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  luminosity_needs: NeedsCreateDto;

  @ApiProperty()
  @IsNotEmpty()
  temperature_needs: NeedsCreateDto;

  @ApiProperty()
  @IsNotEmpty()
  humidity_needs: NeedsCreateDto;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  fertility_needs: number;
}

export { CreatePlantDto };
export type { NeedsCreateDto };
