import React, { useState, useEffect } from 'react'

const rows = [
  ["Web developer", "Designer", "Writer", "Senior"],
  ["Manager", "Financial Analyst", "Tech"],
  ["Team Leader", "Web"],
];

export default function HeroSectionCareer({ Number, onSearch, activeKeyword = '', activeLocation = '' }) {
  const [keyword, setKeyword] = useState(activeKeyword)
  const [location, setLocation] = useState(activeLocation)

  useEffect(() => {
    setKeyword(activeKeyword)
    setLocation(activeLocation)
  }, [activeKeyword, activeLocation])

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault()
    if (onSearch) {
      onSearch(keyword, location)
      const element = document.getElementById('job-listings')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handlePopularSearchClick = (tag) => {
    setKeyword(tag)
    if (onSearch) {
      onSearch(tag, location)
      const element = document.getElementById('job-listings')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleGetStarted = () => {
    const element = document.getElementById('job-listings')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative bg-[#E9F4FE] w-full min-h-[100vh] lg:h-[110vh] overflow-hidden flex items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-16">
      {/* Background Right Side Career SVG */}
      <div className="absolute top-[-5%] right-0 h-[120%] flex items-center justify-end pointer-events-none z-0">
        <img
          src="/Career.svg"
          alt="Career Graphic"
          className="w-[600px] sm:w-[800px] lg:w-[1000px] xl:w-[1200px] h-full object-contain object-right"

        />
      </div>


      <div className="relative z-10 w-full pl-14 sm:pl-[84px] md:pl-[92px] pr-4 sm:pr-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="w-full lg:w-[52%] ">
          <h1 className="text-[#070B55] text-4xl sm:text-5xl md:text-6xl font-['Syne'] font-semibold leading-tight">
            Find the perfect <br />
            job for <span className="text-cyan-400">you</span>
          </h1>
          <p className="text-black mt-4 md:mt-5 text-base md:text-lg">
            Search your career opportunity
          </p>

          <form onSubmit={handleSearchSubmit} className="flex items-center bg-white mt-8 rounded-full shadow-md pl-6 pr-2 py-2.5 max-w-xl w-full">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Job Title or Keyword')}
              placeholder="Job Title or Keyword"
              className="flex-1 outline-none text-black placeholder-black text-sm bg-transparent text-end"
            />

            <div className="h-6 w-px bg-gray-300 mx-4"></div>

            <div className="flex-1 relative flex items-center">
              <select
                value={location}
                onChange={(e) => {
                  const newLoc = e.target.value
                  setLocation(newLoc)
                  if (onSearch) {
                    onSearch(keyword, newLoc)
                  }
                }}
                aria-label="Filter by location"
                className="w-full outline-none text-black text-sm bg-transparent cursor-pointer appearance-none pr-6 font-medium"
              >
                <option value="" className="text-black bg-white">All Locations</option>
                <option value="Remote" className="text-black bg-white">Remote</option>
              </select>
              <svg
                className="w-4 h-4 text-gray-500 absolute right-1 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <button
              type="submit"
              aria-label="Search Jobs"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-teal-400 hover:bg-teal-500 transition-colors ml-3 shrink-0 cursor-pointer"
            >
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
          </form>

          <h2 className="text-[#070B55] mt-8 text-lg sm:text-xl md:text-2xl font-['Syne'] font-semibold leading-tight">
            Popular Searches
          </h2>

          <div className="space-y-3 mt-3">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap gap-3">
                {row.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handlePopularSearchClick(item)}
                    className="inline-flex items-center text-[#00CED1] h-9 sm:h-10 whitespace-nowrap rounded-full border border-black bg-transparent shadow-sm px-5 text-xs sm:text-sm font-medium hover:bg-[#00CED1]/10 hover:border-[#00CED1] transition-all cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <button onClick={handleGetStarted} type="button" className="block mt-10 md:mt-12 cursor-pointer">
            <div className="bg-[#00CED1] hover:bg-[#008080] text-[#070B55] text-base md:text-lg font-medium py-3.5 px-8 rounded-full shadow-md transition-all duration-300">
              Get Started Today
            </div>
          </button>
        </div>

        {/* Right Column: Refined Hero Portrait Card & Floating Stats Card */}
<div className="w-full lg:w-[48%] flex items-start justify-center lg:justify-center pr-4 sm:pr-8 lg:pr-12 mt-4 lg:-mt-16 xl:-mt-20">
  <div className="relative -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 xl:-translate-x-16">
    {/* White Background Card (Bottom Layer) */}
    <div className="absolute top-0 left-0 w-[280px] sm:w-[330px] lg:w-[350px] xl:w-[390px] h-[390px] sm:h-[450px] lg:h-[470px] xl:h-[510px] rounded-[36px] xl:rounded-[42px] bg-white origin-bottom-left rotate-6"></div>
    
    {/* Cyan Background Card (Middle Layer) */}
    <div className="absolute top-0 left-0 w-[280px] sm:w-[330px] lg:w-[350px] xl:w-[390px] h-[390px] sm:h-[450px] lg:h-[470px] xl:h-[510px] rounded-[36px] xl:rounded-[42px] bg-[#00CED1] origin-bottom-left rotate-3"></div>

    {/* Main Dark Portrait Card (Top Layer) */}
    <div className="relative w-[280px] sm:w-[330px] lg:w-[350px] xl:w-[390px] h-[390px] sm:h-[450px] lg:h-[470px] xl:h-[510px] rounded-[36px] xl:rounded-[42px] overflow-hidden shadow-2xl bg-[#4A4A4A]">
      <img
        src="/images/Men.png"
        alt="Career Professional"
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* Floating White Stats Card */}
    <div className=" absolute top-[62%] -translate-y-1/2 -right-8 sm:-right-10 lg:-right-12 xl:-right-20 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(7,11,85,0.18)] p-3 sm:p-4 xl:p-5 w-[180px] sm:w-[200px] xl:w-[220px] border border-gray-100/80 z-20">
              <div className="space-y-2 xl:space-y-2.5">
                {/* Stat Item 1 */}
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl xl:text-3xl font-bold text-[#070B55] font-['Syne']">
                      10+
                    </span>
                    <span className="text-[14px] xl:text-[12px] font-bold text-[#070B55]">
                      Team Members
                    </span>
                  </div>
                  <p className="text-[8px] xl:text-[9px] text-[#070B55]/70 mt-0.5 font-medium">
                    across the globe
                  </p>
                </div>

                {/* Stat Item 2 */}
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl xl:text-3xl font-bold text-[#070B55] font-['Syne']">
                      100%
                    </span>
                    <span className="text-[12px] xl:text-[10px] font-bold text-[#070B55]">

                      Remote Work
                    </span>
                  </div>
                  <p className="text-[8px] xl:text-[9px] text-[#070B55]/70 mt-0.5 font-medium">
                    flexible environment
                  </p>
                </div>

                {/* Stat Item 3 */}
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl xl:text-3xl font-bold text-[#070B55] font-['Syne']">
                      {Number}
                    </span>
                    <span className="text-[14px] xl:text-[12px] font-bold text-[#070B55]">
                      Active Openings
                    </span>
                  </div>
                  <p className="text-[8px] xl:text-[9px] text-[#070B55]/70 mt-0.5 font-medium">
                    join our team today
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
