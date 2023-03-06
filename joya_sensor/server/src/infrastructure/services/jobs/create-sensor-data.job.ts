import { CreateSensorDataUseCase } from "../../../usecases/sensor-data/create-sensor-data-usecase.ts";
import { FetchSensorsDataUseCase } from "../../../usecases/sensor-data/fetch-sensors-data.usecase";
import { MailerAdapter } from "../../adapters/mailer.adapter";
import { SensorDataAdapter } from "../../adapters/sensor-data.adapter";
import { FastifyInstance } from "fastify";
import { RemoveAllSensorDataUseCase } from "../../../usecases/sensor-data/remove-all-sensor-data.usecase";

class CreateSensorDataJob {
  private _createSensorDataUseCase: CreateSensorDataUseCase;
  private _fetchSensorsDataUseCase: FetchSensorsDataUseCase;

  private _removeAllSensorDataUseCase: RemoveAllSensorDataUseCase;
  constructor(fastify: FastifyInstance) {
    this._createSensorDataUseCase = new CreateSensorDataUseCase(
      new SensorDataAdapter(fastify),
      new MailerAdapter()
    );
    this._fetchSensorsDataUseCase = new FetchSensorsDataUseCase(
      new SensorDataAdapter(fastify)
    );

    this._removeAllSensorDataUseCase = new RemoveAllSensorDataUseCase(
      new SensorDataAdapter(fastify)
    );
  }

  async job() {
    try {
      const sensorsData = await this._fetchSensorsDataUseCase.execute();
      if (sensorsData)
        sensorsData.forEach(async (sensorData) => {
          await this._createSensorDataUseCase.execute(sensorData);
          await this._removeAllSensorDataUseCase.execute();
        });
    } catch (error) {
      console.log(error, " Error on job create sensor data");
    }
  }
}

export { CreateSensorDataJob };
