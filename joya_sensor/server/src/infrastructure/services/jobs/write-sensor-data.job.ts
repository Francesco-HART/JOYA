import { FastifyInstance } from "fastify";
import { SensorDataAdapter } from "../../adapters/sensor-data.adapter";
import { WriteSensorDataUseCase } from "../../../usecases/sensor-data/write-sensor-data.usecase";
import { FetchOneCycleSensorDataUseCase } from "../../../usecases/sensor-data/fetch-one-sensor-data.usecase";

class WriteSensorDataJob {
  private _writeSensorDataUseCase: WriteSensorDataUseCase;
  private _fetchOneCycleSensorDataUseCase: FetchOneCycleSensorDataUseCase;
  constructor(fastify: FastifyInstance) {
    this._writeSensorDataUseCase = new WriteSensorDataUseCase(
      new SensorDataAdapter(fastify)
    );
    this._fetchOneCycleSensorDataUseCase = new FetchOneCycleSensorDataUseCase(
      new SensorDataAdapter(fastify)
    );
  }
orDat
  async job() {
    try {
      const sensorsData = await this._fetchOneCycleSensorDataUseCase.execute();

      if (sensorsData.length > 0)
        sensorsData.forEach(
          async (sensorData) =>
            await this._writeSensorDataUseCase.execute(sensorData)
        );
    } catch (error) {
      console.log(error, " Error on job write sensor data ");
    }
  }
}

export { WriteSensorDataJob };
