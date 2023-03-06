import { ISensorDataPort } from "../../domain/ports/sensor-data.port";

class RemoveAllSensorDataUseCase {
  constructor(private readonly _sensorDataPort: ISensorDataPort) {}

  async execute(): Promise<void> {
    return await this._sensorDataPort.removeAll();
  }
}

export { RemoveAllSensorDataUseCase };
