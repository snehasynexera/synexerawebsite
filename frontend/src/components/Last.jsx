import React from 'react'

const Last = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-7xl mx-auto px-6 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#0B1437] text-center sm:text-left">
          Let's have a chat
        </h1>
        <button className="flex-shrink-0 bg-[#00CED1] text-white px-7 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#00b5b8] transition-colors duration-200">
          Let's Connect
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-b border-gray-300"></div>
    </div>
  )
}

export default Last