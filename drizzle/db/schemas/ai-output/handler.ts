import { users } from "./../users/schema";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { aiOutput } from "./schema";
import { eq } from "drizzle-orm";
import { sql } from "../../sql";

const db = drizzle(sql, { schema });

export const _createAiOutput = async (
  formData: any,
  aiResponse: any,
  templateSlag: any,
  user: any
) => {
  try {
    let getuserId;
    try {
      getuserId = await db
        .select({
          id: users.id,
        })
        .from(users)
        .where(eq(users.clerkId, user.id));
    } catch (error) {
      console.error("Error fetching user ID:", error);
      throw new Error("Error fetching user ID");
    }
    const userId = getuserId.length > 0 ? getuserId[0] : null;

    if (!userId) {
      console.error("User ID not found");
      throw new Error("User ID not found");
    }

    let result;
    try {
      result = await db.insert(aiOutput).values({
        formData: formData,
        aiResponse,
        templateSlag,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        userId: userId?.id,
        // createdAt:'12-02-2024',
      });
    } catch (error) {
      console.error("Error inserting AI output:", error);
      throw new Error("Error inserting AI output");
    }

    return result;
  } catch (error) {
    console.error("Error in _createAiOutput:", error);
    throw error; // Re-throw the error after logging it
  }
};
