"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, isMobile = false, onClick }) => (
  <Link href={href} onClick={onClick}>
    <span
      className={`inline-block px-4 py-2 rounded-md font-semibold transition-all duration-300 cursor-pointer ${
        isMobile
          ? "bg-blue-600 text-white hover:bg-blue-700 w-full text-center"
          : "bg-white text-blue-600 hover:bg-blue-100"
      }`}
    >
      {text}
    </span>
  </Link>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/WhiteNexLib.png" alt="NexLib Logo" className="h-10 w-auto" title="NexLib" />
        </Link>

        {/* Desktop Navigation Buttons */}
        <div className="hidden md:flex space-x-4">
          <NavLink href="/login" text="Login" />
          <NavLink href="/signup" text="Sign Up" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2 transition-transform hover:scale-105"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 mt-4 rounded-b-lg py-2 shadow-inner">
          <div className="flex flex-col items-center space-y-2">
            <NavLink href="/login" text="Login" isMobile onClick={toggleMenu} />
            <NavLink href="/signup" text="Sign Up" isMobile onClick={toggleMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
