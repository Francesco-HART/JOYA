import { Injectable } from '@nestjs/common';
import { UserModel } from '../../domain/models/user';
import {
  ISensorPort,
  IUpdateSensorAlertsDTO,
  IUpdateSensorDTO,
} from '../../domain/ports/sensor.port';

@Injectable()
class UpdateSensorUseCase {
  constructor(private readonly sensorPort: ISensorPort) {}
  async execute(
    id: string,
    dto: IUpdateSensorDTO | IUpdateSensorAlertsDTO,
    user: UserModel,
  ) {
    return await this.sensorPort.update(id, user, dto);
  }
}
export { UpdateSensorUseCase };
