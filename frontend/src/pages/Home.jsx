// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { getHomeData } from "../api";
import { Sparkle, HeartPulse, ChevronsRight } from "lucide-react";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Projects from "./Projects";
import About from "./About";

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
        {/* Moving Tagline */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-6 sm:h-8 overflow-hidden">
          <div className="animate-scrollText whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-2 mr-4">
                <Sparkle className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                <span className="text-sm sm:text-xs font-medium">
                  {home.tagline1}
                </span>
                <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                <span className="text-sm sm:text-xs font-medium">
                  {home.tagline2}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-10 mb-8 sm:mb-12">
          {home.heading?.split(home.highlight1)[0]}
          <span className="text-[#0DBCC1] underline decoration-4">
            {home.highlight1}
          </span>
          {home.heading
            ?.split(home.highlight1)[1]
            ?.split(home.highlight2)[0]}
          <span className="text-[#0DBCC1] underline decoration-4">
            {home.highlight2}
          </span>
          {home.heading?.split(home.highlight2)[1]}
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-12 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
          {home.subtext}
        </p>

        {/* Button */}
        <button className="bg-[#070B55] text-white text-sm sm:text-base px-8 sm:px-12 md:px-14 py-3 sm:py-4 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 hover:bg-[#07123a] transition-all">
          {home.buttonText}
          <ChevronsRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>
      </section>

      {/* Footer Logos */}
      <footer className="bg-[#0A4C7C] text-white py-3 sm:py-4 mt-12 w-full overflow-hidden">
        <div className="animate-scrollLogos whitespace-nowrap flex items-center">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-24 sm:gap-36 md:gap-48 mr-24 sm:mr-36 md:mr-48">
              {home.logos?.map((logo, index) => (
                <img
                  key={`${i}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-24 sm:w-32 md:w-40 h-8 sm:h-10 md:h-12 object-contain"
                />
              ))}
            </span>
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
        <About />
      </section>

    </main>
  );
}
