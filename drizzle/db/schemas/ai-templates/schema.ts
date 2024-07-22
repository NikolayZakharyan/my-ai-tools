import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { aiTemplateCategoryEnum, defaultAiTemplateCategory } from "./enums";
import { relations } from "drizzle-orm";
import { aiForm } from "../ai-forms/schema";

export const aiTemplates = pgTable("aiTamplates", {
  id: serial("id").primaryKey().notNull(),

  name: varchar("name", { length: 80 })
    .notNull()
    .default("My ai template name"),

  description: varchar("description", { length: 255 }).default(
    "Ai description for intraduce specifictions"
  ),

  aiPrompts: text("ai_prompt")
    .notNull()
    .default("Set yours ai specific promps..."),

  category: aiTemplateCategoryEnum("category")
    .default(defaultAiTemplateCategory)
    .notNull(),
});

export const aiTemplateRelations = relations(aiTemplates, ({ many }) => ({
  formField: many(aiForm),
}));
