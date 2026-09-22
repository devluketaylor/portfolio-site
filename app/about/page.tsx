import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Page } from "@/lib/types";
import { Metadata } from "next";
import { fetchSettings } from "@/lib/portfolio-api";

export const metadata: Metadata = {
	title: "About",
	description: "A bit more about me.",
};

export default async function AboutPage() {
	const settings = await fetchSettings();
	const aboutHtml = settings?.aboutHtml?.trim();

	return (
		<>
			<Navbar currentPage={Page.About} />
			<div className="container max-w-3xl py-6 lg:py-10">
				<h1 className="text-3xl font-bold tracking-tight mb-6">About</h1>
				{aboutHtml ? (
					<div
						className="prose dark:prose-invert max-w-none"
						dangerouslySetInnerHTML={{ __html: aboutHtml }}
					/>
				) : (
					<div className="prose dark:prose-invert max-w-none">
						<p>
							I&apos;m Luke — a computer science student at the
							University of Missouri. I love building software, learning
							how things work under the hood, and writing about the
							journey.
						</p>
						<p>
							When I&apos;m not coding, you&apos;ll find me reading,
							exploring new tools, or working on a side project. This page
							is editable from my admin — more soon.
						</p>
					</div>
				)}
			</div>
			<Footer currentPage={Page.About} />
		</>
	);
}
