import {db} from "@/db";
import { Invoices } from "@/db/schema";
import {eq} from "drizzle-orm";
import { Badge } from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function InvoicePage({params} : {params : {invoiceId: string}}) {
    const local = await params;
    const invoiceId = parseInt(local.invoiceId);

    if(isNaN(invoiceId)){
        throw new Error(`Invalid Invoice ID : ${invoiceId}`);
    }
    const [result] = await db.select().from(Invoices).where(eq(Invoices.id, invoiceId)).limit(1);
    // console.log(result);

    if(!result){
        notFound();
    }

    return (
      <main className="max-w-5xl mx-auto flex flex-col justify-center gap-6 text-center my-12">
        <div className="flex justify-between">
            <h1 className="text-3xl font-semibold"> Invoice {invoiceId}</h1>
            
        </div>
        <p className="flex justify-between text-3xl font-semibold"> 
            ${(result.value/100).toFixed(2)}
        </p>

        <p className="flex justify-between">
            <Badge className={cn(
                "rounded-full capitalize",
                result.stat==='open' && 'bg-blue-500',
                result.stat==='paid' && 'bg-green-600',
                result.stat==='void' && 'bg-zinc-700',
                result.stat==='uncollectible' && 'bg-red-500',
            )}> 
                {result.stat}
            </Badge>
        </p>        
        <h2  className="flex justify-between text-center text-xl">
            Invoice Details 
        </h2>            

        <ul className="grid gap-2">
            <li className="flex gap-4" >
            <strong>Invoice ID</strong>
            <span>{invoiceId}</span>
            </li>
            
            <li className="flex gap-4" >
            <strong>Invoice Date</strong>
            <span>{new Date(result.createTs).toLocaleDateString()}</span>
            </li>
            <li className="flex gap-4">
            <strong>Invoice Value</strong>
            <span>${(result.value/100).toFixed(2)}</span>
            </li>
            <li className="flex gap-4">
            <strong>Invoice Description</strong>
            <span>{result.description}</span>
            </li>
        </ul>
      </main>
  );
}
