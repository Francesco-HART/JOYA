import { Injectable } from '@nestjs/common';
import { IPlantPort } from '../../domain/ports/plant.port';
import { PlantModel } from '../../domain/models/plant';

@Injectable()
class FetchOnePlantUseCase {
  constructor(private readonly plantPort: IPlantPort) {}

  async execute(id: string): Promise<PlantModel> {
    return await this.plantPort.fetchOne(id);
  }
}

export { FetchOnePlantUseCase };
