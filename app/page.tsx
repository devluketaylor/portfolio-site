import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Page } from "@/lib/types";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import { PostItem } from "@/components/post-item";

export const metadata: Metadata = {
	title: "Home",
	description: "Welcome to my website.",
};

export default function HomePage() {
	const latestPosts = sortPosts(posts).slice(0, 3);

	return (
		<main>
			<Navbar currentPage={Page.Home} />
			<Hero />
			<div>
				<h2 className="font-bold text-2xl mb-4">Latest Blog Post</h2>
				<ul className="flex flex-col gap-3">
					{latestPosts.map(
						(post) =>
							post.published && (
								<li key={post.slug}>
									<PostItem
										slug={post.slug}
										title={post.title}
										description={post.description}
										date={post.date}
										tags={post.tags}
									/>
								</li>
							),
					)}
				</ul>
			</div>
			<Footer currentPage={Page.Home} />
		</main>
	);
}
