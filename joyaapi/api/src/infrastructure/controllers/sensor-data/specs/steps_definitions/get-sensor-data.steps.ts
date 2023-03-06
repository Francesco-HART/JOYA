import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { closeInMongodConnection } from '../../../../../../test/mongo.mock';
import { createTestingModule, initApp } from '../../../../../../test/index';
import { CreateSensorDataDTO } from '../../sensor-data';
import { CreateSensorDataUseCase } from '../../../../../../src/use-cases/sensor-data/create-sensor-data.use-case';
import { SensorModel } from '../../../../../../src/domain/models/sensor';
import {
  create_sensor_12345_mock,
  create_sensor_data_12345_mock,
} from '../sensor-data-steps.mock';
import { CreateSensorUseCase } from '../../../../../../src/use-cases/sensor/create-sensor.use-case';
import { SensorData } from '../../../../../../src/domain/models/SensorData';
import { FetchSensorDataUseCase } from '../../../../../../src/use-cases/sensor-data/fetch-sensor-data.usecase';

const feature = loadFeature(
  '../api/src/infrastructure/controllers/sensor-data/specs/features/get-sensor-data.feature',
);

function subtractMonths(numOfMonths, date = new Date()) {
  date.setMonth(date.getMonth() - numOfMonths);

  return date;
}

describe('FetchLastSensorData', () => {
  let app: INestApplication;
  let sensorDataDTO: CreateSensorDataDTO;
  let sensor12345: SensorModel;
  let sensorData: SensorData;
  let createSensorDataUseCase: CreateSensorDataUseCase;
  let createSensorUseCase: CreateSensorUseCase;
  let fetchSensorDataUseCase: FetchSensorDataUseCase;

  beforeAll(async () => {
    const module: TestingModule = await createTestingModule();
    createSensorDataUseCase = module.get<CreateSensorDataUseCase>(
      CreateSensorDataUseCase,
    );
    createSensorUseCase = module.get<CreateSensorUseCase>(CreateSensorUseCase);
    fetchSensorDataUseCase = module.get<FetchSensorDataUseCase>(
      FetchSensorDataUseCase,
    );

    app = await initApp(module);
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  beforeEach(() => {
    sensorDataDTO = new CreateSensorDataDTO();
  });

  defineFeature(feature, (test) => {
    const backGround = ({ given, and }) => {
      given('The sensor with the serial number 12345 exist', async () => {
        if (!sensor12345) {
          const dto = { ...create_sensor_12345_mock };
          sensor12345 = await createSensorUseCase.execute(dto);
        }
      });
      and('data was associated with 12345 months ago', async () => {
        if (!sensorData) {
          const sensorData = await createSensorDataUseCase.execute({
            ...create_sensor_data_12345_mock,
          });
          sensorData.created_at = subtractMonths(1, sensorData.created_at);
        }
      });
    };

    test('success - get last sensor data', ({ given, and, when, then }) => {
      backGround({ given, and });
      given(/^create data associated with (.*)$/, async (arg0) => {
        await createSensorDataUseCase.execute({
          ...create_sensor_data_12345_mock,
        });
      });

      when('Get sensor data', () => {
        // pass
      });

      then('Get the last data created', async () => {
        const sensorRes = await fetchSensorDataUseCase.execute(
          sensor12345.serial_number,
        );
        expect(sensorRes.serial_number === sensorDataDTO.serial_number);
        expect(sensorRes.created_at === new Date(Date.now()));
      });
    });
  });
});
