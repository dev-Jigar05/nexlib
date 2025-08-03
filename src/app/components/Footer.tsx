"use client"
import React from 'react';
import Link from 'next/link';
// For icon consistency, we'll use lucide-react again
// Run: npm i lucide-react
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo and Copyright */}
          <div className="flex items-center text-center md:text-left">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {currentYear}{' '}
              <Link href="/" className="font-semibold text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-500">
                nexLib
              </Link>
              . All rights reserved.
            </p>
          </div>

          {/* Navigation and Social Links */}
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
              <Link href="/about" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500">
                About
              </Link>
              <Link href="/privacy" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500">
                Contact
              </Link>
            </nav>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <Link href="#" aria-label="Facebook" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-500">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-500">
                <Twitter size={20} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-500">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;