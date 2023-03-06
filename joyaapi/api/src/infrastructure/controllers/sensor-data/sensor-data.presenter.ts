import { SensorData } from '../../../domain/models/SensorData';

class SensorDataPresenter {
  id: string;
  serial_number: string;
  temperature: number;
  humidity: number;
  luminosity: number;
  soil_fertillity: number;
  created_at: Date;

  constructor(sensorData: SensorData) {
    this.id = sensorData._id.toString();
    this.serial_number = sensorData.serial_number;
    this.temperature = sensorData.temperature;
    this.humidity = sensorData.humidity;
    this.luminosity = sensorData.luminosity;
    this.soil_fertillity = sensorData.soil_fertillity;
    this.created_at = sensorData.created_at;
  }
}

export { SensorDataPresenter };
