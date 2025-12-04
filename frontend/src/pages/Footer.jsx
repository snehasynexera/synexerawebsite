import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
  ChevronRight
} from "lucide-react";

import { getFooterData } from "../api";

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    async function fetchFooter() {
      try {
        const data = await getFooterData();
        setFooter(data);
      } catch (err) {
        console.error("Footer fetch failed:", err);
      }
    }
    fetchFooter();
  }, []);

  if (!footer) return null; // Loading fallback

  // ICON MAP
const iconMap = {
  facebook: <Facebook className="hover:text-white cursor-pointer" size={20}/>,
  instagram: <Instagram className="hover:text-white cursor-pointer" size={20}/>,
  whatsapp: <MessageCircle className="hover:text-white cursor-pointer" size={20}/>,
  linkedin: <Linkedin className="hover:text-white cursor-pointer" size={20}/>
};

  return (
    <footer className="bg-gradient-to-br from-[#070B55] to-[#000000] text-white py-12 px-6 md:px-20 rounded-t-2xl mt-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-0">
          {footer.title}
        </h2>

        <button className="flex items-center gap-2 bg-[#22F6F2] hover:bg-[#22F6F2] text-black font-medium px-6 py-3 rounded-full transition-all">
          {footer.buttonText} <ChevronRight className="text-xl" />
        </button>
      </div>

      <div className="border-t border-gray-600 pt-10 grid md:grid-cols-7 gap-6">
        {/* Left Section */}
        <div className="md:col-span-3">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={footer.logo.src}
              alt={footer.logo.text}
              className="h-8 w-8 object-contain"
            />
            <h3 className="text-2xl font-bold text-[#22F6F2]">
              {footer.logo.text}
            </h3>
          </div>

          <p className="text-gray-400 text-sm mb-6">{footer.description}</p>

          <div className="flex space-x-4 text-[#22F6F2]">
            {footer.socialLinks.map((item, i) => (
              <span key={i}>{iconMap[item.icon]}</span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#22F6F2]">
            Navigation
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {footer.navigation.map((nav, i) => (
              <li key={i}>
                <a
                  href={`/#${nav.id}`}
                  className="hover:text-white cursor-pointer"
                >
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#22F6F2]">Contact</h4>
          <ul className="space-y-2 text-gray-300 text-sm">

            {/* Phone → open call dialer */}
            <li>
              <a
                href={`tel:${footer.contact.phone}`}
                className="hover:text-white cursor-pointer"
              >
                {footer.contact.phone}
              </a>
            </li>

            {/* Email → open Gmail compose */}
            <li>
              <a
                href={`mailto:${footer.contact.email}`}
                className="hover:text-white cursor-pointer"
              >
                {footer.contact.email}
              </a>
            </li>

            {/* Portfolio → open website */}

          </ul>
        </div>


        {/* Newsletter */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-4 text-[#22F6F2]">
            Get the latest information
          </h4>

          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder={footer.newsletter.placeholder}
              className="w-full px-4 py-3 text-gray-700 outline-none rounded-l-full"
            />
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-4 py-2 flex items-center justify-center rounded-r-full transition-all">
              <Send size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>
          Copyright © {new Date().getFullYear()} {footer.logo.text}. All Rights
          Reserved.
        </p>

        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            {footer.bottomLinks.terms}
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            {footer.bottomLinks.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







// // src/pages/Home.jsx
// import { useEffect, useState } from "react";
// import { getHomeData } from "../api";
// import { Sparkle, HeartPulse, ChevronsRight } from "lucide-react";
// import Services from "./Services";
// import Testimonials from "./Testimonials";
// import Projects from "./Projects";

// export default function Footer() {

//   return (
//     <main className="min-h-screen bg-white text-[#071234] w-full overflow-x-hidden relative">

  
//     </main>
//   );
// }

