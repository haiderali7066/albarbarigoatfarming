"use client";

import React from 'react';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export default function AvailableStockMinimal() {
  const WHATSAPP_NUMBER = "923001234567";

//   const goats = [
//     {
//       id: 1,
//       name: "Premium Barbari Buck",
//       image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 2,
//       name: "Spotted Barbari Doe",
//       image: "https://images.unsplash.com/photo-1560888126-5c13ad3f9345?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 3,
//       name: "Barbari Kids Pair",
//       image: "https://images.unsplash.com/photo-1613846043689-afad9cb6317d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 4,
//       name: "Eid Special Male",
//       image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 5,
//       name: "White Barbari Male",
//       image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 6,
//       name: "Pure Breed Female",
//       image: "https://images.unsplash.com/photo-1582844837581-22920409893d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     }
//   ];
 const goats = [
    {
      id: 1,
      name: "Premium Barbari Buck (Breeder)",
      image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Spotted Barbari Doe (Milking)",
      image: "https://images.unsplash.com/photo-1560888126-5c13ad3f9345?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Barbari Kids (Healthy Pair)",
      image: "https://images.unsplash.com/photo-1613846043689-afad9cb6317d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Eid Special Male Bakra",
      image: "https://plus.unsplash.com/premium_photo-1691030658378-acdaab929bed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "White Barbari Male (Aqeeqah)",
      image: "https://images.unsplash.com/photo-1573578160998-4f4c7b023aec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Pure Breed Barbari Female",
      image: "https://images.unsplash.com/photo-1593750439808-958d28558592?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

  return (
    <section className="bg-white py-24 font-sans text-[#0a1a0f]">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Centered Minimal Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[#1a5a1f] font-bold tracking-[0.2em] uppercase text-sm mb-3">
            Breed Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Available Stock
          </h2>
          {/* Minimalist Golden Divider */}
          <div className="w-16 h-[3px] bg-[#ffc222]"></div>
        </div>

        {/* 6 Cards Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {goats.map((goat) => {
            const waMessage = encodeURIComponent(`Hello, I want to know more about the "${goat.name}" from your website.`);
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

            return (
              <div key={goat.id} className="group relative flex flex-col">
                
                {/* Edge-to-Edge Image */}
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                  <img 
                    src={goat.image} 
                    alt={goat.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Minimalist Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#1a5a1f] transition-colors duration-300">
                    {goat.name}
                  </h3>

                  {/* High Contrast Actions Container */}
                  <div className="mt-auto border-t-2 border-[#0a1a0f]/10 pt-4 flex items-center justify-between">
                    
                    {/* Sleek Text Link */}
                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#0a1a0f] hover:text-[#ffc222] transition-colors duration-300">
                      View More
                      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    {/* Sharp Square WhatsApp Button */}
                    <a 
                      href={waLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-[#1a5a1f] text-white flex items-center justify-center hover:bg-[#ffc222] hover:text-[#0a1a0f] transition-all duration-300 shadow-md"
                      title="Contact on WhatsApp"
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                    
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Products Link */}
        <div className="mt-24 flex justify-center">
          <a 
            href="/products" 
            className="group flex items-center gap-4 border-2 border-[#0a1a0f] bg-transparent text-[#0a1a0f] py-4 px-10 font-bold uppercase tracking-widest hover:bg-[#0a1a0f] hover:text-[#ffc222] transition-all duration-300"
          >
            View All Products
            <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
}