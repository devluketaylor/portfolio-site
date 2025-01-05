import Link from "next/link";
import { IoIosTime } from "react-icons/io";
import { formatDate } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostItemProps {
	slug: string;
	title: string;
	description?: string;
	date: string;
	tags: string[];
}

export function PostItem({
	slug,
	title,
	description,
	date,
	tags,
}: PostItemProps) {
	return (
		<Link href={slug}>
			<article>
				<Card>
					<CardHeader>
						<div>
							<h2 className="text-lg">{title}</h2>
						</div>
					</CardHeader>
					<CardContent>
						<div className="max-w-none text-muted-foreground">
							{description}
						</div>
					</CardContent>
					<CardFooter className="block">
						<div className="flex justify-between items-center">
							<dl>
								<dt className="sr-only">Published On</dt>
								<dd className="text-sm sm:text-base font-medium flex items-center gap-2">
									<IoIosTime className="h-4 w-4 fill-muted-foreground" />
									<time
										dateTime={date}
										className="text-muted-foreground text-sm"
									>
										{formatDate(date)}
									</time>
								</dd>
							</dl>
						</div>
						<div className="flex items-center gap-1 mt-2">
							{renderTags(tags)}
						</div>
					</CardFooter>
				</Card>
			</article>
		</Link>
	);
}

export const renderTags = (tags: string[]) =>
	tags.map((tag) => (
		<div key={tag}>
			<Badge key={tag} variant="secondary">
				{tag}
			</Badge>
		</div>
	));
