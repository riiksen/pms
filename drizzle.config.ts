import type { Config } from 'drizzle-kit';
import { env } from '@/core/env';

export default {
  schema: './src/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
