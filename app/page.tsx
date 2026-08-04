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
import WhatsAppContactForm from '@/components/home/contactform';
import AboutUs from '@/components/home/aboutus';
import CardsSection from '@/components/home/4services';
import CommunityReviews from '@/components/home/reviews';
import DeliveryAreasSection from '@/components/home/DeliveryAreasSection';




const SLIDES_DATA = [
  {
    image: "/1.jpeg",
    subheading: "Welcome To Al-Barbari Goat Farming",
    titlePrimary: "Pakistan's Trusted",
    titleSecondary: "Goat Farm",
    description: "Delivering live goats directly to your doorstep in Lahore. We specialize in healthy Bakras for Aqeeqah and Sadqah.",
    features: []
  },
  {
    image: "/2.jpeg",
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
    image: "/3.jpeg",
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
    <section className="relative h-[85vh] min-h-[650px] max-h-[900px] mt-20 flex items-center overflow-hidden font-sans pt-24 pb-20">
      
  {/* Background Images Smooth Slide & Crossfade */}
  {SLIDES_DATA.map((slide, index) => (
    <div 
      key={index}
      className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu will-change-[transform,opacity] transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        currentSlide === index 
          ? 'opacity-100 translate-x-0 scale-100 z-0' 
          : 'opacity-0 translate-x-12 scale-105 -z-10'
      }`}
      style={{ backgroundImage: `url('${slide.image}')` }} 
    />
  ))}
  
  {/* Readability Overlays */}
  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#050d08] via-[#0a1a0f]/80 to-transparent opacity-90 z-10 pointer-events-none" />
  <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />

  {/* Main Content Container */}
  <div className="relative z-20 w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-24">
    <div className="max-w-[800px] flex flex-col">
      
      {/* Animated Text Wrapper */}
      <div className="relative min-h-[420px] sm:min-h-[340px] md:min-h-[360px] w-full">
        {SLIDES_DATA.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={index}
              className={`absolute inset-0 transform-gpu will-change-[transform,opacity] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isActive 
                  ? 'opacity-100 translate-y-0 pointer-events-auto z-20' 
                  : 'opacity-0 translate-y-8 pointer-events-none z-10'
              }`}
            >
              {/* Subheading */}
              <div className="mb-4 md:mb-6 inline-flex flex-col">
                <span className="text-white/90 text-sm md:text-[18px] font-bold tracking-[0.2em] uppercase drop-shadow-md">
                  {slide.subheading}
                </span>
                <div className="h-[3px] w-16 md:w-24 bg-[#ffc222] mt-3 rounded-full" />
              </div>

              {/* Main Heading */}
              <h1 className="text-white font-extrabold leading-[1.1] text-4xl sm:text-6xl md:text-[75px] tracking-tight mb-5 drop-shadow-lg">
                {slide.titlePrimary} <br className="hidden sm:block" />
                <span className="text-[#ffc222] font-serif italic pr-4">
                  {slide.titleSecondary}
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-200 text-base md:text-lg max-w-[600px] mb-6 leading-relaxed drop-shadow-md font-medium">
                {slide.description}
              </p>

              {/* Features List */}
              {slide.features.length > 0 && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-2">
                  {slide.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/95 text-sm md:text-[15px] font-medium">
                      <FaCheckCircle className="text-[#ffc222] mr-3 shrink-0 text-lg shadow-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightning Fast CTA Button Hover */}
      <div className="mt-8 md:mt-10 relative z-30">
        <a 
          href="https://api.whatsapp.com/send/?phone=923280425087&text=Hi%21+I%27d+like+to+learn+more+ABOUT+AL+BARBARI+GOAT+FARMING.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 md:gap-6 bg-[#12823b] backdrop-blur-md border border-[#12823b] rounded-full pl-7 md:pl-9 pr-2 py-2 hover:bg-[#1a5a1f] hover:shadow-[0_8px_25px_rgba(18,130,59,0.4)] transition-all duration-150 ease-out w-fit transform-gpu"
        >
          <span className="text-white font-bold text-[15px] md:text-[17px] tracking-wide">
            Order Online Now
          </span>
          <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#ffc222] flex items-center justify-center transition-transform duration-150 ease-out shrink-0">
            {/* Arrow snaps up instantly on hover */}
            <FaArrowRight className="text-[#0a1a0f] text-sm md:text-lg transition-transform duration-150 ease-out group-hover:-translate-y-[4px] group-hover:translate-x-[4px] group-hover:-rotate-45" />
          </div>
        </a>
      </div>

    </div>
  </div>

  {/* Right Side Carousel Indicators */}
  <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-30">
    {SLIDES_DATA.map((_, idx) => (
      <button 
        key={idx}
        onClick={() => setCurrentSlide(idx)}
        className={`transform-gpu transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full ${
          currentSlide === idx 
            ? 'w-[8px] h-[32px] md:w-[10px] md:h-[40px] bg-[#ffc222] shadow-[0_0_12px_rgba(255,194,34,0.6)]' 
            : 'w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-white/40 hover:bg-white/90 hover:scale-110'
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
    <CardsSection/>
    <AboutUs/>
    <ServicesShowcase />
    <FeaturedBreeds/>
    <SadqahBanner/>
    <PaymentSection/>
    <DeliveryAreasSection/>
    <SupportOrderSection/>
    <CommunityReviews/>
    <GoatBlogSection/>
    {/* <WhatsAppContactForm/> */}

    </>
  );
}