"use client"
import React from 'react';
import Link from 'next/link';

// Define the props interface for Footer (if any props were needed)
interface FooterProps {
  // You can add props here if you want to make the content dynamic
  // companyName?: string;
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-t-lg shadow-inner"> {/* Removed mt-12 */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Section 1: Brand and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-white text-2xl font-extrabold tracking-wide mb-4 transition-transform transform hover:scale-105">
            nexLib
          </Link>
          <p className="text-sm text-gray-400">
            &copy; {currentYear} <span className="font-semibold">nexLib</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Your modern solution for seamless library management.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/nexlibe" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                Nexlibe
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact & Legal */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-white">Contact & Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
            <li className="flex items-center text-gray-400">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
              <span>info@nexlib.com</span>
            </li>
          </ul>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3 8h-2v2h2v2h-2v6h-3v-6H7v-2h2V8.5C9 7.119 9.811 6 11.25 6h2.25v3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.29 7.71c.17.4.26.85.26 1.31 0 3.25-2.48 7-7.05 7-1.4 0-2.7-.4-3.8-1.1.2.02.4.03.6.03 1.1 0 2.1-.4 2.9-1.1-.5 0-.9-.2-1.3-.5-.1.02-.2.02-.3.02-.1 0-.2 0-.3-.01-.5.1-.9.2-1.3.2-.2 0-.3 0-.5-.01.3.05.6.08.9.08.6 0 1.2-.1 1.7-.4-1.2-.8-2-2.1-2-3.6 0-.1 0-.3.01-.4.3.2.7.3 1.1.4-.6-.4-1-.9-1.3-1.5-.3-.6-.4-1.3-.2-2 .6.9 1.5 1.5 2.5 1.9.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3.8-.8 1.4-1.8 1.8-2.9.4-1 .5-2.1.3-3.1-.2-.8-.6-1.5-1.1-2.1.7.1 1.4.3 2.1.6 1.4.6 2.5 1.6 3.3 2.9.2.4.3.8.4 1.3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 16h-3V9h3v9zm-1.5-10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7.5 10h-3V13c0-1.33-.67-2-1.5-2s-1.5.67-1.5 2v5h-3V9h3v1.5c.4-.6 1.1-1.5 2.5-1.5 1.67 0 3 1.33 3 4v5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
