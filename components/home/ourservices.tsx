"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Leaf, Baby, HandHeart, Award } from "lucide-react";

const services = [
  {
    title: "Aqeeqah",
    subtitle: "( Sunnah for Child )",
    image:
      "/bakray/Nuqri-Bakra.png",
    badge: "عقيقة",
  },
  {
    title: "Sadqa & Charity",
    subtitle: "( Giving Alms )",
    image:
      "/bakray/Nagri-Bakra.png",
    badge: "صدقة",
  },
  {
    title: "Eid Qurbani",
    subtitle: "( Annual Sacrifice )",
    image:
      "/bakray/Boer-Bakra.png",
    badge: "أضحية",
  },
  {
    title: "Albarbari Selection",
    subtitle: "( Premium Stock )",
    image:
      "/bakray/Nuqri-Bakra.png",
    badge: "أفضل",
  },
  {
    title: "Delivery & Slaughter",
    subtitle: "( Complete Service )",
    image:
      "/bakray/Nagri-Bakra.png",
    badge: "توصيل",
  },
];

const stats = [
  { count: "1000+", label: "Active Herd Count", icon: Leaf },
  { count: "1500+", label: "Aqiqa Completed", icon: Baby },
  { count: "4000+", label: "Sadqa Served", icon: HandHeart },
  { count: "22+", label: "Master Shepherds", icon: Award },
];

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesShowcase() {
  // Tracks the cursor position over a stat card and writes it to CSS vars,
  // so the fill can radiate from wherever the pointer actually is.
  const handleStatPointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mx", `${x}px`);
    e.currentTarget.style.setProperty("--my", `${y}px`);
  };

  return (
    <section className="pt-16 md:pt-24 bg-[#fafafa] font-sans flex flex-col relative overflow-hidden">
      
      {/* Fonts + Seamless Marquee Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400..700&display=swap');

        /* Nastaliq applies ONLY to Urdu text (the translated dua line below).
           The Arabic line keeps its own serif font. */
        .font-nastaliq {
          font-family: "Noto Nastaliq Urdu", serif;
          font-optical-sizing: auto;
          font-weight: 700;
          font-style: normal;
        }

        @keyframes scrollStrip {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-strip-seamless {
          display: flex;
          white-space: nowrap;
          animation: scrollStrip 40s linear infinite;
        }
        .animate-strip-seamless:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-[#ffc222] bg-[#12823b] p-3 md:p-3.5 rounded-2xl shadow-lg"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-8 md:h-8">
              <path d="M12 2v20M17 5v17M7 5v17M2 22h20M12 2l-5 5h10z" />
            </svg>
          </motion.div>

          <p className="text-[10px] md:text-xs tracking-[0.25em] text-[#12823b] uppercase font-bold mb-3">
            Islamic Animal Sacrifice
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0a1a0f] tracking-tight font-bold px-4">
            Albarbari Goat Farm Services
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-[#ffc222] mt-5 md:mt-6 rounded-full"></div>
        </div>

        {/* Services Grid (Responsive adjustments for Mobile & Tablet) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 max-w-md sm:max-w-none mx-auto mb-16 md:mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              className="relative group flex flex-col h-full bg-white hover:bg-[#12823b] rounded-t-[8rem] md:rounded-t-[10rem] rounded-bl-[1.5rem] rounded-br-[4rem] shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(18,130,59,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent"
            >
              {/* Floating Arabic Badge (Positioned safely inside to avoid mobile clipping) */}
              <div className="absolute top-4 right-4 z-20 w-[55px] h-[55px] md:w-[65px] md:h-[65px] bg-[#ffc222] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500 border-[3px] border-white">
                <span className="text-[#0a1a0f] font-bold text-lg md:text-xl font-serif">
                  {service.badge}
                </span>
              </div>

              {/* Image Container — stays untouched by the green hover fill */}
              <div className="relative w-full aspect-[4/5] rounded-t-[8rem] md:rounded-t-[10rem] overflow-hidden z-10 bg-gray-100">
                <div className="absolute inset-0 bg-[#12823b]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, (max-width:1280px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="p-5 md:p-6 pt-5 flex-grow flex flex-col items-center text-center relative z-10">
                <h3 className="text-xl font-bold text-[#0a1a0f] mb-1.5 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs md:text-[13px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-[#ffc222] transition-colors duration-300">
                  {service.subtitle}
                </p>
                
                {/* Decorative Bottom Line */}
                <div className="w-0 h-1 bg-[#ffc222] mt-4 rounded-full group-hover:w-12 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section (Using gap trick for perfect responsive borders) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#ffc222] gap-px rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative mb-12 md:mb-20 mx-auto max-w-sm sm:max-w-none"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUpItem}
                onMouseEnter={handleStatPointer}
                onMouseMove={handleStatPointer}
                className="bg-[#12823b] py-10 md:py-14 px-4 md:px-6 flex flex-col items-center text-center group relative overflow-hidden"
              >
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

                {/* Cursor-following fill — grows from wherever the pointer entered/moved */}
                <div
                  className="absolute pointer-events-none z-0"
                  style={{ left: "var(--mx, 50%)", top: "var(--my, 50%)", transform: "translate(-50%, -50%)" }}
                >
                  <div className="w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#0f6c30] scale-0 group-hover:scale-100 transition-transform duration-700 ease-out" />
                </div>

                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-[#ffc222]/20 transition-all duration-500 z-10">
                  <Icon size={28} strokeWidth={1.5} className="text-[#ffc222]" />
                </div>

                <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-1.5 md:mb-2 tracking-tight  transition-colors z-10">
                  {stat.count}
                </h4>

                <p className="text-[#ffc222] text-xs md:text-[13px] uppercase tracking-[0.1em] md:tracking-[0.15em] font-bold z-10">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      
    </section>
  );
}