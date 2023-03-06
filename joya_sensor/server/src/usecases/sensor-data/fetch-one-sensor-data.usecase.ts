import {
  ICreateSensorDataDto,
  ISensorDataPort,
} from "../../domain/ports/sensor-data.port";

class FetchOneCycleSensorDataUseCase {
  constructor(private readonly sensorDataPort: ISensorDataPort) {}

  async execute(): Promise<ICreateSensorDataDto[]> {
    try {
      return await this.sensorDataPort.fetchOneCycle();
    } catch (error) {
      console.log(error, " error on fetch one sensor data");
    }
  }
}

export { FetchOneCycleSensorDataUseCase };
