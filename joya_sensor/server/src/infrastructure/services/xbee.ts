import { FastifyInstance } from "fastify";
import fastifyCron from "fastify-cron";
import { CreateSensorDataJob } from "./jobs/create-sensor-data.job";
import { WriteSensorDataJob } from "./jobs/write-sensor-data.job";
import {CreateSensorDataDTO, SensorDataAdapter} from "../adapters/sensor-data.adapter"
import {WriteSensorDataUseCase} from "../../usecases/sensor-data/write-sensor-data.usecase";
import {FetchOneCycleSensorDataUseCase} from "../../usecases/sensor-data/fetch-one-sensor-data.usecase";

var SerialPort = require('serialport');
var xbee_api = require('xbee-api');
var C = xbee_api.constants;

class XbeeListener {

    devices_list = [];
    fastify: FastifyInstance;
    xbeeAPI;
    public _writeSensorDataUseCase: WriteSensorDataUseCase;

    constructor(fastify: FastifyInstance) {
        this.fastify = fastify
        this.xbeeAPI = new xbee_api.XBeeAPI({
            api_mode: 1
        });

        this._writeSensorDataUseCase = new WriteSensorDataUseCase(
            new SensorDataAdapter(fastify)
        );
    }

    public start() {

        //require('dotenv').config()

        const SERIAL_PORT = "/dev/ttyUSB0" //process.env.SERIAL_PORT;
        const SERIAL_BAUDRATE = 9600 //Number(process.env.SERIAL_BAUDRATE);

        let serialport = new SerialPort(SERIAL_PORT, {
            baudRate: SERIAL_BAUDRATE,
        }, function (err) {
            if (err) {
                return console.log('Error: ', err.message)
            }
        });

        serialport.pipe(xbeeAPI.parser);
        xbeeAPI.builder.pipe(serialport);

        serialport.on("open", function () {
            console.log("Xbee Listener started")
            /*console.log("Running AT command..");

            var frame_obj = { // AT Request to be sent
              type: C.FRAME_TYPE.AT_COMMAND,
              command: "NI",
              commandParameter: [],
            };

            xbeeAPI.builder.write(frame_obj);

            console.log("AT command has been run");
            console.log("-");
            console.log("Running remote AT command..");

            frame_obj = { // AT Request to be sent
              type: C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
              destination64: "FFFFFFFFFFFFFFFF",
              command: "NI",
              commandParameter: [],
            };

            xbeeAPI.builder.write(frame_obj);

            console.log("Remote AT command has been run");*/
        });

// All frames parsed by the XBee will be emitted here

// storage.listSensors().then((sensors) => sensors.forEach((sensor) => console.log(sensor.dat>

        this.xbeeAPI.parser.on("data", (frame) => this.xbeeListen(frame));

        /*frame
        {
          type: 146,
            remote64: '0013a20041a72913',
          remote16: 'bed3',
          receiveOptions: 1,
          digitalSamples: { DIO1: 1, DIO5: 1 },
          analogSamples: {},
          numSamples: 1
        }*/


    }

    public xbeeListen (frame) {
        console.log("frame");
        console.log(frame);

        //on new device is joined, register it

        //on packet received, dispatch event
        //let dataReceived = String.fromCharCode.apply(null, frame.data);
        if (C.FRAME_TYPE.ZIGBEE_RECEIVE_PACKET === frame.type) {
            console.log("C.FRAME_TYPE.ZIGBEE_RECEIVE_PACKET");
            let dataReceived = String.fromCharCode.apply(null, frame.data);
            console.log(">> ZIGBEE_RECEIVE_PACKET >", dataReceived);

        }

        if (C.FRAME_TYPE.NODE_IDENTIFICATION === frame.type) {
            // let dataReceived = String.fromCharCode.apply(null, frame.nodeIdentifier);
            console.log("NODE_IDENTIFICATION");

            let device_mac_address = frame.remote64;
            let device_type_identifier = frame.nodeIdentifier;

            this.deviceIdentification(device_mac_address, device_type_identifier);

            //storage.registerSensor(frame.remote64)

        } else if (C.FRAME_TYPE.ZIGBEE_IO_DATA_SAMPLE_RX === frame.type) {

            console.log("ZIGBEE_IO_DATA_SAMPLE_RX");
            console.log(frame.analogSamples.AD0);
            this._writeSensorDataUseCase.execute(new CreateSensorDataDTO({
                serial_number: frame.remote64,
                soil_fertillity: 0,
                luminosity: Math.round(100 - ((luminosity * 100) / 1200)),
                humidity: Math.round((humidity * 100) / 1200),
                temperature: frame.analogSamples.AD0,
            }))

            this.changeLights(true, true, true, frame.remote64)






            //storage.registerSample(frame.remote64,frame.analogSamples.AD0 )

        } else if (C.FRAME_TYPE.REMOTE_COMMAND_RESPONSE === frame.type) {
            console.log("REMOTE_COMMAND_RESPONSE");
        } else {
            console.debug(frame);
            let dataReceived = String.fromCharCode.apply(null, frame.commandData)
            console.log(dataReceived);
        }

        console.log("----------------------------------");
    }

    public deviceIdentification (mac_address, type_identifier) {
        if (this.devices_list.some(e => e.mac_address === mac_address)) {
            console.log(mac_address + " already in devices_list");
        }
        else {
            this.devices_list.push({
                mac_address: mac_address,
                type_identifier: type_identifier
            });

            console.log(mac_address + " added in devices_list");
        }
    }

    public changeLights(isGreenOn, isYellowOn, isRedOn, remoteAddress) {
        let green_params;
        let yellow_params;
        let red_params;

        if (isGreenOn) {
            green_params = C.DIGITAL_OUTPUT_LOW;
        }
        else {
            green_params = C.DIGITAL_OUTPUT_HIGH;
        }

        if (isYellowOn) {
            yellow_params = C.DIGITAL_OUTPUT_LOW;
        }
        else {
            yellow_params = C.DIGITAL_OUTPUT_HIGH;
        }

        if (isRedOn) {
            red_params = C.DIGITAL_OUTPUT_LOW;
        }
        else {
            red_params = C.DIGITAL_OUTPUT_HIGH;
        }

        let green_frame = { // AT Request to be sent
            type: C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
            destination64: remoteAddress,
            command: "DIO11",
            commandParameter: [green_params],
        };

        let yellow_frame = { // AT Request to be sent
            type: C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
            destination64: remoteAddress,
            command: "DIO13",
            commandParameter: [yellow_params],
        };

        let red_frame = { // AT Request to be sent
            type: C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
            destination64: remoteAddress,
            command: "DIO12",
            commandParameter: [red_params],
        };

        this.xbeeAPI.builder.write(green_frame);
        this.xbeeAPI.builder.write(yellow_frame);
        this.xbeeAPI.builder.write(red_frame);
    }
}

export { XbeeListener };
