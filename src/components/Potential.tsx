import Image from 'next/image'
import React from 'react'
import RevealDropDown from "@/components/RevealDropDown";

const Reveal = [
  {
    id: 1,
    title: "Weekly Capital Accumulation",
    description: "Earn £10 per week over a 5-year period with ENGC token activation, accumulating wealth step by step.",
    reveal: true,
  },
  {
    id: 2,
    title: "Referral Bonuses",
    description: "Earn bonus ENGC tokens by inviting other users to join our NFT platform.",
  },
  {
    id: 3,
    title: "NFT Value Bonuses",
    description: "Depending on your NFT purchase value, earn additional ENGC bonus tokens.",
  },
  {
    id: 4,
    title: "Dividend Earnings",
    description: "Receive weekly dividends from the profits of our pellet factories and energy transformation modules.",
  },
  {
    id: 5,
    title: "Long-Term Growth Potential",
    description: "As ENGC grows, so does your investment with the increasing value of our tokens.",
  },
]

const Potential = () => {
  return (
    <section className="py-24 bg-[#fafbfd] dark:bg-dark">
      <div className="max-w-7xl flex flex-col gap-6 md:flex-row mx-auto">

        <div data-aos="fade-up" className="flex-[2]">
          <h2 className="font-bold text-center md:text-left font-prompt text-2xl md:text-h2 ">
            Uncover Your Earning <br className="hidden sm:inline-block" /> Potential with <span className="text-skyblue-500">ENGC</span>
          </h2>
          <p className=" font-prompt text-lg mt-2 text-[#1A1A1A] dark:text-white ">Investment opportunities tailored for everyone</p>

          <Image src="/chart_light.png" className="object-cover mt-4 dark:hidden" height={417} width={360} alt="" />
          <Image src="/chart_dark.png" className="hidden object-cover mt-4 dark:block" height={417} width={360} alt="" />

        </div>

        <div className="flex-[3] flex flex-col gap-4">
          {Reveal.map(item => (
            <RevealDropDown
              key={item.id}
              title={item.title}
              description={item.description}
              reveal={item.reveal && item.reveal}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Potential
