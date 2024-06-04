import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CompanyModule } from './company/company.module';
import { PersistenceModule } from './database/persistence/persistence.module';
import { EnvironmentModule } from './environment/environment.module';
import { envSchema } from './environment/schemas/env.schema';
import { getPersistence } from './libs/getPersistence';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validate: envSchema.parse,
    }),
    PersistenceModule.forRoot(getPersistence()),
    EnvironmentModule,
    CompanyModule,
  ],
})
export class AppModule {}
