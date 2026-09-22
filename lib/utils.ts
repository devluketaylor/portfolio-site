import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EmailData } from "@/lib/types";
import { Resend } from "resend";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const validateEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const { error } = await resend.emails.send({
		from: emailData.from,
		to: emailData.to,
		subject: emailData.subject,
		html: emailData.html,
	});

	return !error;
};

export const formatDate = (input: string | number): string => {
	const date = new Date(input);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

export const sortPosts = <T extends { publishedAt: string }>(posts: Array<T>): Array<T> => {
	return [...posts].sort((a, b) => {
		if (a.publishedAt > b.publishedAt) return -1;
		if (a.publishedAt < b.publishedAt) return 1;
		return 0;
	});
};
