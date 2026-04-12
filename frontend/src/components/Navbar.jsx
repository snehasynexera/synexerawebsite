import React, { useState, useEffect } from "react";
import { getNavbarData } from "../api";
import { Menu, X } from "lucide-react";

const getLuminance = (r, g, b) => (0.2126 * r) + (0.7152 * g) + (0.0722 * b);

const parseRgbTuple = (value) => {
  if (!value || value === "transparent") return null;
  const match = value.match(
    /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(0|1|0?\.\d+))?\)/i
  );
  if (!match) return null;
  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    a: match[4] === undefined ? 1 : Number(match[4]),
  };
};

const isDarkVisualBackground = (element) => {
  const style = window.getComputedStyle(element);
  const colorTuple = parseRgbTuple(style.backgroundColor);
  const image = style.backgroundImage || "";

  if (colorTuple && colorTuple.a > 0.2) {
    const { r, g, b } = colorTuple;
    if (getLuminance(r, g, b) < 120) return true;
  }

  const rgbMatches = [
    ...image.matchAll(
      /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(0|1|0?\.\d+))?\)/gi
    ),
  ];
  if (!rgbMatches.length) return false;

  return rgbMatches.some((match) => {
    const r = Number(match[1]);
    const g = Number(match[2]);
    const b = Number(match[3]);
    const a = match[4] === undefined ? 1 : Number(match[4]);
    if (a <= 0.2) return false;
    return getLuminance(r, g, b) < 120;
  });
};

export default function Navbar() {
  const [links, setLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [isOverDarkBanner, setIsOverDarkBanner] = useState(false);

  // ✅ Load navbar links dynamically
  useEffect(() => {
    async function load() {
      try {
        const data = await getNavbarData();
        setLinks(data.links || []);
      } catch (e) {
        console.error("Navbar fetch failed:", e);
      }
    }
    load();
  }, []);

  // ✅ Scroll to section on click
  const handleScroll = (label) => {
    setActive(label);
    setIsOpen(false);

    if (label === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(label.toLowerCase().replace(/\s+/g, ""));
    if (section) {
      const offset = 80; // Adjust for navbar height
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth", duration: 1000 });
    }
  };

  // ✅ Track scroll position and update active link dynamically
  useEffect(() => {
    if (!links.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for navbar height
      let currentSection = "Home";

      links.forEach((label) => {
        const id = label.toLowerCase().replace(/\s+/g, "");
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = label;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // ✅ Detect when navbar is over dark sections for contrast-safe nav styling
  useEffect(() => {
    const handleScroll = () => {
      const probeY = window.scrollY + 52; // navbar visual center
      let isOverBanner = false;

      const darkElements = document.querySelectorAll("section, footer");
      for (let element of darkElements) {
        if (!isDarkVisualBackground(element)) continue;

        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        if (probeY >= elementTop && probeY < elementBottom) {
          isOverBanner = true;
          break;
        }
      }

      setIsOverDarkBanner(isOverBanner);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 w-full z-50">
      {/* NAVBAR CONTAINER */}
      <div className="flex justify-between items-center px-6 md:px-10">
        <div></div>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex justify-center w-full relative">
          <div className={`rounded-full px-6 py-2 flex items-center gap-6 shadow-lg backdrop-blur-md transition-all duration-300 ${
            isOverDarkBanner
              ? "bg-white text-[#071234]"
              : "bg-[#070B55] text-white"
          }`}>
            {links.map((label, i) => (
              <button
                key={i}
                onClick={() => handleScroll(label)}
                className={`px-5 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === label
                    ? "bg-[#22F6F2] text-[#071234]"
                    : isOverDarkBanner
                    ? "text-[#071234] hover:text-[#22F6F2]"
                    : "text-white hover:text-[#22F6F2]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Contact Us Button */}
          <button
            onClick={() => handleScroll("contact")}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 px-6 py-2 border-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isOverDarkBanner
                ? "border-white text-white hover:bg-white hover:text-[#070B55]"
                : "border-[#070B55] text-[#070B55] hover:bg-[#070B55] hover:text-white"
            }`}
            style={{ marginRight: '134px' }}
          >
            Contact Us
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className={`xl:hidden focus:outline-none transition-colors ${
            isOverDarkBanner ? "text-white" : "text-black"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} color={isOverDarkBanner ? "white" : "black"} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#070B55] text-white rounded-3xl shadow-md flex flex-col items-center gap-4 py-6 animate-slideDown xl:hidden">
          {links.map((label, i) => (
            <button
              key={i}
              onClick={() => handleScroll(label)}
              className={`w-full text-center text-lg font-medium transition-all duration-300 ${
                active === label
                  ? "text-[#22F6F2]"
                  : "text-white hover:text-[#22F6F2]"
              }`}
            >
              {label}
            </button>
          ))}

          <button
            className="mt-2 px-6 py-2 bg-[#22F6F2] text-[#071234] rounded-full font-semibold hover:bg-[#18c9c5] transition"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </nav>
  );
}
