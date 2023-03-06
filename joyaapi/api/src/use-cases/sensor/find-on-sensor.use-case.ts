import { Injectable } from '@nestjs/common';
import { SensorModel } from '../../domain/models/sensor';
import { ISensorPort } from '../../domain/ports/sensor.port';
@Injectable()
class FetchOneSensorUseCase {
  constructor(private readonly sensorPort: ISensorPort) {}

  async execute(id: string): Promise<SensorModel> {
    return await this.sensorPort.fetchOne(id);
  }
}

export { FetchOneSensorUseCase };
