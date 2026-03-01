import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Service {
  @Prop({ required: true })
  cost: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
