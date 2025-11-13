import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { HiChevronDoubleRight, HiPaperAirplane } from "react-icons/hi2";



const Footer = () => {


  return (
    <footer className="bg-gradient-to-br from-[#0b0f2f] to-[#08102b] text-white py-12 px-6 md:px-20 rounded-t-2xl mt-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-0">
          Let’s have a chat
        </h2>
        <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-3 rounded-full transition-all">
          Let’s Connect <HiChevronDoubleRight className="text-xl"/>
        </button>
      </div>

      <div className="border-t border-gray-600 pt-10 grid md:grid-cols-7 gap-6">
        {/* Left Section */}
        <div className ="md:col-span-3">
          <div >
           <div className="flex items-center space-x-3 mb-4">
             <img
             src="/synexera.svg"
             alt="Synexera"
             className="h-12 w-12 object-contain"
             />
             <h3 className="text-2xl font-bold text-cyan-400">Synexera</h3>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
          <div className="flex space-x-4 text-cyan-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaWhatsapp className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
          </div>
        </div>

        {/* Navigation */}
        <div >
          <h4 className="text-lg font-semibold mb-4 text-cyan-400">Navigation</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
            <Link className="hover:text-white cursor-pointer">Home</Link>
            </li>
            <li>
            <Link className="hover:text-white cursor-pointer">Services</Link>
            </li>
            <li>
            <Link className="hover:text-white cursor-pointer">Testimonials</Link>
            </li>
            <li>
            <Link className="hover:text-white cursor-pointer">Projects</Link>
            </li>
            <li>
            <Link className="hover:text-white cursor-pointer">About</Link>
          </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>+91 7738443436</li>
            <li>Joycreag3@gmail.com</li>
            <li>Portfolio-jcrea.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className ="md:col-span-2"> 
          <h4 className="text-lg font-semibold mb-4 text-cyan-400">
            Get the latest information
          </h4>
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 text-gray-700 outline-none rounded-l-full"
            />
            <button
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 
                         text-white px-4 py-2 flex items-center justify-center rounded-r-full transition-all"
            >
              <HiPaperAirplane size={32}/>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>Copyright © {new Date().getFullYear()} Synexera. All Rights Reserved.</p>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
           <a href="#" className="hover:text-white">User Terms & Conditions</a>
           <span>|</span>
           <a href="#" className="hover:text-white">Privacy Policy</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
