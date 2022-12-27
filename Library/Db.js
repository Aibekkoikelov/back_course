

// Rabbit Mq
// Rabbit mq  это очередь сообщений, которая позволяет обмениваться сообщениями между различными приложениями.
// Rabbit mq  позволяет обмениваться сообщениями между различными приложениями.
// Используют  в качестве брокера сообщений.

// Пример подключения к Rabbit mq в Nest js
//
// npm i amqplib --save - библиотека для подключения к Rabbit mq
//
// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { Channel, connect } from 'amqplib';
// import { Logger } from 'winston';
// import { RabbitMQConfig } from './rabbitmq.config';
//
// @Injectable()
// export class RabbitMQService {
//   private channel: Channel;
//   private logger: Logger;
//   private config: RabbitMQConfig;
//
//   constructor(configService: ConfigService) {
//     this.config = configService.get<RabbitMQConfig>('rabbitmq');
//     this.logger = new Logger(RabbitMQService.name);
//   }
//
//   async connect(): Promise<void> {
//     const connection = await connect(this.config.url);
//     this.channel = await connection.createChannel();
//     this.logger.log('Connected to RabbitMQ');
//   }
//
//   async sendToQueue(queue: string, message: string): Promise<void> {
//     await this.channel.assertQueue(queue);
//     await this.channel.sendToQueue(queue, Buffer.from(message));
//   }
// }
//
//



