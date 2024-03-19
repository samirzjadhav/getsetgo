import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#323232] shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-[16px] md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center h-[64px] w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-lg">
              GetSetGo
            </a>
          </div>
          {/* Mobile menu button (visible on smaller screens) */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Navigation links (visible on larger screens or when mobile menu is open) */}
        <div
          className={`md:flex md:space-x-4 ${
            isMobileMenuOpen ? "show" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-[16px] pb-[20px] md:pb-[0px] md:flex-row md:items-center">
            <li>
              <a href="#home" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#flight" className="text-white hover:text-gray-300">
                Flights
              </a>
            </li>
            <li>
              <a href="#request" className="text-white hover:text-gray-300">
                Request
              </a>
            </li>
            <li>
              <a href="#footer" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
