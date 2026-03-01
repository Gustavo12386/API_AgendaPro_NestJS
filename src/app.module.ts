import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewprojectModule } from './newproject/newproject.module';

@Module({
  imports: [NewprojectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
