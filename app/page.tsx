"use client"; // Required for Next.js state and effects

import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Using react-icons to match your Header style

// High-quality Unsplash images of goat herds
const GOAT_SLIDES = [
  "https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1560888126-5c13ad3f9345?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613846043689-afad9cb6317d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality (changes slide every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === GOAT_SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden font-sans pt-24 pb-20">
      
      {/* Background Images with smooth crossfade */}
      {GOAT_SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100 scale-105 z-0' : 'opacity-0 scale-100 -z-10'
          }`}
          style={{ backgroundImage: `url('${slide}')` }} 
        />
      ))}
      
      {/* Gradient Overlays (Ensures text readability on mobile and desktop) */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0a1a0f]/95 via-[#0a1a0f]/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-24">
        <div className="max-w-[800px]">
          
          {/* Subheading */}
          <div className="mb-6 md:mb-8 inline-flex flex-col animate-[fadeInUp_1s_ease-out]">
            <span className="text-white text-base md:text-[22px] font-semibold tracking-wide">
              Welcome to Al-Barbari Farm
            </span>
            {/* Extended White Underline */}
            <div className="h-[2px] w-full md:w-[115%] bg-white mt-2 md:mt-3" />
          </div>

          {/* Main Heading */}
          <h1 className="text-white font-bold leading-[1.15] text-5xl sm:text-6xl md:text-[85px] tracking-tight mb-10 md:mb-14">
            <div className="flex flex-wrap items-center gap-2 md:gap-4 animate-[fadeInUp_1.2s_ease-out]">
              Agriculture 
              {/* Stylized Yellow '&' */}
              <span className="text-[#ffc222] font-serif italic text-6xl sm:text-7xl md:text-[100px] leading-none translate-y-1">
                &
              </span>
            </div>
            
            <div className="relative inline-flex items-center mt-2 animate-[fadeInUp_1.4s_ease-out]">
              Pure Eco Farming
              
              {/* Stylized Line-Art Leaf SVG */}
              <svg 
                className="absolute -right-[40px] md:-right-[85px] top-1/2 -translate-y-1/2 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 text-white drop-shadow-md hidden sm:block" 
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Top Leaf */}
                <path 
                  d="M15,85 Q20,30 50,15 Q65,45 15,85 Z" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                {/* Right Leaf */}
                <path 
                  d="M15,85 Q65,80 95,55 Q75,40 15,85 Z" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          </h1>

          {/* CTA Button */}
          <div className="animate-[fadeInUp_1.6s_ease-out]">
            <button className="group flex items-center gap-4 md:gap-6 bg-[#1a5a1f] rounded-full pl-6 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 hover:bg-[#124216] transition-all duration-300 shadow-lg w-fit">
              <span className="text-white font-bold text-[15px] md:text-[17px]">Discover More</span>
              <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-[#ffc222] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                <FaArrowRight className="text-[#0a1a0f] text-sm md:text-base" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Right Side Carousel Indicators */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-30">
        {GOAT_SLIDES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-[12px] h-[12px] md:w-[14px] md:h-[14px] rounded-full border-[2.5px] border-white transition-all duration-300 ${
              currentSlide === idx ? 'bg-white scale-110' : 'bg-transparent hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`} 
          />
        ))}
      </div>

    </section>
  );
}