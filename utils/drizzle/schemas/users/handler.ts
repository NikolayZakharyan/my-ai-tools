import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { UserTable } from "./schema";

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
const db = drizzle(sql, { schema });



export const _createUser = async (user:any) => {
    console.clear()
    console.log(user)


    const result = await db.insert(UserTable).values({
        user_id:user.id,
        email:user.email_addresses[0].email_address,
        first_name:user.first_name,
        last_name:user.last_name,
        createdAt: new Date(user.created_at),

      });



      return result


}


