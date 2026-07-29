import { useState, useEffect, useRef } from "react";
import { getCaseStudiesData } from "../api";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(600);
  const [isMobile, setIsMobile] = useState(false);

  const leftContainerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const touchStartXRef = useRef(0);

  // Load JSON data
  useEffect(() => {
    async function load() {
      try {
        const data = await getCaseStudiesData();
        setProjects(data);
        if (data.length > 0) {
          setCurrentIndex(data.length); // Start at beginning of middle array
        }
      } catch (err) {
        console.error("Error loading case studies:", err);
      }
    }
    load();
  }, []);

  // Track container width for precise responsive sliding calculations
  useEffect(() => {
    const updateWidth = () => {
      if (leftContainerRef.current) {
        setContainerWidth(leftContainerRef.current.clientWidth);
      }
      setIsMobile(window.innerWidth < 1024);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Handle infinite loop boundary snapping
  useEffect(() => {
    if (projects.length === 0) return;

    const maxIndex = projects.length * 2; // End of middle array
    const minIndex = projects.length; // Start of middle array

    if (currentIndex >= maxIndex) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev - projects.length);
      }, 700); // Wait for transition duration
      return () => clearTimeout(timer);
    } else if (currentIndex < minIndex) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev + projects.length);
      }, 700);
      return () => clearTimeout(timer);
    } else if (!isTransitioning) {
      // Re-enable transitions seamlessly after snapping
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, projects.length, isTransitioning]);

  // Auto-scroll logic
  useEffect(() => {
    if (projects.length === 0 || isHovered) return;

    autoScrollRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [projects.length, isHovered]);

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  const handleNext = () => {
    if (projects.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    resetAutoScroll();
  };

  const handlePrev = () => {
    if (projects.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    resetAutoScroll();
  };

  const goToSlide = (stepOffset) => {
    if (projects.length === 0 || stepOffset === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + stepOffset);
    resetAutoScroll();
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Get the actual project index (0 to projects.length - 1)
  const getActualIndex = () => {
    if (projects.length === 0) return 0;
    return ((currentIndex % projects.length) + projects.length) % projects.length;
  };

  const actualIndex = getActualIndex();
  const currentProject = projects[actualIndex] || {};

  // Create extended array of projects for seamless infinite track
  const extendedProjects = projects.length > 0
    ? [...projects, ...projects, ...projects]
    : [];

  // Calculate card dimensions dynamically based on container width
  const cardWidth = Math.min(410, Math.max(260, Math.floor(containerWidth * 0.63)));
  const gap = containerWidth >= 500 ? 28 : 16;
  const offset = isMobile ? (containerWidth - cardWidth) / 2 : containerWidth - cardWidth;
  const translateX = offset - currentIndex * (cardWidth + gap);

  return (
    <section
      id="projects"
      className="w-full py-10 lg:py-20 px-6 md:px-16 lg:px-24 bg-white text-black overflow-hidden select-none"
      style={{ minHeight: isMobile ? "auto" : "100vh" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Block */}
      <div className="w-full mb-12 sm:mb-16">
        {/* Scrolling Text */}
        <div className="relative w-[200px] overflow-hidden mb-4">
          <div className="animate-scrollText text-[15px] tracking-wide text-black whitespace-nowrap flex gap-4 font-medium">
            <span className="flex gap-2 items-center">
              Recent Work <span className="text-[#0DBCC1]">✦</span>
            </span>
            <span className="flex gap-2 items-center">
              Recent Work <span className="text-[#0DBCC1]">✦</span>
            </span>
          </div>
        </div>

        {/* Heading with "Growth" highlighted and View all Projects button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 700,
              fontFamily: "Syne, sans-serif",
              color: "#000",
              lineHeight: "1.15",
            }}
          >
            Recent projects that
            <br />
            highlight our{" "}
            <span
              style={{
                color: "#0DBCC1",
                textDecoration: "underline",
                textDecorationThickness: "auto",
                textUnderlineOffset: "auto",
                textDecorationLine: "underline",
              }}
            >
              Growth
            </span>
          </h2>
          <button
            className="border-2 border-black text-black px-8 py-3.5 rounded-full font-semibold hover:bg-black hover:text-white transition-all self-start md:self-center shadow-sm"
            style={{ whiteSpace: "nowrap" }}
          >
            View all Projects ≫
          </button>
        </div>
      </div>

      {/* Main Layout: Left Visual Track & Right Information Block */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-16 mt-8">
        {/* Left Visual Sliding Track */}
        <div
          ref={leftContainerRef}
          className="relative w-full lg:w-[54%] h-[430px] sm:h-[490px] lg:h-[530px] overflow-hidden rounded-3xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex items-center h-full absolute top-0 left-0"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isTransitioning
                ? "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
            }}
          >
            {extendedProjects.map((project, idx) => {
              const isCurrent = idx === currentIndex;
              const isPrevious = idx === currentIndex - 1;

              return (
                <div
                  key={`card-${project.projectId}-${idx}`}
                  onClick={() => {
                    if (idx !== currentIndex) {
                      goToSlide(idx - currentIndex);
                    }
                  }}
                  style={{
                    width: `${cardWidth}px`,
                    marginRight: `${gap}px`,
                    transform: isCurrent
                      ? "scale(1)"
                      : isMobile ? "scale(0.85)" : "scale(0.5)",
                    transformOrigin: isMobile ? "center" : "bottom",
                    opacity: isCurrent ? 1 : isMobile ? 0.7 : isPrevious ? 0.85 : 0.5,
                    filter: isMobile && !isCurrent ? "blur(4px)" : "none",
                  }}
                  className={`h-[400px] sm:h-[460px] lg:h-[500px] flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl relative cursor-pointer group transition-all duration-700 ${isCurrent
                    ? "border-2 border-[#0DBCC1]/40 shadow-[0_20px_50px_rgba(13,188,193,0.15)]"
                    : "hover:opacity-100"
                    }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${project.chapters?.[0]?.image || "/placeholder.jpg"})`,
                    }}
                  />
                  {isCurrent && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex items-end p-6 sm:p-8">
                      <div>
                        <p className="text-xs sm:text-sm text-gray-200 font-medium uppercase tracking-wider flex items-center gap-2 mb-1">
                          {project.chapters?.[0]?.category || "Project"}{" "}
                          <span className="text-[#0DBCC1]">✦</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Info & Thumbnails Block */}
        <div className="w-full lg:w-[46%] flex flex-col justify-between pl-0 lg:pl-4 py-[15px]">
          <div>
            {/* Subheader Ticker */}
            <div className="relative w-[150px] sm:w-[200px] overflow-hidden mb-2">
              <div className="animate-scrollText text-[13px] sm:text-sm text-black/60 font-medium uppercase tracking-wider whitespace-nowrap flex gap-4">
                <span className="flex gap-2 items-center">
                  Recent Work <span className="text-[#0DBCC1]">✦</span>
                </span>
                <span className="flex gap-2 items-center">
                  Recent Work <span className="text-[#0DBCC1]">✦</span>
                </span>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black font-syne mb-4 leading-tight transition-all duration-500">
              {currentProject.projectName || "Project Title"}
            </h3>

            {/* Project Description */}
            <p className="text-gray-600 text-[15px] sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 min-h-[72px] transition-all duration-500">
              {currentProject.chapters?.[0]?.desc ||
                "Exploring innovative digital solutions and impactful design experiences."}
            </p>
          </div>

          {/* 3 Next Project Thumbnails Row */}
          <div className="hidden lg:grid grid-cols-3 gap-3 sm:gap-5">
            {[1, 2, 3].map((offset) => {
              const thumbIndex =
                (actualIndex + offset) % (projects.length || 1);
              const thumbProject = projects[thumbIndex] || {};

              return (
                <div
                  key={`thumb-${offset}-${thumbIndex}`}
                  onClick={() => goToSlide(offset)}
                  className="relative h-[200px] sm:h-[230px] lg:h-[250px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100/80"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${thumbProject.chapters?.[0]?.image || "/placeholder.jpg"
                        })`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
