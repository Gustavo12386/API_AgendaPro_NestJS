import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { IServiceEntity } from '../interfaces/IServiceEntity';
import { IProjectEntity } from '../interfaces/IProjectEntity';
import { ProjectsRepository } from '../repositories/project.repositories';

@Injectable()
export class ProjectsService {
  constructor(private readonly repository: ProjectsRepository) {}

  async createProject(body: any): Promise<IProjectEntity> {
  const category = await this.repository.findCategoryByName(
    body.category.name,
  );

  if (!category) {
    throw new NotFoundException('Categoria não encontrada');
  }

  let services: any[] = [];

  if (body.services?.length > 0) {
    services = await this.repository.createServices(
      body.services as IServiceEntity[],
    );
  }

  const project = await this.repository.create({
    name: body.name,
    budget: body.budget,
    cost: body.cost,
    category: category._id,
    services: services.map((s: any) => s._id),
  });

  if (!project) {
    throw new NotFoundException('Erro ao criar projeto');
  }

  return project; 
}

  async findAll(): Promise<IProjectEntity[]> {
    const projects = await this.repository.findAll();

    if (!projects.length) {
      throw new NotFoundException('Nenhum projeto encontrado');
    }

    return projects;
  }

  async findById(id: string): Promise<IProjectEntity> {
    const project = await this.repository.findById(id);

    if (!project) {
        throw new NotFoundException('Project not found');
    }

    return project;
}

  async delete(id: string): Promise<{ message: string }> {
    await this.repository.delete(id);
    return { message: 'Projeto deletado' };
  }

  async update(id: string, body: any): Promise<IProjectEntity> {
    const updateData: any = { ...body };

    if (body.category?.name) {
      const category = await this.repository.findCategoryByName(
        body.category.name,
      );

      if (!category)
        throw new NotFoundException('Categoria não encontrada');

      updateData.category = category._id;
    }

    if (body.services?.length > 0) {
      const services = await this.repository.createServices(
        body.services as IServiceEntity[],
      );

      updateData.services = services.map((s: any) => s._id);
    }

    const project = await this.repository.update(id, updateData);

    if (!project)
      throw new NotFoundException('Projeto não encontrado');

    return project;
  }
}