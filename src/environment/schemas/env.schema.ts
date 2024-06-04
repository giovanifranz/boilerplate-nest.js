import { z } from 'zod';

export const envSchema = z.object({
  SERVER_PORT: z.coerce.number().default(5000),
  DATABASE_URL: z.string().url(),
  DATABASE_NAME: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  JWT_PRIVATE_KEY: z.string(),
});

export type EnvSchema = z.output<typeof envSchema>;
