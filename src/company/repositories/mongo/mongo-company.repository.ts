import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { type Model } from 'mongoose';

import { ICompany } from '@/company/entities/company.entity';

import { CompanyRepository } from '../company-repository.abstract';
import { Company as CompanySchema } from './company.document.schema';

@Injectable()
export class MongoCompanyRepository extends CompanyRepository {
  @InjectModel(CompanySchema.name)
  private readonly model: Model<CompanySchema>;

  async insert(data: ICompany): Promise<ICompany> {
    const company = await this.model.create(data);

    const companyDTO: ICompany = company.toObject();

    return companyDTO;
  }
}
