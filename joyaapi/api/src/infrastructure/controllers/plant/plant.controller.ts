import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FetchOnePlantUseCase } from '../../../use-cases/plant/fetch-one-plant';
import { FetchPlantUseCase } from '../../../use-cases/plant/fetch-plant.use-case';
import { UserTypesEnum } from '../../../domain/models/user';
import { CreatePlantUseCase } from '../../../use-cases/plant/create-plant.use-case';
import { AccountTypesGuard } from '../auth/middlewares/admin.guard';
import { JwtAuthGuard } from '../auth/middlewares/auth.guard';
import { AccountTypes } from '../auth/middlewares/decorators/accout.decorator';
import { CreatePlantDto } from './plant';
import { PlantPresenter } from './plant.presenter';
import { DeletePlantUseCase } from '../../../use-cases/plant/delete-plant.usecase';
import { UpdatePlantUseCase } from '../../../use-cases/plant/update-plant.usecase';
import { UpdatePlantDto } from './plant.dto';

@ApiTags('plants')
@Controller('plants')
@UseGuards(JwtAuthGuard, AccountTypesGuard)
@ApiResponse({ status: 500, description: 'Internal error' })
export class PlantController {
  constructor(
    private readonly createPlantUseCase: CreatePlantUseCase,
    private readonly fetchPlantUseCase: FetchPlantUseCase,
    private readonly fetchOnePlantUseCase: FetchOnePlantUseCase,
    private readonly updatePlantUseCase: UpdatePlantUseCase,
    private readonly deletePlantUseCase: DeletePlantUseCase,
  ) {}

  @Post()
  @AccountTypes([UserTypesEnum.ADMIN])
  async create(@Body() dto: CreatePlantDto): Promise<PlantPresenter> {
    const plant = await this.createPlantUseCase.execute(dto);
    return new PlantPresenter(plant);
  }

  @Get()
  async fetch(): Promise<PlantPresenter[]> {
    const plants = await this.fetchPlantUseCase.execute();
    return plants.map((plant) => new PlantPresenter(plant));
  }

  @Get(':id')
  async fetchOne(@Param('id') id: string): Promise<PlantPresenter> {
    const plant = await this.fetchOnePlantUseCase.execute(id);
    return new PlantPresenter(plant);
  }
  user;

  @AccountTypes([UserTypesEnum.ADMIN])
  @Patch(':id')
  async updatePlant(
    @Param('id') id,
    @Body() dto: UpdatePlantDto,
  ): Promise<PlantPresenter> {
    const plant = await this.updatePlantUseCase.execute(id, dto);
    return new PlantPresenter(plant);
  }

  @AccountTypes([UserTypesEnum.ADMIN])
  @Delete(':id')
  async deletePlant(@Param('id') id): Promise<PlantPresenter> {
    const plant = await this.deletePlantUseCase.execute(id);
    return new PlantPresenter(plant);
  }
}
