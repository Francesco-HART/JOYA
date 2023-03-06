import { SensorData } from "../../domain/models/sensor-data.model";
import { IMailerPort } from "../../domain/ports/mailer.port";
import { ISensorDataPort } from "../../domain/ports/sensor-data.port";

class CreateSensorDataUseCase {
  constructor(
    private readonly sensorDataPort: ISensorDataPort,
    private readonly mailerPort: IMailerPort
  ) {}

  async execute(dto: SensorData): Promise<void> {
    try {
      await this.sensorDataPort.create(dto);
    } catch (error) {
      console.log(error, "erro on create sensor data usecase");
    }
  }
}

export { CreateSensorDataUseCase };
