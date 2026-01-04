import { useEffect, useState, useRef } from "react";
import { getTestimonialsData } from "../api";
import { User, Sparkle } from "lucide-react";

export default function Testimonials() {
  const [data, setData] = useState(null);
  const [revealPercent, setRevealPercent] = useState(0);
  const textRevealRef = useRef(null);

  useEffect(() => {
    async function load() {
      try {
        const json = await getTestimonialsData();
        setData(json);
      } catch (e) {
        console.error("Testimonials fetch failed:", e);
      }
    }
    load();
  }, []);

  // Scroll-based text reveal effect
  useEffect(() => {
    const handleScroll = () => {
      if (!textRevealRef.current) return;

      const element = textRevealRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      const startPoint = windowHeight;
      const endPoint = -elementHeight;
      const totalDistance = startPoint - endPoint;
      const currentPosition = startPoint - elementTop;

      let percent = (currentPosition / totalDistance) * 100;
      percent = Math.max(0, Math.min(100, percent));

      setRevealPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  if (!data) return null;

  return (
    <>
      {/* Section Header - "Our Reviews" and "Why people value Us" */}
      <section className="relative bg-white text-black px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Scrolling Text */}
          <div className="relative w-[180px] overflow-hidden mb-4">
            <div className="animate-scrollText text-[15px] tracking-wide text-black whitespace-nowrap flex gap-4">
              <span className="flex gap-2 items-center justify-center">Our Reviews <span className="text-[#0DBCC1]">✦</span></span>
              <span className="flex gap-2 items-center justify-center">Our Reviews <span className="text-[#0DBCC1]">✦</span></span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: 'Syne, sans-serif',
            color: '#000',
            lineHeight: 'normal'
          }}>
            Why people{' '}
            <span style={{
              color: '#0DBCC1',
              textDecoration: 'underline',
              textDecorationThickness: 'auto',
              textUnderlineOffset: 'auto'
            }}>
              value
            </span>
            {' '}us
          </h2>
        </div>
      </section>

      {/* Testimonials Section - Light Theme */}
      <section className="relative bg-white text-black px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Title and Description */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif', color: '#070B55' }}>
                What Our <br />
                Customers Says
              </h2>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {data.description || "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common."}
              </p>

              <button 
                className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-lg hover:bg-[#0a1066]"
                style={{
                  background: "#070B55",
                }}
              >
                View More
              </button>
            </div>

            {/* Right Side - Testimonial Cards */}
            <div className="space-y-6">
              {data.testimonials.slice(0, 3).map((testimonial, index) => (
                <div 
                  key={index}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  style={{
                    borderLeft: index === 1 ? '4px solid #0DBCC1' : 'none'
                  }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-gray-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                        {testimonial.avatar ? (
                          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-black mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {testimonial.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Team of Developers Section */}
      <section className="px-6 md:px-16 lg:px-24 relative" ref={textRevealRef} style={{ paddingTop: 'calc(64px + 10px)', paddingBottom: 'calc(64px + 10px)' }}>
        {/* Scrolling "Team of Developers" text */}
        <div className="flex justify-center" style={{ marginBottom: '45px' }}>
          <div className="relative w-[220px] overflow-hidden">
            <div className="animate-scrollText text-[15px] tracking-wide text-[#071234] whitespace-nowrap flex gap-4">
              <span className="flex gap-2 items-center">Team of Developers <Sparkle className="text-black w-5 h-5" /></span>
              <span className="flex gap-2 items-center">Team of Developers <Sparkle className="text-black w-5 h-5" /></span>
            </div>
          </div>
        </div>

        <div style={{
          color: '#070B55',
          textAlign: 'center',
          fontFamily: '"SF Pro Display"',
          fontSize: '48px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',
          paddingBottom: '70px'
        }}>
            {/* Word-by-word reveal based on scroll */}
            <p>
              {data.belowHeroLine.split(' ').map((word, index, arr) => {
                const totalWords = arr.length;
                const wordThreshold = (index / totalWords) * 100;
                const isRevealed = revealPercent > wordThreshold;
                const nextThreshold = ((index + 1) / totalWords) * 100;
                const isCurrent = revealPercent > wordThreshold && revealPercent <= nextThreshold;

                return (
                  <span key={index} className="relative inline">
                    <span
                      className="transition-colors duration-150"
                      style={{
                        color: isRevealed ? '#070B55' : '#B6BCC9'
                      }}
                    >
                      {word}
                    </span>
                    {isCurrent && (
                      <span style={{
                        color: '#F00',
                        fontFamily: '"SF Pro Display"',
                        fontSize: '48px',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        lineHeight: 'normal'
                      }}>|</span>
                    )}
                    {index < arr.length - 1 && ' '}
                  </span>
                );
              })}
              {revealPercent >= 100 && (
                <span style={{
                  color: '#F00',
                  fontFamily: '"SF Pro Display"',
                  fontSize: '48px',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  lineHeight: 'normal'
                }}>|</span>
              )}
            </p>
        </div>
    </section>
    </>
  );
}
