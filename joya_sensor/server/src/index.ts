import fastify from "fastify";
import { CronJobs } from "./infrastructure/services/cron-jobs";
import {XbeeListener} from "./infrastructure/services/xbee";

async function startApp() {
  const server = fastify();
  const env = require("@fastify/env");

  const schema = {
    type: 'object',
    required: ['SERIAL_PORT', 'SERIAL_BAUDRATE'],
    properties: {
      SERIAL_PORT: {
        type: 'string',
      },
      SERIAL_BAUDRATE: {
        type: 'number',
        default: 9600
      }
    }
  }

  const options = {
    confKey: "config",
    schema: schema,
    dotenv: true
  }

  server.register(require("fastify-helmet"));

  server.register(env, options);

  new XbeeListener(server).start()
  new CronJobs().jobs(server); //server.register(require("./infrastructure/services/cron-jobs"));

  server.listen(4000, "0.0.0.0", (err, address) => {
    if (err) {
      console.error(err?.message, "error server");
      process.exit(1);
    }
    server.cron.startAllJobs();

    console.log("port: " + process.env.SERIAL_PORT + " | baudrate: " + process.env.SERIAL_BAUDRATE )

    console.log(`Server listening at ${address}`);
  });

  // watch zegbee recive data every 5 minutes
  // when receve data stock in redis
  // every hours send data from redis
  // remove all data in redis
}

startApp();
//Xbee();
