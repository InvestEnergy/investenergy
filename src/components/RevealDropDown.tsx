"use client";

import { useEffect, useRef, useState } from 'react';

const RevealDropDown = ({ title, description, reveal = false }: { title: string, description: string, reveal?: boolean; }) => {
	const [isActive, setIsActive] = useState(reveal);
  const [height, setHeight] = useState(0);
  const ref = useRef<any>();

  useEffect(() => {
		
    if (ref.current) {
      setHeight(isActive ? ref.current.clientHeight : 0);
    }
  }, [isActive]);

	return (
		<div data-aos="fade-up" className="p-6 bg-white dark:bg-[#262626] cursor-pointer rounded-xl">
			<div onClick={() => setIsActive(prev => !prev)} className="flex justify-between ">
				<h3 className="font-prompt leading-[24.19px] font-[500]">{title}</h3>
				<svg width="24" height="24" className={`${isActive ? "rotate-0" : "rotate-180"} transition-all ease-in-out duration-500`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 14L12 10L8 14" stroke="#00F1E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
			<div className='overflow-hidden transition-all ease-in-out duration-500' style={{ height: `${isActive ? `${height}px` : "0px"}` }}>
				<p ref={ref} className="pt-4 font-prompt  dark:text-white leading-[24.19px]">
					{description}
				</p>
			</div>
		</div>
	);
};

export default RevealDropDown;