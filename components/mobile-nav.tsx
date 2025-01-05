import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { pageLinks } from "@/lib/data";
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
					<SheetTitle>LUKE TAYLOR</SheetTitle>
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
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
