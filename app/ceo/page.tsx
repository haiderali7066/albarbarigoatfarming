"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLeaf, 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaHandshake, 
  FaHeart, 
  FaAward, 
  FaUsers, 
  FaArrowRight,
  FaWhatsapp,
  FaCrown,
  FaStar,
  FaFlag,
  FaShieldAlt
} from 'react-icons/fa';

export default function CeoMessagePage() {
  const WHATSAPP_NUMBER = "923280425087";
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const textMessage = "Hello Al-Barbari Team, I read the CEO's message and would like to connect.";
    const encodedMessage = encodeURIComponent(textMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  // Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  if (!mounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400..700&display=swap');
        
        .font-nastaliq {
          font-family: "Noto Nastaliq Urdu", serif;
          font-optical-sizing: auto;
        }

        /* Hover slide-fill effect for premium buttons */
        .fill-btn {
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fill-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: #ffffff;
          z-index: -1;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fill-btn:hover::before {
          width: 100%;
        }

        /* Glassmorphism utility */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}} />

      <main className="bg-[#f8faf9] min-h-screen font-sans text-[#0a1a0f] overflow-hidden pt-[100px]">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full min-h-[55vh] flex items-center justify-center py-20 lg:py-28 overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shadow-sm z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#12823b] to-[#0a1a0f] z-0"></div>
          
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffc222_2px,transparent_2px)] [background-size:30px_30px] z-0"></div>
          
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-[#ffc222] rounded-full blur-[120px] z-0"
          />

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.05, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -right-16 bottom-10 select-none pointer-events-none z-0"
          >
            <span className="text-[180px] md:text-[250px] font-serif font-bold text-white leading-none">رہنما</span>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 text-center flex flex-col items-center px-6 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="bg-[#ffc222] text-[#0a1a0f] font-bold tracking-[0.2em] uppercase text-xs px-5 py-2.5 rounded-full mb-6 inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-transform cursor-default">
              <FaCrown className="text-[#12823b]" /> Leadership Message
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
              Words From Our <span className="text-[#ffc222]">Founder</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium max-w-2xl text-opacity-90">
              Our guiding principles, our dedication to the nation, and our solemn promise to always put your trust above all else.
            </motion.p>
          </motion.div>
        </section>

        {/* ================= MAIN MESSAGE SECTION ================= */}
        <section className="max-w-[1440px] mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row gap-16 items-start relative">
            
            {/* Left Side: CEO Portrait (Slides in from left) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="w-full lg:w-[40%] lg:sticky top-[120px] z-20"
            >
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#12823b] to-[#ffc222] rounded-[48px] opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-700"></div>
                
                <div className="relative bg-white p-5 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                  <div className="aspect-[4/5] bg-gradient-to-b from-[#12823b] to-[#0a1a0f] rounded-[30px] overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f] via-transparent to-transparent opacity-95 z-10"></div>
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] z-0"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                      <div className="w-16 h-1 bg-[#ffc222] mb-4 transition-all duration-500 group-hover:w-28"></div>
                      <span className="text-sm font-bold text-[#ffc222] tracking-widest uppercase mb-1">Founder & CEO</span>
                      <h3 className="text-white text-3xl md:text-4xl font-serif font-bold tracking-wide">Sardar Shah Zaman</h3>
                      <p className="text-gray-300 text-sm mt-2">Al-Barbari Goat Farming Lahore</p>
                    </div>

                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-6 right-6 bg-[#ffc222] text-[#0a1a0f] font-extrabold text-[10px] tracking-widest uppercase px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-1.5"
                    >
                      <FaAward /> ESTABLISHED TRADITION
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6 pt-2">
                    <div className="bg-[#f8faf9] p-4 rounded-2xl text-center border border-gray-100 hover:border-[#12823b]/30 hover:shadow-md transition-all group/stat cursor-default">
                      <h4 className="text-[#12823b] font-serif text-2xl font-bold group-hover:scale-110 transition-transform">100%</h4>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mt-1">Shariah Compliant</p>
                    </div>
                    <div className="bg-[#f8faf9] p-4 rounded-2xl text-center border border-gray-100 hover:border-[#12823b]/30 hover:shadow-md transition-all group/stat cursor-default">
                      <h4 className="text-[#12823b] font-serif text-2xl font-bold group-hover:scale-110 transition-transform">Lahore</h4>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mt-1">Operational Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Message Body (Slides in from right) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="w-full lg:w-[60%] flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[2px] bg-[#12823b]"></span>
                <span className="text-sm font-extrabold text-[#12823b] uppercase tracking-[0.25em]">Direct Address</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0a1a0f] mb-8 leading-tight">
                "Your Trust is Our Greatest Responsibility"
              </h2>

              <div className="relative text-gray-700 space-y-8 text-base md:text-lg leading-relaxed">
                
                {/* Styled Quote Box */}
                <div className="relative bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-md hover:shadow-xl hover:border-[#12823b]/20 transition-all duration-500 group">
                  <FaQuoteLeft className="text-5xl text-[#12823b]/10 absolute -top-4 -left-2 group-hover:scale-110 group-hover:text-[#12823b]/20 transition-all duration-500" />
                  
                  <div className="mb-8 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#12823b]/10 text-[#12823b] flex items-center justify-center shrink-0">
                        <FaUsers size={14} />
                      </div>
                      <h4 className="text-lg font-bold text-[#0a1a0f] font-serif">Dear Team,</h4>
                    </div>
                    <p className="text-gray-600">
                      "I want to take a moment to wholeheartedly appreciate each and every one of you — our incredible, hardworking team. Your tireless efforts, loyalty, and dedication are the reason this company exists and continues to grow. You are not just employees — you are the backbone of our organization, and I am proud to lead such an inspiring team."
                    </p>
                  </div>

                  <div className="mb-8 pt-6 border-t border-gray-100 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#ffc222]/20 text-[#0a1a0f] flex items-center justify-center shrink-0">
                        <FaHandshake size={14} />
                      </div>
                      <h4 className="text-lg font-bold text-[#0a1a0f] font-serif">To Our Valued Customers,</h4>
                    </div>
                    <p className="text-gray-600">
                      "I also extend my sincere gratitude to our valued customers. Your trust and support mean everything to us. You are the driving force behind our progress, and we are deeply thankful for your continued belief in us."
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#12823b]/10 text-[#12823b] flex items-center justify-center shrink-0">
                        <FaHeart size={14} />
                      </div>
                      <h4 className="text-lg font-bold text-[#0a1a0f] font-serif">The Path Ahead</h4>
                    </div>
                    <p className="text-gray-600">
                      "As we move forward, I urge all of you to continue prioritizing the needs of our customers. Always be ready to serve, to support, and to solve — because our strength lies in the satisfaction and success of those we serve. Whenever a customer needs us, we must be there — fully prepared, fully committed."
                    </p>
                  </div>

                  <FaQuoteRight className="text-5xl text-[#12823b]/10 absolute -bottom-4 right-6 group-hover:scale-110 group-hover:text-[#12823b]/20 transition-all duration-500" />
                </div>

                <div className="pl-6 border-l-4 border-[#ffc222] py-2 relative overflow-hidden group">
                  <p className="text-[#0a1a0f] font-semibold text-xl md:text-2xl italic font-serif leading-snug">
                    "Let’s continue to build something great together — with integrity, unity, and excellence."
                  </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6">
                  <div>
                    <h5 className="text-2xl font-bold text-[#0a1a0f] font-serif">Sardar Shah Zaman</h5>
                    <p className="text-[#12823b] text-sm font-bold tracking-wider uppercase mt-1">Founder & CEO</p>
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#12823b] text-white py-4 px-8 rounded-3xl flex flex-col items-center justify-center border-b-[5px] border-[#ffc222] shadow-xl relative overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 w-[200%] -left-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent hover:animate-[shimmer_1.5s_infinite] skew-x-12 cursor-pointer z-0"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex items-center gap-2 mb-1.5">
                        <FaFlag className="text-[#ffc222]" size={14} />
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-200">National Pride</span>
                      </div>
                      <span className="text-base font-bold text-white mb-2">Pakistan Hamasha Zindabad!</span>
                      <span className="font-nastaliq text-[22px] text-[#ffc222] leading-none">پاکستان ہمیشہ زندہ باد</span>
                    </div>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= FULLY UPDATED FOUNDATION SECTION ================= */}
        <section className="bg-[#0a1a0f] text-white py-28 relative overflow-hidden border-t-[6px] border-[#12823b]">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] z-0"></div>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#12823b] rounded-full blur-[200px] pointer-events-none"
          />

          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-sm font-bold text-[#ffc222] uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-3">
                <span className="w-10 h-[1px] bg-[#ffc222]"></span>
                Our Foundation
                <span className="w-10 h-[1px] bg-[#ffc222]"></span>
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white">The Core Pillars of Al-Barbari</h3>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base">
                Driven by our CEO's vision, we operate on four unbreakable principles that guarantee the health of our animals and the satisfaction of our customers.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { 
                  icon: FaShieldAlt, 
                  title: "Ethical & Sunnah Compliant", 
                  desc: "Every animal is raised and managed under strict Islamic principles, ensuring cruelty-free, organic, and highly ethical rearing practices from birth to delivery." 
                },
                { 
                  icon: FaStar, 
                  title: "Uncompromising Purity", 
                  desc: "We maintain elite bloodlines. Our state-of-the-art facilities and proprietary organic feed formulation guarantee premium, healthy, and majestic livestock." 
                },
                { 
                  icon: FaUsers, 
                  title: "Empowered Teamwork", 
                  desc: "As stressed by our CEO, our dedicated farm workers and veterinarians are the backbone of our quality, working with unmatched sincerity and care." 
                },
                { 
                  icon: FaHandshake, 
                  title: "Customer-First Transparency", 
                  desc: "Zero hidden policies. Whether it's a farm visit or a live video selection for Sadqah, we prioritize your peace of mind and complete satisfaction." 
                }
              ].map((pillar, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="glass-card p-8 rounded-[30px] group relative overflow-hidden transition-colors hover:bg-[#12823b]/20 hover:border-[#12823b]/50"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ffc222]/10 to-transparent rounded-bl-[100px] transform origin-top-right scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300 ${index % 2 === 0 ? 'bg-[#12823b] text-white' : 'bg-[#ffc222] text-[#0a1a0f]'}`}>
                    <pillar.icon className="text-3xl" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-serif mb-4 group-hover:text-[#ffc222] transition-colors">{pillar.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= CONNECT CTA SECTION ================= */}
        <section className="max-w-[1200px] mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row relative group"
          >
            {/* Left Side Info */}
            <div className="lg:w-1/2 p-10 md:p-16 bg-white flex flex-col justify-center">
              <div className="bg-[#12823b]/10 text-[#12823b] font-bold tracking-widest uppercase text-[10px] px-4 py-2 rounded-full mb-6 inline-flex items-center gap-2 self-start">
                <FaLeaf /> Organic & Pure
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-[#0a1a0f] mb-6 leading-tight">
                Experience the Al-Barbari Standard
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed text-base">
                As Sardar Shah Zaman highlights, we are here for you fully prepared and fully committed. Connect with us instantly to purchase premium livestock or visit our modern facilities in Lahore.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f8faf9] rounded-xl flex items-center justify-center text-[#12823b] border border-gray-100 shrink-0">
                    <FaLeaf className="text-xl" />
                  </div>
                  <p className="font-bold text-sm text-[#0a1a0f]">Shariah compliant slaughtering arrangements</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f8faf9] rounded-xl flex items-center justify-center text-[#12823b] border border-gray-100 shrink-0">
                    <FaStar className="text-xl" />
                  </div>
                  <p className="font-bold text-sm text-[#0a1a0f]">Expert selection & strict veterinary monitoring</p>
                </div>
              </div>
            </div>

            {/* Glowing CTA Panel */}
            <div className="lg:w-1/2 bg-[#12823b] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px] transition-transform duration-700 group-hover:scale-110"></div>
              
              <div className="relative z-10 text-center flex flex-col items-center">
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 bg-[#25D366] rounded-full shadow-[0_0_40px_rgba(37,211,102,0.4)] flex items-center justify-center text-white mb-8"
                >
                  <FaWhatsapp className="text-5xl" />
                </motion.div>
                
                <h3 className="text-3xl font-serif text-white mb-4">Direct Team Support</h3>
                <p className="text-gray-200 mb-10 text-base opacity-90 max-w-sm">
                  Get directly in touch with our farm managers via WhatsApp to fulfill any order requirement securely.
                </p>
                
                <button 
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ffc222] text-[#0a1a0f] py-4 px-10 rounded-full font-black text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(255,194,34,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 fill-btn"
                >
                  Message Us Now <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}