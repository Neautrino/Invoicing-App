"use client";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { createAction } from "@/app/actions";
import { SyntheticEvent, useState } from "react";
import SubmitButton from "@/components/SubmitButton";
import Form from "next/form";
import Container from "@/components/Container";


export default function New() {
    const [state, setState] = useState('ready');

    async function handleOnSubmit(event: SyntheticEvent) {        
        if (state === 'pending') {
            event.preventDefault();
            return;
        }
        setState('pending');        
    }

    return (
        <main className="h-full">
            <Container>
            <div className="flex justify-between mb-6">
                <h1 className=" text-3xl font-bold">
                    Invoices
                </h1>
            </div>

            <Form action={createAction} onSubmit={handleOnSubmit}  className="grid gap-4 max-w-sm">
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
            </Form>
            </Container>
        </main>
    );
}
