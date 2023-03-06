import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UpdateUserUseCase } from '../../use-cases/user/update-user.usecase';
import { IUserPort } from '../../domain/ports/user.port';
import { CreateUserUseCase } from '../../use-cases/user/create-user.usecase';
import { UserAdapter } from '../adapters/user.adapter';
import { UserController } from '../controllers/user/user.controller';
import { UserEntity, UserSchema } from '../entities/user.entity';
import { DeleteUserUseCase } from '../../use-cases/user/delete-user.usecase';
import { GetUsersUseCase } from '../../use-cases/user/get-users.usecase';
import { GetUserUseCase } from '../../use-cases/user/get-user.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [
    UpdateUserUseCase,
    CreateUserUseCase,
    DeleteUserUseCase,
    GetUsersUseCase,
    GetUserUseCase,
    { provide: IUserPort, useClass: UserAdapter },
  ],
})
export class UserModule {}
