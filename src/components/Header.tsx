"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

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

				<span onClick={() => setSidebarOpen(true)} className="text-[#323232] md:hidden dark:text-white cursor-pointer">

					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.33032 16H24.6704" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

				<div className={`
				fixed inset-0 z-50 px-4 py-6 bg-white dark:bg-[#1f1f1f] md:hidden transition-transform duration-100 ease-linear
				${sidebarOpen ? "translate-x-0" : "-translate-x-[120%]"}
				`}>
					<div className="flex items-center justify-between">
						<h4 className="font-prompt text-2xl font-[500] leading-[24.19px]">Menu</h4>
						<svg onClick={() => setSidebarOpen(false)} className="text-[#323232] dark:text-white" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.53947 21.7978L21.8008 9.53647" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M9.53939 9.53605L21.8007 21.7974" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>

					<ul className="flex flex-col divide-y-[2px] divide-[#F0F5FC] dark:divide-opacity-50 mt-12 ">
						<li onClick={() => setSidebarOpen(false)} className="py-6">
							<Link href="#">
								<Image
									height={40}
									width={160}
									src={"/roi_calculator.png"}
									alt="ROI"
								/>
							</Link>
						</li>
						<li onClick={() => setSidebarOpen(false)} className="py-6">
							<Link href="#" className="text-xl font-bold">Whitepaper</Link>
						</li>
						<li onClick={() => setSidebarOpen(false)} className="py-6">
							<ThemeToggle />

						</li>
					</ul>

				</div>

			</div>
		</div>
	);
};

export default Header;