import { Injectable } from '@nestjs/common';
import { SensorModel } from '../../domain/models/sensor';
import { ISensorPort } from '../../domain/ports/sensor.port';

@Injectable()
class FetchOneSensorBySerialNumber {
  constructor(private readonly sensorPort: ISensorPort) {}
  async execute(serialNumber: string): Promise<SensorModel> {
    return await this.sensorPort.fetchOneBySerialNumber(serialNumber);
  }
}

export { FetchOneSensorBySerialNumber };
