"use server"

import {FormResult, iFormData} from "@/lib/types";
import {sendEmail, validateEmail} from "@/lib/utils";


export async function postForm({ formData }: { formData: iFormData }): Promise<FormResult> {
    if (!validateEmail(formData.email)) {
        return FormResult.Error
    }

    if (!formData.name || !formData.email || !formData.message) {
        return FormResult.Error
    }

    if (!process.env.PERSONAL_EMAIL) {
        console.error("PERSONAL_EMAIL is not defined in environment variables");
        return FormResult.Error;
    }
    
    const firstEmail = await sendEmail({ from: "luke@luketaylor.io", to: formData.email, subject: "Thanks for reaching out!", html: "<h1>Thanks for reaching out!</h1><p>I'll get back to you as soon as I can.</p>" })
    const secondEmail = await sendEmail({ from: "luke@luketaylor.io", to: process.env.PERSONAL_EMAIL!, subject: "New Contact Form Submission", html: `<h1>New Contact Form Submission</h1><p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>` })

    if (!firstEmail || !secondEmail) {
        return FormResult.Error
    }

    return FormResult.Success
}