import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service, ServiceDocument } from '../schemas/service.schema';
import { IServiceEntity } from '../interfaces/IServiceEntity';

@Injectable()
export class ServiceRepository {
  constructor(
    @InjectModel(Service.name)
    private readonly serviceModel: Model<ServiceDocument>,
  ) {}

  async execute(service: IServiceEntity): Promise<IServiceEntity> {
    const createdService = new this.serviceModel(service);
    await createdService.save();
    return createdService.toObject();
  }
}
