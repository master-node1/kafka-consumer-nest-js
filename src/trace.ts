import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { KafkaJsInstrumentation } from 'opentelemetry-instrumentation-kafkajs';

import {
  // BasicTracerProvider,
  // ConsoleSpanExporter,
  SimpleSpanProcessor,
  NodeTracerProvider,
} from '@opentelemetry/sdk-trace-node';
import { Resource } from '@opentelemetry/resources';
import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';

class Tracer {
  private sdk: NodeSDK | null = null;

  // url is optional and can be omitted - default is http://localhost:4318/v1/traces
  private exporter = new OTLPTraceExporter({
    url: 'http://localhost:4318/v1/traces',
  });

  private provider = new NodeTracerProvider({
    resource: new Resource({
      [SEMRESATTRS_SERVICE_NAME]: 'kafk-service',
    }),
  });

  public init() {
    try {
      // export spans to console (useful for debugging)
      // this.provider.addSpanProcessor(
      //   new SimpleSpanProcessor(new ConsoleSpanExporter()),
      // );

      // export spans to opentelemetry collector
      this.provider.addSpanProcessor(new SimpleSpanProcessor(this.exporter));
      this.provider.register();

      this.sdk = new NodeSDK({
        traceExporter: this.exporter,
        instrumentations: [
          getNodeAutoInstrumentations({
            // Lets disable fs for now, otherwise we cannot see the traces we want,
            // You can disable or enable instrumentation as needed
            '@opentelemetry/instrumentation-fs': { enabled: false },
          }),
          new KafkaJsInstrumentation({
            // see kafkajs instrumentation docs for available configuration
          }),
        ],
      });

      this.sdk.start();

      console.info('The tracer has been initialized');
    } catch (e) {
      console.error('Failed to initialize the tracer', e);
    }
  }
}

export default new Tracer();
