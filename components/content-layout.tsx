"use client";

import { ReactNode } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";

export default function ContentLayout({ children }: { children: ReactNode }) {
	const { systemTheme, theme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<ThemeProvider attribute="class">
			<NextTopLoader
				shadow={false}
				showSpinner={false}
				height={2}
				color={currentTheme === "dark" ? "#FFFFFF" : "#000000"}
			/>
			<main className="max-w-3xl px-5 mx-auto min-h-screen">
				{children}
			</main>
		</ThemeProvider>
	);
}
