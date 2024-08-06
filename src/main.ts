import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './module/app.module';
import { KafkaServer1, KafkaServer2 } from './custom.kafka.server.stratage';

async function bootstrap() {
  // create http server
  const app = await NestFactory.create(AppModule);
  // connects to kafka as microservice
  app.connectMicroservice<MicroserviceOptions>({
    strategy: new KafkaServer1({
      client: {
        clientId: 'mutiple-kafka-server-consumer',
        brokers: ['localhost:9092'],
        connectionTimeout: 60000,
      },
      consumer: {
        groupId: 'topic1-consumer-group',
      }
    }),
  });

  // connects to kafka as microservice
  app.connectMicroservice<MicroserviceOptions>({
    strategy: new KafkaServer2({
      client: {
        clientId: 'mutiple-kafka-server-consumer',
        brokers: ['localhost:9092'],
        connectionTimeout: 60000,
      },
      consumer: {
        groupId: 'topic2-consumer-group',
      }
    }),
  });

  app.startAllMicroservices();
  await app.listen(9014);
}
bootstrap();
