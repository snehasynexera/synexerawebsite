// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNavbarData } from "../api"; // your api helper

export default function Navbar() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await getNavbarData(); // expects { logo, links: ["Home","Blog",...] }
        setLinks(data.links || []);
      } catch (e) {
        console.error("Navbar fetch failed:", e);
      }
    }
    load();
  }, []);

  return (
    // fixed top bar, transparent background (so logo on page shows left), center pill
    <div className="fixed top-4 left-0 w-full pointer-events-none z-50">
      <div className="flex justify-center">
        <div
          className="pointer-events-auto bg-[#070B55] text-white rounded-full px-2 py-1.5 flex items-center gap-6 shadow-lg"
          
        >
          {links.map((label, i) => (
            <NavLink
              key={i}
              to={label === "Home" ? "/home" : `/${label.toLowerCase().replace(/\s+/g, "")}`}
              className={({ isActive }) =>
                `px-6 py-1 rounded-full text-sm font-medium transition ${isActive ? "bg-[#22F6F2] text-[#071234]" : "text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
