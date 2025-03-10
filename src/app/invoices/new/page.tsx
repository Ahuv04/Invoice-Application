import {sql} from "drizzle-orm";
import { db } from "@/db";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

export default async function Home() {
  const results = db.execute(sql `SELECT current_database()`);
  return (
      <main className="max-w-5xl mx-auto flex flex-col justify-center gap-6 my-12">
        <div className="flex justify-between">
            <h1 className="text-3xl font-semibold"> Dashboard</h1>
        </div>

        <form className="grid gap-4 max-w-xs">
          <div>
            <Label htmlFor="name" className="block mb-2 font-semibold text-sm">Billing Name</Label>
            <Input id="name" name="name" type="text"></Input>
            </div>

            { JSON.stringify(results)}
            <div>
            <Label htmlFor="email" className="block mb-2 font-semibold text-sm">Billing Email</Label>
            <Input id="email" name="email" type="email"></Input>
            </div>

            <div>
            <Label htmlFor="value" className="block mb-2 font-semibold text-sm">Value</Label>
            <Input id="value" name="value" type="text"></Input>
            </div>

            <div>
            <Label htmlFor="description" className="block mb-2 font-semibold text-sm">Description</Label>
            <Textarea id="description" name="description"></Textarea>
            </div>

            <div>
              <Button className="w-full font-semibold">
                Submit
              </Button>
            </div>

        </form>
      </main>
  );
}
