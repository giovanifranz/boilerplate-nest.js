import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { ICompany } from '@/company/entities/company.entity';
import { SchemaDefinition } from '@/database/persistence/schema.definition';

@Schema({ timestamps: true, collection: 'empresas' })
export class Company extends Document implements ICompany {
  @Prop({ required: true, unique: true })
  cnpj: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
export const CompanySchemaDefinition = new SchemaDefinition(Company, CompanySchema);
