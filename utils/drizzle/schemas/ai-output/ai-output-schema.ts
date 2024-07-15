import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";


export const aiOutput = pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlag: varchar('templateSlag').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
}) 