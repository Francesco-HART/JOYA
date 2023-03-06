import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ICreateSensorDTO,
  ISensorPort,
  IUpdateSensorAlertsDTO,
  IUpdateSensorDTO,
} from '../../domain/ports/sensor.port';
import { UserEntity } from '../../infrastructure/entities/user.entity';
import { SensorDocument, SensorEntity } from '../entities/sensor.entity';
import { SensorModel } from '../../domain/models/sensor';
import { PlantDocument, PlantEntity } from '../entities/plant.entity';
import { MongoError } from 'mongodb';
import { UserModel } from '../../domain/models/user';

// test
export class SensorAdaptater implements ISensorPort {
  constructor(
    @InjectModel(SensorEntity.name)
    private readonly sensorEntity: Model<SensorDocument>,
    @InjectModel(PlantEntity.name)
    private readonly plantEntity: Model<PlantDocument>,
  ) {}
  async removeUserAssociated(user: UserModel, sensorId: string): Promise<void> {
    try {
      const sensor = await this.sensorEntity
        .findById(sensorId)
        .populate('user');
      if (!sensor) throw new NotFoundException('sensor introuvable');

      if (user.type !== 'admin')
        if (user._id.toString() !== sensor.user._id.toString())
          throw new ForbiddenException("Vous n'avez pas accès à ce capteur");

      await this.sensorEntity.updateOne(
        { _id: sensorId },
        {
          $set: {
            user: null,
            location: '',
            name: '',
            humidity_alert_sent: false,
            humidity_alert: 0,
            humidity_alert_enabled: false,
            luminosity_alert: 0,
            luminosity_alert_enabled: false,
            luminosity_alert_sent: false,
            temperature_alert: 0,
            temperature_alert_sent: false,
            temperature_alert_enabled: false,
            soil_fertillity_alert: 0,
            soil_fertillity_alert_sent: false,
            soil_fertillity_alert_enabled: false,
          },
        },
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchAllSensors(): Promise<SensorModel[]> {
    try {
      return await this.sensorEntity.find().populate('plant user');
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchOneBySerialNumber(serialNumber: string): Promise<SensorModel> {
    try {
      return await this.sensorEntity
        .findOne({ serial_number: serialNumber })
        .populate('plant user');
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchOne(id: string): Promise<SensorModel> {
    try {
      return await this.sensorEntity
        .findOne({ _id: id })
        .populate('plant user');
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchMy(user: UserEntity): Promise<SensorModel[]> {
    try {
      return await this.sensorEntity
        .find({ user: user._id })
        .populate('plant user');
    } catch (error) {
      throw new Error(error);
    }
  }

  isSensorUpdate(object: any): object is IUpdateSensorDTO {
    return 'plant_id' in object;
  }

  async update(
    serialNumber: string,
    user: UserModel,
    dto: IUpdateSensorDTO | IUpdateSensorAlertsDTO,
  ): Promise<SensorEntity> {
    try {
      let params = {};
      const existingSensor = await this.sensorEntity.findOne({
        serial_number: serialNumber,
      });
      if (this.isSensorUpdate(dto)) {
        const existingPlant = await this.plantEntity.findById(dto.plant_id);

        if (!existingSensor) throw new NotFoundException('sensor introuvable');

        if (!existingPlant) throw new NotFoundException('plant introuvable');

        const plandId = dto.plant_id;
        delete dto.plant_id;
        params = {
          ...dto,
          user: user._id,
          plant: plandId,
        };
      } else {
        params = { ...dto, user: user._id };
      }

      return await this.sensorEntity
        .findOneAndUpdate({ serial_number: serialNumber }, params, {
          new: true,
        })
        .populate('plant user');
    } catch (error) {
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.message, serialNumber);
      throw new MongoError(error);
    }
  }

  async create(createSensorDto: ICreateSensorDTO): Promise<SensorEntity> {
    try {
      return await new this.sensorEntity({
        ...createSensorDto,
      })
        .save()
        .then((sensor) => sensor.populate('plant user'));
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async deleteSensor(sensorId: string): Promise<SensorModel> {
    try {
      const deletedSensor = await this.sensorEntity.findOneAndDelete({
        _id: sensorId,
      });
      return deletedSensor;
    } catch (error) {
      throw new MongoError(error);
    }
  }
}
