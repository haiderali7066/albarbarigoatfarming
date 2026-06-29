"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Leaf, Baby, HandHeart, Award } from "lucide-react";

const services = [
  {
    title: "Aqiqa",
    subtitle: "( Sunnah for Child )",
    image:
      "https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?q=80&w=1074&auto=format&fit=crop",
    badge: "عقيقة",
  },
  {
    title: "Sadqa & Charity",
    subtitle: "( Giving Alms )",
    image:
      "https://images.unsplash.com/photo-1529864539815-de90220aedfb?q=80&w=1469&auto=format&fit=crop",
    badge: "صدقة",
  },
  {
    title: "Eid Qurbani",
    subtitle: "( Annual Sacrifice )",
    image:
      "https://images.unsplash.com/photo-1622837699015-9a4cb8b7a94b?q=80&w=1470&auto=format&fit=crop",
    badge: "أضحية",
  },
  {
    title: "Albarbari Selection",
    subtitle: "( Premium Stock )",
    image:
      "https://images.unsplash.com/photo-1557431177-d277c24390e5?q=80&w=687&auto=format&fit=crop",
    badge: "أفضل",
  },
  {
    title: "Delivery & Slaughter",
    subtitle: "( Complete Service )",
    image:
      "https://images.unsplash.com/photo-1604076150017-48b528308aa3?q=80&w=735&auto=format&fit=crop",
    badge: "توصيل",
  },
];

const stats = [
  { count: "1000+", label: "Active Herd Count", icon: Leaf },
  { count: "150+", label: "Aqiqa Completed", icon: Baby },
  { count: "5k+", label: "Sadqa Served", icon: HandHeart },
  { count: "12+", label: "Master Shepherds", icon: Award },
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
  return (
    <section className="pt-16 md:pt-24 bg-[#fafafa] font-sans flex flex-col relative overflow-hidden">
      
      {/* Seamless Marquee Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
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
              className="relative group flex flex-col h-full bg-white rounded-t-[8rem] md:rounded-t-[10rem] rounded-bl-[1.5rem] rounded-br-[4rem] shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(18,130,59,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Floating Arabic Badge (Positioned safely inside to avoid mobile clipping) */}
              <div className="absolute top-4 right-4 z-20 w-[55px] h-[55px] md:w-[65px] md:h-[65px] bg-[#ffc222] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500 border-[3px] border-white">
                <span className="text-[#0a1a0f] font-bold text-lg md:text-xl font-serif">
                  {service.badge}
                </span>
              </div>

              {/* Image Container */}
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
                <h3 className="text-xl font-bold text-[#0a1a0f] mb-1.5 group-hover:text-[#12823b] transition-colors duration-300">
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
                className="bg-[#12823b] py-10 md:py-14 px-4 md:px-6 flex flex-col items-center text-center group transition-colors hover:bg-[#0f6c30] relative overflow-hidden"
              >
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-[#ffc222]/20 transition-all duration-500 z-10">
                  <Icon size={28} strokeWidth={1.5} className="text-[#ffc222]" />
                </div>

                <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-1.5 md:mb-2 tracking-tight group-hover:text-[#ffc222] transition-colors z-10">
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

      {/* Marquee Strip (Moved to Bottom & perfectly horizontal) */}
      <div className="w-full bg-[#12823b] py-3 md:py-4 border-t-4 border-[#ffc222] shadow-[0_-5px_20px_rgba(18,130,59,0.2)]">
        <div className="animate-strip-seamless w-max">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center tracking-wide text-[#ffc222]">
              <span className="mx-4 md:mx-6 text-lg md:text-2xl font-serif font-bold leading-none" dir="rtl">
                رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ
              </span>
              <span className="mx-2 md:mx-3 text-white/40 text-xl md:text-2xl leading-none">•</span>
              <span className="mx-4 md:mx-6 text-sm md:text-lg font-bold text-white tracking-wide leading-none pt-1" dir="rtl">
                "اے میرے رب! بے شک تو جو بھی بھلائی میری طرف نازل فرمائے، میں اس کا محتاج ہوں۔"
              </span>
              <span className="mx-2 md:mx-3 text-white/40 text-xl md:text-2xl leading-none">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}