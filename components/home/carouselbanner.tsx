"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

// 1. Define TypeScript Interface for the Data
interface CarouselItem {
  id: number;
  tag: string;
  title: string;
  desc: string;
  cta: string;
  img: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 0,
    tag: "Daughter's Aqeeqah",
    title: "Make Your Daughter's Day Special",
    desc: "Celebrate your newborn with Sunnah Aqeeqah. We provide pure, healthy, and vaccinated livestock for your family.",
    cta: "Book Aqeeqah Bakra",
    img: "/goats/3.jpeg",
  },
  {
    id: 1,
    tag: "Son's Haqeeqha",
    title: "Special Celebration For Your Son",
    desc: "Perform Haqeeqha with our premium livestock. Celebrate your newborn with a fully Shariah-compliant Sunnah Aqeeqah.",
    cta: "Book Aqeeqah Bakra",
    img: "/goats/4.jpeg",
  },
  {
    id: 2,
    tag: "Charity / Sadqah",
    title: "Give Sadqah, Earn Barakaht",
    desc: "Donate a Bakra today. Ensure your charitable sacrifices reach those in need with full transparency and live video proof.",
    cta: "Book Sadqah Bakra",
    img: "/goats/5.jpeg",
  },
  {
    id: 3,
    tag: "Premium Meat",
    title: "Healthy Bakra For Your Meals",
    desc: "Pure, healthy & vaccinated Bakry for your family. Enjoy farm-fresh, hygienic meat delivered right to your doorstep.",
    cta: "Book Now",
    img: "/goats/6.jpeg",
  },
];

export default function AqeeqahCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // 2. Properly Type Framer Motion Variants
  const textVariants: Variants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const imageVariants: Variants = {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.04, transition: { duration: 0.8, ease: "easeIn" } },
  };

  return (
    <section className="w-full py-20 md:py-28 bg-white font-sans overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        
        {/* ========================================= */}
        {/* SECTION HEADER                            */}
        {/* ========================================= */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-gray-500 font-semibold tracking-[0.15em] text-sm uppercase mb-3">
            Quranic Verses with Translation
          </span>
          <h2 className="text-[40px] md:text-[50px] font-serif text-[#111] leading-tight font-bold">
            Premium Services <br className="hidden md:block" /> with Translation
          </h2>
        </div>

        {/* ========================================= */}
        {/* CAROUSEL LAYOUT                           */}
        {/* ========================================= */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* LEFT COLUMN: Animated Text Cards */}
          <div className="flex flex-col w-full relative overflow-hidden pb-4">
            
            <div className="relative w-full h-[320px] md:h-[350px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute top-0 left-0 w-full md:w-[95%] h-full"
                >
                  <div className="w-full h-full bg-[#FFFDF0] border-[3px] border-blue-600 rounded-l-2xl rounded-r-full p-8 md:p-12 flex flex-col justify-center relative shadow-md">
                    
                    <h3 className="text-[28px] font-bold text-[#00A355] mb-4 leading-snug pr-8 md:pr-12 drop-shadow-sm">
                      {carouselData[currentIndex].title}
                    </h3>
                    
                    <p className="text-gray-800 font-medium text-[17px] leading-relaxed max-w-[80%] mb-12">
                      {carouselData[currentIndex].desc}
                    </p>

                    <Link 
                      href="/contact"
                      className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-blue-600 text-white px-7 py-3 rounded-full font-bold text-sm shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 z-30"
                    >
                      {carouselData[currentIndex].cta}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-3 mt-10 z-10 relative md:justify-start md:pl-10">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? "w-10 bg-blue-600" 
                      : "w-8 bg-gray-200 hover:bg-blue-600/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Arched Animated Image */}
          <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center mt-6 lg:mt-0">
            
            <div className="absolute inset-0 bg-gray-50 rounded-t-full rounded-b-3xl transform scale-[0.98] origin-bottom -z-10 shadow-inner"></div>

            <div className="relative w-full h-full z-10 overflow-hidden rounded-t-full rounded-b-3xl border-[6px] border-white shadow-xl bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={carouselData[currentIndex].img}
                  alt={carouselData[currentIndex].title}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}