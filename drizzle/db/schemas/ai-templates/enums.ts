import { pgEnum } from "drizzle-orm/pg-core";

export const aiTemplateCategoryEnum = pgEnum("aiTemplateCategoryEnum", [
  "development",
  "content",
  "blog",
]);

export const defaultAiTemplateCategory = aiTemplateCategoryEnum.enumValues[0];
