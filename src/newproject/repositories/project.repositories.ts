import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProjectEntity } from '../interfaces/IProjectEntity';
import { Project, ProjectDocument } from '../schemas/project.schema';
import { Category, CategoryDocument } from '../schemas/category.schema';
import { Service, ServiceDocument } from '../schemas/service.schema';

@Injectable()
export class ProjectsRepository {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<ProjectDocument>,

    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,

    @InjectModel(Service.name)
    private readonly serviceModel: Model<ServiceDocument>,
  ) {}

  async create(data: any): Promise<IProjectEntity | null> {
    const project = new this.projectModel(data);
    await project.save();

    return this.projectModel
        .findById(project._id)
        .populate('category')
        .populate('services')
        .lean<IProjectEntity>();
}

  async findAll(): Promise<IProjectEntity[]> {
  return this.projectModel
    .find()
    .populate('category')
    .populate('services')
    .lean<IProjectEntity[]>();
}

  async findById(id: string): Promise<IProjectEntity | null> {
    return this.projectModel
        .findById(id)
        .populate('category')
        .populate('services')
        .lean<IProjectEntity>();
}

  async delete(id: string) {
    return this.projectModel.findByIdAndDelete(id);
  }

  async update(id: string, updateData: any): Promise<IProjectEntity | null> {
  return this.projectModel
    .findByIdAndUpdate(id, updateData, { new: true })
    .populate('category')
    .populate('services')
    .lean<IProjectEntity>();
}

  async findCategoryByName(name: string) {
    return this.categoryModel.findOne({ name });
  }

  async createServices(services: any[]) {
    return this.serviceModel.insertMany(services);
  }
}
