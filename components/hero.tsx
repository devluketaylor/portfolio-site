import Image from "next/image";
import Luke from "../assets/luke.jpg";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/lib/data";

export default function Hero() {
	return (
		<section className="pb-12">
			<Image
				src={Luke}
				alt={siteConfig.name}
				width={120}
				height={120}
				className="rounded-3xl outline outline-4 outline-black/5 dark:outline-white/5"
			/>
			<h1 className="text-4xl mt-8 font-bold uppercase">
				{siteConfig.name}
			</h1>
			<h2 className="text-lg font-light">Software Engineer</h2>

			<p className="text-sm mt-5">
				I'm a passionate software engineer dedicated to building
				innovative technologies that solve real-world problems. I earned
				my computer science degree from the University of Missouri, and
				I'm driven by a love for learning and creating. I'm excited to
				collaborate on impactful projects and continue growing in the
				tech industry.
			</p>

			<p className="text-sm mt-5">
				If you'd like to get in touch, please{" "}
				<span className="underline underline-offset-2 decoration-input decoration-2">
					<Link href="/contact">send me an email</Link>
				</span>{" "}
				or reach out on social media.
			</p>

			<ul className="flex items-center gap-2 mt-6">
				{socialLinks.map((link) => (
					<li key={link.name}>
						<Link target="_blank" href={link.href}>
							<link.icon style={{ width: 20, height: 20 }} />
						</Link>
					</li>
				))}
			</ul>

			<Separator className="mt-5" />
		</section>
	);
}
