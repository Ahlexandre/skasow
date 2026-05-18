import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { AppModule } from '../src/app.module';
import { configureApp } from '../src/configure-app';

type ExpressHandler = (req: IncomingMessage, res: ServerResponse) => void;

let cachedServer: ExpressHandler | undefined;

async function getServer() {
  if (!cachedServer) {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      bufferLogs: true,
    });

    configureApp(app);
    await app.init();

    cachedServer = app.getHttpAdapter().getInstance() as ExpressHandler;
  }

  return cachedServer;
}

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  const server = await getServer();
  return server(req, res);
}
