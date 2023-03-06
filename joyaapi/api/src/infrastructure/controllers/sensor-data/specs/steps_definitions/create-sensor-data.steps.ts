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
  create_sensor_1AAC_mock,
} from '../sensor-data-steps.mock';
import { CreateSensorUseCase } from '../../../../../../src/use-cases/sensor/create-sensor.use-case';
import * as request from 'supertest';

const feature = loadFeature(
  '../api/src/infrastructure/controllers/sensor-data/specs/features/create-sensor-data.feature',
);

describe('CreateSensorDataSteps', () => {
  let app: INestApplication;
  let sensorDataDTO: CreateSensorDataDTO;
  let sensor12345: SensorModel;

  let sensor1AAC: SensorModel;
  let createSensorDataUseCase: CreateSensorDataUseCase;
  let createSensorUseCase: CreateSensorUseCase;

  beforeAll(async () => {
    const module: TestingModule = await createTestingModule();
    createSensorDataUseCase = module.get<CreateSensorDataUseCase>(
      CreateSensorDataUseCase,
    );
    createSensorUseCase = module.get<CreateSensorUseCase>(CreateSensorUseCase);
    app = await initApp(module);
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  beforeEach(() => {
    sensorDataDTO = new CreateSensorDataDTO();
  });

  defineFeature(feature, (test) => {
    const backgroud = ({ given, and }) => {
      given(
        'the sensor with the serial number 12345 already exists',
        async () => {
          if (!sensor12345) {
            const dto = { ...create_sensor_12345_mock };
            sensor12345 = await createSensorUseCase.execute(dto);
          }
        },
      );
      and('the sensor with the serial number 1AAC already exists', async () => {
        if (!sensor1AAC) {
          const dto = { ...create_sensor_1AAC_mock };
          sensor1AAC = await createSensorUseCase.execute(dto);
        }
      });
    };

    test('error - missing data in mandatory fields : (serial_number, temperature, humidity, luminosity, soil_fertillity )', ({
      given,
      when,
      and,
      then,
    }) => {
      backgroud({ given, and });

      given("I'm trying to create a new sensor data", () => {
        //try
      });

      when(/^I fill in a serial_number : (.*)$/, (arg0) => {
        sensorDataDTO.serial_number = create_sensor_12345_mock.serial_number;
      });

      when(/^I fill in a temperature : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.temperature = Number(arg0);
      });

      when(/^I fill in a humidity : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.humidity = Number(arg0);
      });

      when(/^I fill in a luminosity : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.luminosity = Number(arg0);
      });

      when(/^I fill in a soil_fertility : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.soil_fertillity = Number(arg0);
      });

      then('The sensor data is not created', async () => {
        await request(app.getHttpServer())
          .post('/sensors-data')
          .send(sensorDataDTO)
          .expect(400);
      });
    });

    test('error - wrong data', ({ given, when, and, then }) => {
      backgroud({ given, and });

      given("I'm trying to create a new sensor data", () => {
        //try
      });

      when(/^I fill in a serial_number : (.*)$/, (arg0) => {
        sensorDataDTO.serial_number = create_sensor_12345_mock.serial_number;
      });

      when(/^I fill in a temperature : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.temperature = Number(arg0);
      });

      when(/^I fill in a humidity : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.humidity = Number(arg0);
      });

      when(/^I fill in a luminosity : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.luminosity = Number(arg0);
      });

      when(/^I fill in a soil_fertility : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.soil_fertillity = Number(arg0);
      });

      then('The sensor data is not created', async () => {
        await request(app.getHttpServer())
          .post('/sensors-data')
          .send(sensorDataDTO)
          .expect(400);
      });
    });

    test('success - the sensor data is created : (serial_number, temperature, humidity, luminosity, soil_fertillity )', ({
      given,
      when,
      and,
      then,
    }) => {
      backgroud({ given, and });

      given("I'm trying to create a new sensor data", () => {
        //try
      });

      when(/^I fill in a serial_number : (.*)$/, (arg0) => {
        sensorDataDTO.serial_number = create_sensor_12345_mock.serial_number;
      });

      when(/^I fill in a temperature : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.temperature = Number(arg0);
      });

      when(/^I fill in a humidity : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.humidity = Number(arg0);
      });

      when(/^I fill in a luminosity : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.luminosity = Number(arg0);
      });

      when(/^I fill in a soil_fertility : (.*)$/, (arg0) => {
        if (arg0) sensorDataDTO.soil_fertillity = Number(arg0);
      });

      then('The sensor data is not created', async () => {
        const res = await request(app.getHttpServer())
          .post('/sensors-data')
          .send(sensorDataDTO)
          .expect(201);
        expect(res.body).toHaveProperty(
          'serial_number',
          sensorDataDTO.serial_number,
        );
        expect(res.body).toHaveProperty('luminosity', sensorDataDTO.luminosity);
      });
    });

    test("error - the serial number doesn't exist", ({
      given,
      when,
      and,
      then,
    }) => {
      backgroud({ given, and });

      given("I'm trying to create a new sensor data", () => {
        //try
      });

      when(/^I fill in a serial_number : (.*)$/, (arg0) => {
        sensorDataDTO.serial_number =
          create_sensor_12345_mock.serial_number + '12345';
      });

      when(/^I fill in a temperature : (.*)$/, (arg0) => {
        sensorDataDTO.soil_fertillity = Number(0);
      });

      when(/^I fill in a humidity : (.*)$/, (arg0) => {
        sensorDataDTO.soil_fertillity = Number(0);
      });

      when(/^I fill in a luminosity : (.*)$/, (arg0) => {
        sensorDataDTO.luminosity = Number(0);
      });

      when(/^I fill in a soil_fertillity : (.*)$/, (arg0) => {
        sensorDataDTO.soil_fertillity = Number(0);
      });

      then('The sensor data is not created', async () => {
        await request(app.getHttpServer())
          .post('/sensors-data')
          .send(sensorDataDTO)
          .expect(400);
      });
    });
  });
});
