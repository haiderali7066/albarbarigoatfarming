"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Baby, HandHeart, Award } from "lucide-react";

const services = [
  {
    title: "Aqiqa",
    subtitle: "( Sunnah for Child )",
    image: "https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "عقيقة",
  },
  {
    title: "Sadqa & Charity",
    subtitle: "( Giving Alms )",
    image: "https://images.unsplash.com/photo-1529864539815-de90220aedfb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "صدقة",
  },
  {
    title: "Eid Qurbani",
    subtitle: "( Annual Sacrifice )",
    image: "https://images.unsplash.com/photo-1622837699015-9a4cb8b7a94b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "أضحية",
  },
  {
    title: "Albarbari Selection",
    subtitle: "( Premium Stock )",
    image: "https://images.unsplash.com/photo-1557431177-d277c24390e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "أفضل",
  },
  {
    title: "Delivery & Slaughter",
    subtitle: "( Complete Service )",
    image: "https://images.unsplash.com/photo-1604076150017-48b528308aa3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "توصيل",
  },
];

const stats = [
  { count: "1000+", label: "Active Herd Count", icon: Leaf },
  { count: "150+", label: "Aqiqa Completed", icon: Baby },
  { count: "5k+", label: "Sadqa Served", icon: HandHeart },
  { count: "12+", label: "Master Shepherds", icon: Award },
];

// --- Animation Config ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Minimalist Top Icon */}
          <div className="mb-4 text-[#fbbc04]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5v17M7 5v17M2 22h20M12 2l-5 5h10z" />
            </svg>
          </div>
          <p className="text-[11px] md:text-xs tracking-[0.25em] text-gray-500 uppercase font-semibold mb-3">
            Islamic Animal Sacrifice
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">
            Albarbari Goat Farm Services
          </h2>
        </div>

        {/* Services 5-Column Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-24"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpItem}
              className="relative group flex flex-col h-full"
            >
              {/* Yellow Floating Badge */}
              <div className="absolute -top-3 -left-3 z-20 w-[60px] h-[60px] bg-[#fbbc04] rounded-full flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-gray-900 font-bold text-lg">{service.badge}</span>
              </div>

              {/* Dome Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-t-[10rem] overflow-hidden z-10">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Card (Left Aligned, Specific Border Radius) */}
              <div className="bg-white border-x border-b border-gray-100 p-6 pt-5 rounded-bl-[1.5rem] rounded-br-[4rem] flex-grow flex flex-col shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] group-hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300 relative -mt-2 z-0">
                <h3 className="text-[1.35rem] font-serif text-gray-900 mb-1 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[13px] font-medium text-[#2eb85c] tracking-wide">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scalloped Statistics Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          // bg-white with gap-[2px] creates the clean divider lines between the green blocks
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-white rounded-b-[4rem] overflow-hidden shadow-xl"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                variants={fadeUpItem}
                className="bg-[#0f8a45] pt-14 pb-16 px-6 flex flex-col items-center text-center rounded-b-[5rem] relative overflow-hidden group hover:bg-[#0d7a3d] transition-colors duration-300"
              >
                <h4 className="text-5xl md:text-6xl font-bold text-[#fbbc04] mb-3 tracking-tight">
                  {stat.count}
                </h4>
                <p className="text-white text-[15px] font-medium mb-8">
                  {stat.label}
                </p>
                <div className="mt-auto text-white/80 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                  <Icon size={34} strokeWidth={1.5} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}