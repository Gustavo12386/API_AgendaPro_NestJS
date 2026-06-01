import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewprojectModule } from './newproject/newproject.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uri = config.get<string>('MONGODB_URI');

        console.log('Mongo URI exists:', !!uri);

        return {
          uri,
        };
      },
    }),

    NewprojectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
