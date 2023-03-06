import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ISensorPort } from '../../domain/ports/sensor.port';
import { CreateSensorUseCase } from '../../use-cases/sensor/create-sensor.use-case';
import { SensorAdaptater } from '../adapters/sensor.adapter';
import { SensorController } from '../controllers/sensor/sensor.controller';
import { FindMySensorsUseCase } from '../../use-cases/sensor/find-my-sensors.use-case';
import { SensorEntity, SensorSchema } from '../entities/sensor.entity';
import { PlantEntity, PlantSchema } from '../entities/plant.entity';
import { SensorDataModule } from './sensor-data.module';
import { FetchOneSensorUseCase } from '../../use-cases/sensor/find-on-sensor.use-case';
import { UpdateSensorUseCase } from '../../use-cases/sensor/update-sensor.use-case';
import { FetchOneSensorBySerialNumber } from '../../use-cases/sensor/fetch-one-sensor-by-sn.use-case';
import { DeleteSensorUseCase } from '../../use-cases/sensor/delete-sensor.usecase';
import { ResetSensorUseCase } from '../../use-cases/sensor/reset-sensor.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SensorEntity.name, schema: SensorSchema },
    ]),

    MongooseModule.forFeature([
      { name: PlantEntity.name, schema: PlantSchema },
    ]),
    forwardRef(() => SensorDataModule),
  ],
  controllers: [SensorController],
  providers: [
    UpdateSensorUseCase,
    CreateSensorUseCase,
    DeleteSensorUseCase,
    FindMySensorsUseCase,
    FetchOneSensorUseCase,
    FetchOneSensorBySerialNumber,
    ResetSensorUseCase,
    { provide: ISensorPort, useClass: SensorAdaptater },
  ],

  exports: [ISensorPort],
})
export class SensorModule {}
