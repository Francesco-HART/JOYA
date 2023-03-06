import { Types } from 'mongoose';
import { SensorModel } from './sensor';

interface UserSensorModel {
  _id: Types.ObjectId;

  sensor: Types.ObjectId | SensorModel;

  critical_alert_sent: boolean;

  warning_alert_sent: boolean;
}

export { UserSensorModel };
