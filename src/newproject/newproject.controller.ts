import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProjectsService } from './services/project.service';
import { CategoryService } from './services/category.service';
import type { IProjectEntity } from './interfaces/IProjectEntity';
import type { ICategoryEntity } from './interfaces/ICategoryEntity';


@Controller('newproject')
export class NewprojectController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly categoryService: CategoryService,    
  ) {}

  @Post('projects')
  async createProject(@Body() body: any): Promise<IProjectEntity> {
    return this.projectsService.createProject(body);
  }    

  @Get('categories')
  async findAllCategories(): Promise<ICategoryEntity[]> {
    return this.categoryService.getAll();
  }

  @Get('projects')
  async findAll(): Promise<IProjectEntity[]> {
    return this.projectsService.findAll();
  }

  @Get('projects/:id')
  async findById(@Param('id') id: string): Promise<IProjectEntity> {
    return this.projectsService.findById(id);
  }

  @Delete('projects/:id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.projectsService.delete(id);
  }

  @Put('projects/:id')
  async update(
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<IProjectEntity> {
    return this.projectsService.update(id, body);
  }
}
