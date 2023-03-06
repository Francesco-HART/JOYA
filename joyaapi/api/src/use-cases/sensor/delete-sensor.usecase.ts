import { Injectable, NotFoundException } from '@nestjs/common';
import { SensorModel } from '../../domain/models/sensor';
import { ISensorPort } from '../../domain/ports/sensor.port';
import { FetchOneSensorUseCase } from './find-on-sensor.use-case';

@Injectable()
class DeleteSensorUseCase {
  constructor(
    private readonly sensorPort: ISensorPort,
    private readonly fetchOneSensorUseCase: FetchOneSensorUseCase,
  ) {}
  //pass pip
  async execute(sensorId: string): Promise<SensorModel> {
    if (await this.fetchOneSensorUseCase.execute(sensorId)) {
      return await this.sensorPort.deleteSensor(sensorId);
    }
    throw new NotFoundException();
  }
}

export { DeleteSensorUseCase };
