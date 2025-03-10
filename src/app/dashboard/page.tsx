
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

export default function Home() {
  return (
      <main className="max-w-5xl mx-auto flex flex-col justify-center gap-6 text-center my-12">
        <div className="flex justify-between">
            <h1 className="text-3xl font-semibold"> Dashboard</h1>
        </div>
        <p>
            <Button className="inline-flex gap-2" variant="ghost" asChild>
                <Link href="/invoices/new">
                <CirclePlus className="h-4 w-4"/>
                Create Invoice
                </Link>
            </Button>

        </p>
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
            <TableRow >
            <TableCell className="text-center font-medium p-4"></TableCell>
            <TableCell className="text-left p-4">Name</TableCell>
            <TableCell className="text-left p-4">Email</TableCell>
            <TableCell className="text-center p-4">
            <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="text-right p-4">$250.00</TableCell>
            </TableRow>
        </TableBody>
        </Table>
      </main>
  );
}
