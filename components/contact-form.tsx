"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import { postForm } from "@/lib/actions";
import { FormResult, iFormData } from "@/lib/types";
import { toast } from "sonner";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<iFormData>();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit: SubmitHandler<iFormData> = async (data) => {
		setIsLoading(true);

		const res = await postForm({ formData: data });
		if (res === FormResult.Success) {
			reset();
			toast("Message sent successfully!");
		} else {
			toast("Error submitting form!");
		}

		return setIsLoading(false);
	};

	return (
		<div className="pb-32">
			<h1 className="mb-4 font-bold text-2xl">Let's get in touch!</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex gap-3">
					<Input
						type="text"
						{...register("name", { required: true })}
						placeholder="Name"
						className={`${errors.name && "outline-2 outline outline-red-500/40 outline-offset-2"}`}
					/>

					<Input
						type="email"
						{...register("email", { required: true })}
						placeholder="Email"
						className={`${errors.email && "outline-2 outline outline-red-500/40 outline-offset-2"}`}
					/>
				</div>
				<Textarea
					className={`${errors.message && "outline-2 outline outline-red-500/40 outline-offset-2"} mt-3`}
					{...register("message", { required: true })}
					placeholder="Message"
				/>

				<Button
					disabled={isLoading}
					className="mt-4 w-24"
					size="lg"
					type="submit"
				>
					{isLoading ? (
						<AiOutlineLoading className="animate-spin" />
					) : (
						<div className="flex items-center gap-2">
							<p>Send</p>
							<IoIosSend />
						</div>
					)}
				</Button>
			</form>
		</div>
	);
}
