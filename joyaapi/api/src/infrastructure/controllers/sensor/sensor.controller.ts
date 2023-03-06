import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindMySensorsUseCase } from '../../../use-cases/sensor/find-my-sensors.use-case';
import { CreateSensorUseCase } from '../../../use-cases/sensor/create-sensor.use-case';
import { JwtAuthGuard } from '../auth/middlewares/auth.guard';
import { GetUser } from '../auth/middlewares/decorators/getUser.guard';
import {
  CreateSensorDTO,
  UpdateSensorAlertsDTO,
  UpdateSensorDTO,
} from './sensor';
import { SensorPresenter } from './sensor.presenter';
import { FetchSensorDataUseCase } from '../../../use-cases/sensor-data/fetch-sensor-data.usecase';
import { FetchOneSensorUseCase } from '../../../use-cases/sensor/find-on-sensor.use-case';
import { UpdateSensorUseCase } from '../../../use-cases/sensor/update-sensor.use-case';
import { SensorEntity } from '../../../infrastructure/entities/sensor.entity';
import { AccountTypesGuard } from '../auth/middlewares/admin.guard';
import { UserTypesEnum } from '../../../domain/models/user';
import { FetchOneSensorBySerialNumber } from '../../../use-cases/sensor/fetch-one-sensor-by-sn.use-case';
import { DeleteSensorUseCase } from '../../../use-cases/sensor/delete-sensor.usecase';
import { ResetSensorUseCase } from '../../../use-cases/sensor/reset-sensor.usecase';

@ApiTags('sensors')
@Controller('sensors')
@UseGuards(AccountTypesGuard)
@ApiResponse({ status: 500, description: 'Internal error' })
export class SensorController {
  constructor(
    private readonly createSensorUseCase: CreateSensorUseCase,
    private readonly findMySensorsUseCase: FindMySensorsUseCase,

    private readonly fetchSensorDataUseCase: FetchSensorDataUseCase,
    private readonly fetchOneSensorUseCase: FetchOneSensorUseCase,
    private readonly updateSensorUseCase: UpdateSensorUseCase,

    private readonly fetchOneSensorBySerialNmber: FetchOneSensorBySerialNumber,
    private readonly deleteSensorUseCase: DeleteSensorUseCase,

    private readonly resetSensorUseCase: ResetSensorUseCase,
  ) {}

  @Put(':serialNumber')
  @UseGuards(JwtAuthGuard)
  async updateSensor(
    @GetUser() user,
    @Body() dto: UpdateSensorDTO | UpdateSensorAlertsDTO,
    @Param('serialNumber') serialNumber: string,
  ): Promise<SensorPresenter> {
    const sensor = await this.updateSensorUseCase.execute(
      serialNumber,
      dto,
      user,
    );
    return new SensorPresenter(sensor);
  }

  @Post('reset/:sensorID')
  @UseGuards(JwtAuthGuard)
  async resetSensor(
    @GetUser() user,
    @Param('sensorID') sensorID: string,
  ): Promise<void> {
    await this.resetSensorUseCase.execute(user, sensorID);
  }

  @Patch('alerts/:serialNumber')
  @UseGuards(JwtAuthGuard)
  async updateSensorAlerts(
    @GetUser() user,
    @Body() dto: UpdateSensorAlertsDTO,
    @Param('serialNumber') serialNumber: string,
  ): Promise<SensorPresenter> {
    const sensor = await this.updateSensorUseCase.execute(
      serialNumber,
      dto,
      user,
    );
    return new SensorPresenter(sensor);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createSensor(
    @GetUser() user,
    @Body() dto: CreateSensorDTO,
  ): Promise<SensorEntity> {
    if (user.type !== UserTypesEnum.ADMIN)
      throw new ForbiddenException('vous devez re admin');
    const sensor = await this.createSensorUseCase.execute(dto);
    return sensor;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async fetchOne(
    @GetUser() user,
    @Param('id') id: string,
  ): Promise<SensorPresenter> {
    const sensor = await this.fetchOneSensorUseCase.execute(id);

    const sensorData = await this.fetchSensorDataUseCase.execute(
      sensor.serial_number,
    );

    const sensorToReturn = new SensorPresenter(sensor, sensorData);

    return sensorToReturn;
  }

  @Get('/serialnumber/:serialNumber')
  @UseGuards(JwtAuthGuard)
  async fetchOneBySerialNumber(
    @GetUser() user,
    @Param('serialNumber') serialNumber: string,
  ): Promise<SensorPresenter> {
    const sensor = await this.fetchOneSensorBySerialNmber.execute(serialNumber);
    const sensorData = await this.fetchSensorDataUseCase.execute(
      sensor.serial_number,
    );
    return new SensorPresenter(sensor, sensorData);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findMySensors(@GetUser() user): Promise<SensorPresenter[]> {
    const sensors = await this.findMySensorsUseCase.execute(user);
    const sensorsPresenter = sensors.map(async (sensor) => {
      const sensorData = await this.fetchSensorDataUseCase.execute(
        sensor.serial_number,
      );
      return new SensorPresenter(sensor, sensorData);
    });

    return Promise.all(sensorsPresenter).then((res) => res);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteSensor(
    @GetUser() user,
    @Param('id') id,
  ): Promise<SensorPresenter> {
    if (user.type !== UserTypesEnum.ADMIN) throw new ForbiddenException('');
    const sensor = await this.deleteSensorUseCase.execute(id);

    return new SensorPresenter(sensor);
  }
}
