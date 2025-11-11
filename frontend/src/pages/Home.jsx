// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { getHomeData } from "../api";
import { Sparkle, HeartPulse, ArrowRight, ChevronsRight } from "lucide-react";
import Services from "./Services";

export default function Home() {
  const [home, setHome] = useState({});

  useEffect(() => {
    async function fetchHome() {
      try {
        const data = await getHomeData();
        console.log("Home Data:", data);
        setHome(data);
      } catch (err) {
        console.error("Home fetch failed:", err);
      }
    }
    fetchHome();
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#071234] w-full overflow-x-hidden relative">
      {/* Synexera logo (scrollable, not part of navbar) */}
      <div className="absolute top-4 left-8 z-20 flex items-center gap-3">
        <img
          src="/synexera.svg"
          alt={home.logo || "Synexera"}
          className="h-12 w-12 object-contain"
        />
        <span className="text-2xl font-bold text-[#071234]">
          {home.logo || "Synexera"}
        </span>
      </div>

      {/* Spacer to push content below navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 w-full text-center">
            
        <div className="relative w-full max-w-xs h-8 overflow-hidden">
          <div className="animate-scrollText">
            {/* duplicate text inline */}
            <span className="inline-flex items-center gap-2 mr-4">
              <Sparkle className="w-5 h-5 text-black" />
              {home.tagline1}
              <HeartPulse className="w-5 h-5 text-black-500" />
              {home.tagline2}
            </span>
            <span className="inline-flex items-center gap-2 mr-4">
              <Sparkle className="w-5 h-5 text-black" />
              {home.tagline1}
              <HeartPulse className="w-5 h-5 text-black-500" />
              {home.tagline2}
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-10 mb-16">
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
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {home.subtext}
        </p>

        {/* Button */}
        <button className="bg-[#070B55] text-white px-14 py-4 rounded-full shadow-lg flex items-center gap-3 hover:bg-[#07123a] transition-all">
          {home.buttonText}
          <ChevronsRight className="w-7 h-7" />
        </button>
      </section>

      <footer className="bg-[#0A4C7C] text-white py-6 mt-12 w-full overflow-hidden">
        <div className="animate-scrollLogos">
          {/* Original logos */}
            <span className="inline-flex items-center gap-48 mr-48">
              {home.logos?.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className="w-40 h-12" />
              ))}
            </span>

            {/* Duplicate logos for continuous scrolling */}
            <span className="inline-flex items-center gap-48 mr-48">
              {home.logos?.map((logo, index) => (
                <img key={`dup-${index}`} src={logo.src} alt={logo.alt} className="w-40 h-12" />
              ))}
            </span>
        </div>
      </footer>
    <Services />
    </main>
  );
}
