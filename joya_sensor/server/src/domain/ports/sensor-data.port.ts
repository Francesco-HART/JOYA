import * as path from "path";
abstract class ICreateSensorDataDto {
  serial_number: string;
  temperature: number;
  humidity: number;
  luminosity: number;
  soil_fertillity: number;
  created_at: Date;
}
abstract class ISensorDataPort {
  static SENSOR_DATA_KEY_NAME = path.resolve(process.cwd(), "sensor-data.json");

  abstract create(createSensorDataDto: ICreateSensorDataDto): Promise<void>;

  abstract removeAll(): Promise<void>;
  abstract fetch(): Promise<ICreateSensorDataDto[] | any>;

  abstract fetchOneCycle(): Promise<ICreateSensorDataDto[]>;

  abstract writeData(dto: ICreateSensorDataDto): Promise<void>;
}

export { ISensorDataPort, ICreateSensorDataDto };
