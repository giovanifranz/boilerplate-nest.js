import fastifyCors from '@fastify/cors';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { EnvironmentService } from './environment/services/environment.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bufferLogs: true }
  );

  app.register(fastifyCors, {
    origin: '*',
    /**
     * methods: ['GET', 'POST', 'PUT', 'DELETE'],
     * allowedHeaders: ['Content-Type', 'Authorization'],
     */
  });

  const environmentService = app.get<EnvironmentService>(EnvironmentService);
  const port = environmentService.get('SERVER_PORT');

  const config = new DocumentBuilder()
    .setTitle('Boilerplate Nest.js')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}

bootstrap();
