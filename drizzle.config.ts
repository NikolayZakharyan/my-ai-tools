import { defineConfig } from 'drizzle-kit'


export default defineConfig({
  schema: "utils/drizzle/schemas/**/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL as string,
  },
  verbose: true,
  strict: true,
})