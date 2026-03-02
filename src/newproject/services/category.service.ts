import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../repositories/category.repositories';
import { ICategoryEntity } from '../interfaces/ICategoryEntity';

@Injectable()
export class CategoryService {
  constructor(private readonly CategoryRepository: CategoryRepository) {}

  // async execute(category: ICategoryEntity): Promise<ICategoryEntity> {
  //   return this.createCategoryRepository.execute(category);
  // }

  async getAll(): Promise<ICategoryEntity[]> {
    return this.CategoryRepository.findAll();
  }
}
