"use client"
import React from 'react';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


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
          <Link href="/" className="flex items-center space-x-2">
          <img src="/WhiteNexLib.png" alt="NexLib Logo" className="h-10 w-auto" title="NexLib" />
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
                Nexlib
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
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
