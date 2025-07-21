"use client"
import React from 'react';
import Link from 'next/link';

// Define the props interface for HeroSection (if any props were needed, e.g., title, description)
interface HeroSectionProps {
  // You can add props here if you want to make the content dynamic
  // title?: string;
  // description?: string;
  // ctaText?: string;
  // ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
          Welcome to <span className="text-yellow-300">nexLib</span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in">
          Your modern solution for seamless library management. Discover, borrow, and manage your books with ease.
          Streamline your library operations and enhance the user experience for both librarians and patrons.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up">
          <Link href="/signup" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
            Get Started
          </Link>
          <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
            Learn More
          </Link>
        </div>

        {/* Secondary Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-xl mb-6">Ready to transform your library?</p>
          <Link href="/signup" className="bg-yellow-300 text-blue-800 hover:bg-yellow-400 px-10 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50">
            Sign Up
          </Link>
        </div>

      </div>

      {/* Basic CSS for animations (can be moved to a global CSS file) */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
          animation-delay: 0.3s; /* Delay for sequential animation */
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.4s ease-out forwards;
          animation-delay: 0.6s; /* Delay for sequential animation */
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
