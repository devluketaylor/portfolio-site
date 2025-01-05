"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

export const ThemeToggle = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [isDarkMode, setDarkMode] = useState(false);
	const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => {
		if (currentTheme === "dark") {
			setDarkMode(true);
		}
		console.log(theme);
	}, [currentTheme]);

	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
		setTheme(checked ? "dark" : "light");
	};

	return (
		<Button variant="ghost" onClick={() => toggleDarkMode(!isDarkMode)}>
			{isDarkMode ? (
				<MdSunny style={{ width: 20, height: 20 }} />
			) : (
				<IoMdMoon style={{ width: 20, height: 20 }} />
			)}
		</Button>
	);
};
