import { ISensorPort } from '../../domain/ports/sensor.port';
import { UserModel, UserTypesEnum } from '../../domain/models/user';
import { Injectable } from '@nestjs/common';

@Injectable()
class FindMySensorsUseCase {
  constructor(private readonly sensorport: ISensorPort) {}
  async execute(user: UserModel) {
    if (user.type === UserTypesEnum.ADMIN)
      return await this.sensorport.fetchAllSensors();
    return await this.sensorport.fetchMy(user);
  }
}

export { FindMySensorsUseCase };
