"use client"; // Required for Next.js state and effects

import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

import ServicesShowcase from '@/components/home/ourservices';
import FeaturedBreeds from '@/components/home/produts';
import SadqahBanner from '@/components/home/sadqabanner';
import PaymentSection from '@/components/home/paymentsection';
import SupportOrderSection from '@/components/home/Supportform';
import GoatBlogSection from '@/components/home/blogsection';



const SLIDES_DATA = [
  {
    image: "1.jpeg",
    subheading: "Welcome To Al-Barbari Goat Farming",
    titlePrimary: "Pakistan's Trusted",
    titleSecondary: "Goat Farm",
    description: "Delivering live goats directly to your doorstep in Lahore. We specialize in healthy Bakras for Aqeeqah and Sadqah.",
    features: []
  },
  {
    image: "2.jpeg",
    subheading: "High Quality Breeds",
    titlePrimary: "Premium Meat",
    titleSecondary: "& Milk",
    description: "We provide premium goats suitable for both meat and milk production.",
    features: [
      "Healthy & disease-free breeds",
      "Best for meat quality and milk yield",
      "Available in Male & Female"
    ]
  },
  {
    image: "3.jpeg",
    subheading: "100% Certified Livestock",
    titlePrimary: "Safe & Healthy",
    titleSecondary: "Goats",
    description: "Only fully vaccinated and medically examined goats are available at our farm. Your trust is our priority.",
    features: []
  }
];



export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES_DATA.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  // The moving text items featuring your farm services
  const marqueeItems = [
    "100% Certified Barbari Breeds",
    "Free Doorstep Delivery in Lahore",
    "Healthy Bakra for Aqeeqah & Sadqah",
    "Fully Vaccinated & Medically Examined Livestock",
    "Premium Quality Meat & High Milk Yield",
    "Pakistan's Trusted Goat Farm",
  ];
  return ( <>
    <section className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden font-sans pt-24 pb-20">
      
      {/* Background Images Crossfade */}
      {SLIDES_DATA.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100 scale-105 z-0' : 'opacity-0 scale-100 -z-10'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }} 
        />
      ))}
      
      {/* Readability Overlays */}
      <div className="absolute opacity-60 inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0a1a0f]/95 via-[#0a1a0f]/80 to-transparent z-10" />
      {/* <div className="absolute inset-0 bg-black/20 z-10" /> */}

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-24">
        <div className="max-w-[800px] flex flex-col">
          
          {/* Animated Text Wrapper: Fixed heights stop layout shifting entirely */}
          <div className="relative min-h-[380px] sm:min-h-[320px] md:min-h-[340px] w-full">
            {SLIDES_DATA.map((slide, index) => {
              const isActive = currentSlide === index;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    isActive 
                      ? 'opacity-100 translate-y-0 pointer-events-auto z-20' 
                      : 'opacity-0 translate-y-6 pointer-events-none z-10'
                  }`}
                >
                  {/* Subheading */}
                  <div className="mb-4 md:mb-6 inline-flex flex-col">
                    <span className="text-white text-base md:text-[20px] font-semibold tracking-wide uppercase">
                      {slide.subheading}
                    </span>
                    <div className="h-[2px] w-24 bg-[#ffc222] mt-2" />
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-white font-bold leading-[1.15] text-4xl sm:text-6xl md:text-[75px] tracking-tight mb-4">
                    {slide.titlePrimary} <br/>
                    <span className="text-[#ffc222] font-serif italic pr-4">
                      {slide.titleSecondary}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-gray-300 text-base md:text-lg max-w-[600px] mb-4 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Features List */}
                  {slide.features.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {slide.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white text-sm md:text-base">
                          <FaCheckCircle className="text-[#ffc222] mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Completely Static CTA Button - Unaffected by transitions */}
          <div className="mt-6 md:mt-8">
            <button className="group flex items-center gap-4 md:gap-6 bg-[#1a5a1f] rounded-full pl-6 md:pl-8 pr-2 py-2 hover:bg-[#124216] transition-all duration-300 shadow-xl w-fit">
              <span className="text-white font-bold text-[15px] md:text-[17px]">Order Online Now</span>
              <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-[#ffc222] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0">
                <FaArrowRight className="text-[#0a1a0f] text-sm md:text-base" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Right Side Carousel Indicators */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-30">
        {SLIDES_DATA.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-[12px] h-[12px] md:w-[14px] md:h-[14px] rounded-full border-[2.5px] transition-all duration-300 ${
              currentSlide === idx 
                ? 'bg-[#ffc222] border-[#ffc222] scale-125 shadow-md' 
                : 'bg-transparent border-white/60 hover:border-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`} 
          />
        ))}
      </div>

    </section>

    <div className="relative w-full bg-[#ffc222] py-4 md:py-5 overflow-hidden select-none border-y-2 border-[#0a1a0f]/10 shadow-md z-30">
      
      {/* Injecting the loop animation directly so it works instantly without changing global CSS configs */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLoop {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-farm-marquee {
          display: flex;
          width: max-content;
          animation: marqueeLoop 30s linear infinite;
        }
        .animate-farm-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Main Container */}
      <div className="animate-farm-marquee flex items-center gap-12 pr-12">
        {/* We loop through the array twice to ensure a perfectly seamless infinite scroll glitch-free */}
        {[...marqueeItems, ...marqueeItems].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 whitespace-nowrap">
            <span className="text-[#0a1a0f] font-sans font-extrabold text-sm md:text-base tracking-wider uppercase">
              {text}
            </span>
            <FaStar className="text-[#1a5a1f] text-xs md:text-sm shrink-0" />
          </div>
        ))}
      </div>
      
    </div>
    <ServicesShowcase />
    <FeaturedBreeds/>
    <SadqahBanner/>
    <PaymentSection/>
    <SupportOrderSection/>
    <GoatBlogSection/>

    </>
  );
}