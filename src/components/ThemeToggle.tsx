"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const { resolvedTheme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <></>;

	return (
		<button
			onClick={() => setTheme(resolvedTheme == "dark" ? 'light' : "dark")}
			className="md:h-[48px] md:w-[48px] md:rounded-full md:bg-[#EEF6FC] text-black md:text-white dark:text-white flex justify-center items-center md:dark:bg-[#444444]"
		>
			<svg width="24" height="24" className="hidden md:inline" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M8.82685 18.6567H6.34329C5.791 18.6567 5.34329 18.209 5.34329 17.6567V15.1724C5.34329 14.9067 5.23775 14.6519 5.0499 14.4641L3.2929 12.7071C3.10536 12.5195 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.2929 11.2929L5.06757 9.51825C5.24411 9.34171 5.34329 9.10226 5.34329 8.8526V6.34327C5.34329 5.79098 5.791 5.34327 6.34329 5.34327H8.82685C9.09302 5.34325 9.34829 5.2375 9.5365 5.04927L11.2929 3.2929C11.4805 3.10536 11.7348 3 12 3C12.2652 3 12.5196 3.10536 12.7071 3.2929L14.4636 5.04932C14.6518 5.23755 14.907 5.3433 15.1732 5.34332H17.6568C18.209 5.34332 18.6568 5.79103 18.6568 6.34332V8.82761C18.6568 9.09327 18.7623 9.34806 18.9501 9.53592L20.7071 11.2929C20.8947 11.4805 21 11.7348 21 12C21 12.2652 20.8947 12.5196 20.7071 12.7071L18.9507 14.4636C18.7625 14.6518 18.6568 14.907 18.6568 15.1732V17.6568C18.6568 18.2091 18.2091 18.6568 17.6568 18.6568H15.1724C14.9068 18.6568 14.652 18.7623 14.4641 18.9502L12.7071 20.7072C12.5196 20.8947 12.2652 21.0001 12 21.0001C11.7348 21.0001 11.4804 20.8947 11.2929 20.7072L9.5365 18.9507C9.34829 18.7625 9.09302 18.6567 8.82685 18.6567Z" stroke="#323232" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
				<path fillRule="evenodd" clipRule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" stroke="#323232" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			<span className="text-xl font-bold md:hidden">Dark Theme</span>
		</button>
	);
};

export default ThemeToggle;