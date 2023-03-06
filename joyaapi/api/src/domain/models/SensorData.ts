import { Types } from 'mongoose';

export interface SensorData {
  _id: Types.ObjectId;
  serial_number: string;
  temperature: number;
  humidity: number;
  luminosity: number;
  soil_fertillity: number;
  created_at: Date;
}
