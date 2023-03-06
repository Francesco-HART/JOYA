import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSensorDataDTO } from '../controllers/sensor-data/sensor-data';
import { SensorData } from '../../domain/models/SensorData';
import { ISensorDataPort } from '../../domain/ports/sensor-data.port';
import {
  SensorDocument,
  SensorEntity,
} from '../../infrastructure/entities/sensor.entity';
import {
  SensorDataDocument,
  SensorDataEntity,
} from '../entities/sensor-data.entity';
import { MongoError } from 'mongodb';
import { NotFoundException } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';

export class SensorDataAdaptateur implements ISensorDataPort {
  @WebSocketServer() server;

  constructor(
    @InjectModel(SensorDataEntity.name)
    private readonly sensorDataEntity: Model<SensorDataDocument>,
    @InjectModel(SensorEntity.name)
    private readonly sensorEntity: Model<SensorDocument>,
  ) {}

  async getLastSensors(
    serialNumber: string,
    nbSensors: number,
  ): Promise<SensorData[]> {
    try {
      const sensors = await this.sensorDataEntity
        .find({ serial_number: serialNumber })
        .sort({ created_at: -1 })
        .limit(nbSensors ? nbSensors : 50);
      return sensors;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async create(
    createSensorDataDto: CreateSensorDataDTO,
  ): Promise<SensorDataEntity> {
    try {
      const result = await this.sensorEntity.countDocuments({
        serial_number: createSensorDataDto.serial_number,
      });
      if (!result) {
        throw new NotFoundException('');
      }

      const savedData = await new this.sensorDataEntity(
        createSensorDataDto,
      ).save();
      return savedData.save();
    } catch (error) {
      if (error instanceof NotFoundException)
        throw new NotFoundException(
          "Impossible de créer la data le numero de serie n'existe pas ",
          createSensorDataDto.serial_number,
        );
      throw new MongoError(error);
    }
  }

  async fetch(serialNumber: string): Promise<SensorData[]> {
    try {
      const sensors = await this.sensorDataEntity
        .find({ serial_number: serialNumber })
        .sort({ created_at: -1 })
        .limit(1);
      return sensors;
    } catch (error) {
      throw new MongoError(error);
    }
  }
}
