import { Injectable } from '@nestjs/common';
import { ServiceRepository } from '../repositories/service.repositories';
import { IServiceEntity } from '../interfaces/IServiceEntity';

@Injectable()
export class ServiceService {
  constructor(
    private readonly serviceRepository: ServiceRepository,
  ) {}

   async createService(service: IServiceEntity): Promise<IServiceEntity> {
     return this.serviceRepository.execute(service);
   }
}
