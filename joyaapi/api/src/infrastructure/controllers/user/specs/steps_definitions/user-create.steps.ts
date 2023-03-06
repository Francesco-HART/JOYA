import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { closeInMongodConnection } from '../../../../../../test/mongo.mock';
import { createTestingModule, initApp } from '../../../../../../test/index';
import { CreateUserUseCase } from '../../../../../use-cases/user/create-user.usecase';
import { UserModel } from '../../../../../domain/models/user';
import { create_bob_admin_mock, create_lea_user_mock } from '../user.mocks';
import { CreateUserDTO } from '../../user.dto';
import * as request from 'supertest';

const feature = loadFeature(
  '../api/src/infrastructure/controllers/user/specs/features/user-create.feature',
);

describe('CreateUserSteps', () => {
  let app: INestApplication;
  let userDTO: CreateUserDTO;
  let cookie;
  let createUserUseCase: CreateUserUseCase;
  let bobAdmin: UserModel;
  let leaUser: UserModel;
  beforeAll(async () => {
    const module: TestingModule = await createTestingModule();
    createUserUseCase = module.get<CreateUserUseCase>(CreateUserUseCase);
    app = await initApp(module);
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  beforeEach(() => {
    userDTO = new CreateUserDTO();
  });

  defineFeature(feature, (test) => {
    const backgroud = ({ given }) => {
      given("l'admin Bob et l'utilisateur Lea existent", async () => {
        if (!bobAdmin) {
          const dto = { ...create_bob_admin_mock };
          bobAdmin = await createUserUseCase.execute(dto);
        }

        if (!leaUser) {
          const dto = { ...create_lea_user_mock };
          leaUser = await createUserUseCase.execute(dto);
        }
      });
    };

    test('échec - non respect des champs obligatoires : (email, password)', ({
      given,
      when,
      and,
      then,
    }) => {
      backgroud({ given });
      when(/^je renseigne un email:(.*)$/, (arg0) => {
        userDTO.email = arg0;
      });

      and(/^un mot de passe:(.*)$/, (arg0) => {
        userDTO.password = arg0;
      });

      then('je reçois une erreur', async () => {
        const res = await request(app.getHttpServer())
          .post('/auth')
          .send({
            email: create_bob_admin_mock.email,
            password: create_bob_admin_mock.password,
          })
          .expect(201);

        cookie = res.header['set-cookie'];

        return request(app.getHttpServer())
          .post('/users')
          .set('cookie', cookie)
          .send(userDTO)
          .expect(400);
      });
    });

    test('succès', ({ given, when, and, then }) => {
      backgroud({ given });

      given('je suis connecté en tant que Bob', async () => {
        const res = await request(app.getHttpServer())
          .post('/auth')
          .send({
            email: create_bob_admin_mock.email,
            password: create_bob_admin_mock.password,
          })
          .expect(201);

        cookie = res.header['set-cookie'];
      });

      when("je renseigne l'email: x-", () => {
        userDTO.email = 'coding@coding.fr';
      });

      and(/^le model de passe: user(.*)$/, (arg0) => {
        userDTO.password = 'user12345!';
      });

      and('la nom: Bart', () => {
        userDTO.lastname = 'Bart';
      });

      then("l'utilisateur est créée et sauvegardée", async () => {
        const res = await request(app.getHttpServer())
          .post('/users')
          .set('cookie', cookie)
          .send(userDTO)
          .expect(201);
        expect(res.body).toHaveProperty('email', 'coding@coding.fr');
      });
    });

    test("échec - création d'un utilisateur sans être admin'", ({
      given,
      when,
      and,
      then,
    }) => {
      backgroud({ given });

      given('je suis connecté en tant que Lea', async () => {
        const res = await request(app.getHttpServer())
          .post('/auth')
          .send({
            email: create_lea_user_mock.email,
            password: create_lea_user_mock.password,
          })
          .expect(201);

        cookie = res.header['set-cookie'];
      });

      when("je renseigne l'email: ABCD", () => {
        userDTO.email = 'coding@coding.fr';
      });

      and(/^je renseigne le mot de passe: admin(.*)$/, (arg0) => {
        userDTO.password = 'admin12345!';
      });

      then(/^je reçois une erreur (.*)$/, async (arg0) => {
        const res = await request(app.getHttpServer())
          .post('/users')
          .set('cookie', cookie)
          .send(userDTO)
          .expect(403);
      });
    });

    test("échec - création d'un utilisateur sans être connecté'", ({
      when,
      and,
      then,
      given,
    }) => {
      backgroud({ given });
      when("je renseigne l'email: ABCD", () => {
        userDTO.email = 'coding@coding.fr';
      });

      and(/^je renseigne le mot de passe: admin(.*)$/, (arg0) => {
        userDTO.email = 'admin12345!';
      });

      then(/^je reçois une erreur (.*)$/, async (arg0) => {
        const res = await request(app.getHttpServer())
          .post('/users')
          .send(userDTO)
          .expect(401);
      });
    });
  });
});
