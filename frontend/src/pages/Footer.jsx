import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
} from "lucide-react";

import { getFooterData } from "../api";

const Footer = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5050";
  const [footer, setFooter] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribeState, setSubscribeState] = useState({
    loading: false,
    success: "",
    error: "",
  });

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

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    setSubscribeState({
      loading: true,
      success: "",
      error: "",
    });

    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Unable to subscribe right now.");
      }

      setSubscribeState({
        loading: false,
        success: data.message || "Pricing details sent to your email.",
        error: "",
      });
      setNewsletterEmail("");
    } catch (error) {
      setSubscribeState({
        loading: false,
        success: "",
        error: error.message || "Unable to subscribe right now.",
      });
    }
  };

  if (!footer) return null;

  // ICON MAP
  const iconMap = {
    facebook: <Facebook className="hover:text-[#0DBCC1] transition-colors cursor-pointer" size={20}/>,
    instagram: <Instagram className="hover:text-[#0DBCC1] transition-colors cursor-pointer" size={20}/>,
    whatsapp: <MessageCircle className="hover:text-[#0DBCC1] transition-colors cursor-pointer" size={20}/>,
    linkedin: <Linkedin className="hover:text-[#0DBCC1] transition-colors cursor-pointer" size={20}/>
  };

  return (
    <footer className="bg-white text-gray-900 relative overflow-hidden">

      {/* Main Footer Content */}
      <div className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={footer.logo.src}
                alt={footer.logo.text}
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold text-[#0DBCC1]">
                {footer.logo.text}
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {footer.description}
            </p>
            <div className="flex gap-4 text-[#0DBCC1]">
              {footer.socialLinks.map((item, i) => (
                <div key={i} className="hover:scale-110 transition-transform">
                  {iconMap[item.icon]}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footer.navigation.map((nav, i) => (
                <li key={i}>
                  <a
                    href={`/#${nav.id}`}
                    className="text-gray-600 hover:text-[#0DBCC1] transition-colors text-sm"
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${footer.contact.phone}`}
                  className="text-gray-600 hover:text-[#0DBCC1] transition-colors text-sm"
                >
                  {footer.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="text-gray-600 hover:text-[#0DBCC1] transition-colors text-sm"
                >
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">
              Get the latest information
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex items-center bg-gray-100 rounded-full overflow-hidden shadow-lg border border-gray-200">
                <input
                  type="email"
                  placeholder={footer.newsletter.placeholder}
                  value={newsletterEmail}
                  onChange={(event) => setNewsletterEmail(event.target.value)}
                  required
                  className="flex-1 px-5 py-3 text-gray-700 text-sm outline-none bg-gray-100"
                />
                <button
                  type="submit"
                  disabled={subscribeState.loading}
                  className="bg-[#0DBCC1] hover:bg-[#0aa5aa] text-white p-3 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  <Send size={20} />
                </button>
              </div>
              {subscribeState.success && (
                <p className="text-sm text-emerald-600">{subscribeState.success}</p>
              )}
              {subscribeState.error && (
                <p className="text-sm text-rose-600">{subscribeState.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-200 px-6 md:px-20 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>
            Copyright © {new Date().getFullYear()} {footer.logo.text}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#0DBCC1] transition-colors">
              {footer.bottomLinks.terms}
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-[#0DBCC1] transition-colors">
              {footer.bottomLinks.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
