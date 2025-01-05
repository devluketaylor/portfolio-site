import Link from "next/link";
import { JSX } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { pageLinks } from "@/lib/data";
import { Page } from "@/lib/types";
import MobileNav from "@/components/mobile-nav";

export default function Navbar({
	currentPage,
}: {
	currentPage: Page;
}): JSX.Element {
	return (
		<nav>
			<div className="flex items-center justify-between pt-8 pb-32">
				<ul className="flex items-center gap-4">
					<Link href="/">
						<p className="mr-3 font-bold uppercase">LUKE TAYLOR</p>
					</Link>
					{pageLinks.map((link) => (
						<li key={link.name} className="hidden sm:block">
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
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<div className="sm:hidden">
						<MobileNav currentPage={currentPage} />
					</div>
				</div>
			</div>
		</nav>
	);
}
