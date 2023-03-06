import { Module, Global } from '@nestjs/common';
import { AppGateway } from '../common/socket/socket-gateway';

@Global()
@Module({
  controllers: [],
  providers: [AppGateway],
  exports: [AppGateway],
})
export class SocketModule {}
