"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaGlobe,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function PaymentSection() {
  const paymentMethods = [
    {
      id: 1,
      title: "Bank Transfer",
      desc: "Direct online transfer to our official Meezan / HBL business accounts.",
      logoUrl: "https://img.icons8.com/color/96/bank-building.png",
      tag: "Preferred",
    },
    {
      id: 2,
      title: "Credit / Debit Card",
      desc: "We accept Visa and Mastercard for seamless online checkout.",
      logoUrl: "https://cdn.simpleicons.org/visa/1434CB",
      logoUrl2:
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
      tag: "Global",
    },
    {
      id: 3,
      title: "Easypaisa",
      desc: "Quick, local, and secure mobile wallet transfers via the Easypaisa app.",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMk7W6ne09A91fWqZG62MBQKGkwSd8z_ofOBBOjYxTA&s=10",
      tag: "Instant",
    },
    {
      id: 4,
      title: "JazzCash",
      desc: "Instant digital payments directly to our official JazzCash merchant number.",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw--utIGcp34Q3aJEALUoV5KT-0u_IQEjOvh0IUv7WaA&s=10",
      tag: "Instant",
    },
    {
      id: 5,
      title: "Cash on Delivery",
      desc: "Pay securely in cash upon doorstep delivery or farm pickup.",
      logoUrl: "https://img.icons8.com/color/96/cash-in-hand.png",
      tag: "Local Only",
    },
    {
      id: 6,
      title: "100% Secure",
      desc: "Every transaction is verified and backed by an official Al-Barbari receipt.",
      logoUrl: "https://img.icons8.com/color/96/shield.png",
      tag: "Verified",
    },
  ];

  // Dynamic Banner Data matching the requested messages
   const bannerSlides = [
  {
    id: 1,
    title: "SON AQEEQAH",
    subtitle: "PREMIUM HEALTHY BAKRA",
    msg: "I Need 2 Bakra For My Sweet Son Aqeeqah",
    img1:
      "https://img.magnific.com/free-photo/father-son-holding-hands-park_23-2148684644.jpg?semt=ais_hybrid&w=740&q=80",
    img2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSBH83IR-iivanaQw4FdwHvaiS3XHOHi4MqUrT734bS1pPx3B-PIn4ZyZ&s=10",
  },
  {
    id: 2,
    title: "DAUGHTER AQEEQAH",
    subtitle: "VERIFIED & QUALITY ASSURED",
    msg: "I Need 1 Bakra For My Lovely Daughter Aqeeqah",
    img1:
      "https://cdn.pixabay.com/photo/2021/08/27/10/16/baby-6578335_1280.jpg",
    img2:
      "https://static.vecteezy.com/system/resources/previews/043/190/454/non_2x/mother-and-daughter-illustration-happy-family-concept-mother-and-daughter-hugging-vector.jpg",
  },
  {
    id: 3,
    title: "SADQAH",
    subtitle: "FULFILL YOUR DUTIES",
    msg: "I Need Bakra For Sadqah",
    img1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSBH83IR-iivanaQw4FdwHvaiS3XHOHi4MqUrT734bS1pPx3B-PIn4ZyZ&s=10",
    img2:
      "https://images.unsplash.com/photo-1588466585717-f8041aec7875?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hdHN8ZW58MHx8MHx8fDA%3D",
  },
  
  {
    id: 5,
    title: "DONATION",
    subtitle: "GIVE TO THE NEEDY",
    msg: "I Need Bakra For Donation",
    img1:
      "https://images.unsplash.com/photo-1588466585717-f8041aec7875?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hdHN8ZW58MHx8MHx8fDA%3D",
    img2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQk8luVsCcNXNoYWTvlXlJ4X7i8c_a1M7DPkpqxQ6M_Yt0NgQfC0OKNg&s=10",
  },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Cycle through banner content
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#f8faf9] py-24 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#12823b] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ffc222] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1600px] 2xl:max-w-[1800px] w-full mx-auto px-6 relative z-10">
        
        {/* Main Grid Split: Payment Info (Left) + Promo Banner (Right) */}
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-14">
          
          {/* ======================================= */}
          {/* LEFT CONTENT - PAYMENT METHODS */}
          {/* ======================================= */}
          <div className="flex-1 w-full xl:w-[70%]">
            
            {/* Header Section */}
            <div className="flex flex-col items-center xl:items-start text-center xl:text-left mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-[#12823b]/20 shadow-sm text-[#12823b] font-bold tracking-widest uppercase text-xs px-5 py-2.5 rounded-full mb-6 flex items-center gap-2"
              >
                <FaShieldAlt className="text-[#ffc222] text-sm" /> Safe & Transparent
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0a1a0f] mb-6"
              >
                Flexible <span className="text-[#12823b]">Payment</span> Options
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-500 max-w-2xl text-lg leading-relaxed"
              >
                We offer multiple secure and highly flexible payment methods to make
                your livestock purchase as smooth as possible.
              </motion.p>
            </div>

            {/* Payment Methods Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paymentMethods.map((method) => (
                <motion.div
                  key={method.id}
                  variants={itemVariants}
                  className="group bg-[#12823b] rounded-3xl p-6 lg:p-8 border border-green-700/50 shadow-lg hover:shadow-2xl hover:bg-[#0f6f32] transition-all duration-300 flex flex-col items-start relative overflow-hidden"
                >
                  <div className="absolute top-6 right-6 bg-[#ffc222] text-[#0a1a0f] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm z-10">
                    {method.tag}
                  </div>

                  <div className="h-16 flex items-center gap-3 mb-6 relative z-10">
                    <div className="bg-white p-2.5 rounded-xl h-full flex items-center justify-center shadow-inner group-hover:-translate-y-1 transition-transform duration-300">
                      <img src={method.logoUrl} alt={method.title} className="h-full w-auto object-contain max-w-[80px]" />
                    </div>
                    {method.logoUrl2 && (
                      <div className="bg-white p-2.5 rounded-xl h-full flex items-center justify-center shadow-inner group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                        <img src={method.logoUrl2} alt="Secondary Payment Logo" className="h-full w-auto object-contain max-w-[80px]" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffc222] transition-colors relative z-10">
                    {method.title}
                  </h3>
                  <p className="text-green-50 leading-relaxed text-sm mb-6 flex-grow opacity-90 relative z-10">
                    {method.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider bg-black/15 px-4 py-2.5 rounded-full w-full relative z-10">
                    <FaCheckCircle className="text-[#ffc222] text-sm" />
                    <span>Accepted Here</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Overseas Orders Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 lg:mt-16 bg-[#ffc222] rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden border border-yellow-400"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
                <div className="w-16 h-16 bg-[#12823b] rounded-2xl flex items-center justify-center text-white shadow-md shrink-0">
                  <FaGlobe size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-[#0a1a0f] mb-2">
                    Overseas / International Orders
                  </h4>
                  <p className="text-[#0a1a0f]/80 text-sm md:text-base max-w-xl font-medium">
                    Purchasing from abroad? We have dedicated payment channels for overseas clients. Contact us directly for special assistance.
                  </p>
                </div>
              </div>

              <a
                href="tel:+923277666764"
                className="relative z-10 whitespace-nowrap flex items-center gap-3 bg-[#12823b] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-[#12823b] transition-all duration-300 shadow-md group"
              >
                <FaPhoneAlt className="text-white group-hover:text-[#12823b] transition-colors" />
                0327 7666764
              </a>
            </motion.div>
          </div>

          {/* ======================================= */}
          {/* RIGHT CONTENT - EXTRA TALL DYNAMIC BANNER */}
          {/* ======================================= */}
          <div className="w-full xl:w-[380px] 2xl:w-[420px] shrink-0 relative mt-16 xl:mt-6">
            {/* Sticky Container */}
            <div className="xl:sticky top-32">
              
              {/* Extra Tall Container with Vibrant Green Theme & Border */}
              <div className="bg-white rounded-3xl shadow-[0_25px_60px_rgba(18,130,59,0.15)] overflow-hidden border-2 border-[#12823b]/30 flex flex-col relative h-[860px]">
                
                {/* Flickering / Pulsing Vibrant Green Background Diagonal Shape */}
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
                <div className="relative z-10 pt-14 px-6 flex flex-col items-center text-center">
                  <span className="text-[#ffc222] font-bold text-lg tracking-widest uppercase mb-2">
                    BOOK YOUR BUKRA
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
                      <h3 className="text-4xl font-black text-white uppercase tracking-wide leading-tight mb-4 drop-shadow-md">
                        {bannerSlides[currentSlide].title}
                      </h3>
                      <div className="bg-black/20 border-t border-b border-[#ffc222]/40 py-2.5 inline-block px-5 mb-3 rounded-md">
                        <span className="text-[#ffc222] font-black text-xl tracking-widest uppercase">
                          "{bannerSlides[currentSlide].subtitle}"
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <span className="text-white/90 font-bold text-base tracking-widest uppercase mt-3">
                    BY AL BARBARI FARMS<br/>HOME DELIVERY
                  </span>
                </div>

                {/* Overlapping Polaroid Images Section */}
                <div className="relative z-10 flex-grow w-full mt-6 pointer-events-none">
                   <div className="relative w-full h-full">
                      {/* Main Background Polaroid */}
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`main-${currentSlide}`}
                          initial={{ opacity: 0, x: 20, rotate: 6 }}
                          animate={{ opacity: 1, x: 0, rotate: 4 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-6 right-6 xl:right-10 w-[210px] h-[240px] bg-white p-3 pb-9 shadow-2xl rounded-sm z-10 border border-gray-200"
                        >
                          <img 
                            src={bannerSlides[currentSlide].img1} 
                            alt="Premium Livestock" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Overlapping Foreground Polaroid */}
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`sub-${currentSlide}`}
                          initial={{ opacity: 0, x: -20, rotate: -6 }}
                          animate={{ opacity: 1, x: 0, rotate: -4 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="absolute top-[150px] left-6 xl:left-10 w-[180px] h-[175px] bg-white p-3 pb-7 shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-sm z-20 border border-gray-200"
                        >
                          <img 
                            src={bannerSlides[currentSlide].img2} 
                            alt="Healthy Goats" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                   </div>
                </div>

                {/* Bottom Button Area - Glowing Yellow WhatsApp Button */}
                <div className="relative z-10 pb-12 px-8 flex justify-center items-end bg-transparent h-[150px]">
                  <a
                    href={`https://wa.me/923280425087?text=${encodeURIComponent(bannerSlides[currentSlide].msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#ffc222] text-[#0a1a0f] font-black text-xl px-2 py-4 rounded-full shadow-[0_10px_35px_rgba(255,194,34,0.5)] flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 border border-yellow-300"
                  >
                    <FaWhatsapp size={26} className="text-[#12823b]" />
                    <span className="font-nastaliq tracking-wide mb-1 text-2xl">
                      ہم سے رابطہ کریں
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>
          {/* END RIGHT CONTENT */}

        </div>
      </div>
    </section>
  );
}