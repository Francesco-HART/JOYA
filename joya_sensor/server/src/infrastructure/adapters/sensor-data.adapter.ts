import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import {
  ICreateSensorDataDto,
  ISensorDataPort,
} from "../../domain/ports/sensor-data.port";
import api from "../common/api";
var fs = require("fs");

let devices_list = [];

class SensorDataAdapter implements ISensorDataPort {
  constructor(private readonly fastify: any) {}
  fetchOneCycle(): Promise<ICreateSensorDataDto[]> {
    console.log("devices_list")
    console.log(devices_list)
    return Promise.resolve(devices_list);
  }

  async create(dto: CreateSensorDataDTO): Promise<void> {
    try {
      await api.post("sensors-data", dto);
    } catch (error) {
      console.log(error, " error on create sensor data");
    }
  }

  async removeAll(): Promise<void> {
    devices_list = [];
    /*fs.writeFile(
      ISensorDataPort.SENSOR_DATA_KEY_NAME,
      JSON.stringify([]),
      "utf8",
      (err) => {
        if (err) console.log(err, " error on remove all data on json file ");
      }
    );
     */

    // const { redis } = this.fastify;
    // redis.set(ISensorDataPort.SENSOR_DATA_KEY_NAME, [], (err) => {
    //   if (err) console.log("error on set value on redis ", err);
    // });
  }
   async fetch(): Promise<CreateSensorDataDTO[]> {
    return devices_list;
    // let data = [] as CreateSensorDataDTO[];
    // fs.readFile(
    //   ISensorDataPort.SENSOR_DATA_KEY_NAME,
    //   "utf8",
    //   function readFileCallback(err, json) {
    //     if (err) {
    //       console.log("error on read json file ", err);
    //     } else {
    //       data = json ? JSON.parse(json) : []; //now it an object
    //     }
    //   }
    // );

    // return Promise.resolve(data);

    /*try {
      const data = await fs.readFileSync(
        ISensorDataPort.SENSOR_DATA_KEY_NAME,
        "utf8"
      );

      console.log("data in file");
      console.log(data);

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.log(error, " error on read json file ");
    }*/

    // const { redis } = this.fastify;

    // redis.get(ISensorDataPort.SENSOR_DATA_KEY_NAME, (err, val) => {
    //   if (err) console.log("error on get value on redis ", err);
    //   console.log(val[0], "value on redis adapter");
    //   return val as CreateSensorDataDTO;
    // });
  }

  async writeData(dto: CreateSensorDataDTO): Promise<void> {
    devices_list.push(dto);

    /*let obj;
    let json;
    fs.readFile(
      ISensorDataPort.SENSOR_DATA_KEY_NAME,
      "utf8",
      function readFileCallback(err, data) {
        if (err) {
          console.log(err, " error on read json file before write ");
        } else {
          if (data) {
            console.log("data")
            console.log(data)
            obj = JSON.parse(data); //now it an object
            console.log("obj");
            console.log(obj)
            obj.push(dto); //add some data
          } else {
            obj = []; //now it an object
            obj.push(dto); //add some data
          }
          console.log("dto");
          console.log(dto);
          json = JSON.stringify(obj, null, 2); //convert it back to json
          fs.writeFile(
            ISensorDataPort.SENSOR_DATA_KEY_NAME,
            json,
            "utf8",
            (err) => {
              if (err) console.log(err, " error on write on json file ");
            }
          ); // write it back
        }
      }
    );*/

    // const { redis } = this.fastify;
    // const sensorsDataFromRedis = await redis.get(
    //   ISensorDataPort.SENSOR_DATA_KEY_NAME
    // );
    // console.log("set value on rediiiiis");

    // redis.set(
    //   ISensorDataPort.SENSOR_DATA_KEY_NAME,
    //   sensorsDataFromRedis ? [...sensorsDataFromRedis, dto] : [dto],
    //   (err) => {
    //     if (err) console.log("error on set value on redis ", err);
    //   }
    // );
  }
}

class CreateSensorDataDTO implements ICreateSensorDataDto {
  @IsString()
  @IsNotEmpty()
  serial_number: string;

  @IsNumber()
  @IsNotEmpty()
  temperature: number;

  @IsNumber()
  @IsNotEmpty()
  humidity: number;

  @IsNumber()
  @IsNotEmpty()
  luminosity: number;

  @IsNumber()
  @IsNotEmpty()
  soil_fertillity: number;

  created_at: Date;

  constructor(dto: ICreateSensorDataDto) {
    this.serial_number = dto.serial_number
    this.temperature = dto.temperature
    this.humidity = dto.humidity
    this.luminosity = dto.luminosity
    this.soil_fertillity = dto.soil_fertillity
    this.created_at = new Date(Date.now())
  }
}

export { CreateSensorDataDTO, SensorDataAdapter };
