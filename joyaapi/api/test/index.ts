import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoExceptionsFilter } from '../src/infrastructure/common/exceptions/MongoExceptionFilter';
import { AuthModule } from '../src/infrastructure/modules/auth.module';
import { SensorDataModule } from '../src/infrastructure/modules/sensor-data.module';
import { SensorModule } from '../src/infrastructure/modules/sensor.module';
import { UserModule } from '../src/infrastructure/modules/user.module';

import { rootMongooseTestModule } from './mongo.mock';
import * as cookieParser from 'cookie-parser';
import { SocketModule } from '../src/infrastructure/modules/socket.module';
import { PlantModule } from '../src/infrastructure/modules/plant.module';

// import { MongoExceptionsFilter } from '../src/MongoExceptionsFilter';

export const initApp = async (
  module: TestingModule,
): Promise<INestApplication> => {
  const app = module.createNestApplication();
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new MongoExceptionsFilter());
  await app.init();
  return app;
};

export const createTestingModule = async () => {
  return await Test.createTestingModule({
    imports: [
      rootMongooseTestModule(),
      ConfigModule.forRoot({
        isGlobal: true,
        cache: true,
        envFilePath: '.test.env',
      }),
      UserModule,
      AuthModule,
      SensorDataModule,
      SensorModule,
      SocketModule,
      PlantModule,
    ],
  }).compile();
};
