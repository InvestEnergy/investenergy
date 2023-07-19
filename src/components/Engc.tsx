import Image from 'next/image'
import React from 'react'

const Engc = () => {
  return (
    <section className="bg-[#F0F5FC] dark:bg-[#353535] py-24">
      <div className="max-w-7xl relative mx-auto">
        <Image data-aos="fade-up" className='absolute bottom-1/2 md:-bottom-10 left-full md:left-[29%] z-0' src={"/engc1.png"} width={96} height={60} alt='engc1' />
        <Image data-aos="fade-up" className='absolute -top-10 right-52 z-0' src={"/engc2.png"} width={66} height={26} alt='engc2' />
        <Image data-aos="fade-up" className='absolute -bottom-5 -right-10 z-0' src={"/engc3.png"} width={76} height={89} alt='engc3' />

        <h2 data-aos="fade-up" className="font-bold text-center font-prompt text-2xl md:text-h2  max-w-xl mx-auto">
          Find out what investors appreciate most <br />  about <span className="text-skyblue-500">ENGC</span>
        </h2>

        <div data-aos="fade-up" className="relative z-10 grid grid-cols-1 gap-6 mt-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 md:gap-8">

          <div className="bg-white dark:bg-[#262626] rounded-[32px] p-8 max-w-[392px] flex-1">
            <h3 className="font-prompt leading-6 text-center font-semibold">Green Returns</h3>
            <p className="font-prompt leading-6 text-center mt-5">
              Dual benefit of financial gains and environmental impact.
            </p>
          </div>

          <div className="bg-white dark:bg-[#262626] rounded-[32px] p-8 max-w-[392px] flex-1">
            <h3 className="font-prompt leading-6 text-center font-semibold">Innovative Technology</h3>
            <p className="font-prompt leading-6 text-center mt-5">
              Leading in waste transformation and blockchain integration.
            </p>
          </div>

          <div className="bg-white dark:bg-[#262626] rounded-[32px] p-8 max-w-[392px] flex-1">
            <h3 className="font-prompt leading-6 text-center font-semibold">Trust and Security</h3>
            <p className="font-prompt leading-6 text-center mt-5">
              Providing transparent and secure investment platform
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Engc
