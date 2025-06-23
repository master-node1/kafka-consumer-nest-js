import { mixin } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

export const KAFKA_SERVER_1 = Symbol('KAFKA_SERVER_1');
export const KAFKA_SERVER_2 = Symbol('KAFKA_SERVER_2');

export const KafkaCustomStrategy = (transport_symbol: symbol) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function <T extends { new (...args: any[]): any }>(constructor: T) {
    const new_class = class extends constructor {
      transportId = transport_symbol;
    };
    const mixed_classes = mixin(new_class);
    return mixed_classes;
  };
};

@KafkaCustomStrategy(KAFKA_SERVER_1)
export class KafkaServer1 extends ServerKafka {}

@KafkaCustomStrategy(KAFKA_SERVER_2)
export class KafkaServer2 extends ServerKafka {}
