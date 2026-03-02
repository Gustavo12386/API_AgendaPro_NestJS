import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schemas/project.schema';
import { Category, CategorySchema } from './schemas/category.schema';
import { Service, ServiceSchema } from './schemas/service.schema';

import { NewprojectController } from './newproject.controller';
import { ProjectsService } from './services/project.service';
import { ProjectsRepository } from './repositories/project.repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Project.name, schema: ProjectSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Service.name, schema: ServiceSchema },
    ]),
  ],
  controllers: [NewprojectController],
  providers: [ProjectsService, ProjectsRepository],
  exports: [ProjectsService, MongooseModule],
})
export class NewprojectModule {}
