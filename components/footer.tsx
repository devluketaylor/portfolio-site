import { pageLinks, socialLinks } from "@/lib/data";
import Link from "next/link";
import { Page } from "@/lib/types";

export default function Footer({ currentPage }: { currentPage: Page }) {
	return (
		<footer className="flex justify-between pt-32 pb-8">
			<div>
				<ul className="flex items-center gap-3">
					{socialLinks.map((link) => (
						<li key={link.name}>
							<Link target="_blank" href={link.href}>
								<link.icon style={{ width: 20, height: 20 }} />
							</Link>
						</li>
					))}
				</ul>
				<p className="text-xs mt-12">
					Powered By{" "}
					<span className="bg-gradient-to-r from-zinc-400 to-zinc-600 text-transparent bg-clip-text">
						Luke Taylor
					</span>
				</p>
			</div>

			<div>
				<div>
					<ul>
						{pageLinks.map((link) => (
							<li key={link.name}>
								<Link href={link.href}>
									<p
										className={`${currentPage === link.rel ? "text-black dark:text-white" : "text-zinc-500 "}`}
									>
										{link.name}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
