import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBarother() {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 max-w-screen-2xl mx-auto">

                {/* Logo — linked to Home */}
                <Link
                    to="/"
                    className="flex items-center gap-2 sm:gap-3 group"
                    aria-label="Go to Home"
                >
                    <img
                        src="/images/synexera.svg"
                        alt="Synexera Logo"
                        className="h-8 w-8 sm:h-10 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="text-lg sm:text-xl font-bold text-[#070B55] tracking-tight transition-colors duration-300 group-hover:text-[#00CED1]">
                        Synexera
                    </span>
                </Link>

                {/* Desktop Back Button Container (matches Navbar structure) */}
                <div className="hidden xl:flex justify-center w-full absolute left-0 top-0 h-full pointer-events-none">
                    <button
                        onClick={() => navigate(-1)}
                        className="pointer-events-auto absolute right-0 top-1/2 transform -translate-y-1/2 px-6 py-2 border-2 rounded-full text-sm font-medium transition-all duration-300 border-[#0dbcc1] text-[#0dbcc1] hover:bg-[#0dbcc1] hover:text-white"
                        style={{ marginRight: '154px' }}
                        aria-label="Go back"
                    >
                        Back
                    </button>
                </div>

                {/* Mobile Back Button (For smaller screens where xl:flex is hidden) */}
                <div className="xl:hidden z-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-5 py-2 border-2 rounded-full text-sm font-medium transition-all duration-300 border-[#0dbcc1] text-[#0dbcc1] hover:bg-[#0dbcc1] hover:text-white"
                        aria-label="Go back"
                    >
                        Back
                    </button>
                </div>

            </div>
        </nav>
    );
}
