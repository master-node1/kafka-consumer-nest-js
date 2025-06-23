"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaServer2 = exports.KafkaServer1 = exports.KafkaCustomStrategy = exports.KAFKA_SERVER_2 = exports.KAFKA_SERVER_1 = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
exports.KAFKA_SERVER_1 = Symbol('KAFKA_SERVER_1');
exports.KAFKA_SERVER_2 = Symbol('KAFKA_SERVER_2');
const KafkaCustomStrategy = (transport_symbol) => {
    return function (constructor) {
        const new_class = class extends constructor {
            constructor() {
                super(...arguments);
                this.transportId = transport_symbol;
            }
        };
        const mixed_classes = (0, common_1.mixin)(new_class);
        return mixed_classes;
    };
};
exports.KafkaCustomStrategy = KafkaCustomStrategy;
let KafkaServer1 = class KafkaServer1 extends microservices_1.ServerKafka {
};
exports.KafkaServer1 = KafkaServer1;
exports.KafkaServer1 = KafkaServer1 = __decorate([
    (0, exports.KafkaCustomStrategy)(exports.KAFKA_SERVER_1)
], KafkaServer1);
let KafkaServer2 = class KafkaServer2 extends microservices_1.ServerKafka {
};
exports.KafkaServer2 = KafkaServer2;
exports.KafkaServer2 = KafkaServer2 = __decorate([
    (0, exports.KafkaCustomStrategy)(exports.KAFKA_SERVER_2)
], KafkaServer2);
//# sourceMappingURL=custom.kafka.server.stratage.js.map