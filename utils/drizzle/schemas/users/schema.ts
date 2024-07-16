import { pgTable,varchar,serial,timestamp } from "drizzle-orm/pg-core";



export const  UserTable = pgTable("UserTable",{
    id:serial('id').primaryKey(),
    createdAt: timestamp("created_at").defaultNow().notNull(),

    user_id: varchar('user_id').unique().notNull(),
    email:varchar('email').unique().notNull(),
    last_name:varchar('last_name'),
    first_name:varchar('first_name'),

}) 





