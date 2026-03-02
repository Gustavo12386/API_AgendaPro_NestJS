import { Category } from '../schemas/category.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICategoryEntity } from '../interfaces/ICategoryEntity';
import { CategoryDocument } from '../schemas/category.schema';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  // async execute(category: ICategoryEntity): Promise<ICategoryEntity> {
  //   const createdCategory = new this.categoryModel(category);
  //   await createdCategory.save();
  //   return createdCategory.toObject();
  // }

  async findAll(): Promise<ICategoryEntity[]> {
    return this.categoryModel.find().lean();
  }
}
