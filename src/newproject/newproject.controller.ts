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

  @Post()
  async createProject(@Body() body: any): Promise<IProjectEntity> {
    return this.projectsService.createProject(body);
  }

  @Get()
  async findAllCategories(): Promise<ICategoryEntity[]> {
    return this.categoryService.getAll();
  }

  @Get()
  async findAll(): Promise<IProjectEntity[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<IProjectEntity> {
    return this.projectsService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.projectsService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<IProjectEntity> {
    return this.projectsService.update(id, body);
  }
}
