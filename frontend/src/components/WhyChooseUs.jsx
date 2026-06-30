
import React from "react";

const WhyChooseUs = ({ heading1, heading2, heading3, heading4, heading5, headingDescription, card1title, card1description, card2title, card2description, card3title, card3description, card4title, card4description, card5title, card5description, card6title, card6description }) => {

  const ARROW_IMAGE = "/images/Arrow 12.png"; // curved arrow image

  const features = [
    {
      title: card1title,
      description:
        card1description,
    },
    {
      title: card2title,
      description:
        card2description,
    },
    {
      title: card3title,
      description:
        card3description,
    },
    {
      title: card4title,
      description:
        card4description,
    },
    {
      title: card5title,
      description:
        card5description,
    },
    {
      title: card6title,
      description:
        card6description,
    },
  ];

  return (

    <section className="relative w-full px-4 pt-6 md:pt-40 -mt-6 md:-mt-40 md:px-16 lg:px-24 overflow-hidden bg-white">
      {/* Grid Background */}
      <div
        className="absolute top-0 left-0 w-full lg:w-[46%] h-[400px] lg:h-[900px]"
        style={{
          backgroundImage: `
      linear-gradient(rgba(180,190,210,0.35) 1px, transparent 1px),
      linear-gradient(90deg, rgba(180,190,210,0.35) 1px, transparent 1px)
    `,
          backgroundSize: "24px 24px",
          backgroundPosition: "40px 40px",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0px, black 80px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0px, black 80px)",
        }}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-stretch relative">
        {/* Left Side - Heading with Grid Background */}
        <div className="relative lg:min-h-[650px] overflow-hidden">



          {/* Content */}
          <div className="relative z-10 p-6 lg:pl-0 lg:pr-10 lg:py-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1437] leading-tight">
              {heading1} <br />
              {heading2} <br />
              {heading3} <br />
              {heading4} <br />
              {heading5}
            </h2>

            <p className="mt-6 text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
              {headingDescription}
            </p>

            <img
              src={ARROW_IMAGE}
              alt="arrow"
              className="hidden lg:block w-[250px] h-[180px] mt-10 ml-auto"
            />
          </div>

        </div>



        {/* SVG ClipPath — concave bottom arch, responsive via objectBoundingBox */}
        <svg
          style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
          aria-hidden="true"
        >
          <defs>
            <clipPath id="whyChooseCardClip" clipPathUnits="objectBoundingBox">
              {/* Top-left convex corner → left side → concave bottom arch → right side → top-right convex corner */}
              <path d="M 0.082 0.005 Q 0.005 0.005 0.005 0.082 L 0.005 0.78 Q 0.005 0.86 0.09 0.86 Q 0.54 0.82 0.995 0.86 L 0.995 0.082 Q 0.995 0.005 0.918 0.005 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Right Side - Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 content-start">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                filter: 'drop-shadow(0px 12px 24px rgba(0,0,0,0.08)) drop-shadow(0px 1px 4px rgba(0,0,0,0.04))',
              }}
            >
              <div
                className="relative bg-white p-5 flex flex-col h-full min-h-[260px] max-h-[280px]"
                style={{
                  clipPath: 'url(#whyChooseCardClip)',
                }}
              >
              {/* SVG Stroke Border */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 1 1"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0.082 0.005 Q 0.005 0.005 0.005 0.082 L 0.005 0.78 Q 0.005 0.86 0.09 0.86 Q 0.54 0.82 0.995 0.86 L 0.995 0.082 Q 0.995 0.005 0.918 0.005 Z"
                  fill="none"
                  stroke="#E8E8E8"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <h3 className="text-lg font-bold text-[#0B1437] mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;