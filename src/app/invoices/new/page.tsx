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
      </main>
  );
}
