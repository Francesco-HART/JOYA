import { Injectable } from '@nestjs/common';
import { SensorData } from '../../domain/models/SensorData';
import { ISensorDataPort } from '../../domain/ports/sensor-data.port';

@Injectable()
class FetchLastSensorsUseCase {
  constructor(private readonly sensorDataPort: ISensorDataPort) {}

  async execute(
    serialNumber: string,
    nbSensors: number,
  ): Promise<SensorData[]> {
    return await this.sensorDataPort.getLastSensors(serialNumber, nbSensors);
  }
}

export { FetchLastSensorsUseCase };
