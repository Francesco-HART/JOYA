import { SensorData } from "../../domain/models/sensor-data.model";
import { ISensorDataPort } from "../../domain/ports/sensor-data.port";

class FetchSensorsDataUseCase {
  constructor(private readonly sensorDataPort: ISensorDataPort) {}

  async execute(): Promise<SensorData[]> {
    try {
      return await this.sensorDataPort.fetch();
    } catch (error) {
      console.log(error, " error on fetch one sensor data");
    }
  }
}

export { FetchSensorsDataUseCase };
