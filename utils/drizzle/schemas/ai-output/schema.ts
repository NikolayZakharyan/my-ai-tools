import {
  serial,
  text,
  pgTable,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { users } from "../users/schema";

export const aiOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: text("aiResponse"),
  templateSlag: varchar("templateSlag").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userId: integer("user_id").references(() => users.id),
});
