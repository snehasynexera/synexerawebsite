import React from 'react'

export default function KnowMoreCareer() {
  return (
    <section className="w-full h-[80vh] bg-gradient-to-r from-[#00CED1] via-[#01689C] to-[#04093B] flex items-center justify-center px-6 sm:px-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-['Syne'] font-bold tracking-tight">
          Where Talent Meets Opportunity
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium mt-3 sm:mt-4 max-w-2xl leading-relaxed">
          Join a passionate team that's transforming ideas into innovative solutions while helping you reach your full potential.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <button className="inline-flex items-center gap-2 bg-[#64F8ED] hover:bg-[#4CE5DA] text-[#070B55] font-semibold text-xs sm:text-sm py-3.5 px-8 sm:px-9 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            <span>Join Our Team</span>
            <svg
              className="w-4 h-4 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
