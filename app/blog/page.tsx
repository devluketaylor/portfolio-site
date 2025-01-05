import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { Page } from "@/lib/types";
import Footer from "@/components/footer";
import { QueryPagination } from "@/components/query-pagination";
import { Metadata } from "next";

const POST_PER_PAGE = 5;

interface BlogPageProps {
	searchParams: Promise<{
		page?: string;
	}>;
}

export const metadata: Metadata = {
	title: "Blog",
	description: "Thoughts, stories and ideas.",
};

export default async function BlogPage(props: BlogPageProps) {
	const searchParams = await props.searchParams;
	const sortedPosts = sortPosts(posts.filter((post) => post.published));
	const currentPage = Number(searchParams?.page) || 1;
	const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

	const displayPosts = sortedPosts.slice(
		POST_PER_PAGE * (currentPage - 1),
		POST_PER_PAGE * currentPage,
	);

	return (
		<>
			<Navbar currentPage={Page.Blog} />
			<div className="container max-w-4xl py-6 lg:py-10">
				{displayPosts?.length > 0 ? (
					<ul className="flex flex-col gap-5">
						{displayPosts.map((post) => {
							const { slug, date, title, description, tags } =
								post;
							return (
								<li key={slug}>
									<PostItem
										tags={tags}
										slug={slug}
										title={title}
										date={date}
										description={description}
									/>
								</li>
							);
						})}
					</ul>
				) : (
					<p>Nothing to see here yet.</p>
				)}
			</div>
			<QueryPagination
				totalPages={totalPages}
				className="justify-end mt-4"
			/>
			<Footer currentPage={Page.Blog} />
		</>
	);
}
