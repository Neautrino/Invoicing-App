"use client";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { createAction } from "@/app/actions";
import { SyntheticEvent, useState, startTransition } from "react";
import SubmitButton from "@/components/SubmitButton";


export default async function New() {
    const [state, setState] = useState('ready');

    async function handleOnSubmit(event: SyntheticEvent){
        event.preventDefault();
        if(state === 'pending') return;
        setState('pending');
        const target = event.target as HTMLFormElement;

        startTransition( async()=>{
            const formData = new FormData(target);
        await createAction(formData);
        console.log('done');
        })
    }

    return (
        <main className="flex flex-col justify-center h-full gap-6 max-w-5xl mx-auto my-12">
            <div className="flex justify-between">
                <h1 className=" text-3xl font-bold">
                    Invoices
                </h1>
            </div>
            
            <form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-sm">
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
                    <SubmitButton />
                </div>
            </form>

        </main>
    );
}
