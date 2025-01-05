import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ContentLayout from "@/components/content-layout";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-noto-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${spaceGrotesk.className} antialiased`}>
				<ContentLayout>{children}</ContentLayout>
				<Toaster />
			</body>
		</html>
	);
}
