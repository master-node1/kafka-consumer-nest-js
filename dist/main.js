"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./module/app.module");
const custom_kafka_server_stratage_1 = require("./custom.kafka.server.stratage");
const trace_1 = require("./trace");
trace_1.default.init();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        strategy: new custom_kafka_server_stratage_1.KafkaServer1({
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
    app.connectMicroservice({
        strategy: new custom_kafka_server_stratage_1.KafkaServer2({
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
//# sourceMappingURL=main.js.map