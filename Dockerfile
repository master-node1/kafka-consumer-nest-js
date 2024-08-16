FROM node:20.10.0-alpine

WORKDIR /nest-multiple-kafka-consumer-servers

COPY ./*.json ./

RUN mkdir src

# Install dependencies
RUN npm install -g npm@10.8.2 @nestjs/cli@10.3.2

RUN npm install && nest build

VOLUME ["/nest-multiple-kafka-consumer-servers/logs"]

CMD ["node", "dist/main"]

