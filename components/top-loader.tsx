"use client";

import NextTopLoader from "nextjs-toploader";
import { useTheme } from "next-themes";

const TopLoader = () => {
	const { systemTheme, theme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<NextTopLoader
			showSpinner={false}
			shadow={false}
			color={currentTheme === "dark" ? "#FFFFFF" : "#000000"}
		/>
	);
};

export default TopLoader;
