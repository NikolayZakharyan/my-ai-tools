import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";


export const testTable = pgTable('testTable',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlag: varchar('templateSlag').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
}) 


export const secoundtestTable = pgTable('secoundtestTable',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlag: varchar('templateSlag').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
}) 