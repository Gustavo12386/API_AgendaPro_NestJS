import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express from 'express';
import serverlessExpress from '@codegenie/serverless-express';

const expressApp = express();

let cachedServer: any;

//função para criar o servidor NestJS e armazená-lo em cache para reutilização em chamadas subsequentes
async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );

    app.enableCors({
      origin: [
        'https://agendapro.netlify.app',
        'http://localhost:5173',
      ],
      credentials: true,
    });

    await app.init();

    cachedServer = serverlessExpress({
      app: expressApp,
    });
  }

  return cachedServer;
}

export default async function handler(req: any, res: any) {
  const server = await bootstrap();
  return server(req, res);
}