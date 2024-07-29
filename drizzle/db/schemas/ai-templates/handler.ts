import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { neon_sql } from "../../sql";
import { sql } from "drizzle-orm";
import { _getUserIdByClarkId } from "../users/handler";

const db = drizzle(neon_sql, { schema });

export const _getAiTemplates = async () => {
  try {
    const result = await db.query.aiTemplates.findMany({
      extras: {
        slug: sql`REPLACE(${schema.aiTemplates.name},' ','-')`.as("slug"),
      },
    });
    return result;
  } catch (error) {}
  // const res = await db
  //   .select({
  //     aiPrompt: schema.aiTemplates.aiPrompt,
  //     slug: sql`${schema.aiTemplates.aiPrompt}`.as("slug"),
  //   })
  //   .from(schema.aiTemplates);
};

export const _createAiTemplate = async (aiTemplateData: any) => {
  const userId = await _getUserIdByClarkId(aiTemplateData.currectUserClarkId);

  console.log(aiTemplateData);

  const result = await db
    .insert(schema.aiTemplates)
    .values({
      aiPrompt: aiTemplateData.aiPrompt,
      aiTemplateCategory: aiTemplateData.category,
      description: aiTemplateData.description,
      name: aiTemplateData.name,
      userId: userId[0].id,
      form: aiTemplateData.form,
    })
    .returning();

  return result;
};
