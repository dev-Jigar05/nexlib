"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; 

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="container mx-auto flex flex-col items-center px-6 py-24 text-center sm:py-32">
        
        {/* Hero Title */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl">
          Modern Library Management, <br />
          Made Simple with <span className="text-blue-600 dark:text-blue-500">nexLib</span>
        </h1>

        {/* Hero Description */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Discover, borrow, and manage your books with an intuitive platform. Streamline operations and enhance the experience for both librarians and patrons.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-x-2 rounded-md px-6 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;