import { Injectable } from '@nestjs/common';
import { IPlantPort } from '../../domain/ports/plant.port';
import { PlantModel } from '../../domain/models/plant';

@Injectable()
class FetchPlantUseCase {
  constructor(private readonly plantPort: IPlantPort) {}

  async execute(): Promise<PlantModel[]> {
    return await this.plantPort.fetch();
  }
}

export { FetchPlantUseCase };
