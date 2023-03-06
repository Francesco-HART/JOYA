import { FastifyInstance } from "fastify";
import fastifyCron from "fastify-cron";
import { CreateSensorDataJob } from "./jobs/create-sensor-data.job";
import { WriteSensorDataJob } from "./jobs/write-sensor-data.job";

class CronJobs {
  constructor() {}

  public jobs(fastify: FastifyInstance) {
    fastify.register(fastifyCron, {
      jobs: [
        {
          //cronTime: "0 * * * *", // Everyhours at 00 UTC
          cronTime: "*/15 * * * * *",
          onTick: async (server) => {
            new CreateSensorDataJob(server).job();
          },
        },
      ],
    });
  }
}

export { CronJobs };
