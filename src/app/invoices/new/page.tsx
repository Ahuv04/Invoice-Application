"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/SubmitButton"
import { SyntheticEvent, useState } from "react";
import { createAction } from "@/app/actions";
import Form from "next/form";

export default function Home() {
  /** 
   * Handling following things here:
   * - not letting it create duplicate data entries when submit button is spammed, using state for this
   * - prevent default to ensure data fields are not reset
   * - calling out action function from within handleOnSubmit to make sure that happens serailly
  */
  const [state, setState]= useState('ready');

  async function handleOnSubmit(event: SyntheticEvent){
    if(state==='pending'){
      event.preventDefault();
      return;
    }
    setState('pending');

    // const target = event.target as HTMLFormElement;
  
    /**
     * needed this before when not using "Form" from react
     */
    // startTransition(
    //   async () =>{
    //     const formData = new FormData(target);
    //     await createAction(formData);
    //     console.log('working?');    
    //   });
  }

  // const results = db.execute(sql `SELECT current_database()`);
  return (
      <main className="max-w-5xl mx-auto flex flex-col justify-center gap-6 my-12">
        <div className="flex justify-between">
            <h1 className="text-3xl font-semibold"> Create New Invoice</h1>
        </div>

        <Form action={createAction} onSubmit={handleOnSubmit}  className="grid gap-4 max-w-xs">
          <div>
            <Label htmlFor="name" className="block mb-2 font-semibold text-sm">Billing Name</Label>
            <Input id="name" name="name" type="text"></Input>
            </div>

            {/* { JSON.stringify(results)} */}
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
              <SubmitButton />
            </div>

        </Form>
      </main>
  );
}
