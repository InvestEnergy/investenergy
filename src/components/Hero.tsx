import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <section className="max-w-[1388px] relative bg-center bg-no-repeat bg-cover dark:bg-[#1f2626] min-h-[350px] md:min-h-[502px] mx-auto rounded-[35px] md:p-4 overflow-hidden">
        <div className="bg-[url(/stripes.png)] bg-no-repeat bg-cover top-0 left-0 absolute right-0 h-52"></div>
        <div className="bg-[url(/stripes.png)] bg-no-repeat bg-cover bottom-0 left-0 rotate-180 absolute right-0 h-52"></div>
        <Image
          className="!absolute z-10 hidden md:block top-0 right-0 animate-fade-left animate-ease-linear animate-fill-backwards"
          height={100}
          width={200}
          src="/br_cube.png"
          alt=""
          data-aos="fade-up-right"
        />
        <Image
          className="!absolute z-10 hidden md:block bottom-0 left-0 animate-fade-right animate-ease-linear animate-fill-backwards"
          height={100}
          width={200}
          src="/bl_cube.png"
          alt=""
          data-aos="fade-down-left"
        />

        <div className="!absolute origin-center z-10 !h-56 !w-56 md:!h-[400px] md:!w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image 
            className="animate-spin animate-infinite animate-duration-[23000ms]"
            height={380}
            width={370}
            src="/center.png"
            alt="central img"
          />
        </div>

        <Image
          className="!absolute dark:hidden object-cover z-20 left-0"
          fill
          src="/hero_bg.png"
          alt=""
        />
        <Image
          className="!absolute hidden dark:block object-cover z-20 left-0"
          fill
          src="/hero_black_bg.png"
          alt=""
        />

        {/* text content */}
        <div className="absolute z-30 flex flex-col items-center w-full p-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-2xl md:text-heading font-bold">
            Driving a <span className="text-greenish-500">Greener Future</span>  <br />
            with <span className="text-skyblue-500">Blockchain & NFTs</span>
          </h1>

          <p className="max-w-[450px] dark:text-white mt-4 text-center md:text-lg text-[#1A1A1A] font-medium font-prompt leading-h2">
            Directly investing in RDF factories through NFTs: A win-win for you and the environment.
          </p>

          <button className="bg-greenish-500 rounded-full h-14 text-[#1A1A1A] dark:text-[#1A1A1A] w-[264px] flex items-center mt-5 justify-center font-prompt">
            Download Our ENGC App
          </button>
        </div>
      </section>
  )
}

export default Hero
