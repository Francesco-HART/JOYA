import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PlantEntity,
  PlantSchema,
} from '../../infrastructure/entities/plant.entity';
import { PlantController } from '../controllers/plant/plant.controller';
import { CreatePlantUseCase } from '../../use-cases/plant/create-plant.use-case';
import { IPlantPort } from '../../domain/ports/plant.port';
import { UpdatePlantUseCase } from '../../use-cases/plant/update-plant.usecase';
import { PlantAdaptater } from '../adapters/plant.adapter';
import { FetchPlantUseCase } from '../../use-cases/plant/fetch-plant.use-case';
import { FetchOnePlantUseCase } from '../../use-cases/plant/fetch-one-plant';
import { DeletePlantUseCase } from '../../use-cases/plant/delete-plant.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlantEntity.name, schema: PlantSchema },
    ]),
  ],
  controllers: [PlantController],
  providers: [
    CreatePlantUseCase,
    UpdatePlantUseCase,
    DeletePlantUseCase,
    FetchPlantUseCase,
    FetchOnePlantUseCase,
    { provide: IPlantPort, useClass: PlantAdaptater },
  ],
})
export class PlantModule {}
