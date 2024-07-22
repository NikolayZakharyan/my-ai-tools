import {
  pgTable,
  varchar,
  serial,
  timestamp,
  integer,
  text,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { aiOutput } from "../ai-output/schema";
import { aiTemplates } from "../ai-templates/schema";

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),

  clerkId: varchar("clerk_id").notNull(),
  primaryEmailAddressId: varchar("primary_email_address_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  lastName: varchar("last_name"),
  firstName: varchar("first_name"),
});

export const usersRelations = relations(users, ({ one, many }) => ({
  emailAddresses: one(emailAddresses, {
    fields: [users.id],
    references: [emailAddresses.userId],
  }),
  aiTemplates: many(aiTemplates),
  aiOutput: many(aiOutput),
}));

export const emailAddresses = pgTable("emailAddresses", {
  id: serial("id").primaryKey(),

  emailAddress: varchar("email_address").notNull(),
  emailId: varchar("email_id").unique().notNull(),
  object: text("object"),

  userId: integer("user_id").references(() => users.id),
});
