import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";

//with client you can set up a connection(drizzle instance) but with pool you can create pool of connections for a single client

import { Pool } from "pg";
import { Invoices } from "@/db/schema";

const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 20 });
export const db = drizzle(pool, {
  schema:{
    Invoices
  }
});

/*Client connection sample code
import { Client } from "pg";
const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
const db = drizzle(client);
const tableName = pgTable("tableName", {
  xata_id: text("xata_id").primaryKey(),
});

const record = await db
  .select()
  .from(tableName)
  .where(eq(tableName.xata_id, "rec_xyz"))
  .execute();
console.log(record);
*/
