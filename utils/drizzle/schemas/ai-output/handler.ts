import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { aiOutput } from "./schema";

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
const db = drizzle(sql, { schema });



export const _createAiOutput = async (formData:any,aiResponse:any,templateSlag:any,user:any) => {


    const result = await db.insert(aiOutput).values({
        formData: formData,
        aiResponse,
        templateSlag,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        // createdAt:'12-02-2024',
      });



      return result


}


