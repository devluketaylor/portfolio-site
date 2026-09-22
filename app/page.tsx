import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Page } from "@/lib/types";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { sortPosts } from "@/lib/utils";
import { PostItem } from "@/components/post-item";
import { fetchPosts } from "@/lib/portfolio-api";

export const metadata: Metadata = {
	title: "Home",
	description: "Welcome to my website.",
};

export default async function HomePage() {
	const latestPosts = sortPosts(await fetchPosts()).slice(0, 3);

	return (
		<main>
			<Navbar currentPage={Page.Home} />
			<Hero />
			<div>
				<h2 className="font-bold text-2xl mb-4">Latest Blog Posts</h2>
				{latestPosts.length > 0 ? (
					<ul className="flex flex-col gap-3">
						{latestPosts.map((post) => (
							<li key={post.slug}>
								<PostItem
									slug={`/blog/${post.slug}`}
									title={post.title}
									description={post.description ?? undefined}
									date={post.publishedAt}
									tags={post.tags}
								/>
							</li>
						))}
					</ul>
				) : (
					<p className="text-muted-foreground text-sm">No posts yet — check back soon.</p>
				)}
			</div>
			<Footer currentPage={Page.Home} />
		</main>
	);
}
