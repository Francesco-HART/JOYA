import { Body, Get, Param, Post, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSensorDataDTO } from './sensor-data';
import { CreateSensorDataUseCase } from '../../../use-cases/sensor-data/create-sensor-data.use-case';
import { FetchSensorDataUseCase } from '../../../use-cases/sensor-data/fetch-sensor-data.usecase';
import { SensorDataPresenter } from './sensor-data.presenter';
import { AppGateway } from '../../../infrastructure/common/socket/socket-gateway';
import { FetchLastSensorsUseCase } from '../../../use-cases/sensor-data/fetch-last-sensors.use-case';

@ApiTags('sensors-data')
@Controller('sensors-data')
export class SensorDataController {
  constructor(
    private readonly createSensorDataUseCase: CreateSensorDataUseCase,
    private readonly fetchSensorDataUseCase: FetchSensorDataUseCase,
    private readonly fetchLastSensorsUseCase: FetchLastSensorsUseCase,
    private readonly appGateway: AppGateway,
  ) {}

  @Post()
  async create(
    @Body() createSensorDataDTO: CreateSensorDataDTO,
  ): Promise<SensorDataPresenter> {
    const sensorsData = await this.createSensorDataUseCase.execute(
      createSensorDataDTO,
    );
    const sensorDataPresenter = new SensorDataPresenter(sensorsData);
    if (sensorsData) this.appGateway.sendSensorData(sensorDataPresenter);
    return sensorDataPresenter;
  }

  @Get(':serialNumber')
  async fetchBySerialNumber(
    @Param('serialNumber') serialNumber: string,
  ): Promise<SensorDataPresenter> {
    const sensorsData = await this.fetchSensorDataUseCase.execute(serialNumber);
    return new SensorDataPresenter(sensorsData);
  }

  @Get('statistics/:serialNumber')
  async fetchGetLastSensors(
    @Body() { nbSensors }: { nbSensors: number },
    @Param('serialNumber') serialNumber: string,
  ): Promise<SensorDataPresenter[]> {
    const sensorsData = await this.fetchLastSensorsUseCase.execute(
      serialNumber,
      nbSensors,
    );
    return sensorsData.map((sensor) => new SensorDataPresenter(sensor));
  }
}
