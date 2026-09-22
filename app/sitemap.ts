// app/sitemap.ts

import { MetadataRoute } from "next";

import { fetchPosts } from "@/lib/portfolio-api";
import { siteConfig } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await fetchPosts();
	const sitemapPost: MetadataRoute.Sitemap = posts.map((post) => {
		return {
			url: `${siteConfig.url}/blog/${post.slug}`,
			priority: 1.0,
			changeFrequency: "daily",
			lastModified: post.updatedAt,
		};
	});

	return [
		{
			url: `${siteConfig.url}`,
			priority: 1.0,
			changeFrequency: "daily",
			lastModified: new Date(),
		},
		{
			url: `${siteConfig.url}/blog`,
			priority: 1.0,
			changeFrequency: "daily",
			lastModified: new Date(),
		},
		{
			url: `${siteConfig.url}/contact`,
			priority: 1.0,
			changeFrequency: "daily",
			lastModified: new Date(),
		},
		...sitemapPost,
	];
}
