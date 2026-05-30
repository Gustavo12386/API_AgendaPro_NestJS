import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    console.log('BOOTSTRAP INICIADO');

    const app = await NestFactory.create(AppModule);
    console.log('APP CRIADA');

    await app.listen(process.env.PORT || 3000);
    console.log('APP OUVINDO PORTA');
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
