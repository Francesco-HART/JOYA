import { ApiProperty } from '@nestjs/swagger';
import { SensorModel } from '../../../domain/models/sensor';
import { UserPresenter } from '../user/user.presenter';
import { PlantPresenter } from '../plant/plant.presenter';
import { SensorDataEntity } from '../../../infrastructure/entities/sensor-data.entity';
import { SensorData } from '../../../domain/models/SensorData';
import { SensorDataPresenter } from '../sensor-data/sensor-data.presenter';

class SensorPresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  user: UserPresenter | null;
  @ApiProperty()
  plant: PlantPresenter | null;
  @ApiProperty()
  name: string;
  @ApiProperty()
  location?: string;
  @ApiProperty()
  serial_number: string;

  @ApiProperty()
  sensor_data?: SensorDataPresenter;


  @ApiProperty()
  humidity_alert: number;
  @ApiProperty()
  humidity_alert_enabled: boolean;
  @ApiProperty()
  humidity_alert_sent: boolean;

  @ApiProperty()
  temperature_alert: number;
  @ApiProperty()
  temperature_alert_enabled: boolean;
  @ApiProperty()
  temperature_alert_sent: boolean;
  @ApiProperty()
  luminosity_alert: number;
  @ApiProperty()
  luminosity_alert_enabled: boolean;
  @ApiProperty()
  luminosity_alert_sent: boolean;
  @ApiProperty()
  soil_fertillity_alert: number;
  @ApiProperty()
  soil_fertillity_alert_enabled: boolean;
  @ApiProperty()
  soil_fertillity_alert_sent: boolean;

  constructor(sensor: SensorModel, sensor_data?: SensorData) {
    this.id = sensor._id.toString();
    this.user = sensor.user ? new UserPresenter(sensor.user) : null;
    this.plant = sensor.plant ? new PlantPresenter(sensor.plant) : null;
    this.name = sensor.name;
    this.location = sensor.location || '';
    this.serial_number = sensor.serial_number;

    this.humidity_alert_sent = sensor.humidity_alert_sent;
    this.humidity_alert = sensor.humidity_alert;
    this.humidity_alert_enabled = sensor.humidity_alert_enabled;

    this.luminosity_alert = sensor.luminosity_alert;
    this.luminosity_alert_enabled = sensor.luminosity_alert_enabled;
    this.luminosity_alert_sent = sensor.luminosity_alert_sent;
    this.temperature_alert = sensor.temperature_alert;
    this.temperature_alert_sent = sensor.temperature_alert_sent;
    this.temperature_alert_enabled = sensor.temperature_alert_enabled;

    this.soil_fertillity_alert = sensor.soil_fertillity_alert;
    this.soil_fertillity_alert_sent = sensor.soil_fertillity_alert_sent;
    this.soil_fertillity_alert_enabled = sensor.soil_fertillity_alert_enabled;
    if (sensor_data) this.sensor_data = new SensorDataPresenter(sensor_data);
  }
}

export { SensorPresenter };
