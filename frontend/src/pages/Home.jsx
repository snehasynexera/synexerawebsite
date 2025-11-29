// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { getHomeData } from "../api";
import { Sparkle, ChevronsRight } from "lucide-react";

// Custom stopwatch with heartbeat icon
const StopwatchPulse = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    {/* Stopwatch button on top */}
    <rect x="10" y="1" width="4" height="3" rx="0.5" />
    {/* Small button on right */}
    <path d="M20 6l-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Circle body */}
    <circle cx="12" cy="14" r="8" />
    {/* Heartbeat line cutout */}
    <path d="M6 14h3l1.5-3 2 6 1.5-3h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
import Services from "./Services";
import Testimonials from "./Testimonials";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Home() {
  const [home, setHome] = useState({});

  useEffect(() => {
    async function fetchHome() {
      try {
        const data = await getHomeData();
        setHome(data);
      } catch (err) {
        console.error("Home fetch failed:", err);
      }
    }
    fetchHome();
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#071234] w-full overflow-x-hidden relative">

      <section id="home" className="flex flex-col items-center justify-center py-16 sm:py-10 px-4 sm:px-6 text-center">
      {/* Logo Section */}
      <div className="absolute top-4 left-4 sm:left-8 z-20 flex items-center gap-2 sm:gap-3">
        <img
          src="/images/synexera.svg"
          alt={home.logo || "Synexera"}
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
        />
        <span className="text-lg sm:text-xl md:text-2xl font-bold">
          {home.logo || "Synexera"}
        </span>
      </div>

      <div className="h-16 sm:h-20" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-6 sm:py-20 px-4 sm:px-6 text-center">
        {/* Scrolling Tagline */}
        <div className="relative w-[350px] sm:w-[400px] md:w-[450px] h-6 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-3">
                <StopwatchPulse className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-sm font-medium">
                  {home.tagline1}
                </span>
                <Sparkle className="w-4 h-4 text-black flex-shrink-0" fill="black" />
                <span className="text-sm font-medium">
                  {home.tagline2}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-bold leading-tight mt-10 mb-8 sm:mb-12">
          Transforming Today's{" "}
          <span className="text-[#0DBCC1] underline decoration-4 underline-offset-8">
            Vision
          </span>{" "}
          Into
          <br />
          Tomorrow's{" "}
          <span className="text-[#0DBCC1] underline decoration-4 underline-offset-8">
            Reality
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
          style={{ marginBottom: '114px' }}
        >
          {home.subtext}
        </p>

        {/* Button */}
        <button
          className="bg-[#070B55] text-white text-lg font-medium flex items-center justify-center hover:bg-[#0a1066] transition-all hover:scale-105"
          style={{
            width: '301px',
            height: '66px',
            borderRadius: '54px',
            gap: '8px',
            padding: '14px 0',
            marginBottom: '135px'
          }}
        >
          {home.buttonText}
          <ChevronsRight className="w-6 h-6" />
        </button>
      </section>

      {/* Footer Logos */}
      <footer className="bg-[#070B55] text-white overflow-hidden flex justify-center items-center w-screen"
        style={{
          height: '162px',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}
      >
        <div className="animate-scrollLogos whitespace-nowrap flex items-center" style={{ gap: '80px' }}>
          {[...Array(4)].map((_, iteration) => (
            home.logos?.map((logo, index) => (
              <img
                key={`${iteration}-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="w-24 sm:w-32 md:w-40 h-8 sm:h-10 md:h-12 object-contain flex-shrink-0"
              />
            ))
          ))}
        </div>
      </footer>

      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* About Section */}
      <section id="about">
        <Footer />
      </section>

    </main>
  );
}
