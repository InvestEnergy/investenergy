import React from 'react'

const Engc = () => {
  return (
    <section className="bg-[#F0F5FC] dark:bg-[#353535] py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-center font-prompt text-2xl md:text-h2  max-w-[600px] mx-auto">
          Find out what investors appreciate most <br />  about <span className="text-skyblue-500">ENGC</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 md:gap-8">

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
