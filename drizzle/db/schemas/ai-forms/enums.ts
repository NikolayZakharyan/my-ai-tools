import { pgEnum } from "drizzle-orm/pg-core";

export const aiFormFieldsEnums = pgEnum("aiFormFields", ["input", "textarea"]);

export const defaultAiFormField = aiFormFieldsEnums.enumValues[0];
