import { useEffect, useState } from "react";
import { getServicesData } from "../api";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Services() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getServicesData();
        setServices(data);
      } catch (err) {
        console.error("Services fetch failed:", err);
      }
    }
    fetchData();
  }, []);

  if (!services) return null;

  return (
    <section className="relative bg-white text-[#071234] py-28 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Top Row — Left scroll text + Right sub description */}
      <div className="items-start w-full mb-12 relative">
        {/* Left Scrolling Text */}
        <div className="relative w-[180px] overflow-hidden">
          <div className="animate-scrollText text-[15px] tracking-wide text-[#071234] whitespace-nowrap flex gap-4">
            <span className="flex gap-2 items-center">{services.leftText || "Core Services"} <Sparkle className="text-black w-5 h-5" /></span>
            <span className="flex gap-2 items-center">{services.leftText || "Core Services"} <Sparkle className="text-black w-5 h-5" /></span>
          </div>
        </div>

        {/* Left Description */}
        <h2 className="text-5xl md:text-6xl font-extrabold">
          {services.title}{" "}
          <span className="text-[#0DBCC1] underline decoration-4 underline-offset-4">
            <p>
          {services.highlight}
          </p>
            
          </span>
        </h2>
      </div>

        {/* Right Description (pushed fully to flex-end) */}
        <div className="flex justify-end w-full">
            <p className="text-gray-700 text-right text-sm md:text-base leading-relaxed max-w-md mb-8">
            {services.description}
            </p>
        </div>

      {/* Services Cards */}
        <div className="max-w-7xl mx-auto"> 
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1.2}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop
          className="!overflow-visible"
          
        >
            <style>
            {`
            .swiper-button-next, .swiper-button-prev {
                color: #252869 !important;
                background: rgba(37, 40, 105, 0.1);
                border-radius: 80%;
                width: 48px;
                height: 48px;
            }
            .swiper-button-next::after, .swiper-button-prev::after {
                font-size: 18px;
                font-weight: bold;
            }
            `}
            </style>

          {services.cards.map((card, idx) => (
            <SwiperSlide key={idx}>
  {/* Card wrapper */}
  <div className="relative group shadow-lg rounded-[24px] transition-all duration-500 hover:-translate-y-3">

    {/* Curved card background */}
    <div
      className="relative overflow-hidden rounded-[24px] bg-[#0B0F53]"
    >
      {/* Title */}
      <div className="px-6 pt-6 pb-16 text-left relative z-20">
        <h3 className="text-xl text-white">{card.title}</h3>
      </div>

      {/* Triple-Layer Image Stack */}
      <div className="relative z-10">
        <div className="relative w-full flex justify-center items-center">
          {/* Layer 1 */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute bottom-10 w-[94%] opacity-30 blur-[1px] scale-[0.96] rounded-[20px]"
          />
          {/* Layer 2 */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute bottom-5 w-[97%] opacity-60 scale-[0.98] rounded-[22px]"
          />
          {/* Layer 3 */}
          <img
            src={card.image}
            alt={card.title}
            className="relative z-10 w-full rounded-[24px] shadow-md"
          />
        </div>
      </div>
    </div>

    {/* Arrow button placed ABOVE clip-path layer */}
    <div
      className="absolute flex items-center justify-center group-hover:rotate-45 transition-all duration-500"
      style={{
        bottom: "1.5rem",
        right: "1.5rem",
        width: "64px",
        height: "64px",
        backgroundColor: "#252869",
        borderRadius: "50%",
        boxShadow: "0 0 15px #252869",
        zIndex: 50, // ensures it stays visible
      }}
    >
      <ArrowUpRight className="text-white w-7 h-7" />
    </div>
  </div>
</SwiperSlide>




          ))}
        </Swiper>
      </div>

    </section>
  );
}
