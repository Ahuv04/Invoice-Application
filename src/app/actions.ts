"use server";

import { redirect } from 'next/navigation'
import {db} from '@/db'
import { Invoices } from '@/db/schema';

export async function createAction(formData: FormData){
    console.log(formData);
    //storing value times 100 just a bit better for float values as type of value is integer
    const value = Math.floor(parseFloat(String(formData.get('value')))) *100 ;
    const description = formData.get('description') as string;

    const results = await db.insert(Invoices).values(
        {
            value, 
            description,
            stat : 'open'
        }).returning({
            id: Invoices.id
        });
        redirect(`/invoices/${results[0].id}`);
}
