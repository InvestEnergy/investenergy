import Image from "next/image";
import React from "react";

const Technology = () => {
  return (
    <section className="max-w-7xl mx-auto my-[120px] relative">
      <Image
        fill
        src="/grid_bg.png"
        alt=""
        className="!absolute inset-0 !top-16 z-[1] object-fill"
      />

      <h2
        data-aos="fade-up"
        className="relative font-bold text-center font-prompt text-2xl md:text-h2 z-10 ">
        <span className="text-skyblue-500">Our Technology</span> in Detail
      </h2>
      <p
        data-aos="fade-up"
        className="relative text-center font-prompt text-lg text-[#1A1A1A] dark:text-white  z-10  my-4">
        Converting Waste into Resources
      </p>
      {/* our technology in detail section cards */}
      <div className="relative flex flex-col flex-wrap gap-4 mt-6 md:mt-10 md:flex-row z-10">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="300"
          className="flex-1 min-h-[430px] flex flex-col justify-end relative p-4 bg-white dark:bg-[#262626] overflow-hidden rounded-xl">
          <Image
            height={370}
            width={370}
            alt=""
            className="!absolute !object-cover bottom-0 -left-0"
            src="/card_one_bottom.png"
          />
          <Image
            height={200}
            width={200}
            alt=""
            className="!absolute mix-blend-multiply dark:mix-blend-normal !object-cover top-0 right-0"
            src="/card_one_top_sphere.png"
          />
          <Image
            height={200}
            width={200}
            alt=""
            className="!absolute mix-blend-multiply dark:hidden !object-cover top-5 left-5"
            src="/card_one_light.png"
          />
          <Image
            height={200}
            width={200}
            alt=""
            className="!absolute hidden dark:block !object-cover top-5 left-5"
            src="/card_one_dark.png"
          />
          <h3 className="font-semibold relative z-10 font-prompt leading-6">
            Waste Collection
          </h3>
          <p className="mt-4 font-prompt relative z-10 leading-6 text-[#1A1A1A] dark:text-white">
            We take a proactive approach to managing waste. Our dedicated teams
            collect various types of waste, including domestic, commercial,
            industrial, and agricultural waste, as well as wood remnants. By
            diverting waste from landfills, we start the process of turning
            refuse into a resource.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos-delay="400"
          className="flex-1 min-h-[320px] flex flex-col justify-end overflow-hidden relative p-4 bg-white dark:bg-[#262626] rounded-xl">
          <Image
            height={370}
            width={300}
            alt=""
            className="!absolute !object-cover bottom-0 left-0"
            src="/card_two_bottom_left.png"
          />
          <Image
            height={400}
            width={200}
            alt=""
            className="!absolute mix-blend-multiply dark:mix-blend-normal !h-full bottom-0 top-0 right-0"
            src="/card_two_right.png"
          />
          <Image
            height={300}
            width={200}
            alt=""
            className="!absolute dark:hidden mix-blend-multiply !object-cover top-8 left-8"
            src="/card_two_light.png"
          />
          <Image
            height={300}
            width={200}
            alt=""
            className="!absolute hidden dark:block !object-cover top-8 left-8"
            src="/card_two_dark.png"
          />
          <h3 className="font-semibold relative z-10 font-prompt leading-6">
            Transformation into RDF pellets
          </h3>
          <p className="mt-4 z-20 relative font-prompt leading-6 text-[#1A1A1A] dark:text-white">
            The collected waste undergoes a comprehensive treatment process at
            our specialized facilities. The waste is sorted, dried, and then
            transformed into Refuse Derived Fuel (RDF) pellets. These pellets
            are high in calorific value, making them an efficient source of
            energy.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-offset="300"
          data-aos-delay="500"
          className="flex-1 min-h-[450px] md:min-h-[320px] flex flex-col justify-end overflow-hidden relative  p-4 bg-white dark:bg-[#262626] rounded-xl">
          <Image
            height={470}
            width={500}
            alt=""
            className="!absolute !h-[70%] !object-cover !w-full bottom-0 left-0"
            src="/card_three_bottom.png"
          />
          <Image
            height={150}
            width={150}
            alt=""
            className="!absolute mix-blend-multiply dark:hidden bottom-0 top-0 right-0"
            src="/card_three_top_right.png"
          />
          <Image
            height={150}
            width={150}
            alt=""
            className="!absolute hidden dark:block bottom-0 top-0 right-0"
            src="/card_three_top_right_dark.png"
          />
          <Image
            height={300}
            width={200}
            alt=""
            className="!absolute mix-blend-multiply !object-cover top-8 dark:hidden  left-8"
            src="/card_three_light.png"
          />
          <Image
            height={300}
            width={200}
            alt=""
            className="!absolute hidden dark:block !object-cover top-8  left-8"
            src="/card_three_dark.png"
          />
          <h3 className="font-semibold relative z-10 dark:text-white font-prompt leading-6">
            Pyrolysis burning
          </h3>
          <p className="mt-4 font-prompt relative z-10 leading-6 text-[#1A1A1A] dark:text-white">
            Refuse Derived Fuel (RDF) pellets undergo pyrolysis, an
            oxygen-limited, high-temperature process that efficiently reduces
            emissions while producing versatile clean energy, usable for
            electricity generation, heating, hot water production, and even
            summer cooling systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
