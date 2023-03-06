import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserTypesEnum } from '../../../domain/models/user';
import {
  ICreateUserDto,
  IUpdateUserDTO,
} from '../../../domain/ports/user.port';

class CreateUserDTO implements ICreateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsEnum(UserTypesEnum)
  type: UserTypesEnum;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastname: string;


  @ApiProperty()
  @IsString()
  @IsOptional()
  firstname: string;



  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}

class UpdateUserDTO implements IUpdateUserDTO {
  @IsOptional()
  @IsEnum(UserTypesEnum)
  type: UserTypesEnum;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsString()
  @IsOptional()
  firstname: string;

  @IsEmail()
  @IsOptional()
  email: string;
}

export { CreateUserDTO, UpdateUserDTO };
