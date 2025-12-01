import React, { useState, useEffect } from "react";
import { getNavbarData } from "../api";
import { Menu, X } from "lucide-react";

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

  // ✅ Detect when navbar is over dark banners (testimonials, sections, or footers with dark backgrounds)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let isOverBanner = false;

      // Check testimonials section specifically (has gradient background)
      const testimonialSection = document.getElementById("testimonials");
      if (testimonialSection) {
        const testimonialTop = testimonialSection.offsetTop;
        const testimonialHeight = testimonialSection.offsetHeight;
        const testimonialBottom = testimonialTop + testimonialHeight;

        if (scrollY >= testimonialTop && scrollY < testimonialBottom) {
          isOverBanner = true;
        }
      }

      // Check for dark background sections and footers
      if (!isOverBanner) {
        // Check both sections and footers
        const darkElements = document.querySelectorAll('section, footer');
        for (let element of darkElements) {
          const computedStyle = window.getComputedStyle(element);
          const bgColor = computedStyle.backgroundColor;
          const bgImage = computedStyle.backgroundImage;

          // Check if element has dark navy background (rgb(7, 11, 85)) or dark gradient
          const isDarkNavy = bgColor && bgColor.includes('rgb(7, 11, 85)');
          const isDarkGradient = bgImage && (bgImage.includes('gradient') &&
                                (bgImage.includes('7, 11, 85') || bgImage.includes('070B55') || bgImage.includes('0, 0, 0')));

          if (isDarkNavy || isDarkGradient) {
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const elementBottom = elementTop + elementHeight;

            if (scrollY >= elementTop && scrollY < elementBottom) {
              isOverBanner = true;
              break;
            }
          }
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
            onClick={() => handleScroll("Contact Us")}
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
          className="xl:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} color="black" />}
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
