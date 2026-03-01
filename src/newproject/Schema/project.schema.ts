import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop({ required: true })
  budget: number;

  @Prop({ required: true })
  cost: string;

  @Prop({ type: Types.ObjectId, ref: 'Service' })
  services: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: Types.ObjectId;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
