import { Module } from '@nestjs/common';

import { CompanySchemaDefinition } from '@/company/repositories/mongo/company.document.schema';
import { PersistenceModule } from '@/database/persistence/persistence.module';
import { getPersistence } from '@/libs/getPersistence';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyRepository } from './repositories/company-repository.abstract';
import { InMemoryCompanyEntityRepository } from './repositories/inMemory/in-memory-company.repository';
import { MongoCompanyRepository } from './repositories/mongo/mongo-company.repository';

@Module({
  imports: [PersistenceModule.forFeature(getPersistence(), [CompanySchemaDefinition])],
  providers: [
    PersistenceModule.repository(CompanyRepository, {
      MONGO: MongoCompanyRepository,
      MEMORY: InMemoryCompanyEntityRepository,
    }),
    CompanyService,
  ],
  controllers: [CompanyController],
})
export class CompanyModule {}
