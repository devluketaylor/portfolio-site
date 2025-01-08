import {
	Sheet,
	SheetContent, SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { pageLinks, socialLinks } from "@/lib/data";
import Link from "next/link";
import { Page } from "@/lib/types";

const MobileNav = ({ currentPage }: { currentPage: Page }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<GiHamburgerMenu style={{ width: 20, height: 20 }} />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-start mb-12">LUKE TAYLOR</SheetTitle>
				</SheetHeader>
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

				<SheetFooter>
				<ul className="mt-8 flex items-center gap-4">
					{ socialLinks.map((link) => (
						<li key={link.name}>
							<Link href={link.href}>
								<link.icon style={{ width: 20, height: 20 }} />
							</Link>
						</li>
					))}
				</ul>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
