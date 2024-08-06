import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KAFKA_SERVER_1, KAFKA_SERVER_2 } from 'src/custom.kafka.server.stratage';

@Controller()
export class AppController {
  constructor(
    private readonly logger: Logger,
  ) { }

  @MessagePattern('topic-1', KAFKA_SERVER_1)
  async handleTopic1Message(
    @Payload() data: any,
  ): Promise<any> {
    try {
      this.logger.log(`topoc-1 ${JSON.stringify(data)}`);
    } catch (error) {
      this.logger.error(`error = , ${error}`);
    }
  }

  @MessagePattern('topic-2', KAFKA_SERVER_2)
  async handleTopic2Message(
    @Payload() data: any,
  ): Promise<any> {
    try {
      this.logger.log(`topic-2 ${JSON.stringify(data)}`);
    } catch (error) {
      this.logger.error(`error = , ${error}`);
    }
  }
}
