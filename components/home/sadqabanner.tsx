"use client";

import React from 'react';
import Image from 'next/image';

export default function SadqahBanner() {
  // High-quality online image relevant to the Islamic/Sadqah theme
  const bgImageUrl = "https://images.unsplash.com/photo-1550348579-959785e820f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="relative w-full min-h-[600px] flex items-center py-20 font-sans overflow-hidden">
      
      {/* ================= BACKGROUND (Using Next.js Image) ================= */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImageUrl}
          alt="Islamic Mosque Background for Sadqah"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Deep dark-blue/black overlay to make text readable, just like the reference image */}
        <div className="absolute inset-0 bg-[#061118]/85"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ================= LEFT COLUMN: Text Content ================= */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col pt-10 lg:pt-0">
          
          {/* Tracking Subtitle */}
          <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-300 mb-4 block">
            Sacrifice For Allah
          </span>
          
          {/* Main Serif Heading */}
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif text-white leading-[1.15] mb-6 tracking-tight">
            The Virtues of Sadqah <br className="hidden md:block" />
            & Aqeeqah
          </h2>
          
          {/* Description Text */}
          <p className="text-gray-300 text-sm md:text-lg mb-8 max-w-xl leading-relaxed">
            "Sadqah extinguishes sin as water extinguishes fire." Give Sadqah to ward off hardships, purify your wealth, and seek the pleasure of Allah. We provide perfectly healthy, Shariah-compliant Barbari goats for your spiritual offerings, delivered directly to your doorstep in Lahore.
          </p>

          {/* Simple Secondary Call to Action to replace the Audio Player */}
          <div className="flex items-center gap-4 border-l-2 border-[#ffc222] pl-4 mt-2">
            <p className="text-white/90 font-medium text-sm md:text-base">
              Verified 100% Shariah-Compliant Livestock. <br/>
              <span className="text-[#ffc222] font-bold">Available 24/7 for emergency Sadqah.</span>
            </p>
          </div>
          
        </div>

        {/* ================= RIGHT COLUMN: The Green Hanging Banner ================= */}
        <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end relative h-full">
          
          <div className="bg-[#12823b] w-full max-w-[380px] lg:absolute lg:top-[-80px] lg:bottom-[-80px] rounded-b-[180px] rounded-t-none p-10 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden z-20">
            
            {/* Subtle Mandala/Islamic Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }}
            />

            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Heading inside Green Shape */}
              <h3 className="text-3xl md:text-[34px] font-serif text-white mb-10 leading-[1.2]">
                Fulfill your Sadqah<br/>with us today.
              </h3>

              {/* Gold Circular Progress Ring */}
              <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
                {/* SVG Ring */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90 drop-shadow-md">
                  {/* Background Circle */}
                  <circle 
                    cx="56" cy="56" r="50" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.15)" 
                    strokeWidth="6" 
                  />
                  {/* Foreground Gold Circle */}
                  <circle 
                    cx="56" cy="56" r="50" 
                    fill="none" 
                    stroke="#ffc222" 
                    strokeWidth="6" 
                    strokeLinecap="round"
                    strokeDasharray="314" 
                    strokeDashoffset="0" 
                  />
                </svg>
                {/* Percentage Text inside Ring */}
                <span className="text-white font-bold text-xl">
                  100%
                </span>
              </div>

              {/* Number/Stat */}
              <div className="text-5xl font-extrabold text-white mb-2 tracking-tight">
                150+
              </div>
              
              {/* Subtext */}
              <div className="text-white/90 text-sm font-semibold mb-10 tracking-wide">
                Healthy Goats Available
              </div>

              {/* Yellow Donate/Book Button */}
              <button className="bg-[#ffc222] hover:bg-[#e5ae1e] text-[#0a1a0f] font-bold text-[15px] py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book Sadqah Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}