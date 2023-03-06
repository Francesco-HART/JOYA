import { Injectable } from '@nestjs/common';
import { UserModel } from '../../domain/models/user';
import { ISensorPort } from '../../domain/ports/sensor.port';

@Injectable()
class ResetSensorUseCase {
  constructor(private readonly sensorPort: ISensorPort) {}

  async execute(user: UserModel, sensorId: string): Promise<void> {
    return this.sensorPort.removeUserAssociated(user, sensorId);
  }
}
export { ResetSensorUseCase };
