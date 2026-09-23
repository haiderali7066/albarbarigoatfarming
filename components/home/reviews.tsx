"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaWhatsapp, FaTimes, FaHeart } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export default function CommunityReviews() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const WHATSAPP_NUMBER = "923280425087";
  const [formData, setFormData] = useState({ name: '', feedback: '' });

  // Fresh, high-quality community profile portraits
  const testimonials: Testimonial[] = [
    {
      id: 0,
      name: "Haji Muhammad Saleem",
      role: "Sadqah Client, Lahore",
      image: "https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
      quote: "Masha'Allah, the transparency Al-Barbari offers is unmatched. They shared the video of the Sadqah slaughtering and distributed the meat beautifully.",
      rating: 5
    },
    {
      id: 1,
      name: "Sohail Ahmed",
      role: "Aqeeqa Customer",
      image: "https://static.vecteezy.com/system/resources/previews/001/859/129/non_2x/young-man-with-beard-avatar-character-free-vector.jpg",
      quote: "Booked two goats for my son's Aqeeqa. The animals were majestic, healthy, and perfectly compliant with Sunnah guidelines. Exceptional service!",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Yasmin Malik",
      role: "Community Donor",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/026/528/small/illustration-female-avatar-in-flat-style-free-vector.jpg",
      quote: "I regularly contribute to their meat distribution drives. Trusting an organization with your religious obligations is easy with their high integrity.",
      rating: 5
    },
    {
      id: 3,
      name: "Kamran & Family",
      role: "Premium Goat Buyer",
      image: "https://us.123rf.com/450wm/ivandaariefb/ivandaariefb2601/ivandaariefb260109633/290440562-illustration-of-a-woman-reading-a-book-with-a-thoughtful-expression-surrounded-by-decorative.jpg?ver=6",
      quote: "Visits to their Lahore farm are always a pleasure. You can see how cleanly the goats are raised on organic feed. Highly recommended.",
      rating: 5
    }
  ];

  useEffect(() => {
    setMounted(true);
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `*New Customer Review/Feedback* ⭐\n\n*Name:* ${formData.name}\n*Feedback:* ${formData.feedback}`;
    const encoded = encodeURIComponent(whatsappText);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    setIsModalOpen(false);
    setFormData({ name: '', feedback: '' });
  };

  if (!mounted) return null;

  return (
    <section className="bg-[#f8faf9] py-14 px-6 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Sleeker, Shorter Asymmetrical Banner */}
        <div className="relative w-full bg-[#12823b] text-white overflow-hidden p-6 py-14 md:p-16 lg:py-20 flex flex-col items-center justify-center text-center rounded-tr-[80px] rounded-br-[120px] rounded-bl-[120px] rounded-tl-none shadow-[0_25px_50px_rgba(18,130,59,0.15)] min-h-[420px] lg:min-h-[480px]">
          
          {/* Islamic Vector Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 0l10 30h30L55 50l10 30-25-20-25 20 10-30L0 30h30z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}
          ></div>

          {/* Glowing back ambiance */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#ffc222] rounded-full blur-[120px] opacity-15 pointer-events-none"></div>

          {/* ================= FLOATING AVATARS (SCALED DOWN FOR HEIGHT) ================= */}
          {/* Avatar 1: Top-Left */}
          <button 
            onClick={() => { setActiveIndex(0); setIsAutoplay(false); }}
            className={`absolute hidden lg:flex top-8 left-8 xl:top-14 xl:left-20 w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-300 z-20 hover:scale-110 hover:shadow-xl ${activeIndex === 0 ? 'border-[#ffc222] scale-105' : 'border-white/40 grayscale hover:grayscale-0'}`}
          >
            <img src={testimonials[0].image} alt={testimonials[0].name} className="w-full h-full object-cover" />
          </button>

          {/* Avatar 2: Bottom-Left */}
          <button 
            onClick={() => { setActiveIndex(1); setIsAutoplay(false); }}
            className={`absolute hidden lg:flex bottom-8 left-12 xl:bottom-14 xl:left-28 w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-300 z-20 hover:scale-110 hover:shadow-xl ${activeIndex === 1 ? 'border-[#ffc222] scale-105' : 'border-white/40 grayscale hover:grayscale-0'}`}
          >
            <img src={testimonials[1].image} alt={testimonials[1].name} className="w-full h-full object-cover" />
          </button>

          {/* Avatar 3: Top-Right */}
          <button 
            onClick={() => { setActiveIndex(2); setIsAutoplay(false); }}
            className={`absolute hidden lg:flex top-8 right-8 xl:top-14 xl:right-20 w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-300 z-20 hover:scale-110 hover:shadow-xl ${activeIndex === 2 ? 'border-[#ffc222] scale-105' : 'border-white/40 grayscale hover:grayscale-0'}`}
          >
            <img src={testimonials[2].image} alt={testimonials[2].name} className="w-full h-full object-cover" />
          </button>

          {/* Avatar 4: Bottom-Right */}
          <button 
            onClick={() => { setActiveIndex(3); setIsAutoplay(false); }}
            className={`absolute hidden lg:flex bottom-8 right-12 xl:bottom-14 xl:right-28 w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-300 z-20 hover:scale-110 hover:shadow-xl ${activeIndex === 3 ? 'border-[#ffc222] scale-105' : 'border-white/40 grayscale hover:grayscale-0'}`}
          >
            <img src={testimonials[3].image} alt={testimonials[3].name} className="w-full h-full object-cover" />
          </button>

          {/* ================= MOBILE LAYOUT AVATAR ROW ================= */}
          <div className="flex lg:hidden gap-3 mb-6 z-10">
            {testimonials.map((test, index) => (
              <button
                key={test.id}
                onClick={() => { setActiveIndex(index); setIsAutoplay(false); }}
                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${activeIndex === index ? 'border-[#ffc222] scale-110 shadow-md' : 'border-white/30'}`}
              >
                <img src={test.image} alt={test.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* ================= COMPACT CENTER CONTENT ================= */}
          <div className="relative z-10 max-w-xl px-4 flex flex-col items-center">
            
            {/* Quote Icon */}
            <div className="mb-2.5 text-[#ffc222]/20">
              <FaQuoteLeft size={32} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-[#ffc222] text-base" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="min-h-[90px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg md:text-xl font-serif text-white font-medium leading-relaxed italic"
                >
                  "{testimonials[activeIndex].quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author */}
            <div className="mt-6 border-t border-white/10 pt-3 w-full max-w-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-300 mt-0.5">
                    {testimonials[activeIndex].role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action CTA Button */}
            <div className="mt-8">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#ffc222] text-[#0a1a0f] font-extrabold py-3 px-8 rounded-full hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-xs tracking-wider uppercase"
              >
                Join Our Community
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ================= MODAL OVERLAY ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#0a1a0f]/80 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-[32px] overflow-hidden shadow-2xl z-10"
            >
              <div className="bg-[#12823b] p-6 text-white relative">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
                >
                  <FaTimes />
                </button>
                <span className="bg-[#ffc222] text-[#0a1a0f] text-[9px] font-black uppercase px-3 py-1 rounded-full mb-2 inline-block">
                  Community Voice
                </span>
                <h3 className="text-xl font-serif font-bold">Share Your Experience</h3>
              </div>

              <form onSubmit={handleReviewSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Your Name</label>
                  <input 
                    type="text" 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full bg-[#f8faf9] border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#12823b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Your Feedback</label>
                  <textarea 
                    required
                    name="feedback"
                    rows={3}
                    value={formData.feedback}
                    onChange={handleInputChange}
                    placeholder="Tell us about your experience..."
                    className="w-full bg-[#f8faf9] border border-gray-200 rounded-[16px] px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#12823b] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#12823b] text-white py-3.5 rounded-full font-bold text-sm hover:bg-[#0a1a0f] transition-all shadow-md"
                  >
                    <FaWhatsapp className="text-lg text-[#25D366]" />
                    Share on WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}