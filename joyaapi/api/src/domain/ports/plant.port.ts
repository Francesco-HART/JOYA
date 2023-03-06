import { Needs, PlantModel } from '../models/plant';

interface ICreatePlantDto {
  type: string;
  name: string;
  luminosity_needs: Needs;
  temperature_needs: Needs;
  humidity_needs: Needs;
  fertility_needs: number;
}

abstract class IUpdatePlantDto {
  type: string;
  name: string;
  luminosity_needs: Needs;
  temperature_needs: Needs;
  humidity_needs: Needs;
  fertility_needs: number;
}

abstract class IPlantPort {
  abstract create(dto: ICreatePlantDto): Promise<PlantModel>;
  abstract fetch(): Promise<PlantModel[]>;
  abstract fetchOne(id: string): Promise<PlantModel>;
  abstract updatePlant(
    plantId: string,
    dto: IUpdatePlantDto,
  ): Promise<PlantModel>;
  abstract deletePlant(plantId: string): Promise<PlantModel>;
}

export { IPlantPort, ICreatePlantDto, IUpdatePlantDto };
