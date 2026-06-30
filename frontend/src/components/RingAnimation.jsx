import React from 'react'

const RingAnimation = ({ heading1, heading2, subtext }) => {
  return (
    <div className="relative w-full pt-12 sm:pt-16 mb-16 sm:mb-24 overflow-hidden">
      {/* Text Content */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#191931] leading-tight">
          {heading1}
          <br />
          {heading2}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#181934] max-w-xl mx-auto">
          {subtext}
        </p>
      </div>

      {/* Wave Image */}
      <div className="relative w-full">
        {/* Sliding Wave Container */}
        <div className="flex w-[400%] sm:w-[200%] animate-[scrollText_20s_linear_infinite]">
          <img
            src="/images/wave.png"
            alt="Wave"
            className="w-1/2"
          />
          <img
            src="/images/wave.png"
            alt="Wave"
            className="w-1/2"
          />
        </div>
        {/* Centered Button over wave */}
        <a href="#contact" className="absolute left-1/2 bottom-[20%] sm:bottom-[35%] -translate-x-1/2 bg-[#0A0E4F] text-white px-5 sm:px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full whitespace-nowrap inline-flex items-center justify-center hover:bg-[#0a1066] transition-all">
          Schedule Free Consultation
        </a>
      </div>
    </div>
  );
};

export default RingAnimation;