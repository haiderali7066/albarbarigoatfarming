"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export default function AvailableStockMinimal() {
  const WHATSAPP_NUMBER = "923280425087";

  // Expanded list with custom slugs for dynamic routing
  const goats = [
    { id: 1, name: "Barbari Bakra", slug: "barbari-bakra", image: "/goats/1.jpeg",  },
    { id: 2, name: "Beetal Bakra", slug: "beetal-bakra", image: "/goats/2.jpeg", },
    { id: 3, name: "Boer Bakra", slug: "boer-bakra", image: "/goats/3.jpeg",  },
    { id: 4, name: "Rajanpuri Bakra", slug: "rajanpuri-bakra", image: "/goats/4.jpeg",  },
    { id: 5, name: "Makhi Cheeni Bakra", slug: "makhi-cheeni-bakra", image: "/goats/5.jpeg",  },
    { id: 6, name: "Nuqri Bakra", slug: "nuqri-bakra", image: "/goats/6.jpeg",  },
    { id: 7, name: "Teddy Bakra", slug: "teddy-bakra", image: "/goats/1.jpeg",  }, // Reusing images for demo
    { id: 8, name: "Nagri Bakra", slug: "nagri-bakra", image: "/goats/2.jpeg",  },
    { id: 9, name: "Desi Bakra", slug: "desi-bakra", image: "/goats/3.jpeg",  },
    { id: 10, name: "Gulabi Bakra", slug: "gulabi-bakra", image: "/goats/4.jpeg" },
    { id: 11, name: "Rahim Yar Khan Ablak Bakra", slug: "rahim-yar-khan-ablak-bakra", image: "/goats/5.jpeg",  },
  ];

  // Animation variants for smooth loading
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="bg-[#fafafa] py-16 md:py-24 font-sans text-[#0a1a0f] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================= */}
        {/* HEADER SECTION                            */}
        {/* ========================================= */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#12823b] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-3 md:mb-4"
          >
            Breed Selection
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0a1a0f] mb-4 md:mb-6 font-serif"
          >
            Available Stock
          </motion.h2>

          {/* Elegant Divider */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-[3px] bg-[#ffc222] rounded-full"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#12823b]"></div>
            <div className="w-10 h-[3px] bg-[#ffc222] rounded-full"></div>
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* GRID LAYOUT (Mobile First)                */}
        {/* ========================================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8 max-w-sm sm:max-w-none mx-auto"
        >
          {goats.map((goat) => {
            const waMessage = encodeURIComponent(`Hello Al-Barbari Farm! I want to know the price and details for the "${goat.name}".`);
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

            return (
              <motion.div 
                variants={itemVariants}
                key={goat.id} 
                className="group flex flex-col bg-white rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(18,130,59,0.12)] transition-all duration-500 border border-gray-100 hover:-translate-y-1.5"
              >
                {/* Image Container with Tag */}
                <div className="w-full aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-gray-100 relative">
                  
                  
                  {/* Image with zoom effect */}
                  <img 
                    src={goat.image} 
                    alt={goat.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                </div>

                {/* Content Box */}
                <div className="p-5 md:p-6 flex flex-col flex-grow relative z-20 bg-white">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-[#0a1a0f] group-hover:text-[#12823b] transition-colors duration-300 leading-snug">
                    {goat.name}
                  </h3>

                  {/* Actions Area */}
                  <div className="mt-auto pt-5 border-t border-gray-100/80 flex items-center justify-between">
                    
                    {/* View Details Link (Routes to Slug) */}
                    <Link 
                      href={`/products/${goat.slug}`}
                      className="flex items-center gap-2 text-[11px] md:text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#12823b] transition-colors duration-300"
                    >
                      View Details
                      <FaArrowRight className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-[#ffc222] text-sm" />
                    </Link>

                    {/* WhatsApp Button */}
                    <a 
                      href={waLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                      title="Inquire on WhatsApp"
                      aria-label={`Contact on WhatsApp about ${goat.name}`}
                    >
                      <FaWhatsapp className="text-xl md:text-2xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========================================= */}
        {/* BOTTOM CALL TO ACTION                     */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-20 flex justify-center"
        >
          <Link 
            href="/bakray" 
            className="group flex items-center justify-center gap-3 bg-[#12823b] text-white py-4 px-8 md:px-10 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-[#ffc222] hover:text-[#0a1a0f] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
          >
            View All Livestock
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#0a1a0f]/10 transition-colors">
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300 text-sm" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}