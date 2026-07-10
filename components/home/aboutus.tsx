"use client";

import Link from 'next/dist/client/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* ========================================= */}
        {/* 1. SECTION HEADER (Centered)              */}
        {/* ========================================= */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Top Yellow Icon (Mimicking the 3-arch icon from the image) */}
          <div className="text-[#ffc222] mb-4">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L26 8V32H14V8L20 0Z" />
              <path d="M6 10L12 16V32H0V16L6 10Z" />
              <path d="M34 10L40 16V32H28V16L34 10Z" />
            </svg>
          </div>
          
          <span className="text-gray-500 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
            Welcome to Al-Barbari Goat Farming
          </span>
          
          <h2 className="text-4xl md:text-[54px] font-serif font-bold text-[#0a1a0f] leading-[1.1] max-w-2xl">
            Know The Real History of Our Farm
          </h2>
        </div>

        {/* ========================================= */}
        {/* 2. TWO COLUMN LAYOUT                      */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col">
            <p className="text-gray-500 text-base md:text-[17px] leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisc sed do eiusmod tempor incididunt ut labore etedum dolor sit a ad minim veniam, quis nostr incididunt ut laborcitationn tempor incididunt ut labore um dolor sit amet, consectetur adipisc sed do eiu agna a liqua. Ut enim ad minim veniam, quis nostr incididunt ut laborcitation.
            </p>

            {/* Bulleted List */}
            <ul className="flex flex-col gap-4 mb-10 text-gray-600 font-medium">
              {[
                "Premium Purebred Livestock",
                "Healthy & Medically Examined Leads",
                "Aqeeqah & Sadqah Arrangements",
                "Free Doorstep Delivery in Lahore"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#12823b] shrink-0" />
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Hollow CTA Button */}
            <div><Link href="/about">
              <button className="px-8 py-3.5 rounded-full border-2 border-[#ffc222] text-[#0a1a0f] font-bold text-sm uppercase tracking-wide hover:bg-[#ffc222] transition-colors duration-300">
                Read Our History
              </button>
            </Link></div>
          </div>

          {/* RIGHT COLUMN: Overlapping Image Composition */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px] flex items-center justify-center mt-10 lg:mt-0">
            
            {/* Background Faint Pattern Graphic (Optional overlay to mimic the gray mandala in background) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none z-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-[80%] h-[80%]" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000000" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18,97.7,-2.6C97.4,12.8,90.2,28,80.4,40.8C70.6,53.6,58.3,64.1,44.4,71.2C30.5,78.3,15.2,82,-0.5,82.9C-16.2,83.8,-32.4,81.9,-46.3,74.7C-60.2,67.5,-71.8,55,-79.8,40.6C-87.8,26.2,-92.2,9.9,-90.1,-5.5C-88,-20.9,-79.4,-35.4,-68.6,-46.9C-57.8,-58.4,-44.8,-66.9,-31.1,-74.3C-17.4,-81.7,-3,-88,11.2,-87C25.4,-86,40.1,-77.7,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Main Arch Image (Right side, rounded top) */}
            <div className="absolute right-0 top-0 w-[75%] h-[85%] rounded-t-[999px] overflow-hidden z-10 shadow-lg bg-gray-100">
              <img 
                src="https://multanfarms.com/wp-content/uploads/2025/09/How-Can-You-Start-Goat-Farming-in-Pakistan.webp" 
                alt="Main Farm View" 
                className="w-full h-full object-cover"
              />
              {/* Optional overlay for better blending */}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Secondary U-Shape Image (Left side bottom, rounded bottom) */}
            <div className="absolute left-0 bottom-0 w-[55%] h-[55%] rounded-b-[999px] overflow-hidden z-20 border-[12px] border-white shadow-xl bg-gray-200">
              <img 
                src="/goats/7.jpeg" 
                alt="Detailed Goat View" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Yellow Circular Badge with Spinning Text */}
            <div className="absolute top-[15%] left-[5%] md:left-0 w-[130px] h-[130px] md:w-[150px] md:h-[150px] bg-[#ffc222] rounded-full z-30 flex items-center justify-center shadow-lg">
              
              {/* Center Inner Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FaStar className="text-[#0a1a0f] text-2xl md:text-3xl" />
              </div>

              {/* Spinning Circular Text */}
              <div className="w-full h-full animate-[spin_15s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path 
                    id="circlePath" 
                    d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" 
                    fill="none" 
                  />
                  <text>
                    <textPath 
                      href="#circlePath" 
                      fill="#0a1a0f" 
                      fontSize="11" 
                      fontWeight="bold" 
                      letterSpacing="0.15em"
                    >
                      AL-BARBARI GOAT FARM • PREMIUM QUALITY •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}