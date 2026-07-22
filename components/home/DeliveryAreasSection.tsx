"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaMapMarkerAlt } from 'react-icons/fa';

export default function DeliveryMarqueeSection() {
  const deliveryAreas = [
    "DHA Lahore (Phases 1-9)",
    "Lahore Cantt",
    "Gulberg",
    "Garden Town",
    "Model Town",
    "Faisal Town",
    "Johar Town",
    "Wapda Town",
    "Bahria Town",
    "Lake City",
    "Allama Iqbal Town",
    "Samanabad",
    "Cavalry Ground",
    "Valencia Town",
    "Askari (1-11)"
  ];

  return (
    <section className="bg-white py-20 font-sans relative overflow-hidden border-y border-gray-100">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#12823b] rounded-full blur-[180px] opacity-5 pointer-events-none"></div>

      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-6 mb-12 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#f8faf9] border border-[#12823b]/20 text-[#12823b] font-bold tracking-widest uppercase text-xs px-5 py-2.5 rounded-full mb-4 shadow-sm"
        >
          <FaTruck className="text-[#ffc222]" /> Live Delivery Coverage
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0a1a0f]"
        >
          Active Delivery Zones Across <span className="text-[#12823b]">Lahore</span>
        </motion.h3>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap py-3">
        
        {/* Gradient Fade Edges for Seamless UI Transition */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <motion.div
          className="flex gap-6 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {/* Duplicated array to create a seamless infinite loop */}
          {[...deliveryAreas, ...deliveryAreas].map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 bg-[#12823b] border border-green-700/40 text-white px-7 py-4 rounded-full shadow-[0_8px_30px_rgba(18,130,59,0.15)] shrink-0 hover:bg-[#0f6f32] hover:scale-105 transition-all duration-300 cursor-default group"
            >
              <span className="w-9 h-9 rounded-full bg-white/15 group-hover:bg-[#ffc222] group-hover:text-[#0a1a0f] flex items-center justify-center text-[#ffc222] transition-colors shadow-sm">
                <FaMapMarkerAlt size={15} />
              </span>
              <span className="font-bold text-base tracking-wide">
                {area}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}