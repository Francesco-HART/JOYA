import { ApiProperty } from '@nestjs/swagger';
import { Needs, PlantModel } from '../../../domain/models/plant';

class PlantPresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  luminosity_needs: Needs;

  @ApiProperty()
  temperature_needs: Needs;

  @ApiProperty()
  humidity_needs: Needs;

  @ApiProperty()
  fertility_needs: number;

  constructor(plant: PlantModel) {
    this.id = plant._id.toString();
    this.type = plant.type;
    this.name = plant.name;
    this.luminosity_needs = plant.luminosity_needs;
    this.temperature_needs = plant.temperature_needs;
    this.humidity_needs = plant.humidity_needs;
    this.fertility_needs = plant.fertility_needs;
  }
}

export { PlantPresenter };
