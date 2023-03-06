import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './infrastructure/config/database.module';
import { AuthModule } from './infrastructure/modules/auth.module';
import { SensorDataModule } from './infrastructure/modules/sensor-data.module';
import { UserModule } from './infrastructure/modules/user.module';
import { ConfigModule } from '@nestjs/config';
import { SensorModule } from './infrastructure/modules/sensor.module';
import { PlantModule } from './infrastructure/modules/plant.module';
import { SocketModule } from './infrastructure/modules/socket.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    AuthModule,
    MailerModule,
    UserModule,
    SensorModule,
    PlantModule,
    SensorDataModule,
    SocketModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
