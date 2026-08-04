"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Leaf, Baby, HandHeart, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Aqeeqah",
    subtitle: "( Sunnah for Child )",
    image: "/bakray/Nuqri-Bakra.png",
    badge: "عقيقة",
  },
  {
    title: "Sadqa & Charity",
    subtitle: "( Giving Alms )",
    image: "/bakray/Nagri-Bakra.png",
    badge: "صدقة",
  },
  {
    title: "Eid Qurbani",
    subtitle: "( Annual Sacrifice )",
    image: "/bakray/Boer-Bakra.png",
    badge: "أضحية",
  },
  {
    title: "Albarbari Selection",
    subtitle: "( Premium Stock )",
    image: "/bakray/Nuqri-Bakra.png",
    badge: "أفضل",
  },
  {
    title: "Delivery & Slaughter",
    subtitle: "( Complete Service )",
    image: "/bakray/Nagri-Bakra.png",
    badge: "توصيل",
  },
];

const stats = [
  { count: "1000+", label: "Active Herd Count", icon: Leaf },
  { count: "1500+", label: "Aqiqa Completed", icon: Baby },
  { count: "4000+", label: "Sadqa Served", icon: HandHeart },
  { count: "22+", label: "Master Shepherds", icon: Award },
];

// Banner slides updated to specific Aqeeqah text
const aqeeqahBannerSlides = [
  {
    id: 1,
    topText: "ONLY LAHORE",
    title: "MAKE YOUR DAUGHTER'S DAY SPECIAL",
    subtitle: "BOOK AQEEQAH BAKRA NOW",
    msg: "I want to Book an Aqeeqah Bakra for my Daughter. (Lahore)",
    img1: "https://images.saymedia-content.com/.image/t_share/MTc2MjkyNTUzNzAyOTA5MTAx/the-perks-of-having-a-daughter.jpg",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNf2QMLoXgZE_X7lwivuOoMumMOJEKDcMXrmJNBEHOHA&s"
  },
  {
    id: 2,
    topText: "ONLY LAHORE",
    title: "MAKE YOUR DAUGHTER'S DAY SPECIAL",
    subtitle: "BOOK AQEEQAH BAKRA NOW",
    msg: "I want to Book an Aqeeqah Bakra for my Daughter. (Lahore)",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULX_mtFUY-HGwOE5W6By9C2uNa_qVls6hXy2jdVGn4g&s=10",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGqJBcDG1ZIXuEq7CDqn9EUv_KXOOdHrAad95jB6-mHjgYQGcpKQFe_Bz&s=10"
  }
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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cycle through banner images to keep the dynamic feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aqeeqahBannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleStatPointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mx", `${x}px`);
    e.currentTarget.style.setProperty("--my", `${y}px`);
  };

  return (
    <section className="pt-16 md:pt-24 bg-[#fafafa] font-sans flex flex-col relative overflow-hidden">
      
      {/* Expanded Container Width */}
      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow">
        
        {/* ========================================================= */}
        {/* TOP SECTION: Left Banner (Narrower) + Right Services Cards */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start mb-16 md:mb-24">
          
          {/* --- LEFT SIDE: NARROW BANNER --- */}
          <div className="w-full lg:w-[320px] xl:w-[360px] shrink-0 relative">
            <div className="lg:sticky top-28">
              
              <div className="bg-white rounded-3xl shadow-[0_25px_60px_rgba(18,130,59,0.15)] overflow-hidden border-2 border-[#12823b]/30 flex flex-col relative h-[800px]">
                
                {/* Flickering / Pulsing Vibrant Green Background */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[85%] z-0"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 88%)" }}
                  animate={{
                    backgroundColor: ["#12823b", "#169841", "#15803d", "#12823b"]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                {/* Top Typography Section */}
                <div className="relative z-10 pt-12 px-5 flex flex-col items-center text-center">
                  <span className="text-[#ffc222] font-bold text-sm tracking-[0.2em] uppercase mb-3 bg-black/20 px-4 py-1 rounded-full">
                    {aqeeqahBannerSlides[0].topText}
                  </span>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <h3 className="text-2xl xl:text-3xl font-black text-white uppercase tracking-wide leading-tight mb-4 drop-shadow-md">
                        {aqeeqahBannerSlides[currentSlide].title}
                      </h3>
                      <div className="bg-white/10 border-t border-b border-[#ffc222]/60 py-2 inline-block px-4 mb-2 rounded-md backdrop-blur-sm">
                        <span className="text-[#ffc222] font-black text-sm xl:text-base tracking-widest uppercase">
                          "{aqeeqahBannerSlides[currentSlide].subtitle}"
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Overlapping Polaroid Images (Scaled down slightly for narrower width) */}
                <div className="relative z-10 flex-grow w-full mt-4 pointer-events-none">
                   <div className="relative w-full h-full">
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`main-${currentSlide}`}
                          initial={{ opacity: 0, x: 20, rotate: 6 }}
                          animate={{ opacity: 1, x: 0, rotate: 4 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-4 right-4 xl:right-6 w-[180px] h-[210px] bg-white p-2.5 pb-8 shadow-2xl rounded-sm z-10 border border-gray-200"
                        >
                          <img 
                            src={aqeeqahBannerSlides[currentSlide].img1} 
                            alt="Livestock" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>

                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`sub-${currentSlide}`}
                          initial={{ opacity: 0, x: -20, rotate: -6 }}
                          animate={{ opacity: 1, x: 0, rotate: -4 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="absolute top-[130px] left-4 xl:left-6 w-[150px] h-[150px] bg-white p-2.5 pb-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-sm z-20 border border-gray-200"
                        >
                          <img 
                            src={aqeeqahBannerSlides[currentSlide].img2} 
                            alt="Goat" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                   </div>
                </div>

                {/* Bottom Button Area */}
                <div className="relative z-10 pb-10 px-6 flex justify-center items-end bg-transparent h-[130px]">
                  <a
                    href={`https://wa.me/923280425087?text=${encodeURIComponent(aqeeqahBannerSlides[currentSlide].msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#ffc222] text-[#0a1a0f] font-black text-lg px-2 py-4 rounded-full shadow-[0_10px_35px_rgba(255,194,34,0.5)] flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 border border-yellow-300 uppercase tracking-widest"
                  >
                    <FaWhatsapp size={24} className="text-[#12823b]" />
                    <span>Book Now</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: SERVICES SHOWCASE --- */}
          <div className="flex-1 w-full">
            
            {/* Section Header */}
            <div className="text-center lg:text-left mb-10 flex flex-col items-center lg:items-start">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="mb-4 text-[#ffc222] bg-[#12823b] p-3 rounded-2xl shadow-lg inline-block"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5v17M7 5v17M2 22h20M12 2l-5 5h10z" />
                </svg>
              </motion.div>

              <p className="text-[10px] md:text-xs tracking-[0.25em] text-[#12823b] uppercase font-bold mb-3">
                Islamic Animal Sacrifice
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0a1a0f] tracking-tight font-bold">
                Albarbari Goat Farm Services
              </h2>
              <div className="w-16 md:w-24 h-1.5 bg-[#ffc222] mt-5 md:mt-6 rounded-full"></div>
            </div>

            {/* Services Grid (Automatically fills the remaining space) */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpItem}
                  className="relative group flex flex-col h-full bg-white hover:bg-[#12823b] rounded-t-[8rem] md:rounded-t-[10rem] rounded-bl-[1.5rem] rounded-br-[4rem] shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(18,130,59,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent"
                >
                  <div className="absolute top-4 right-4 z-20 w-[55px] h-[55px] md:w-[65px] md:h-[65px] bg-[#ffc222] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500 border-[3px] border-white">
                    <span className="text-[#0a1a0f] font-bold text-lg md:text-xl font-serif">
                      {service.badge}
                    </span>
                  </div>

                  <div className="relative w-full aspect-[4/5] rounded-t-[8rem] md:rounded-t-[10rem] overflow-hidden z-10 bg-gray-100">
                    <div className="absolute inset-0 bg-[#12823b]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5 md:p-6 pt-5 flex-grow flex flex-col items-center text-center relative z-10">
                    <h3 className="text-xl font-bold text-[#0a1a0f] mb-1.5 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-[13px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-[#ffc222] transition-colors duration-300">
                      {service.subtitle}
                    </p>
                    
                    <div className="w-0 h-1 bg-[#ffc222] mt-4 rounded-full group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM SECTION: Full Width Stats */}
        {/* ========================================================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#ffc222] gap-px rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative mb-12 md:mb-20 w-full"
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
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

                <div
                  className="absolute pointer-events-none z-0"
                  style={{ left: "var(--mx, 50%)", top: "var(--my, 50%)", transform: "translate(-50%, -50%)" }}
                >
                  <div className="w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#0f6c30] scale-0 group-hover:scale-100 transition-transform duration-700 ease-out" />
                </div>

                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-[#ffc222]/20 transition-all duration-500 z-10">
                  <Icon size={28} strokeWidth={1.5} className="text-[#ffc222]" />
                </div>

                <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-1.5 md:mb-2 tracking-tight transition-colors z-10">
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