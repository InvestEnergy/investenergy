import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="p-4">
        <div className="max-w-[1388px] rounded-[35px] bg-[#f3fbfc] dark:bg-[#1f2626] min-h-[350px] md:min-h-[502px] mx-auto relative">
          <div className="dark:bg-[url(/stripes.png)] bg-no-repeat bg-cover top-0 left-0 absolute right-0 h-[200px]"></div>
          <div className="dark:bg-[url(/stripes.png)] bg-no-repeat bg-cover bottom-0 left-0 rotate-180 absolute right-0 h-[200px]"></div>
          <Image
            className="!absolute hidden dark:block top-0 right-0"
            height={100}
            width={200}
            src="/br_cube.png"
            alt=""
          />
          <Image
            className="!absolute hidden dark:block bottom-0 left-0"
            height={100}
            width={200}
            src="/bl_cube.png"
            alt=""
          />
          {/* <Image
            className="!absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
            height={380}
            width={370}
            src="/center_rock.png"
            alt=""
          /> */}
          <Image
            className="!absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mix-blend-dark-light dark:mix-blend-overlay"
            height={380}
            width={370}
            src="/center_rock.png"
            alt=""
          />
          {/* <div
            className="!absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
            h-[350px] rounded-full_
            w-[350px] bg-[#f3fbfc] dark:bg-[#1f2626] mix-blend-overlay
            "
          /> */}

          <div className="absolute z-20 flex flex-col items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <h1 className="text-[24px] md:text-[42px] md:leading-[51px] font-bold">
              Driving a <span className="text-greenish-500">Greener Future</span>  <br />
              with <span className="text-skyblue-500">Blockchain & NFTs</span>
            </h1>

            <p className="max-w-[450px] dark:text-white mt-4 text-center md:text-lg text-[#1A1A1A] font-medium font-prompt leading-[28px]">
              Directly investing in RDF factories through NFTs: A win-win for you and the environment.
            </p>

            <button className="bg-greenish-500 rounded-full h-[56px] text-[#1A1A1A] dark:text-[#1A1A1A] w-[264px] flex items-center mt-5 justify-center font-prompt">
              Download Our ENGC App
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
