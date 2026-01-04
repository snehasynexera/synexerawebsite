import { useState, useEffect, useRef } from "react";
import { getCaseStudiesData } from "../api";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const autoScrollRef = useRef(null);

  // Load JSON
  useEffect(() => {
    async function load() {
      try {
        const data = await getCaseStudiesData();
        setProjects(data);
        if (data.length > 0) {
          setCurrentIndex(data.length); // Start at beginning of middle array
        }
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  // Handle infinite loop - reset position when reaching boundaries
  useEffect(() => {
    if (projects.length === 0) return;
    
    const maxIndex = projects.length * 2; // End of middle array
    const minIndex = projects.length; // Start of middle array
    
    // If we've scrolled past the end of the middle array, snap back to start of middle array
    if (currentIndex >= maxIndex) {
      setTimeout(() => {
        setCurrentIndex(projects.length);
      }, 600); // Wait for transition to complete
    }
    // If we've scrolled before the start of middle array, snap to end of middle array
    else if (currentIndex < minIndex) {
      setTimeout(() => {
        setCurrentIndex(projects.length * 2 - 1);
      }, 600);
    }
  }, [currentIndex, projects.length]);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (projects.length === 0) return;
    
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [projects.length, currentIndex]);

  // Create a longer array for seamless scrolling
  const extendedProjects = projects.length > 0 
    ? [...projects, ...projects, ...projects] 
    : [];

  const handleNext = () => {
    if (projects.length > 0) {
      setCurrentIndex((prev) => prev + 1);
      resetAutoScroll();
    }
  };

  const handlePrev = () => {
    if (projects.length > 0) {
      setCurrentIndex((prev) => prev - 1);
      resetAutoScroll();
    }
  };

  const goToSlide = (index) => {
    const actualIndex = index + projects.length; // Adjust to middle array
    setCurrentIndex(actualIndex);
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      handleNext();
    }, 4000);
  };

  // Get the actual project index for the dots
  const getActualIndex = () => {
    if (projects.length === 0) return 0;
    return ((currentIndex % projects.length) + projects.length) % projects.length;
  };

  return (
    <section 
      id="projects" 
      className="w-full py-20 px-6 bg-white text-black overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Header Section - Restored Original */}
      <div className="w-full mb-20 px-6 md:px-16 lg:px-24">
        {/* Scrolling Text */}
        <div className="relative w-[200px] overflow-hidden mb-4">
          <div className="animate-scrollText text-[15px] tracking-wide text-black whitespace-nowrap flex gap-4">
            <span className="flex gap-2 items-center">Recent Work <span className="text-[#0DBCC1]">✦</span></span>
            <span className="flex gap-2 items-center">Recent Work <span className="text-[#0DBCC1]">✦</span></span>
          </div>
        </div>

        {/* Heading with "Growth" highlighted */}
        <div className="flex items-center justify-between">
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: 'Syne',
              color: '#000',
              lineHeight: 'normal'
            }}
          >
            Recent projects that
            <br />
            highlight our{' '}
            <span
              style={{
                color: '#0DBCC1',
                textDecoration: 'underline',
                textDecorationThickness: 'auto',
                textUnderlineOffset: 'auto',
                textDecorationLine: 'underline'
              }}
            >
              Growth
            </span>
          </h2>
          <button 
            className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all"
            style={{ whiteSpace: 'nowrap' }}
          >
            View all Projects ≫
          </button>
        </div>
      </div>

      {/* 3D Carousel */}
      <div 
        className="relative w-full mt-20"
        style={{ 
          height: '600px',
          perspective: '2000px',
          perspectiveOrigin: 'center center'
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <div 
            className="flex items-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateX(calc(50% - ${currentIndex * 410}px))`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {extendedProjects.map((project, index) => {
              const centerOffset = index - currentIndex;
              const distance = Math.abs(centerOffset);
              const rotateY = centerOffset * 12;
              const translateZ = -distance * 80;
              const isHovered = hoveredCard === index;
              const isCentered = centerOffset === 0;
              
              let scale = 0.7;
              if (isCentered) {
                scale = isHovered ? 1.08 : 1;
              } else if (distance === 1) {
                scale = 0.85;
              } else if (distance === 2) {
                scale = 0.75;
              }
              
              const opacity = Math.max(0.3, 1 - distance * 0.15);

              return (
                <div
                  key={`${project.projectId}-${index}`}
                  className="flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl cursor-pointer mx-3"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    width: '380px',
                    height: '480px',
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                    opacity: opacity,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: `url(${project.chapters[0]?.image || '/placeholder.jpg'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: isHovered && isCentered ? '3px solid #0DBCC1' : '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: isHovered && isCentered
                      ? '0 35px 60px -12px rgba(13, 188, 193, 0.4)' 
                      : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-xs text-gray-300 mb-2 uppercase tracking-wider">
                        {project.chapters[0]?.category || 'Project'}
                      </p>
                      <h4 className="text-xl font-bold text-white">
                        {project.projectName}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-gray-300 hover:border-black flex items-center justify-center transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="focus:outline-none"
              aria-label={`Go to project ${index + 1}`}
            >
              <div 
                className={`rounded-full transition-all duration-300 ${
                  index === getActualIndex() 
                    ? 'w-2.5 h-2.5 bg-[#0DBCC1]' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-gray-300 hover:border-black flex items-center justify-center transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </section>
  );
}


