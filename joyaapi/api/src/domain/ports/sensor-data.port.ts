import { SensorData } from '../models/SensorData';

abstract class ICreateSensorDataDto {
  serial_number: string;
  temperature: number;
  humidity: number;
  luminosity: number;
  soil_fertillity: number;
}
abstract class ISensorDataPort {
  abstract create(
    createSensorDataDto: ICreateSensorDataDto,
  ): Promise<SensorData>;
  abstract fetch(serialNumber: string): Promise<SensorData[]>;

  abstract getLastSensors(
    serialNumber: string,
    nbSensors: number,
  ): Promise<SensorData[]>;
}

export { ISensorDataPort, ICreateSensorDataDto };
