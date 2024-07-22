import { boolean, integer, pgTable, serial } from "drizzle-orm/pg-core";
import { aiFormFieldsEnums, defaultAiFormField } from "./enums";
import { aiTemplates } from "../ai-templates/schema";

export const aiForm = pgTable("aiForms", {
  id: serial("id").primaryKey().notNull(),

  aiFormField: aiFormFieldsEnums("aiFormField").default(defaultAiFormField),

  require: boolean("require").default(false),

  templateId: integer("template_td").references(() => aiTemplates.id),
});
