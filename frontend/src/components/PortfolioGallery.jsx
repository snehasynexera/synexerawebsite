import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioGallery({ items }) {
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const scrollbarRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isDraggingScrollbar, setIsDraggingScrollbar] = useState(false);
  const [isScrollbarHovered, setIsScrollbarHovered] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    autoScrollIntervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      const scrollAmount = 400; // Scroll by this amount each interval

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Reset to beginning when reaching the end
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 50
      ) {
        container.scrollLeft = 0;
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(autoScrollIntervalRef.current);
  }, [isAutoScrolling]);

  // Handle scroll progress and pause auto-scroll on user interaction
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const progress = (scrollLeft / scrollWidth) * 100;
    setScrollProgress(progress);

    // Pause auto-scroll on user interaction
    setIsAutoScrolling(false);

    // Resume auto-scroll after 5 seconds of inactivity
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
  };

  // Navigation button handlers
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 400;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // Handle scrollbar drag
  const handleScrollbarDrag = (e) => {
    const scrollbar = e.currentTarget;
    const rect = scrollbar.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const container = scrollContainerRef.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    container.scrollLeft = scrollWidth * percentage;
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // Calculate scrollbar thumb position and size
  const getScrollbarThumbStyle = () => {
    if (!scrollContainerRef.current) return {};

    const container = scrollContainerRef.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const scrollLeft = container.scrollLeft;

    // Thumb width represents viewport size relative to total content (reduced to 1/2 of original)
    const thumbWidthPercent = (container.clientWidth / container.scrollWidth) * 100;
    const thumbWidthAdjusted = thumbWidthPercent * 0.5;

    // Thumb position based on scroll progress
    const thumbPosition = (scrollLeft / scrollWidth) * (100 - thumbWidthAdjusted);

    return {
      width: `${thumbWidthAdjusted}%`,
      left: `${thumbPosition}%`,
      position: 'absolute',
      height: '100%'
    };
  };

  // Handle scrollbar thumb drag
  const handleScrollbarThumbMouseDown = () => {
    setIsDraggingScrollbar(true);
    setIsAutoScrolling(false);
  };

  useEffect(() => {
    if (!isDraggingScrollbar) return;

    const handleMouseMove = (e) => {
      if (!scrollbarRef.current || !scrollContainerRef.current) return;

      const scrollbarRect = scrollbarRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(1, (e.clientX - scrollbarRect.left) / scrollbarRect.width));

      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      container.scrollLeft = scrollWidth * percentage;
    };

    const handleMouseUp = () => {
      setIsDraggingScrollbar(false);
      setTimeout(() => setIsAutoScrolling(true), 5000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingScrollbar]);

  return (
    <div className="w-full">
      {/* Gallery Container */}
      <div className="relative group">
        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scroll-smooth gap-8 pb-4 hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[500px] group/card"
              style={{ minWidth: "500px" }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 h-[320px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div style={{ marginTop: '32px' }}>
                <h3 style={{
                  color: '#000',
                  fontFamily: 'Syne',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                  letterSpacing: '-0.36px',
                  marginBottom: '22px',
                  marginLeft: '25px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#000',
                  fontFamily: '"SF Pro Light", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  lineHeight: 'normal'
                }}>
                  From concept to creation, we help you build experiences that define the future of digital innovation.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Subtle */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-[#070B55]" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-[#070B55]" />
        </button>
      </div>

      {/* Interactive Scrollbar */}
      <div className="w-full mt-12 px-4">
        <div
          ref={scrollbarRef}
          className="relative w-full h-1 bg-gray-300 rounded-full cursor-pointer"
          onClick={handleScrollbarDrag}
          onMouseEnter={() => setIsScrollbarHovered(true)}
          onMouseLeave={() => setIsScrollbarHovered(false)}
        >
          {/* Scrollbar Thumb */}
          <div
            className="bg-[#070B55] rounded-full transition-all duration-75 cursor-grab active:cursor-grabbing"
            style={{
              ...getScrollbarThumbStyle(),
              height: isScrollbarHovered ? '9px' : '4px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
            onMouseDown={handleScrollbarThumbMouseDown}
          />
        </div>
      </div>
    </div>
  );
}
