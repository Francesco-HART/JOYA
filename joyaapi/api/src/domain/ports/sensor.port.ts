import { SensorModel } from '../models/sensor';
import { UserModel } from '../models/user';
import { Types } from 'mongoose';

interface ICreateSensorDTO {
  serial_number: string;
}

interface IUpdateSensorDTO {
  name: string;
  location?: string;
  plant_id: Types.ObjectId;
}
interface IUpdateSensorAlertsDTO {
  humidity_alert: number;
  humidity_alert_enabled: boolean;
  humidity_alert_sent: boolean;

  temperature_alert: number;
  temperature_alert_enabled: boolean;
  temperature_alert_sent: boolean;

  luminosity_alert: number;
  luminosity_alert_enabled: boolean;
  luminosity_alert_sent: boolean;

  soil_fertillity_alert: number;
  soil_fertillity_alert_enabled: boolean;
  soil_fertillity_alert_sent: boolean;
}

abstract class ISensorPort {
  abstract create(createSensorDto: ICreateSensorDTO): Promise<SensorModel>;

  abstract update(
    id: string,
    user: UserModel,
    createSensorDto: IUpdateSensorDTO | IUpdateSensorAlertsDTO,
  ): Promise<SensorModel>;

  abstract fetchMy(user: UserModel): Promise<SensorModel[]>;

  abstract fetchAllSensors(): Promise<SensorModel[]>;

  abstract removeUserAssociated(
    user: UserModel,
    sensorId: string,
  ): Promise<void>;

  abstract fetchOne(id: string): Promise<SensorModel>;

  abstract fetchOneBySerialNumber(serialNumber: string): Promise<SensorModel>;

  abstract deleteSensor(sensorId: string): Promise<SensorModel>;
}

export {
  ISensorPort,
  ICreateSensorDTO,
  IUpdateSensorDTO,
  IUpdateSensorAlertsDTO,
};
