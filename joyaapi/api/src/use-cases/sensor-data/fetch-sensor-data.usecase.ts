import { Injectable } from '@nestjs/common';
import { SensorData } from '../../domain/models/SensorData';
import { ISensorDataPort } from '../../domain/ports/sensor-data.port';

@Injectable()
class FetchSensorDataUseCase {
  constructor(private readonly sensorPort: ISensorDataPort) {}

  async execute(serialNumber: string): Promise<SensorData> {
    const sensorsData = await this.sensorPort.fetch(serialNumber);
    return sensorsData[0];
  }
}

export { FetchSensorDataUseCase };
