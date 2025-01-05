import ContactForm from "@/components/contact-form";
import Navbar from "@/components/navbar";
import { Page } from "@/lib/types";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Me",
	description: "Get in touch with me.",
};

export default function ContactPage() {
	return (
		<main>
			<Navbar currentPage={Page.Contact} />
			<ContactForm />
			<Footer currentPage={Page.Contact} />
		</main>
	);
}
