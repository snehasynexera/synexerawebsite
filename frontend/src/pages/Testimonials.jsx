import { useEffect, useState, useRef } from "react";
import { getTestimonialsData } from "../api"; // make sure api exposes getTestimonialsData using BASE_URL pattern
import { User, Star, Sparkle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

      // Calculate how far through the element we've scrolled
      // Start revealing when element enters viewport, complete when it's about to leave
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Start point: when element top reaches bottom of viewport
      // End point: when element top reaches top of viewport
      const startPoint = windowHeight;
      const endPoint = -elementHeight;
      const totalDistance = startPoint - endPoint;
      const currentPosition = startPoint - elementTop;

      // Calculate percentage (0 to 100)
      let percent = (currentPosition / totalDistance) * 100;
      percent = Math.max(0, Math.min(100, percent));

      setRevealPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  if (!data) return null;

  return (
    <>
        {/* header row - left small scrolling text + title */}
        <section className="relative bg-white text-[#071234] py-12 px-6 md:px-16 lg:px-24 overflow-hidden">
          <div className="w-full mb-12 relative">
            {/* Left Scrolling Text */}
            <div className="relative w-[180px] overflow-hidden mb-4">
              <div className="animate-scrollText text-[15px] tracking-wide text-[#071234] whitespace-nowrap flex gap-4">
                <span className="flex gap-2 items-center">{data.leftText || "Core Testimonials"} <Sparkle className="text-black w-5 h-5" /></span>
                <span className="flex gap-2 items-center">{data.leftText || "Core Testimonials"} <Sparkle className="text-black w-5 h-5" /></span>
              </div>
            </div>

            {/* Flex container for title and description alignment */}
            <div className="flex items-center justify-between w-full">
              {/* Left Description */}
              <div style={{ lineHeight: '1.1' }}>
                <div className="flex items-baseline flex-wrap gap-3">
                  <h2 className="font-bold text-[48px]" style={{ fontFamily: 'Syne' }}>
                    {data.title}
                  </h2>
                  <h2 className="font-bold text-[48px] text-[#0DBCC1] underline decoration-4 underline-offset-4" style={{ fontFamily: 'Syne' }}>
                    {data.highlight}
                  </h2>
                </div>
                {data.ending && <h2 className="font-bold text-[48px]" style={{ fontFamily: 'Syne' }}>{data.ending}</h2>}
              </div>

              {/* Right Description (aligned vertically with title) */}
              <p className="flex-shrink-0" style={{
                color: '#000',
                textAlign: 'right',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '22px',
                fontStyle: 'normal',
                fontWeight: '300',
                lineHeight: 'normal',
                width: '400px'
              }}>
                {data.description}
              </p>
            </div>
          </div>
        </section>

      {/* Testimonial band */}
      <section
        id="testimonials"
        className="relative w-full overflow-hidden"
        style={{
          background: `linear-gradient(90deg, ${data.gradient.from}, ${data.gradient.to})`
        }}
      >
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-12">


          {/* Swiper testimonial slides — large single-card feel like your design */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={40}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
            >
              {data.testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="relative flex items-start gap-10">
                    {/* Left large card (quote) */}
                    <div className="w-full md:w-3/4 lg:w-2/3">
                      <div className="relative rounded-[24px] p-10 md:p-14 shadow-2xl overflow-visible">
                        {/* subtle triple-layer background (depth) */}
                        <div className="absolute -bottom-8 -left-6 w-[60%] h-28 rounded-[20px] bg-white/4 blur-md transform -rotate-2 pointer-events-none" />
                        <div className="absolute -bottom-6 -left-2 w-[68%] h-24 rounded-[20px] bg-white/6 blur-sm transform rotate-1 pointer-events-none" />

                        {/* Quote text */}
                        <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                          {t.message}
                        </p>

                        {/* Avatar + name */}
                        <div className="flex items-center gap-4 mt-6">
                          <div className="w-16 h-16 rounded-full bg-[#0DBCC1] flex items-center justify-center ring-4 ring-black/30 overflow-hidden">
                            {t.avatar ? (
                              <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                            ) : (
                              <User className="w-8 h-8 text-white" />
                            )}
                          </div>

                          <div>
                            <div className="text-white font-semibold text-lg">{t.name}</div>
                            <div className="text-white/60 text-sm">{t.role}</div>
                          </div>
                        </div>

                        {/* pagination placeholder — visible but Swiper also shows bullets */}
                        {/* <div className="mt-8">
                          <div className="inline-block w-14 h-4 bg-white/20 rounded-full mr-4" />
                          <div className="inline-block w-3 h-3 bg-white/40 rounded-full mr-2" />
                          <div className="inline-block w-3 h-3 bg-white/40 rounded-full mr-2" />
                          <div className="inline-block w-3 h-3 bg-white/40 rounded-full" />
                        </div> */}
                        <div className="mt-8 flex gap-2">
                            <Star color="yellow" fill="yellow"/>
                            <Star color="yellow" fill="yellow"/>
                            <Star color="yellow" fill="yellow"/>
                            <Star color="yellow" fill="yellow"/>
                        </div>

                      </div>
                    </div>

                    {/* Right: (optionally) a large empty area — in your screenshot it's open space */}
                    <div className="hidden lg:block lg:w-1/3" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* thin visible bottom line under testimonial band */}
        <div className="h-1 bg-gradient-to-r from-[#0DBCC1] to-transparent opacity-80" />
      </section>

      <section className="py-16 px-6 md:px-16 lg:px-24 relative" ref={textRevealRef}>
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
          lineHeight: 'normal'
        }}>
            {/* Word-by-word reveal based on scroll */}
            <p>
              {data.belowHeroLine.split(' ').map((word, index, arr) => {
                const totalWords = arr.length;
                // Calculate threshold for this word (when it should be revealed)
                const wordThreshold = (index / totalWords) * 100;
                const isRevealed = revealPercent > wordThreshold;
                // Check if this is the "current" word (cursor position)
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
                    {/* Red cursor after current word */}
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
              {/* Show cursor at end when fully revealed */}
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
