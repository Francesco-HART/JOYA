import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FetchSensorDataUseCase } from '../../use-cases/sensor-data/fetch-sensor-data.usecase';
import { ISensorDataPort } from '../../domain/ports/sensor-data.port';
import { CreateSensorDataUseCase } from '../../use-cases/sensor-data/create-sensor-data.use-case';

import { SensorDataAdaptateur } from '../adapters/sensor-data.adaptateur';
import { SensorDataController } from '../controllers/sensor-data/sensor-data.controller';
import {
  SensorDataEntity,
  SensorDataSchema,
} from '../entities/sensor-data.entity';
import { SensorEntity, SensorSchema } from '../entities/sensor.entity';
import { AppGateway } from '../common/socket/socket-gateway';
import { FetchLastSensorsUseCase } from '../../use-cases/sensor-data/fetch-last-sensors.use-case';

import { SensorModule } from './sensor.module';
import { MailModule } from '../mailer/mail.module';

@Module({
  imports: [
    MailModule,
    SensorModule,
    MongooseModule.forFeature([
      { name: SensorDataEntity.name, schema: SensorDataSchema },
    ]),
    MongooseModule.forFeature([
      { name: SensorEntity.name, schema: SensorSchema },
    ]),
    AppGateway,
  ],
  controllers: [SensorDataController],
  providers: [
    CreateSensorDataUseCase,
    FetchSensorDataUseCase,
    FetchLastSensorsUseCase,
    { provide: ISensorDataPort, useClass: SensorDataAdaptateur },
  ],
  exports: [FetchSensorDataUseCase],
})
export class SensorDataModule {}
