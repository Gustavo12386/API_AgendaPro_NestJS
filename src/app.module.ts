import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewprojectModule } from './newproject/newproject.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI as string),
    NewprojectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
