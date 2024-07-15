import { pgTable,varchar } from "drizzle-orm/pg-core";



export const  UserTable = pgTable("UserTable",{
    user_id: varchar('user_id').unique().notNull(),
    email:varchar('email').unique().notNull(),
    user_name:varchar('user_name').unique(),
    first_name:varchar('first_name'),
    full_name:varchar('full_name'),

}) 





