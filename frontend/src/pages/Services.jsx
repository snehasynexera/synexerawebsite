import { useEffect, useState } from "react";
import { getServicesData } from "../api";
import { Sparkle } from "lucide-react";
import PortfolioGallery from "../components/PortfolioGallery";

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
      <div className="w-full mb-12 relative">
        {/* Left Scrolling Text */}
        <div className="relative w-[180px] overflow-hidden mb-4">
          <div className="animate-scrollText text-[15px] tracking-wide text-[#071234] whitespace-nowrap flex gap-4">
            <span className="flex gap-2 items-center">{services.leftText || "Core Services"} <Sparkle className="text-black w-5 h-5" /></span>
            <span className="flex gap-2 items-center">{services.leftText || "Core Services"} <Sparkle className="text-black w-5 h-5" /></span>
          </div>
        </div>

        {/* Flex container for title and description alignment */}
        <div className="flex items-center justify-between w-full">
          {/* Left Description */}
          <div style={{ lineHeight: '1.1' }}>
            <h2 className="font-bold text-[48px]" style={{ fontFamily: 'Syne' }}>
              {services.title}
            </h2>
            <h2 className="font-bold text-[48px] text-[#0DBCC1] underline decoration-4 underline-offset-4" style={{ fontFamily: 'Syne' }}>
              {services.highlight}
            </h2>
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
            {services.description}
          </p>
        </div>
      </div>

      {/* Portfolio Gallery */}
      <div className="mt-16" style={{ marginBottom: '151px' }}>
        <PortfolioGallery items={services.cards || []} />
      </div>

    </section>
  );
}
