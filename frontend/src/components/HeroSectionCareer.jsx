import React from 'react'

const rows = [
  ["Web developer", "Designer", "Writer", "Senior"],
  ["Manager", "Financial Analyst", "Tech"],
  ["Team Leader", "Web"],
];

export default function HeroSectionCareer() {
  return (
    <div className="relative bg-[#E9F4FE] w-full min-h-[100vh] lg:h-[110vh] overflow-hidden flex items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-16">
      {/* Background Right Side Career SVG */}
      <div className="absolute top-0 right-0 h-full flex items-center justify-end pointer-events-none z-0">
        <img
          src="/Career.svg"
          alt="Career Graphic"
          className="w-[450px] sm:w-[600px] lg:w-[750px] xl:w-[850px] h-full object-contain object-right"
        />
      </div>

      
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="w-full lg:w-[52%] ">
          <h1 className="text-[#070B55] text-4xl sm:text-5xl md:text-6xl font-['Syne'] font-semibold leading-tight">
            Find the perfect <br />
            job for <span className="text-cyan-400">you</span>
          </h1>
          <p className="text-black mt-4 md:mt-5 text-base md:text-lg">
            Search your career opportunity
          </p>

          <div className="flex items-center bg-white mt-8 rounded-full shadow-md pl-6 pr-2 py-2.5 max-w-xl w-full">
            <input
              type="text"
              placeholder="Job Title or Keyword"
              className="flex-1 outline-none text-black placeholder-black text-sm bg-transparent text-end"
            />

            <div className="h-6 w-px bg-gray-300 mx-4"></div>

            <input
              type="text"
              placeholder="All Locations"
              className="flex-1 outline-none text-black placeholder-black text-sm bg-transparent"
            />

            <button className="flex items-center justify-center w-11 h-11 rounded-full bg-teal-400 hover:bg-teal-500 transition-colors ml-3 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </button>
          </div>

          <h2 className="text-[#070B55] mt-8 text-lg sm:text-xl md:text-2xl font-['Syne'] font-semibold leading-tight">
            Popular Searches
          </h2>

          <div className="space-y-3 mt-3">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap gap-3">
                {row.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center text-[#00CED1] h-9 sm:h-10 whitespace-nowrap rounded-full border border-black bg-transparent shadow-sm px-5 text-xs sm:text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button className="block mt-10 md:mt-12">
            <div className="bg-[#00CED1] hover:bg-[#008080] text-[#070B55] text-base md:text-lg font-medium py-3.5 px-8 rounded-full shadow-md transition-all duration-300">
              Get Started Today
            </div>
          </button>
        </div>

        {/* Right Column: Refined Hero Portrait Card & Floating Stats Card */}
        <div className="w-full lg:w-[48%] flex items-center justify-center lg:justify-end pr-4 sm:pr-8 lg:pr-12 mt-8 lg:mt-0">
          <div className="relative">
            {/* Main Dark Portrait Card */}
            <div className="w-[280px] sm:w-[330px] lg:w-[350px] xl:w-[390px] h-[390px] sm:h-[450px] lg:h-[470px] xl:h-[510px] rounded-[36px] xl:rounded-[42px] overflow-hidden shadow-2xl bg-[#4A4A4A]">
              <img
                src="/images/Men.png"
                alt="Career Professional"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating White Stats Card Overlapping Bottom-Right */}
            <div className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-8 lg:-right-10 xl:-right-14 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(7,11,85,0.18)] p-5 sm:p-6 xl:p-7 w-[230px] sm:w-[250px] xl:w-[280px] border border-gray-100/80 z-20">
              <div className="space-y-3.5 xl:space-y-4">
                {/* Stat Item 1 */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl xl:text-2xl font-bold text-[#070B55] font-['Syne']">
                      319
                    </span>
                    <span className="text-xs xl:text-sm font-semibold text-[#070B55]">
                      Jobs Offers
                    </span>
                  </div>
                  <p className="text-[11px] text-[#070B55]/70 mt-0.5 font-medium">
                    in Business Development
                  </p>
                </div>

                {/* Stat Item 2 */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl xl:text-2xl font-bold text-[#070B55] font-['Syne']">
                      265
                    </span>
                    <span className="text-xs xl:text-sm font-semibold text-[#070B55]">
                      Jobs Offers
                    </span>
                  </div>
                  <p className="text-[11px] text-[#070B55]/70 mt-0.5 font-medium">
                    in Marketing and Communication
                  </p>
                </div>

                {/* Stat Item 3 */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl xl:text-2xl font-bold text-[#070B55] font-['Syne']">
                      324
                    </span>
                    <span className="text-xs xl:text-sm font-semibold text-[#070B55]">
                      Jobs Offers
                    </span>
                  </div>
                  <p className="text-[11px] text-[#070B55]/70 mt-0.5 font-medium">
                    in Project Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
