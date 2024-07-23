import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";

// import * as users from "./schemas/users/schema";
// import * as templates from "./schemas/ai-templates/schema";
// import * as outputs from "./schemas/ai-output/schema";

export const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);

// export const db = drizzle(sql, { schema: { users, templates, outputs } });
