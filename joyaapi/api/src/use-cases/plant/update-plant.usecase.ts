import { Injectable, NotFoundException } from '@nestjs/common';
import { IPlantPort, IUpdatePlantDto } from '../../domain/ports/plant.port';
import { PlantModel } from '../../domain/models/plant';
import { FetchOnePlantUseCase } from './fetch-one-plant';

@Injectable()
class UpdatePlantUseCase {
  constructor(
    private readonly plantPort: IPlantPort,
    private readonly fetchOnePlantUseCase: FetchOnePlantUseCase,
  ) {}

  async execute(plantId: string, dto: IUpdatePlantDto): Promise<PlantModel> {
    if (await this.fetchOnePlantUseCase.execute(plantId)) {
      return await this.plantPort.updatePlant(plantId, dto);
    }
    throw new NotFoundException();
  }
}

export { UpdatePlantUseCase };
