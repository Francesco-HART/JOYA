import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  UseGuards,
  Delete,
  Get,
  Patch,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserTypesEnum } from '../../../domain/models/user';
import { CreateUserUseCase } from '../../../use-cases/user/create-user.usecase';
import { UpdateUserUseCase } from '../../../use-cases/user/update-user.usecase';
import { CreateUserDTO } from './user.dto';
import { UpdateUserDTO } from './user.dto';
import { JwtAuthGuard } from '../../../infrastructure/controllers/auth/middlewares/auth.guard';
import { AccountTypesGuard } from '../../../infrastructure/controllers/auth/middlewares/admin.guard';
import { AccountTypes } from '../../../infrastructure/controllers/auth/middlewares/decorators/accout.decorator';
import { UserPresenter } from './user.presenter';
import { DeleteUserUseCase } from '../../../use-cases/user/delete-user.usecase';
import { GetUsersUseCase } from '../../../use-cases/user/get-users.usecase';
import { GetUserUseCase } from '../../../use-cases/user/get-user.usecase';

@ApiTags('users')
@Controller('users')
@ApiResponse({ status: 500, description: 'Internal error' })
@UseGuards(JwtAuthGuard, AccountTypesGuard)
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @AccountTypes([UserTypesEnum.ADMIN])
  @Get()
  async getUsers(): Promise<UserPresenter[]> {
    const users = await this.getUsersUseCase.execute();
    return users.map((user) => new UserPresenter(user));
  }

  @Get(':id')
  async getUser(@Param('id') id): Promise<UserPresenter> {
    const user = await this.getUserUseCase.execute(id);
    return new UserPresenter(user);
  }

  @AccountTypes([UserTypesEnum.ADMIN])
  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDTO,
  ): Promise<UserPresenter> {
    const user = await this.createUserUseCase.execute(createUserDto);
    return new UserPresenter(user);
  }

  @AccountTypes([UserTypesEnum.ADMIN])
  @Patch(':id')
  async updateUser(
    @Param('id') id,
    @Body() dto: UpdateUserDTO,
  ): Promise<UserPresenter> {
    const user = await this.updateUserUseCase.execute(id, dto);
    return new UserPresenter(user);
  }

  @AccountTypes([UserTypesEnum.ADMIN])
  @Delete(':id')
  async deleteUser(@Param('id') id): Promise<UserPresenter> {
    const user = await this.deleteUserUseCase.execute(id);
    return new UserPresenter(user);
  }
}
