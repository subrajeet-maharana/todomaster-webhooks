"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { useSignUp } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email Can't be empty" })
        .email("Enter a valid Email"),
    password: z.string().min(1, { message: "Enter the password to proceed" })
})

export default function Signup() {
    const { isLoaded, setActive, signUp } = useSignUp();
    const [verificationPending, setVerificationPending] = useState(false);
    const form = useForm();

    async function handleGetOTP(formData: z.infer<typeof formSchema>) {
        e.preventDefault();
        try {
            await signUp?.create({

            })
        }
        catch (err: any) {
            console.log(`Error From HandleGetOTP is ${err}`)
        }
    }

    return (
        <div className="shadow-md p-8 rounded-sm w-1/4">
            {!isLoaded
                ? <Loader className="animate-spin" />
                : (!verificationPending
                    ? (
                        <Form {...form}>
                            <form onSubmit={handleGetOTP(form)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="emailAddress"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="joh.doe@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="*******" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size={"sm"}>Get OTP</Button>
                            </form>
                        </Form>
                    )
                    : (
                        <Form {...form}>
                            <form className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>OTP</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size={"sm"}>Verify OTP</Button>
                            </form>
                        </Form>
                    )
                )
            }
        </div>
    )

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(form);
    }
}
