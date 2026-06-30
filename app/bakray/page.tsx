"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaCheckCircle, 
  FaArrowRight, 
  FaLeaf, 
  FaSyringe, 
  FaTruck, 
  FaAward 
} from 'react-icons/fa';

export default function BakrayPage() {
  const WHATSAPP_NUMBER = "923280425087";

  // Full list of goats with slugs for the Learn More routing
  const goats = [
    { id: 1, name: "Barbari Bakra", slug: "barbari-bakra", image: "/goats/1.jpeg" },
    { id: 2, name: "Beetal Bakra", slug: "beetal-bakra", image: "/goats/2.jpeg" },
    { id: 3, name: "Boer Bakra", slug: "boer-bakra", image: "/goats/3.jpeg" },
    { id: 4, name: "Rajanpuri Bakra", slug: "rajanpuri-bakra", image: "/goats/4.jpeg" },
    { id: 5, name: "Makhi Cheeni Bakra", slug: "makhi-cheeni-bakra", image: "/goats/5.jpeg" },
    { id: 6, name: "Nuqri Bakra", slug: "nuqri-bakra", image: "/goats/6.jpeg" },
    { id: 7, name: "Teddy Bakra", slug: "teddy-bakra", image: "/goats/1.jpeg" }, 
    { id: 8, name: "Nagri Bakra", slug: "nagri-bakra", image: "/goats/2.jpeg" },
    { id: 9, name: "Desi Bakra", slug: "desi-bakra", image: "/goats/3.jpeg" },
    { id: 10, name: "Gulabi Bakra", slug: "gulabi-bakra", image: "/goats/4.jpeg" },
    { id: 11, name: "Rahim Yar Khan Ablak", slug: "rahim-yar-khan-ablak", image: "/goats/5.jpeg" },
  ];

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="bg-[#fafafa] min-h-screen font-sans overflow-hidden">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      <section className="relative bg-[#0a1a0f] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b-8 border-[#12823b]">
        {/* Subtle Background Pattern / Overlay */}
        <div className="absolute inset-0 bg-[#12823b]/10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.05 }}></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#12823b] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-[#ffc222] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <FaAward className="text-sm" />
            100% Pure Bloodline
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 font-serif leading-tight"
          >
            Our Premium <span className="text-[#12823b] drop-shadow-[0_2px_2px_rgba(255,194,34,0.5)]">Bakray</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base lg:text-lg font-medium mb-10 leading-relaxed"
          >
            Browse our extensive collection of healthy, well-fed, and premium breed goats. Perfect for Aqeeqah, Sadqah, and Eid Qurbani. Book yours today.
          </motion.p>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. BAKRAY GRID SHOWCASE                   */}
      {/* ========================================= */}
      <section className="py-16 md:py-24 relative z-20 -mt-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-md sm:max-w-none mx-auto"
          >
            {goats.map((goat) => {
              // Prefilled WhatsApp Message
              const waMessage = encodeURIComponent(`Hello Al-Barbari Farm! I am interested in booking the "${goat.name}". Please provide me with the price and details.`);
              const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

              return (
                <motion.div 
                  variants={itemVariants}
                  key={goat.id} 
                  className="group flex flex-col bg-white rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(18,130,59,0.15)] transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <img 
                      src={goat.image} 
                      alt={goat.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow bg-white relative z-20">
                    
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#0a1a0f] group-hover:text-[#12823b] transition-colors duration-300 leading-tight font-serif">
                        {goat.name}
                      </h3>
                      <FaCheckCircle className="text-[#12823b] text-lg shrink-0 mt-1" title="Verified Breed" />
                    </div>

                    <p className="text-[13px] text-gray-500 font-medium mb-6 line-clamp-2">
                      Premium healthy livestock, vaccinated and raised in a natural farm environment.
                    </p>

                    {/* Actions Row */}
                    <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                      
                      {/* Learn More Link */}
                      <Link 
                        href={`/bakray/${goat.slug}`}
                        className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-gray-500 hover:text-[#12823b] transition-colors duration-300"
                      >
                        Learn More
                        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300 text-[#ffc222] text-xs" />
                      </Link>

                      {/* Book Now WhatsApp Button */}
                      <a 
                        href={waLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#12823b] text-white py-2.5 px-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-[#ffc222] hover:text-[#0a1a0f] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                      >
                        <FaWhatsapp className="text-base" />
                        Book Now
                      </a>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. QUALITY ASSURANCE / FEATURES SECTION   */}
      {/* ========================================= */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[#ffc222] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-3 block">
              Why Choose Al-Barbari
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0a1a0f] font-serif">
              Our Farming Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: FaLeaf, title: "Organic Feed", desc: "Raised on 100% natural and organic grass, grains, and fodder." },
              { icon: FaSyringe, title: "Vet Checked", desc: "Regular medical checkups and fully vaccinated livestock." },
              { icon: FaAward, title: "Pure Breed", desc: "Guaranteed genetic purity for the finest meat and appearance." },
              { icon: FaTruck, title: "Safe Delivery", desc: "Hassle-free, safe transport directly to your doorstep." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-[#12823b]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#12823b] transition-colors duration-300">
                  <feature.icon className="text-3xl text-[#12823b] group-hover:text-[#ffc222] transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-[#0a1a0f] mb-3">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. BOTTOM CTA SECTION                     */}
      {/* ========================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-[1200px] mx-auto bg-[#12823b] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center shadow-[0_20px_50px_rgba(18,130,59,0.3)] relative overflow-hidden"
        >
          {/* Decorative shapes inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffc222]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white font-serif mb-6 leading-tight">
              Need Help Choosing the <span className="text-[#ffc222]">Right Bakra?</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10">
              Whether it's for Aqeeqah, Sadqah, or Eid, our farming experts are here to guide you to the perfect selection. Reach out to us directly!
            </p>
            
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I need some help choosing a goat from Al-Barbari Farm.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#ffc222] text-[#0a1a0f] py-4 px-8 md:px-10 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <FaWhatsapp className="text-2xl" />
              Chat With An Expert
            </a>
          </div>
        </motion.div>
      </section>

    </main>
  );
} 