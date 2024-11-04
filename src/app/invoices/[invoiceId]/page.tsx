import { Badge } from "@/components/ui/badge";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";


export default async function InvoicePage({ params }: { params: { invoiceId: string } }) {

    const invoiceId = parseInt(params.invoiceId);

    if(isNaN(invoiceId)){
        throw new Error("Invalid invoice id");
    }

    const [invoice] = await db.select()
        .from(Invoices)
        .where(eq(Invoices.id, invoiceId))
        .limit(1)

    if(!invoice) {
        return notFound();
    }

    return (
        <main className=" h-full max-w-5xl mx-auto my-12">
            
            <div className="flex justify-between mb-8">
                <h1 className="flex items-center gap-4 text-3xl font-bold">
                    Invoice {invoiceId}
                    <Badge className={cn(
                        "rounded-full capitalize",
                        invoice.status === "open" && "bg-blue-500",
                        invoice.status === "paid" && "bg-green-600",
                        invoice.status === "void" && "bg-zinc-700",
                        invoice.status === "uncollectible" && "bg-red-600",
                    )}>
                        {invoice.status}
                    </Badge>
                </h1>
                <p>

                </p>
            </div>

            <p className="text-3xl mb-3">
                ${(invoice.value / 100).toFixed(2)}
            </p>
            <p className="text-lg mb-8">
                {invoice.description}
            </p>
            <h2 className="font-bold text-lg mb-4">
                Billing Details
            </h2>

            <ul className="grid grid-2">
                <li className="flex gap-4">
                    <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice Id</strong>
                    <span>{invoice.id}</span>
                </li>
                <li className="flex gap-4">
                    <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice Date</strong>
                    <span>{new Date(invoice.createTs).toLocaleDateString()}</span>
                </li>
                <li className="flex gap-4">
                    <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Name</strong>

                </li>
                <li className="flex gap-4">
                    <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Email</strong>

                </li>
            </ul>

        </main>
    );
}
