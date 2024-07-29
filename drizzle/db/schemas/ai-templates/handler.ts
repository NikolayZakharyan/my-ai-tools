import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { neon_sql } from "../../sql";
import { eq, sql } from "drizzle-orm";
import { _getUserIdByClarkId } from "../users/handler";

const db = drizzle(neon_sql, { schema });

export const _getAiTemplates = async () => {
  try {
    const result = await db.query.aiTemplates.findMany({
      extras: {
        slug: sql`LOWER(REPLACE(${schema.aiTemplates.name},' ','-'))`.as(
          "slug"
        ),
        bgImage:
          sql`LOWER(CONCAT('https://picsum.photos/300/200?random=', ${schema.aiTemplates.id}))`.as(
            "bgImage"
          ),
      },
    });
    return result;
  } catch (error) {}
};

export const _getTemplateById = async (templateId: String) => {
  try {
    const result = await db
      .select()
      .from(schema.aiTemplates)
      .where(eq(schema.aiTemplates.id, +templateId));

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const _createAiTemplate = async (aiTemplateData: any) => {
  const userId = await _getUserIdByClarkId(aiTemplateData.currectUserClarkId);

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
