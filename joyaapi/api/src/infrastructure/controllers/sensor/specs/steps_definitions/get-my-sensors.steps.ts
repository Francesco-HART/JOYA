import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { closeInMongodConnection } from '../../../../../../test/mongo.mock';
import { createTestingModule, initApp } from '../../../../../../test/index';
import { SensorModel } from '../../../../../../src/domain/models/sensor';
import { CreateSensorUseCase } from '../../../../../../src/use-cases/sensor/create-sensor.use-case';
import { UserModel } from '../../../../../../src/domain/models/user';
import { CreateUserUseCase } from '../../../../../../src/use-cases/user/create-user.usecase';
import {
  create_bob_user_mock,
  create_marika_user_mock,
  create_max_admin_mock,
  create_plant_mock,
  create_sensor_12345_mock,
  create_sensor_AAA_mock,
  create_sensor_BBB_mock,
  create_sensor_CCC_mock,
} from '../sensor-steps.mock';
import * as request from 'supertest';
import { CreatePlantUseCase } from '../../../../../../src/use-cases/plant/create-plant.use-case';
import { PlantModel } from '../../../../../../src/domain/models/plant';

const feature = loadFeature(
  '../api/src/infrastructure/controllers/sensor/specs/features/get-my-sensors.feature',
);

describe('FetchLastSensorData', () => {
  let app: INestApplication;
  let maxAdmin: UserModel;
  let marikaUser: UserModel;
  let bobUser: UserModel;
  let sensor12345: SensorModel;
  let sensorCCC: SensorModel;
  let sensorBBB: SensorModel;
  let sensorAAA: SensorModel;
  let plant: PlantModel;
  let createSensorUseCase: CreateSensorUseCase;
  let createUserUseCase: CreateUserUseCase;
  let createPlantUseCase: CreatePlantUseCase;

  let cookie;
  beforeAll(async () => {
    const module: TestingModule = await createTestingModule();
    createSensorUseCase = module.get<CreateSensorUseCase>(CreateSensorUseCase);
    createUserUseCase = module.get<CreateUserUseCase>(CreateUserUseCase);
    createPlantUseCase = module.get<CreatePlantUseCase>(CreatePlantUseCase);
    app = await initApp(module);
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  beforeEach(() => {
    // pass
  });

  defineFeature(feature, (test) => {
    const backGround = ({ given, and }) => {
      given('Max (admin), Marika (user) and Bob (user) exist', async () => {
        if (!maxAdmin) {
          const dto = { ...create_max_admin_mock };
          maxAdmin = await createUserUseCase.execute(dto);
        }
        if (!marikaUser) {
          const dto = { ...create_marika_user_mock };
          marikaUser = await createUserUseCase.execute(dto);
        }
        if (!bobUser) {
          const dto = { ...create_bob_user_mock };
          bobUser = await createUserUseCase.execute(dto);
        }
        if (!plant) {
          const dto = { ...create_plant_mock };

          plant = await createPlantUseCase.execute(dto);
        }
      });
      and(
        'the sensor with the serial number 12345 exist and is assigned to Marika',
        async () => {
          if (!sensor12345) {
            sensor12345 = await createSensorUseCase.execute({
              ...create_sensor_12345_mock,
            });

            const res = await request(app.getHttpServer())
              .post('/auth')
              .send({
                email: create_marika_user_mock.email,
                password: create_marika_user_mock.password,
              })
              .expect(201);

            cookie = res.header['set-cookie'];
            await request(app.getHttpServer())
              .put('/sensors/' + sensor12345.serial_number)
              .set('cookie', cookie)
              .send({
                plant_id: plant._id,
                name: marikaUser.email,
              })
              .expect(200);
          }
        },
      );
      and(
        'the sensor with the serial number CCC exist and is assigned to Marika',
        async () => {
          if (!sensorCCC) {
            sensorCCC = await createSensorUseCase.execute({
              ...create_sensor_CCC_mock,
            });
            const res = await request(app.getHttpServer())
              .post('/auth')
              .send({
                email: create_marika_user_mock.email,
                password: create_marika_user_mock.password,
              })
              .expect(201);

            cookie = res.header['set-cookie'];
            await request(app.getHttpServer())
              .put('/sensors/' + sensorCCC.serial_number)
              .set('cookie', cookie)
              .send({
                plant_id: plant._id,
                name: create_marika_user_mock.email,
              })
              .expect(200);
          }
        },
      );
      and(
        'the sensor with the serial number BBB exist and is assigned to Bob',
        async () => {
          if (!sensorBBB) {
            sensorBBB = await createSensorUseCase.execute({
              ...create_sensor_BBB_mock,
            });
            const res = await request(app.getHttpServer())
              .post('/auth')
              .send({
                email: create_bob_user_mock.email,
                password: create_bob_user_mock.password,
              })
              .expect(201);

            cookie = res.header['set-cookie'];
            await request(app.getHttpServer())
              .put('/sensors/' + sensorBBB.serial_number)
              .set('cookie', cookie)
              .send({
                plant_id: plant._id,
                name: marikaUser.email,
              })
              .expect(200);
          }
        },
      );
      and(
        'the sensor with the serial number AAA exist and is not assigned to any user',
        async () => {
          if (!sensorAAA) {
            sensorAAA = await createSensorUseCase.execute({
              ...create_sensor_AAA_mock,
            });
          }
        },
      );
    };

    test('success - get my sensors (user)', ({ given, and, when, then }) => {
      backGround({ given, and });
      given('Marika is logged in', async () => {
        const res = await request(app.getHttpServer())
          .post('/auth')
          .send({
            email: create_marika_user_mock.email,
            password: create_marika_user_mock.password,
          })
          .expect(201);

        cookie = res.header['set-cookie'];
      });

      when('she tries to get the data of her sensors', () => {
        // pass
      });

      then(
        'she gets a response with the status code 200 and an array with 2 sensors',
        async (arg0, arg1) => {
          const res = await request(app.getHttpServer())
            .get('/sensors')
            .set('cookie', cookie)
            .send()
            .expect(200);

          expect(res.body.length).toBe(2);
        },
      );
    });
    test('success - get sensors (admin)', ({ given, when, and, then }) => {
      backGround({ given, and });

      given('Max is logged in', async () => {
        const res = await request(app.getHttpServer())
          .post('/auth')
          .send({
            email: create_max_admin_mock.email,
            password: create_max_admin_mock.password,
          })
          .expect(201);

        cookie = res.header['set-cookie'];
      });

      when('He tries to get the data of his sensors', () => {
        // pass
      });

      then(
        'He gets a response with the status code 200 and an array with 4 sensors',
        async (arg0, arg1) => {
          const res = await request(app.getHttpServer())
            .get('/sensors')
            .set('cookie', cookie)
            .send()
            .expect(200);
          expect(res.body.length).toBe(4);
        },
      );
    });
    test('success - get sensor (Bob)', ({ given, when, and, then }) => {
      backGround({ given, and });

      given('Bob is logged in', async () => {
        const res = await request(app.getHttpServer())
          .post('/auth')
          .send({
            email: create_bob_user_mock.email,
            password: create_bob_user_mock.password,
          })
          .expect(201);

        cookie = res.header['set-cookie'];
      });

      when('He tries to get his sensor data', () => {
        // pass
      });

      then(
        'He gets a response with the status code 200 and an array with 1 sensor',
        async (arg0, arg1) => {
          const res = await request(app.getHttpServer())
            .get('/sensors')
            .set('cookie', cookie)
            .send()
            .expect(200);
          expect(res.body.length).toBe(1);
        },
      );
    });
  });
});
