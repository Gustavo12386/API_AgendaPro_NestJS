import { Module } from '@nestjs/common';
import { NewprojectController } from './newproject.controller';

@Module({
  controllers: [NewprojectController],
})
export class NewprojectModule {}
