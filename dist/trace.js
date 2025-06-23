"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auto_instrumentations_node_1 = require("@opentelemetry/auto-instrumentations-node");
const exporter_trace_otlp_http_1 = require("@opentelemetry/exporter-trace-otlp-http");
const sdk_node_1 = require("@opentelemetry/sdk-node");
const opentelemetry_instrumentation_kafkajs_1 = require("opentelemetry-instrumentation-kafkajs");
const sdk_trace_node_1 = require("@opentelemetry/sdk-trace-node");
const resources_1 = require("@opentelemetry/resources");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
class Tracer {
    constructor() {
        this.sdk = null;
        this.exporter = new exporter_trace_otlp_http_1.OTLPTraceExporter({
            url: 'http://localhost:4318/v1/traces',
        });
        this.provider = new sdk_trace_node_1.NodeTracerProvider({
            resource: new resources_1.Resource({
                [semantic_conventions_1.ATTR_SERVICE_NAME]: 'kafk-service',
            }),
        });
    }
    init() {
        try {
            this.provider.addSpanProcessor(new sdk_trace_node_1.SimpleSpanProcessor(this.exporter));
            this.provider.register();
            this.sdk = new sdk_node_1.NodeSDK({
                traceExporter: this.exporter,
                instrumentations: [
                    (0, auto_instrumentations_node_1.getNodeAutoInstrumentations)({
                        '@opentelemetry/instrumentation-fs': { enabled: false },
                    }),
                    new opentelemetry_instrumentation_kafkajs_1.KafkaJsInstrumentation({}),
                ],
            });
            this.sdk.start();
            console.info('The tracer has been initialized');
        }
        catch (e) {
            console.error('Failed to initialize the tracer', e);
        }
    }
}
exports.default = new Tracer();
//# sourceMappingURL=trace.js.map