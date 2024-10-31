"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button"

const SubmitButton = () => {

    const { pending } = useFormStatus();
    console.log(pending);
    return (
        <Button className="w-full font-semibold">
            Submit
        </Button>
    )
}

export default SubmitButton;