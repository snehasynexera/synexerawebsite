import React from "react";

const SynexeraServices = ({ heading, card1title, card1description, card1image, card2title, card2description, card2image, card3title, card3description, card3image }) => {
  return (
    <section className="relative bg-[#E4F2F3] pt-6 pb-16 sm:pt-10 sm:pb-20 overflow-hidden
      [mask-image:radial-gradient(110%_50px_at_50%_100%,transparent_99%,#000_100%)]
      [-webkit-mask-image:radial-gradient(110%_50px_at_50%_100%,transparent_99%,#000_100%)]
      md:[mask-image:radial-gradient(110%_250px_at_50%_100%,transparent_99%,#000_100%)]
      md:[-webkit-mask-image:radial-gradient(110%_250px_at_50%_100%,transparent_99%,#000_100%)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1440] mb-10 sm:mb-16 md:mb-20">
          {heading}
        </h2>

        {/* Desktop Layout — 3 cards perfectly centered */}
        <div className="hidden md:flex justify-center items-start gap-16 lg:gap-24 pb-24">

          {/* Left Card */}
          <div className="bg-white rounded-3xl p-5 shadow-sm relative w-[280px] lg:w-[320px] h-[400px] lg:h-[420px]">
            <h3 className="font-semibold text-xl lg:text-2xl text-gray-900  ">
              {card1title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mt-1">
              {card1description}
            </p>
            <div className="absolute bottom-[80px] left-4 right-4">
              <div className="border border-[#0a1440] rounded-[28px] p-1">
                <div className="h-[155px] lg:h-[175px] bg-gray-200 rounded-3xl flex items-center justify-center">
                  <img src={card1image} alt="Card 1" className="w-full h-full object-cover rounded-3xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Card */}
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden w-[280px] lg:w-[320px] h-[340px] lg:h-[360px] -mt-10 relative z-10">
            <div className="absolute top-[-20px] left-4 right-4">
              <div className="border-[1.5px] border-[#4A4D9B] rounded-[28px] p-1">
                <div className="h-[170px] lg:h-[190px] bg-gray-200 rounded-[24px] flex items-center justify-center">
                  <img src={card2image} alt="Card 2" className="w-full h-full object-cover rounded-3xl" />
                </div>
              </div>
            </div>
            <div className="p-5 mt-36 lg:mt-40 relative">
              <h3 className="font-semibold text-xl lg:text-2xl text-gray-900 mb-3">
                {card2title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card2description}
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-3xl p-5 shadow-sm relative w-[280px] lg:w-[320px] h-[400px] lg:h-[420px]">
            <h3 className="font-semibold text-xl lg:text-2xl text-gray-900  ">
              {card3title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed ">
              {card3description}
            </p>
            <div className="absolute bottom-[68px] left-4 right-4">
              <div className="border border-[#0a1440] rounded-[24px] p-1">
                <div className="h-[170px] lg:h-[190px] bg-gray-200 rounded-3xl flex items-center justify-center">
                  <img src={card3image} alt="Card 3" className="w-full h-full object-cover rounded-3xl" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Layout — stacked cards with real content */}
        <div className="md:hidden flex flex-col gap-6 pb-12">

          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-900 mb-2">{card1title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{card1description}</p>
            <div className="rounded-2xl overflow-hidden border border-[#0a1440]">
              <img src={card1image} alt="Card 1" className="w-full h-48 object-cover" />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-900 mb-2">{card2title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{card2description}</p>
            <div className="rounded-2xl overflow-hidden border border-[#4A4D9B]">
              <img src={card2image} alt="Card 2" className="w-full h-48 object-cover" />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-900 mb-2">{card3title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{card3description}</p>
            <div className="rounded-2xl overflow-hidden border border-[#0a1440]">
              <img src={card3image} alt="Card 3" className="w-full h-48 object-cover" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SynexeraServices;