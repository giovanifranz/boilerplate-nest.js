import { PERSISTENCE } from '@/database/persistence/persistence.module';

export function getPersistence() {
  return process.env.PERSISTENCE === PERSISTENCE.MEMORY
    ? PERSISTENCE.MEMORY
    : PERSISTENCE.MONGO;
}
