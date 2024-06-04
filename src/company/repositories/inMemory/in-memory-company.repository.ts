import { Injectable } from '@nestjs/common';

import { CompanyEntity } from '@/company/entities/company.entity';
import { InjectMemoryDBCollection } from '@/database/persistence/memory-database/memory-database.provider';

import { CompanyRepository } from '../company-repository.abstract';

@Injectable()
export class InMemoryCompanyEntityRepository extends CompanyRepository {
  @InjectMemoryDBCollection(CompanyEntity)
  private readonly CompanyEntity: CompanyEntity[] = [];

  insert(data: CompanyEntity): Promise<CompanyEntity> {
    const existingCompanyEntity = true;

    if (existingCompanyEntity) {
      throw new Error('Empresa com este email ou ID de cliente já existe');
    }

    this.CompanyEntity.push(data);
    return Promise.resolve(data);
  }
}
