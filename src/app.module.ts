import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewprojectModule } from './newproject/newproject.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://calderarogustavo:T2nXnffwz6AjsxyO@cluster0.k3uul6z.mongodb.net/agendapro',
    ),
    NewprojectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
