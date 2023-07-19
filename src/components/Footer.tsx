import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#ECF3FD] p-4 md:-mx-6 dark:bg-[#353535] py-10 md:pt-[100px]">
      <div className="flex flex-col md:flex-row justify-between mx-auto max-w-7xl px-5">
        <div className="">
          <Image src="/mini_logo_light.png" height={35} width={110} alt="" />

          <p className="font-light my-3 md:mt-6 dark:text-[#FAFAFA] relative z-10 font-prompt  md:max-w-[400px] leading-6">ENGC: Merging blockchain technology and eco-friendly solutions for a greener future and potential investment returns.</p>

        </div>
        <div className="flex flex-col justify-between flex-1 md:items-end">


          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <Link href="https://www.facebook.com/" target="_blank" className="bg-[#FAFAFA] flex justify-center items-center h-12 w-12 rounded-lg">
              <svg width="24" height="24" className="text-[#53E462] dark:text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_159_2294)">
                  <path d="M12 0.15332C5.3724 0.15332 0 5.52572 0 12.1533C0 18.1425 4.3884 23.1069 10.1256 24.0081V15.6213H7.0776V12.1533H10.1256V9.50972C10.1256 6.50252 11.916 4.84172 14.658 4.84172C15.9708 4.84172 17.3436 5.07572 17.3436 5.07572V8.02772H15.8316C14.34 8.02772 13.8756 8.95292 13.8756 9.90212V12.1533H17.2032L16.6716 15.6213H13.8756V24.0081C19.6116 23.1081 24 18.1413 24 12.1533C24 5.52572 18.6276 0.15332 12 0.15332Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_159_2294">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank" className="bg-[#FAFAFA] flex justify-center items-center h-12 w-12 rounded-lg">
              <svg className="text-[#53E462] dark:text-black" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_159_2297)">
                  <path d="M12 0.15332C15.2604 0.15332 15.6672 0.16532 16.9464 0.22532C18.2244 0.28532 19.0944 0.48572 19.86 0.78332C20.652 1.08812 21.3192 1.50092 21.9864 2.16692C22.5966 2.7668 23.0687 3.49243 23.37 4.29332C23.6664 5.05772 23.868 5.92892 23.928 7.20692C23.9844 8.48612 24 8.89292 24 12.1533C24 15.4137 23.988 15.8205 23.928 17.0997C23.868 18.3777 23.6664 19.2477 23.37 20.0133C23.0696 20.8147 22.5973 21.5405 21.9864 22.1397C21.3864 22.7497 20.6608 23.2218 19.86 23.5233C19.0956 23.8197 18.2244 24.0213 16.9464 24.0813C15.6672 24.1377 15.2604 24.1533 12 24.1533C8.7396 24.1533 8.3328 24.1413 7.0536 24.0813C5.7756 24.0213 4.9056 23.8197 4.14 23.5233C3.33879 23.2227 2.61303 22.7505 2.0136 22.1397C1.40329 21.5399 0.931118 20.8143 0.63 20.0133C0.3324 19.2489 0.132 18.3777 0.0719999 17.0997C0.0155999 15.8205 0 15.4137 0 12.1533C0 8.89292 0.0119999 8.48612 0.0719999 7.20692C0.132 5.92772 0.3324 5.05892 0.63 4.29332C0.930284 3.49194 1.40256 2.76611 2.0136 2.16692C2.61321 1.5564 3.33891 1.0842 4.14 0.78332C4.9056 0.48572 5.7744 0.28532 7.0536 0.22532C8.3328 0.16892 8.7396 0.15332 12 0.15332ZM12 6.15332C10.4087 6.15332 8.88258 6.78546 7.75736 7.91068C6.63214 9.0359 6 10.562 6 12.1533C6 13.7446 6.63214 15.2707 7.75736 16.396C8.88258 17.5212 10.4087 18.1533 12 18.1533C13.5913 18.1533 15.1174 17.5212 16.2426 16.396C17.3679 15.2707 18 13.7446 18 12.1533C18 10.562 17.3679 9.0359 16.2426 7.91068C15.1174 6.78546 13.5913 6.15332 12 6.15332ZM19.8 5.85332C19.8 5.4555 19.642 5.07397 19.3607 4.79266C19.0794 4.51136 18.6978 4.35332 18.3 4.35332C17.9022 4.35332 17.5206 4.51136 17.2393 4.79266C16.958 5.07397 16.8 5.4555 16.8 5.85332C16.8 6.25115 16.958 6.63268 17.2393 6.91398C17.5206 7.19529 17.9022 7.35332 18.3 7.35332C18.6978 7.35332 19.0794 7.19529 19.3607 6.91398C19.642 6.63268 19.8 6.25115 19.8 5.85332ZM12 8.55332C12.9548 8.55332 13.8705 8.9326 14.5456 9.60774C15.2207 10.2829 15.6 11.1985 15.6 12.1533C15.6 13.1081 15.2207 14.0238 14.5456 14.6989C13.8705 15.374 12.9548 15.7533 12 15.7533C11.0452 15.7533 10.1295 15.374 9.45442 14.6989C8.77929 14.0238 8.4 13.1081 8.4 12.1533C8.4 11.1985 8.77929 10.2829 9.45442 9.60774C10.1295 8.9326 11.0452 8.55332 12 8.55332Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_159_2297">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </Link>
            <Link href="https://twitter.com/" target="_blank" className="bg-[#FAFAFA] flex justify-center items-center h-12 w-12 rounded-lg">
              <svg className="text-[#53E462] dark:text-black" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9988 4.46978C23.1 4.86738 22.1467 5.1285 21.1707 5.24451C22.1995 4.62924 22.9694 3.66093 23.3371 2.52002C22.3717 3.09459 21.3132 3.49726 20.21 3.71507C19.4689 2.92219 18.4867 2.39635 17.416 2.2193C16.3452 2.04224 15.246 2.22389 14.2892 2.73602C13.3323 3.24814 12.5715 4.06203 12.1249 5.05117C11.6784 6.04031 11.5711 7.14927 11.8199 8.20565C9.86198 8.10752 7.94662 7.59873 6.19814 6.71232C4.44966 5.82591 2.90714 4.58169 1.67072 3.06044C1.23307 3.81215 1.00309 4.66667 1.00432 5.5365C1.00432 7.24372 1.87323 8.75196 3.19427 9.63501C2.41249 9.6104 1.64792 9.39927 0.964286 9.01923V9.08046C0.964522 10.2175 1.35797 11.3194 2.07792 12.1994C2.79787 13.0795 3.80002 13.6834 4.91444 13.9089C4.18871 14.1056 3.42776 14.1346 2.68917 13.9937C3.00338 14.9724 3.61579 15.8283 4.44065 16.4417C5.26551 17.055 6.26153 17.395 7.28925 17.414C6.26783 18.2162 5.09832 18.8092 3.84758 19.1591C2.59684 19.5091 1.2894 19.609 0 19.4533C2.25082 20.9008 4.87099 21.6693 7.5471 21.6668C16.6048 21.6668 21.5581 14.1633 21.5581 7.65581C21.5581 7.44388 21.5522 7.22959 21.5428 7.02002C22.5069 6.3232 23.339 5.45999 24 4.47096L23.9988 4.46978Z" fill="currentColor" />
              </svg>

            </Link>
            <Link href="https://t.me/" target="_blank" className="bg-[#FAFAFA] flex justify-center items-center h-12 w-12 rounded-lg">
              <svg className="text-[#53E462] dark:text-black" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_159_2303)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12.1533C0 18.7809 5.3724 24.1533 12 24.1533C18.6276 24.1533 24 18.7809 24 12.1533C24 5.52572 18.6276 0.15332 12 0.15332C5.3724 0.15332 0 5.52572 0 12.1533ZM8.28384 13.5484L8.26824 13.5568V13.558L5.27184 12.622C4.62384 12.424 4.61904 11.9776 5.41584 11.6584L17.0954 7.14636C17.7734 6.86796 18.1574 7.21836 17.9378 8.09196L15.9494 17.4784C15.8102 18.1456 15.4082 18.3052 14.849 17.9968L11.789 15.7312L10.3634 17.1088C10.3581 17.1139 10.3528 17.119 10.3475 17.1241C10.2071 17.259 10.0889 17.3726 9.87144 17.4016C9.64704 17.4328 9.46224 17.3656 9.32784 16.9924L8.28384 13.5484Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_159_2303">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </Link>
          </div>

          <div className="flex flex-col gap-4 mt-6 md:flex-row md:mt-0 md:items-center md:gap-8">
            <span className="flex items-center gap-2 font-prompt text-black dark:text-[#FAFAFA] leading-6 font-light">
              <svg width="24" className="text-[#00F1E8]" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.49805 9.74902L10.4247 11.5534C11.3905 12.1488 12.6094 12.1488 13.5751 11.5534L16.5018 9.74902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="2.99658" y="4.99707" width="18.0075" height="14.0058" rx="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              office@eng-c.com
            </span>
            <span className="flex items-center gap-2 font-prompt text-black dark:text-[#FAFAFA] leading-6 font-light">
              <svg width="24" className="text-[#00F1E8]" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8561 13.1444C9.68615 11.9744 8.80415 10.6644 8.21815 9.33536C8.09415 9.05436 8.16715 8.72536 8.38415 8.50836L9.20315 7.69036C9.87415 7.01936 9.87415 6.07036 9.28815 5.48436L8.11415 4.31036C7.33315 3.52936 6.06715 3.52936 5.28615 4.31036L4.63415 4.96236C3.89315 5.70336 3.58415 6.77236 3.78415 7.83236C4.27815 10.4454 5.79615 13.3064 8.24515 15.7554C10.6941 18.2044 13.5551 19.7224 16.1681 20.2164C17.2281 20.4164 18.2971 20.1074 19.0381 19.3664L19.6891 18.7154C20.4701 17.9344 20.4701 16.6684 19.6891 15.8874L18.5161 14.7144C17.9301 14.1284 16.9801 14.1284 16.3951 14.7144L15.4921 15.6184C15.2751 15.8354 14.9461 15.9084 14.6651 15.7844C13.3361 15.1974 12.0261 14.3144 10.8561 13.1444Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              +44-33-00272720
            </span>
            <span className="flex items-center gap-2 font-prompt text-black dark:text-[#FAFAFA] leading-6 font-light">
              <svg width="24" height="24" className="text-[#00F1E8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.12695 10.045V9.873C5.12695 6.077 8.20395 3 12 3V3C15.796 3 18.873 6.077 18.873 9.873V10.045C18.873 13.506 14.491 18.716 12.725 20.676C12.336 21.108 11.664 21.108 11.275 20.676C9.50895 18.716 5.12695 13.506 5.12695 10.045Z" stroke="currentColor" strokeWidth="1.4468" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 9.95497C10 11.06 10.895 11.955 12 11.955V11.955C13.105 11.955 14 11.06 14 9.95497V9.91797C14 8.81297 13.105 7.91797 12 7.91797V7.91797C10.895 7.91797 10 8.81297 10 9.91797" stroke="currentColor" strokeWidth="1.4468" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              22 Cranwell street, LN5 8AJ, UK
            </span>
          </div>
        </div>



      </div>
      <hr className="my-8 border-[#DDEAF0] dark:border-[#444444] max-w-7xl px-5 mx-auto" />

      <p className="md:text-center font-prompt font-light leading-6 ">© Copyright 2023 DAO Energy Crypto - All Rights Reserved</p>
    </footer>
  )
}

export default Footer
