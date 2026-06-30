import React from "react";

function HeroSectionService({ heading1, heading2, heading3, heading4, subtext, Image }) {

  return (
    <section className="relative w-full h-[550px] md:h-[750px] bg-white font-sans">
      {/* Dark navy diagonal background */}
      <div
        className="absolute inset-0 bg-[#070B55] z-0 [clip-path:polygon(0_0,180%_0,0%_100%,0_100%)] md:[clip-path:polygon(0_0,140%_0,-6%_100%,0_100%)]"
      />

      {/* Hero Content */}
      <div className="relative z-10 h-full px-4 sm:px-8 flex items-start justify-between max-w-screen-xl mx-auto">
        {/* Left Text Content */}
        <div className="flex flex-col gap-4 pt-4 relative z-20 self-start top-20 md:top-32 lg:right-20 w-[95%] sm:w-[60%] md:max-w-[55%]">
          {/* Eyebrow label */}
          <p className="text-gray-300 text-xs sm:text-sm tracking-widest uppercase font-medium">
            {heading1}
          </p>

          {/* Headline */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 font-['Syne'] font-semibold leading-tight">
            {heading2}
            <br />
            {heading3}
            <br />
            <span className="text-cyan-400">{heading4}</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed w-full sm:max-w-xs md:max-w-sm">
            {subtext}
          </p>

          {/* CTA Button */}
          <div className="mt-2 sm:mt-4">
            <a href="#contact" className="inline-flex items-center bg-white gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border-2 border-white text-black font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-gray-100">
              Get Started
              <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex flex-shrink-0 justify-end items-end h-full relative w-[40%] sm:w-[220px] md:w-[300px] lg:w-[400px] z-10 -ml-16 sm:ml-0">
          <div className="w-full h-full md:h-[650px] relative">
            <img
              src={Image}
              alt="Service"
              className="absolute bottom-0 right-0 w-full h-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionService;