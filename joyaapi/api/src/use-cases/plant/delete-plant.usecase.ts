import { Injectable, NotFoundException } from '@nestjs/common';
import { IPlantPort } from '../../domain/ports/plant.port';
import { PlantModel } from '../../domain/models/plant';
import { FetchOnePlantUseCase } from './fetch-one-plant';

@Injectable()
class DeletePlantUseCase {
  constructor(
    private readonly plantPort: IPlantPort,
    private readonly fetchOnePlantUseCase: FetchOnePlantUseCase,
  ) {}

  async execute(plantId: string): Promise<PlantModel> {
    if (await this.fetchOnePlantUseCase.execute(plantId)) {
      return await this.plantPort.deletePlant(plantId);
    }
    throw new NotFoundException();
  }
}

export { DeletePlantUseCase };
