import {
  ICreateSensorDataDto,
  ISensorDataPort,
} from "../../domain/ports/sensor-data.port";

class ReadSensorDataUseCase {
  constructor(private readonly sensorDataPort: ISensorDataPort) {}

  async execute(): Promise<ICreateSensorDataDto[]> {
    return await this.sensorDataPort.fetch();
  }
}

export { ReadSensorDataUseCase };
