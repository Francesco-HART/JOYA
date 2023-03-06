import {
  ICreateSensorDataDto,
  ISensorDataPort,
} from "../../domain/ports/sensor-data.port";

class WriteSensorDataUseCase {
  constructor(private readonly _sensorDataPort: ISensorDataPort) {}

  async execute(dto: ICreateSensorDataDto): Promise<void> {
    return await this._sensorDataPort.writeData(dto);
  }
}

export { WriteSensorDataUseCase };
