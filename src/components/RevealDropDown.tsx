"use client";

import { useState } from 'react';

const RevealDropDown = ({ title, description, reveal = false }: { title: string, description: string, reveal?: boolean; }) => {
	const [show, setShow] = useState(reveal);
	return (
		<div className="p-6 bg-white dark:bg-[#262626] cursor-pointer rounded-xl">
			<div onClick={() => setShow(prev => !prev)} className="flex justify-between ">
				<h3 className="font-prompt leading-[24.19px] font-[500]">{title}</h3>
				<svg width="24" height="24" className={`${show ? "rotate-0" : "rotate-180"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 14L12 10L8 14" stroke="#00F1E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
			{
				show &&
				<p className="mt-4 text-[#000000] font-prompt  dark:text-white leading-[24.19px]">
					{description}
				</p>
			}
		</div>
	);
};

export default RevealDropDown;