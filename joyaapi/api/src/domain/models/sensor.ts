import { Types } from 'mongoose';
import { PlantModel } from './plant';
import { UserModel } from './user';

interface SensorModel {
  _id: Types.ObjectId;
  name: string;
  plant: PlantModel;
  location?: string;
  serial_number: string;
  user: UserModel;

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

export { SensorModel };
