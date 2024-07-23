import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { sql } from "../../sql";

const db = drizzle(sql, { schema });

export const _getAiTemplates = async () => {
  const result = await db.query.aiTemplates.findMany();

  console.log(result);
  return result;
};
