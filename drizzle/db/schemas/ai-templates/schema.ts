import {
  date,
  integer,
  json,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { aiTemplateCategoryEnum, defaultAiTemplateCategory } from "./enums";
import { relations } from "drizzle-orm";
import { aiForm } from "../ai-forms/schema";
import { users } from "../users/schema";
import { defaultAiFormField } from "../ai-forms/enums";

type form = {
  field: string;
  require: boolean;
}[];

export const aiTemplates = pgTable("aiTamplates", {
  id: serial("id").primaryKey().notNull(),

  userId: integer("userId").references(() => users.id),

  name: varchar("name", { length: 80 })
    .notNull()
    .default("My ai template name"),

  description: varchar("description", { length: 255 }).default(
    "Ai description for intraduce specifictions"
  ),

  aiPrompt: text("ai_prompt")
    .notNull()
    .default("Set yours ai specific promps..."),

  aiTemplateCategory: aiTemplateCategoryEnum("aiTemplateCategory")
    .default(defaultAiTemplateCategory)
    .notNull(),

  form: json("form")
    .$type<form>()
    .default([{ field: defaultAiFormField, require: false }]),

  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

export const aiTemplateRelations = relations(aiTemplates, ({ many }) => ({
  formField: many(aiForm),
}));
