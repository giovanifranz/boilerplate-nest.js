import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvironmentModule } from '@/environment/environment.module';
import { EnvironmentService } from '@/environment/services/environment.service';

const CONNECTION = MongooseModule.forRootAsync({
  imports: [EnvironmentModule],
  useFactory: (env: EnvironmentService) => {
    return {
      uri: env.get('DATABASE_URL'),
      dbName: env.get('DATABASE_NAME'),
    };
  },
  inject: [ConfigService],
});

@Module({
  imports: [CONNECTION],
  exports: [CONNECTION],
})
export class MongoDatabaseModule {}
