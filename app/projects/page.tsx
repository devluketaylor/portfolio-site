import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Page } from "@/lib/types";
import { Metadata } from "next";
import { fetchProjects } from "@/lib/portfolio-api";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
	title: "Projects",
	description: "Things I've built.",
};

export default async function ProjectsPage() {
	const projects = await fetchProjects();

	return (
		<>
			<Navbar currentPage={Page.Projects} />
			<div className="container max-w-4xl py-6 lg:py-10">
				<div className="mb-8">
					<h1 className="text-3xl font-bold tracking-tight">Projects</h1>
					<p className="text-muted-foreground mt-2">
						A selection of things I&apos;ve built — side projects,
						coursework, and experiments.
					</p>
				</div>

				{projects.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{projects.map((project) => (
							<Card key={project.id} className="flex flex-col">
								<CardHeader>
									<div className="flex items-start justify-between gap-2">
										<h2 className="text-lg font-semibold">
											{project.title}
										</h2>
										{project.featured && (
											<Badge variant="secondary">Featured</Badge>
										)}
									</div>
								</CardHeader>
								<CardContent className="flex-1">
									<p className="text-sm text-muted-foreground">
										{project.description}
									</p>
									{project.tech.length > 0 && (
										<div className="flex flex-wrap gap-1 mt-4">
											{project.tech.map((t) => (
												<Badge key={t} variant="outline">
													{t}
												</Badge>
											))}
										</div>
									)}
								</CardContent>
								<CardFooter className="gap-4">
									{project.repoUrl && (
										<Link
											href={project.repoUrl}
											target="_blank"
											className="flex items-center gap-1 text-sm hover:underline"
										>
											<FaGithub className="h-4 w-4" />
											Code
										</Link>
									)}
									{project.liveUrl && (
										<Link
											href={project.liveUrl}
											target="_blank"
											className="flex items-center gap-1 text-sm hover:underline"
										>
											<ExternalLink className="h-4 w-4" />
											Live
										</Link>
									)}
								</CardFooter>
							</Card>
						))}
					</div>
				) : (
					<p className="text-muted-foreground">
						Projects coming soon — check back shortly.
					</p>
				)}
			</div>
			<Footer currentPage={Page.Projects} />
		</>
	);
}
