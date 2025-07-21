"use client"
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link

// Define the props interface for NavLink for TypeScript
interface NavLinkProps {
  href: string;
  text: string;
  isMobile?: boolean;
  onClick?: () => void; // Optional click handler for mobile menu
}

// Helper component for individual navigation links
const NavLink: React.FC<NavLinkProps> = ({ href, text, isMobile = false, onClick }) => (
  // Use Link component from next/link for internal navigation
  <Link
    href={href}
    className={`block px-4 py-2 rounded-md font-medium transition-all duration-300
      ${isMobile ? 'text-white hover:bg-blue-600 w-full text-center' : 'text-white hover:text-blue-200 hover:bg-blue-500/30'}`}
    onClick={onClick} // Pass onClick for mobile menu closing
  >
    {text}
  </Link>
);

// Main Navbar component
const Navbar: React.FC = () => {
  // State to manage the mobile menu's open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo Section */}
        <div className="flex items-center">
          {/* Use Link component for the brand logo */}
          <Link href="/" className="text-white text-3xl font-extrabold tracking-wide rounded-md px-2 py-1 transition-transform transform hover:scale-105">
            nexLib {/* Changed to nexLib */}
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {/* Added Login and Sign Up links */}
          <NavLink href="/login" text="Login" />
          <NavLink href="/signup" text="Sign Up" />
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2 transition-transform transform hover:scale-105"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              // Close icon (X) when menu is open
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 mt-4 rounded-b-lg py-2 shadow-inner">
          <div className="flex flex-col items-center space-y-2">
            {/* Added Login and Sign Up links for mobile */}
            <NavLink href="/login" text="Login" isMobile={true} onClick={toggleMenu} />
            <NavLink href="/signup" text="Sign Up" isMobile={true} onClick={toggleMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
