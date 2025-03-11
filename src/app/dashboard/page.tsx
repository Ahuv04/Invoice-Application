
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
import {Button } from "@/components/ui/button"
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { CirclePlus } from "lucide-react"
import {db} from "@/db";
import { Invoices } from "@/db/schema";
import {cn} from "@/lib/utils";


export default async function Home() {
    const results = await db.select().from(Invoices);
    // console.log(results);
  return (
      <main className="max-w-5xl mx-auto flex flex-col justify-center gap-6 text-center my-12">
        <div className="flex justify-between">
            <h1 className="text-3xl font-semibold"> Dashboard</h1>
            <p>
            <Button className="inline-flex gap-2" variant="ghost" asChild>
                <Link href="/invoices/new">
                <CirclePlus className="h-4 w-4"/>
                Create Invoice
                </Link>
            </Button>
        </p>
        </div>
        <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px] p-4">Date</TableHead>
            <TableHead className="text-left p-4">Customer</TableHead>
            <TableHead className="text-left p-4">Email</TableHead>
            <TableHead className="text-center p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            { results.map(result =>{
                return(
                    <TableRow key={result.id}>
                        <TableCell className="text-center font-medium p-0">
                            <Link className=" block p-4" href={`/invoices/${result.id}`}>
                            {new Date(result.createTs).toLocaleDateString()}
                            </Link>
                        </TableCell>
                        <TableCell className="text-left p-0">
                            <Link className=" block p-4" href={`/invoices/${result.id}`}>
                                Name
                            </Link>
                            </TableCell>
                        <TableCell className="text-left p-0">
                            <Link className=" block p-4" href={`/invoices/${result.id}`}>
                                Email
                            </Link>
                        </TableCell>
                        <TableCell className="text-center p-0">
                            <Link className=" block p-4" href={`/invoices/${result.id}`}>
                                <Badge className={cn(
                                        "rounded-full capitalize",
                                        result.stat==='open' && 'bg-blue-500',
                                        result.stat==='paid' && 'bg-green-600',
                                        result.stat==='void' && 'bg-zinc-700',
                                        result.stat==='uncollectible' && 'bg-red-500',
                                    )}> 
                                    {result.stat}
                                </Badge>
                            </Link>
                        </TableCell>
                        <TableCell className="text-right p-0">
                            <Link className=" block p-4" href={`/invoices/${result.id}`}>
                                ${(result.value/100).toFixed(2)}
                            </Link>
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
        </Table>
      </main>
  );
}
