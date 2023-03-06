import { Types } from 'mongoose';

interface PlantModel {
  _id: Types.ObjectId;
  type: string;
  name: string;
  luminosity_needs : Needs;
  temperature_needs : Needs;
  humidity_needs : Needs;
  fertility_needs : number;
}


class Needs {
    max : number
    min : number
}

export { PlantModel, Needs };
