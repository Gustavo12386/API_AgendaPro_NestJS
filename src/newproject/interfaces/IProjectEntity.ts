import { ICategoryEntity } from './ICategoryEntity';
import { IServiceEntity } from './IServiceEntity';

export interface IProjectEntity {
  id?: string;  
  budget: number;
  cost: string;
  category: ICategoryEntity[];
  name: string;
  services: IServiceEntity[];
}
