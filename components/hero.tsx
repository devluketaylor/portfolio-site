import Image from "next/image";
import Luke from "../assets/luke.jpg";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/lib/data";
import { fetchSettings } from "@/lib/portfolio-api";

export default async function Hero() {
	// Hero copy is editable from the Phluent Labs admin (Portfolio → Site
	// settings). Fall back to sensible CS-student defaults when unset.
	const settings = await fetchSettings();
	const title = settings?.heroTitle?.trim() || siteConfig.name;
	const subtitle = settings?.heroSubtitle?.trim() || "Computer Science Student";

	return (
		<section className="pb-12">
			<div className="w-[130px] h-[130px] relative overflow-hidden">
				<Image
					fill
					src={Luke}
					alt={siteConfig.name}
					className="rounded-3xl outline outline-4 outline-black/5 dark:outline-white/5 object-cover"
				/>
			</div>
			<h1 className="text-4xl mt-8 font-bold uppercase tracking-tight">{title}</h1>
			<h2 className="text-lg font-light text-muted-foreground">{subtitle}</h2>

			<p className="text-sm mt-5 leading-relaxed">
				I&apos;m a computer science student at the University of Missouri who
				loves turning ideas into software. I build web apps, tinker with
				algorithms, and write about what I learn along the way. I&apos;m always
				keen to collaborate and keep growing as an engineer.
			</p>

			<p className="text-sm mt-5">
				If you&apos;d like to get in touch, please{" "}
				<span className="underline underline-offset-2 decoration-input decoration-2">
					<Link href="/contact">send me an email</Link>
				</span>{" "}
				or reach out on social media.
			</p>

			<ul className="flex items-center gap-2 mt-6">
				{socialLinks.map((link) => (
					<li key={link.name}>
						<Link target="_blank" href={link.href} aria-label={link.name}>
							<link.icon style={{ width: 20, height: 20 }} />
						</Link>
					</li>
				))}
			</ul>

			<Separator className="mt-5" />
		</section>
	);
}
