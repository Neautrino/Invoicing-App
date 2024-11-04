import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import Container from "@/components/Container";


export default async function Dashboard() {

    const results = await db.select().from(Invoices);
    return (
        <main className="h-full">
            <Container>
            <div className="flex justify-between mb-6">
                <h1 className=" text-3xl font-bold">
                    Invoices
                </h1>
                <p>
                    <Button variant={"ghost"} className="inline-flex gap-2" asChild>
                        <Link href={"/invoices/new"}>
                            <CirclePlus className="w-4 h-4" />
                            Create Invoice
                        </Link>
                    </Button>
                </p>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] p-4">
                            Date
                        </TableHead>
                        <TableHead className="p-4">
                            Customer
                        </TableHead>
                        <TableHead className="p-4">
                            Email
                        </TableHead>
                        <TableHead className="text-center p-4">
                            Status
                        </TableHead>
                        <TableHead className="text-right p-4">
                            Value
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {results.map((invoice) => (
                        <TableRow key={invoice.id}>
                            <TableCell className="font-medium text-left">
                                <Link href={`/invoices/${invoice.id}`} className="p-4 block font-semibold">
                                    {new Date(invoice.createTs).toLocaleDateString("en-IN")}
                                </Link>
                            </TableCell>
                            <TableCell className="text-left">
                                <Link href={`/invoices/${invoice.id}`} className="font-semibold  p-4 block">
                                    Subhendu Singh
                                </Link>
                            </TableCell>
                            <TableCell className="text-left">
                                <Link className="  p-4 block" href={`/invoices/${invoice.id}`}>
                                    subhendu@gmail.com
                                </Link>
                            </TableCell>
                            <TableCell className="text-center">
                                <Link className="  p-4 block" href={`/invoices/${invoice.id}`}>
                                    <Badge className={cn(
                                        "rounded-full capitalize",
                                        invoice.status === "open" && "bg-blue-500",
                                        invoice.status === "paid" && "bg-green-600",
                                        invoice.status === "void" && "bg-zinc-700",
                                        invoice.status === "uncollectible" && "bg-red-600",
                                    )}>
                                        {invoice.status}
                                    </Badge>
                                </Link>
                            </TableCell>
                            <TableCell className="text-right">
                                <Link href={`/invoices/${invoice.id}`} className="font-semibold  p-4 block">
                                    ${(invoice.value / 100).toFixed(2)}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </Container>
        </main>
    );
}
