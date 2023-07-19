import React from 'react'

const Navigating = () => {
  return (
    <section data-aos="fade-up" data-aos-offset="400" data-aos-delay="200" data-aos-easing="ease-in-out" className="max-w-7xl px-5 mx-auto py-12">
      <h2 className="font-bold text-center font-prompt text-2xl md:text-h2 ">
        Navigating the Path to a <span className="text-skyblue-500">Greener Future</span>
      </h2>
      <p className="  text-center font-prompt text-lg text-[#1A1A1A] dark:text-white ">Our roadmap: Where we are and where we&apos;re headed</p>

      <div className="my-6 sm:my-10 lg:my-16">
        <div className="relative grid grid-cols-1 my-4 ml-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-[150%] md:w-[50%] h-[3px] z-10 -top-px  bg-skyblue-500 absolute"></div>
          <svg width="24" className="absolute hidden md:inline left-1/2 -top-6 -translate-x-1/2" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.8231 11.5753L12.8121 20.2583C12.2611 21.0533 11.0141 20.6643 11.0141 19.6963V13.9733H5.9891C5.1931 13.9733 4.7241 13.0793 5.1781 12.4243L11.1891 3.74128C11.7401 2.94628 12.9871 3.33528 12.9871 4.30328V10.0263H18.0121C18.8071 10.0263 19.2761 10.9203 18.8231 11.5753Z" stroke="#00F1E8" strokeWidth="1.5383" strokeLinecap="round" strokeLinejoin="round" />
          </svg>


          <div className="relative p-4 pl-0 dark:border-[#444444] border-t lg:border-b">
            <div className="absolute top-0 z-10 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-skyblue-500 "></div>
            <h3 className="font-prompt leading-6 font-medium">Phase 1 - Conceptualization and Development</h3>

            <ul>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Initial project conception.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Team assembly and planning.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Begin development of the ENGC app and website.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Draft the project&apos;s whitepaper.</li>
            </ul>
          </div>
          <div className="relative p-4 pl-0 dark:border-[#444444] md:border-t md:border-r lg:border-b lg:border-r-0 rounded-r-2xl lg:rounded-r-none">
            <div className="absolute top-0 z-10 w-2.5 h-2.5 hidden md:block -translate-y-1/2 rounded-full bg-skyblue-500 "></div>
            <h3 className="font-prompt leading-6 font-medium">Phase 2 - Community Building</h3>

            <ul>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Launch the ENGC website.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Create and engage an online community.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Establish a beta testing group..</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Mint the initial collection of 6000 NFTs.</li>
            </ul>
          </div>
          <div className="p-4 pl-0 dark:border-[#444444] relative md:border-t md:border-b md:border-l rounded-l-2xl lg:rounded-l-none lg:border-l-0 lg:border-r lg:rounded-r-2xl">
            <div className="absolute top-0 z-10 w-2.5 h-2.5 hidden md:block -translate-y-1/2 rounded-full bg-[#DDDEE0] "></div>
            <h3 className="font-prompt leading-6 font-medium">Phase 3 - App Testing and Refinement</h3>

            <ul>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Launch the beta version of the ENGC app.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Gather user feedback and perform necessary refinements.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Implement the 90% discount on NFTs and tokens for the testing period.</li>
            </ul>
          </div>

          {/* </div>
        <div className="grid grid-cols-1 my-4 md:grid-cols-2 lg:grid-cols-3"> */}

          <div className="p-4 pl-0 dark:border-[#444444] md:border-t md:border-b relative lg:border-t-0 lg:border-b-0">
            <div className="absolute top-0 z-10 w-2.5 h-2.5 hidden md:block -translate-y-1/2 rounded-full bg-[#DDDEE0] "></div>
            <h3 className="font-prompt leading-6 font-medium">Phase 4 - Token Transfer</h3>

            <ul>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Successful beta testers transfer their tokens to the base version.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Ensure a 1-to-1 token transfer from testing to base version.</li>
            </ul>
          </div>
          <div className="p-4 pl-0 dark:border-[#444444] relative">
            <div className="absolute top-0 z-10 w-2.5 h-2.5 hidden md:block -translate-y-1/2 rounded-full bg-[#DDDEE0] "></div>
            <h3 className="font-prompt leading-6 font-medium">Phase 5 - Waste Processing System Implementation</h3>

            <ul>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Initiate waste collection and transformation into RDF pellets.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Begin pyrolysis burning process.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Monitor and refine system operations to ensure efficiency.</li>
            </ul>
          </div>
          <div className="p-4 pl-0 dark:border-[#444444] relative">
            <div className="absolute top-0 z-10 w-2.5 h-2.5 hidden md:block -translate-y-1/2 rounded-full bg-[#DDDEE0] "></div>
            <h3 className="font-prompt leading-6 font-medium">Phase 6 - Investment Expansion</h3>

            <ul>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Establish and expand pellet factories.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Facilitate the sale of NFTs to fund the construction of these factories.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Set up an automated system for weekly dividends from factories&apos; profits.</li>
              <li className="leading-5 text-sm list-disc my-4 ml-6 font-prompt">Promote trading of NFTs and ENGC tokens on app marketplace and decentralized exchanges.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Navigating
