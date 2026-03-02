import { Injectable } from '@nestjs/common';
import { CreateServiceRepository } from '../repositories/service.repositories';
import { IServiceEntity } from '../interfaces/IServiceEntity';

@Injectable()
export class CreateServiceService {
  constructor(
    private readonly createServiceRepository: CreateServiceRepository,
  ) {}

  // async execute(service: IServiceEntity): Promise<IServiceEntity> {
  //   return this.createServiceRepository.execute(service);
  // }
}
