import { UserTypesEnum } from '../../../../domain/models/user';
import { ICreatePlantDto } from '../../../../domain/ports/plant.port';
import { ICreateSensorDataDto } from '../../../../domain/ports/sensor-data.port';
import { ICreateSensorDTO } from '../../../../domain/ports/sensor.port';
import { ICreateUserDto } from '../../../../domain/ports/user.port';

/*************************************** Users ***************************************/
export const create_bob_user_mock: ICreateUserDto = {
  email: 'bob@bob.fr',
  password: 'user12345',
};

export const create_marika_user_mock: ICreateUserDto = {
  email: 'marika@marika.fr',
  password: 'user12345',
};

export const create_max_admin_mock: ICreateUserDto = {
  type: UserTypesEnum.ADMIN,
  email: 'max@max.fr',
  password: 'admin12345',
};

/*************************************** Sensor ***************************************/

export const create_sensor_1AAC_mock: ICreateSensorDTO = {
  serial_number: '1AAC',
};

export const create_sensor_12345_mock: ICreateSensorDTO = {
  serial_number: '12345',
};
export const create_sensor_CCC_mock: ICreateSensorDTO = {
  serial_number: 'CCC',
};
export const create_sensor_BBB_mock: ICreateSensorDTO = {
  serial_number: 'BBB',
};
export const create_sensor_AAA_mock: ICreateSensorDTO = {
  serial_number: 'AAA',
};

/*************************************** Sensor Data ***************************************/

export const create_sensor_data_12345_mock: ICreateSensorDataDto = {
  serial_number: create_sensor_12345_mock.serial_number,
  temperature: 0,
  humidity: 0,
  luminosity: 0,
  soil_fertillity: 0,
};

export const create_sensor_data_AAA_mock: ICreateSensorDataDto = {
  serial_number: create_sensor_AAA_mock.serial_number,
  temperature: 0,
  humidity: 0,
  luminosity: 0,
  soil_fertillity: 0,
};

/*************************************** Plant ***************************************/

export const create_plant_mock: ICreatePlantDto = {
  name: 'Tulipe',
  type: 'JOYA',
  luminosity_needs: { max: 0, min: 0 },
  temperature_needs: { max: 0, min: 0 },
  humidity_needs: { max: 0, min: 0 },
  fertility_needs: 0,
};
