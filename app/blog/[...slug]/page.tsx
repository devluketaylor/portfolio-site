import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { MDXContent } from "@/components/mdx-components";
import Navbar from "@/components/navbar";
import { Page } from "@/lib/types";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import LukeImage from "@/assets/luke.jpg";
import { IoIosTime } from "react-icons/io";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { renderTags } from "@/components/post-item";
import "@/styles/mdx.css";

interface PostPageProps {
	params: Promise<{
		slug: string[];
	}>;
}

async function getPostFromParams(params: PostPageProps["params"]) {
	const slug = (await params).slug.join("/");
	return posts.find((post) => post.slugAsParams === slug);
}

export async function generateMetadata(
	props: PostPageProps,
): Promise<Metadata> {
	const params = props.params;
	const post = await getPostFromParams(params);

	if (!post) {
		return {};
	}

	const ogSearchParams = new URLSearchParams();
	ogSearchParams.set("title", post.title);

	return {
		title: post.title,
		description: post.description,
		authors: { name: siteConfig.author },
		openGraph: {
			title: post.title,
			description: post.description,
			type: "article",
			url: post.slug,
			images: [
				{
					url: `/api/og?${ogSearchParams.toString()}`,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [`/api/og?${ogSearchParams.toString()}`],
		},
	};
}

export async function generateStaticParams(): Promise<
	PostPageProps["params"][]
> {
	//@ts-expect-error next 15 is annoying and im confused
	return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage(props: PostPageProps) {
	const params = await props.params;
	//@ts-expect-error next 15 is annoying and im confused
	const post = await getPostFromParams(params);

	if (!post || !post.published) {
		return notFound();
	}

	return (
		<div>
			<Navbar currentPage={Page.Blog} />
			<Link href="/blog" className="flex">
				<ChevronLeft />
				Go Back
			</Link>
			<article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
				<h1 className="mb-2">{post.title}</h1>
				{post.description ? (
					<p className="text-xl mt-0 text-muted-foreground">
						{post.description}
					</p>
				) : null}

				<div className="flex items-center gap-3">
					<Image
						src={LukeImage}
						className="rounded-xl outline outline-accent"
						alt="luke-taylor"
						width={60}
						height={60}
					/>

					<div className="">
						<p className="my-0 font-semibold">Luke Taylor</p>
						<div className="text-sm sm:text-base font-medium flex items-center gap-2">
							<IoIosTime className="h-4 w-4 fill-muted-foreground" />
							<time
								dateTime={post.date}
								className="text-muted-foreground text-sm"
							>
								{formatDate(post.date)}
							</time>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-1">
					{renderTags(post.tags)}
				</div>
				<Separator className="my-4" />

				<MDXContent code={post.body} />
			</article>
			<Footer currentPage={Page.Blog} />
		</div>
	);
}
