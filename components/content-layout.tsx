import { ReactNode } from "react";
import TopLoader from "@/components/top-loader";
import { ThemeProvider } from "next-themes";

export default function ContentLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider attribute="class">
			<TopLoader />
			<main className="max-w-3xl px-5 mx-auto min-h-screen w-full">
				{children}
			</main>
		</ThemeProvider>
	);
}
