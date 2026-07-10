"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

export default function FarmGuidanceMarquee() {
  // Separated into objects to handle English (LTR) and Urdu (RTL) typography properly
  const marqueeItems = [
    {
      lang: "en",
      text: "Are you a goat farm owner looking to maximize profitability and ensure livestock health? Get expert guidance on modern shed design, optimized feed strategies, breeding best practices, and disease prevention to take your farming business to the next level.",
    },
    {
      lang: "ur",
      text: "کیا آپ گوٹ فارم کے مالک ہیں اور اپنے منافع کو بڑھانا اور جانوروں کی صحت کو یقینی بنانا چاہتے ہیں؟ شیڈ کے جدید ڈیزائن، خوراک کی بہتری، بریڈنگ کے بہترین طریقوں اور بیماریوں سے بچاؤ کے لیے ماہرانہ رہنمائی حاصل کریں اور اپنے فارمنگ بزنس کو بلندیوں تک لے جائیں۔",
    },
  ];

  return (
    <section className="w-full relative flex items-center bg-[#ffc222] border-y-2 border-[#12823b]/20 overflow-hidden group shadow-sm">
      
      {/* 
        1. THE STATIC BADGE (Fixes your <h2>)
        This creates a premium, sticky label on the left side with a slanted edge 
      */}
      <div className="absolute left-0 top-0 bottom-0 z-20 hidden md:flex items-center justify-center bg-[#12823b] pl-8 pr-12 shadow-[10px_0_20px_rgba(0,0,0,0.15)] [clip-path:polygon(0_0,100%_0,92%_100%,0%_100%)]">
        <h2 className="text-white font-sans font-black uppercase tracking-[0.15em] text-sm md:text-base whitespace-nowrap">
          We Help Goat Farm Owners
        </h2>
      </div>

      {/* 
        2. THE MARQUEE TRACK
        Added group-hover:[animation-play-state:paused] so users can stop and read 
      */}
      <div className="flex w-fit animate-farm-marquee items-center py-5 group-hover:[animation-play-state:paused] transition-all duration-300">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 pl-8 whitespace-nowrap">
            <span
              dir={item.lang === "ur" ? "rtl" : "ltr"}
              className={`text-[#0a1a0f] tracking-wide ${
                item.lang === "ur"
                  ? "text-[18px] md:text-[20px] font-medium font-serif" // Slightly larger for Urdu readability
                  : "text-[15px] md:text-[17px] font-bold font-sans"
              }`}
            >
              {item.text}
            </span>
            <FaStar className="text-[#12823b] text-sm shrink-0 drop-shadow-sm" />
          </div>
        ))}
      </div>

      {/* 
        3. GRADIENT FADE OVERLAYS 
        Creates a smooth fade effect on the left and right edges 
      */}
      {/* Left fade (starts after the badge on desktop) */}
      <div className="absolute top-0 bottom-0 left-0 md:left-[300px] w-12 md:w-32 bg-gradient-to-r from-[#ffc222] to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade */}
      <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#ffc222] to-transparent z-10 pointer-events-none"></div>

    </section>
  );
}