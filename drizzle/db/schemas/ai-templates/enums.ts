import { pgEnum } from "drizzle-orm/pg-core";

export const aiTemplateCategoryEnum = pgEnum("aiTemplateCategory", [
  "development",
  "content",
  "blog",
  "marketing",
]);

export const defaultAiTemplateCategory = aiTemplateCategoryEnum.enumValues[0];
