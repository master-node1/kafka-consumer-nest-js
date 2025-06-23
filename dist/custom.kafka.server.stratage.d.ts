import { ServerKafka } from '@nestjs/microservices';
export declare const KAFKA_SERVER_1: unique symbol;
export declare const KAFKA_SERVER_2: unique symbol;
export declare const KafkaCustomStrategy: (transport_symbol: symbol) => <T extends {
    new (...args: any[]): any;
}>(constructor: T) => import("@nestjs/common").Type<any>;
export declare class KafkaServer1 extends ServerKafka {
}
export declare class KafkaServer2 extends ServerKafka {
}
