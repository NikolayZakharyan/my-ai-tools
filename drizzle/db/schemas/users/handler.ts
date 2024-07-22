import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { users, emailAddresses } from "./schema";

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
const db = drizzle(sql, { schema });

export const _createUser = async (clerkUser: any) => {
  console.clear();

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
