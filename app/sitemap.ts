// app/sitemap.ts

import { MetadataRoute } from "next";

import { posts } from "#site/content";
import { siteConfig } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const sitemapPost: MetadataRoute.Sitemap = posts.map((post) => {
		return {
			url: `${siteConfig.url}/blog/${post.slugAsParams}`,
			priority: 1.0,
			changeFrequency: "daily",
			lastModified: post.date,
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
