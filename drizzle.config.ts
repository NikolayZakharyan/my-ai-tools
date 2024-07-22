import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: ["drizzle/db/schemas/**/schema.ts", "drizzle/db/schemas/**/enums.ts"],
  dialect: "postgresql",
  out: "drizzle/migrations",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL as string,
  },
  verbose: true,
  strict: true,
});
