"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Using lucide-react for consistency

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-slate-50">
          nexLib
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open navigation menu">
            <Menu className="h-6 w-6 text-slate-800 dark:text-slate-200" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white p-6 dark:bg-slate-900 md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={handleLinkClick} className="text-2xl font-bold text-slate-900 dark:text-slate-50">
              nexLib
            </Link>
            <button onClick={() => setIsOpen(false)} aria-label="Close navigation menu">
              <X className="h-6 w-6 text-slate-800 dark:text-slate-200" />
            </button>
          </div>
          <nav className="mt-24 flex flex-col items-center gap-8">
            <Link href="/login" onClick={handleLinkClick} className="text-xl font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300">
              Login
            </Link>
            <Link href="/signup" onClick={handleLinkClick} className="w-full max-w-xs rounded-md bg-blue-600 py-3 text-center text-xl font-medium text-white hover:bg-blue-700">
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;