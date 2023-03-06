import { CreateSensorDataDTO } from '../../infrastructure/controllers/sensor-data/sensor-data';
import { ISensorDataPort } from '../../domain/ports/sensor-data.port';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ISensorPort } from '../../domain/ports/sensor.port';
import { SensorModel } from '../../domain/models/sensor';
import { MailerService } from '@nestjs-modules/mailer';
import mailAlertHumidity from '../../infrastructure/mailer/mails/alert-humidity';
import { UpdateSensorAlertsDTO } from '../../infrastructure/controllers/sensor/sensor';
import mailAlertLuminosity from '../../infrastructure/mailer/mails/alert- luminosity';
import mailAlertTemperature from '../../infrastructure/mailer/mails/alert-temperature';

@Injectable()
class CreateSensorDataUseCase {
  mailerService: MailerService;
  constructor(
    private readonly sensorDataPort: ISensorDataPort,
    private readonly sensorPort: ISensorPort,
    private readonly mailer: MailerService,
  ) {}

  async execute(creatSensorDataDto: CreateSensorDataDTO) {
    const sensor = await this.sensorPort.fetchOneBySerialNumber(
      creatSensorDataDto.serial_number,
    );
    if (!sensor) throw new NotFoundException('capteur introuvable');

    if (isAlertHumidity(sensor, creatSensorDataDto.humidity)) {
      await this.mailer.sendMail(
        mailAlertHumidity({
          email: sensor.user.email,
          humidity: creatSensorDataDto.humidity,
          name: `${sensor.name} - ${sensor.serial_number}`,
        }),
      );
      const sensor2 = await this.sensorPort.update(
        sensor.serial_number,
        sensor.user,
        {
          humidity_alert_sent: true,
        } as UpdateSensorAlertsDTO,
      );
    } else if (
      sensor.humidity_alert < creatSensorDataDto.humidity &&
      sensor.humidity_alert_sent
    ) {
      this.sensorPort.update(sensor.serial_number, sensor.user, {
        humidity_alert_sent: false,
      } as UpdateSensorAlertsDTO);
    }

    if (isAlertLuminosity(sensor, creatSensorDataDto.luminosity)) {
      await this.mailer.sendMail(
        mailAlertLuminosity({
          email: sensor.user.email,
          luminosity: creatSensorDataDto.luminosity,
          name: `${sensor.name} - ${sensor.serial_number}`,
        }),
      );
      await this.sensorPort.update(sensor.serial_number, sensor.user, {
        luminosity_alert_sent: true,
      } as UpdateSensorAlertsDTO);
    } else if (
      sensor.luminosity_alert < creatSensorDataDto.luminosity &&
      sensor.luminosity_alert_sent
    ) {
      await this.sensorPort.update(sensor.serial_number, sensor.user, {
        luminosity_alert_sent: false,
      } as UpdateSensorAlertsDTO);
    }

    if (isAlertTemperature(sensor, creatSensorDataDto.temperature)) {
      await this.mailer.sendMail(
        mailAlertTemperature({
          email: sensor.user.email,
          temperature: creatSensorDataDto.temperature,
          name: `${sensor.name} - ${sensor.serial_number}`,
        }),
      );
      await this.sensorPort.update(sensor._id.toString(), sensor.user, {
        temperature_alert_sent: true,
      } as UpdateSensorAlertsDTO);
    } else if (
      sensor.temperature_alert < creatSensorDataDto.temperature &&
      sensor.temperature_alert_sent
    ) {
      this.sensorPort.update(sensor._id.toString(), sensor.user, {
        temperature_alert_sent: false,
      } as UpdateSensorAlertsDTO);
    }

    if (!isValidValue(creatSensorDataDto.humidity))
      throw new BadRequestException('humidité invalide');
    if (!isValidValue(creatSensorDataDto.soil_fertillity))
      throw new BadRequestException('soil fertillity invalide');
    if (!isValidValue(creatSensorDataDto.temperature))
      throw new BadRequestException('temperature invalide');
    if (!isValidValue(creatSensorDataDto.luminosity))
      throw new BadRequestException('luminosity invalide');

    return await this.sensorDataPort.create(creatSensorDataDto);
  }
}

function isValidValue(value: number): boolean {
  return value >= 0 && value <= 1023;
}

function isAlertSolFertillity(sensor: SensorModel, humidity: number): boolean {
  return (
    humidity <= sensor.soil_fertillity_alert &&
    sensor.soil_fertillity_alert_enabled &&
    !sensor.soil_fertillity_alert_sent
  );
}
function isAlertHumidity(sensor: SensorModel, humidity: number): boolean {
  return (
    humidity <= sensor.humidity_alert &&
    sensor.humidity_alert_enabled &&
    !sensor.humidity_alert_sent
  );
}

function isAlertTemperature(sensor: SensorModel, temperature: number): boolean {
  return (
    temperature <= sensor.temperature_alert &&
    sensor.temperature_alert_enabled &&
    !sensor.temperature_alert_sent
  );
}

function isAlertLuminosity(sensor: SensorModel, luminosity: number): boolean {
  return (
    luminosity <= sensor.luminosity_alert &&
    sensor.luminosity_alert_enabled &&
    !sensor.luminosity_alert_sent
  );
}
export { CreateSensorDataUseCase };
