"use client";

import Link from 'next/dist/client/link';
import React from 'react';

// Sample blog data tailored for Al-Barbari Goat Farming
const blogPosts = [
  {
    id: 1,
    day: "10",
    monthYear: "July 2026",
    title: "The Importance of Purebred Barbari Goats",
    excerpt: "Discover why the Barbari breed is highly valued for its exceptional meat quality, rapid growth rate, and perfect adaptability to the local climate of Punjab.",
    image: "/bakray/Nagri-Bakra.png", 
  },
  {
    id: 2,
    day: "05",
    monthYear: "July 2026",
    title: "Preparing Your Sadqah & Aqeeqah With Us",
    excerpt: "A complete guide on how our farm ensures 100% Shariah-compliant preparation, humane slaughtering, and transparent distribution of your religious sacrifices.",
    image: "/bakray/Nuqri-Bakra.png",
  },
  {
    id: 3,
    day: "28",
    monthYear: "June 2026",
    title: "Farm-to-Table: Our Premium Meat Promise",
    excerpt: "Learn about our organic feeding practices, routine medical screenings, and spacious farm environments that guarantee healthy livestock and premium quality meat.",
    image: "/bakray/Boer-Bakra.png",
  }
];

export default function BlogSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white font-sans text-[#0a1a0f] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* ========================================= */}
        {/* 1. SECTION HEADER (Centered)              */}
        {/* ========================================= */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Top Yellow Icon (Mimicking the 3-arch icon from the image) */}
          <div className="text-[#ffc222] mb-4">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L26 8V32H14V8L20 0Z" />
              <path d="M6 10L12 16V32H0V16L6 10Z" />
              <path d="M34 10L40 16V32H28V16L34 10Z" />
            </svg>
          </div>
          
          <span className="text-gray-500 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
            Articles & Updates
          </span>
          
          <h2 className="text-4xl md:text-[54px] font-serif font-bold text-[#0a1a0f] leading-[1.1]">
            Latest News
          </h2>
        </div>

        {/* ========================================= */}
        {/* 2. THREE COLUMN GRID                      */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col group relative">
              
              {/* Image Container with Floating Badge */}
              <div className="relative mb-6">
                
                {/* Floating Date Badge */}
                <div className="absolute -top-5 -left-4 w-[90px] h-[90px] bg-[#ffc222] rounded-full flex flex-col items-center justify-center z-10 shadow-sm transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[28px] font-black text-[#0a1a0f] leading-none mb-0.5">
                    {post.day}
                  </span>
                  <span className="text-[10px] font-bold text-[#0a1a0f] uppercase tracking-wider">
                    {post.monthYear}
                  </span>
                </div>

                {/* Arch-Shaped Image Mask */}
                {/* rounded-tr-[130px] creates the distinct large arch on the top right */}
                <div className="w-full h-[260px] rounded-tr-[130px] rounded-tl-xl rounded-b-xl overflow-hidden bg-gray-100 border border-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-grow pr-4">
                <h3 className="text-2xl font-serif font-bold text-[#0a1a0f] mb-4 leading-snug group-hover:text-[#12823b] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Button pinned to bottom */}
                <div className="mt-auto"> <Link href={'/blog'}>
                  <button className="bg-[#ffc222] text-[#0a1a0f] font-bold text-sm px-9 py-3.5 rounded-full hover:bg-[#12823b] hover:text-white transition-all duration-300">
                    Read More
                  </button></Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}