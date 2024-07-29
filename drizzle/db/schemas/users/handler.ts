import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { users, emailAddresses } from "./schema";
import { neon_sql } from "../../sql";
import { eq } from "drizzle-orm";

const db = drizzle(neon_sql, { schema });

export const _createUser = async (clerkUser: any) => {
  const user = await db
    .insert(users)
    .values({
      clerkId: clerkUser.id,
      primaryEmailAddressId: clerkUser.primary_email_address_id,
      createdAt: new Date(clerkUser.created_at),
      firstName: clerkUser.first_name,
      lastName: clerkUser.last_name,
    })
    .returning({
      userId: users.id,
    });

  console.log(user);

  const emailAddressesValues = clerkUser.email_addresses.map((item: any) => {
    return {
      userId: user[0].userId,
      emailAddress: item.email_address,
      emailId: item.id,
      object: item.object,
    };
  });

  const emailAddresse = await db
    .insert(emailAddresses)
    .values(emailAddressesValues);
};

export const _emailAddresse = async () => {
  let a = await db.query.users.findFirst({
    with: {
      emailAddresses: true,
    },
  });

  return a;
};

export const _getUserIdByClarkId = async (currectUserClarkId: string) => {
  let getuserId;
  try {
    getuserId = await db
      .select({
        id: users.id,
      })
      .from(users)
      .where(eq(users.clerkId, currectUserClarkId));
  } catch (error) {
    console.error("Error fetching user ID:", error);
    throw new Error("Error fetching user ID");
  }
  const userId = getuserId.length > 0 ? getuserId[0] : null;

  if (!userId) {
    console.error("User ID not found");
    throw new Error("User ID not found");
  }

  return getuserId;
};
