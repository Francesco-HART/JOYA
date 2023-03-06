import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty, IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserTypesEnum } from '../../../domain/models/user';
import {
  ICreateUserDto,
  IUpdateUserDTO,
} from '../../../domain/ports/user.port';
import {IUpdatePlantDto} from "../../../domain/ports/plant.port";
import {Needs} from "../../../domain/models/plant";

class UpdatePlantDto implements IUpdatePlantDto {
  @IsNumber()
  @IsOptional()
  fertility_needs: number;

  @IsOptional()
  humidity_needs: Needs;

  @IsOptional()
  luminosity_needs: Needs;

  @IsOptional()
  temperature_needs: Needs;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  type: string;

}

export { UpdatePlantDto };
