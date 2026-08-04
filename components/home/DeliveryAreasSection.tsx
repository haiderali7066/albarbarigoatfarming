"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaMapMarkerAlt } from "react-icons/fa";

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
  "Askari (1-11)",
];

// Duplicate items for seamless looping
const marqueeItems = [...deliveryAreas, ...deliveryAreas];

export default function DeliveryMarqueeSection() {
  return (
    <section className="relative overflow-hidden border-y border-gray-100 bg-white py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#12823b] opacity-5 blur-[180px]" />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-14 max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#12823b]/20 bg-[#f8faf9] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#12823b] shadow-sm"
        >
          <FaTruck
            aria-hidden="true"
            className="text-[#ffc222]"
          />
          Live Delivery Coverage
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#0a1a0f] md:text-4xl lg:text-5xl"
        >
          Active Delivery Zones Across{" "}
          <span className="text-[#12823b]">Lahore</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-2xl text-gray-600"
        >
          Fast, fresh, and reliable deliveries to all major residential areas
          across Lahore.
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent md:w-24 lg:w-32" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent md:w-24 lg:w-32" />

        <div className="marquee py-3">
          {marqueeItems.map((area, index) => (
            <div
              key={`${area}-${index}`}
              className="group mx-3 flex flex-none cursor-default select-none items-center gap-3 rounded-full border border-green-700/20 bg-[#12823b] px-6 py-4 text-white shadow-lg transition-colors duration-300 hover:bg-[#0f6f32]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-[#ffc222] transition-colors duration-300 group-hover:bg-[#ffc222] group-hover:text-[#12823b]">
                <FaMapMarkerAlt
                  aria-hidden="true"
                  size={15}
                />
              </span>

              <span className="whitespace-nowrap text-sm font-semibold tracking-wide md:text-base">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}