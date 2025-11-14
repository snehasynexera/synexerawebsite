import { useEffect, useState } from "react";
import { getTestimonialsData } from "../api"; // make sure api exposes getTestimonialsData using BASE_URL pattern
import { User, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const [data, setData] = useState(null);

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

  if (!data) return null;

  return (
    <>
        {/* header row - left small scrolling text + title */}
          <div className="mx-auto py-12 px-6 md:px-12 lg:px-24 flex items-start justify-between">
            <div>
              <div className="relative w-[180px] overflow-hidden mb-3">
                <div className="animate-scrollText text-[15px] font-base tracking-wide whitespace-nowrap flex gap-4 text-black/80">
                  <span className="flex gap-2 items-center">
                    {data.leftText}
                    <User className="w-4 h-4"/>
                  </span>
                  <span className="flex gap-2 items-center">
                    {data.leftText}
                    <User className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <h2 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
                {data.title}{" "}
                <span className="text-[#0DBCC1] underline decoration-4 underline-offset-4">
                  {data.highlight}
                </span>{" "}
                <p>{data.ending}</p>
                
              </h2>
            </div>

            {/* <p className="hidden md:block text-right text-black/70 max-w-md">
              {data.description}
            </p> */}
          </div>

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

      <section className="py-16 px-6 md:px-16 lg:px-24 relative">
        <div className="relative font-extrabold text-[44px] leading-[1.2]">
            {/* Grey base text */}
            <p className="text-[#B6BCC9]">
                {data.belowHeroLine}
            </p>

            {/* Black masked text (revealed as cursor moves) */}
            <p className="absolute inset-0 text-black whitespace-nowrap overflow-hidden animate-mask">
                {data.belowHeroLine}
            </p>

            {/* Red cursor */}
            <span className="absolute top-0 text-red-500 text-[44px] font-extrabold animate-cursor">
                |
            </span>
            </div>
    </section>
    </>
  );
}
