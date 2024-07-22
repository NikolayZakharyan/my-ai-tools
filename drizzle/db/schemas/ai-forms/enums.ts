import { pgEnum } from "drizzle-orm/pg-core";

export const aiFormFieldsEnums = pgEnum("aiFormField", ["input", "textarea"]);

export const defaultAiFormField = aiFormFieldsEnums.enumValues[0];
