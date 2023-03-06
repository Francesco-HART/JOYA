import { Injectable } from '@nestjs/common';
import { PlantModel } from '../../domain/models/plant';
import { ICreatePlantDto, IPlantPort } from '../../domain/ports/plant.port';

@Injectable()
class CreatePlantUseCase {
  constructor(private readonly plantPort: IPlantPort) {}
  async execute(dto: ICreatePlantDto): Promise<PlantModel> {
    return await this.plantPort.create(dto);
  }
}

export { CreatePlantUseCase };
