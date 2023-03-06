import { Injectable } from '@nestjs/common';
import { ICreateSensorDTO, ISensorPort } from '../../domain/ports/sensor.port';

@Injectable()
class CreateSensorUseCase {
  constructor(private readonly sensorPorts: ISensorPort) {}

  async execute(sensor: ICreateSensorDTO) {
    return await this.sensorPorts.create(sensor);
  }
}

export { CreateSensorUseCase };
