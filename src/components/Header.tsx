"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {

	const { theme } = useTheme();

	return (
		<div className="p-4">
			<div className="h-[48px] flex justify-between items-center w-full max-w-[1240px] mx-auto">
				<Image
					src={theme === "dark" ? "/logo_dark.png" : "/logo_light.png"}
					height={30}
					width={120}
					alt="Logo"
				/>

				<span className="text-[#323232] md:hidden dark:text-white cursor-pointer">

					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.33032 16H24.6704" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
						<path d="M7.33032 21.3354H24.6704" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M7.32983 10.6645H24.6699" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</span>
				<div className="items-center hidden gap-3 md:flex">
					<ThemeToggle />


					<ul className="flex items-center gap-8 h-[48px] px-8 bg-[#EEF6FC] dark:bg-[#444444] rounded-full">
						<li>
							<Link href="#" className="font-bold">Whitepaper</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									height={36}
									width={120}
									src={"/roi_calculator.png"}
									alt="ROI"
								/>
							</Link>
						</li>
					</ul>
				</div>

			</div>
		</div>
	);
};

export default Header;