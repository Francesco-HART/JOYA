import { ICreateSensorDataDto } from '../../../../domain/ports/sensor-data.port';
import { ICreateSensorDTO } from '../../../../domain/ports/sensor.port';

export const create_sensor_12345_mock: ICreateSensorDTO = {
  serial_number: '12345',
};

export const create_sensor_1AAC_mock: ICreateSensorDTO = {
  serial_number: '1AAC',
};

export const create_sensor_data_12345_mock: ICreateSensorDataDto = {
  serial_number: '12345',
  temperature: 0,
  humidity: 0,
  luminosity: 0,
  soil_fertillity: 0,
};
