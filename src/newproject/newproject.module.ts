import { CategoryService } from './services/category.service';
import { CategoryRepository } from './repositories/category.repositories';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schemas/project.schema';
import { Category, CategorySchema} from './schemas/category.schema';
import { Service, ServiceSchema} from './schemas/service.schema';
import { ServiceRepository } from './repositories/service.repositories';
import { ServiceService } from './services/service.service';
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
  providers: [
    ProjectsService,
    ProjectsRepository,
    CategoryRepository,
    CategoryService,
    ServiceRepository,  
    ServiceService,    
  ],
})
export class NewprojectModule {}
