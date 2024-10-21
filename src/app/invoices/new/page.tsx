import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


export default function New() {
    return (
        <main className="flex flex-col justify-center h-full gap-6 max-w-5xl mx-auto my-12">
            <div className="flex justify-between">
                <h1 className=" text-3xl font-bold">
                    Invoices
                </h1>
            </div>
            
            <form action="" className="grid gap-4 max-w-sm">
                <div>
                    <Label className="block font-semibold text-sm mb-2" htmlFor="name">Billing Name</Label>
                    <Input name="name" id="name" type="text" />
                </div>
                <div>
                    <Label className="block font-semibold text-sm mb-2" htmlFor="email">Billing Email</Label>
                    <Input name="email" id="email" type="email" />
                </div>
                <div>
                    <Label className="block font-semibold text-sm mb-2" htmlFor="value">Value</Label>
                    <Input name="value" id="value" type="text" />
                </div>
                <div>
                    <Label className="block font-semibold text-sm mb-2" htmlFor="description">Description</Label>
                    <Textarea name="description" id="description" /> 
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
