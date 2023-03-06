import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlantModel } from '../../domain/models/plant';
import { IPlantPort, IUpdatePlantDto } from '../../domain/ports/plant.port';
import { MongoError } from 'mongodb';
import { CreatePlantDto } from '../controllers/plant/plant';
import { PlantDocument, PlantEntity } from '../entities/plant.entity';

export class PlantAdaptater implements IPlantPort {
  constructor(
    @InjectModel(PlantEntity.name)
    private readonly plantEntity: Model<PlantDocument>,
  ) {}

  async fetch(): Promise<PlantModel[]> {
    try {
      return await this.plantEntity.find();
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async fetchOne(id: string): Promise<PlantModel> {
    try {
      return await this.plantEntity.findById(id);
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async create(createPlantDto: CreatePlantDto): Promise<PlantEntity> {
    try {
      return await new this.plantEntity(createPlantDto).save();
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async deletePlant(plantId: string): Promise<PlantModel> {
    try {
      const deletedPlant = await this.plantEntity.findOneAndDelete({
        _id: plantId,
      });
      return deletedPlant;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async updatePlant(
    plantId: string,
    dto: IUpdatePlantDto,
  ): Promise<PlantModel> {
    try {
      return await this.plantEntity.findOneAndUpdate({ _id: plantId }, dto, {
        new: true,
      });
    } catch (error) {
      throw new MongoError(error);
    }
  }
}
