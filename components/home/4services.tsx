"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  FaHeart, 
  FaTimes, 
  FaWhatsapp, 
  FaArrowRight, 
  FaLeaf, 
  FaChild, 
  FaHandHoldingHeart 
} from 'react-icons/fa';
import { GiGoat } from 'react-icons/gi';

// Types
interface FormData {
  name: string;
  phone: string;
  note: string;
}

export default function ServicesSection() {
  const WHATSAPP_NUMBER = "923280425087";
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', note: '' });

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setFormData({ name: '', phone: '', note: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Request via Website* 🐐\n\n*Service Required:* ${selectedService}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Additional Details:* ${formData.note || 'None'}\n\nPlease assist me with this requirement.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
    closeModal();
  };

  // Enhanced Framer Motion Variants (Explicitly Typed)
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const fadeUpSpring: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 } 
    }
  };

  const modalOverlay: Variants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: { opacity: 1, backdropFilter: "blur(8px)", transition: { duration: 0.4 } }
  };

  const modalContent: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 150, damping: 25 } 
    },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }
  };

  // Services Data
  const services = [
    {
      id: "sadqah",
      title: "Sadqah Processing",
      icon: FaHeart,
      image: "https://res.cloudinary.com/dvu9vmcqd/image/upload/v1785861889/Sadqah_xsqncj.png",
      btnText: "Offer Sadqah"
    },
    {
      id: "aqeeqa",
      title: "Aqeeqa Services",
      icon: FaChild,
      image: "https://res.cloudinary.com/dvu9vmcqd/image/upload/v1785861884/Healthy_jtmwtg.png",
      btnText: "Book Aqeeqa"
    },
    {
      id: "healthy-bakra",
      title: "Premium Healthy Bakra",
      icon: GiGoat,
      image: "https://res.cloudinary.com/dvu9vmcqd/image/upload/v1785861896/Aqeeqah_n2fjsc.png",
      btnText: "Select Bakra"
    },
    {
      id: "donation",
      title: "Charity & Donation",
      icon: FaHandHoldingHeart,
      image: "https://res.cloudinary.com/dvu9vmcqd/image/upload/v1785861898/Donation_zxuaaq.png",
      btnText: "Donate Now"
    }
  ];

  if (!mounted) return null;

  return (
    <section className="bg-[#f8faf9] py-28 relative overflow-hidden font-sans">
      {/* Dynamic Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#12823b] rounded-full blur-[200px] opacity-5 pointer-events-none"></div>
      <div className="absolute bottom-10 left-[-10%] w-[600px] h-[600px] bg-[#ffc222] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpSpring}
          className="text-center mb-20"
        >
          <div className="bg-white border border-[#12823b]/20 shadow-sm text-[#12823b] font-bold tracking-widest uppercase text-sm px-6 py-2.5 rounded-full mb-6 inline-flex items-center gap-3">
            <FaLeaf className="text-lg" /> Core Offerings
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-[#0a1a0f] mb-6 leading-tight">
            Sacrifice, Celebration & <span className="text-[#12823b] relative inline-block">
              Charity
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#ffc222] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Choose from our premium livestock options tailored for your specific religious and personal needs. We ensure 100% transparency, quality, and care.
          </p>
        </motion.div>

        {/* Improved Cards Grid - 2 on iPad/Laptop, 4 on extra large screens for better breathing room */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              variants={fadeUpSpring}
              className="group bg-white rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(18,130,59,0.15)] border border-gray-100 transition-all duration-500 flex flex-col h-full cursor-pointer relative"
              onClick={() => openModal(service.title)}
            >
              {/* Taller Image Container with Gradient Overlay */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f]/80 via-[#0a1a0f]/20 to-transparent group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                
                {/* BIGGER Floating Icon */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-[#12823b] shadow-xl z-20 group-hover:bg-[#ffc222] group-hover:text-[#0a1a0f] group-hover:scale-110 transition-all duration-500">
                  <service.icon size={30} />
                </div>

               
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow relative bg-[#12823b]">
  <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#ffc222] transition-colors">
    {service.title}
  </h3>
  
  {/* Fully Rounded Button with Fixed Color Transitions */}
  <button 
    className="mt-auto relative w-full overflow-hidden flex items-center justify-center py-4 px-6 rounded-full bg-white border-2 border-white transition-all duration-300 group/btn hover:border-[#ffc222] hover:shadow-[0_12px_24px_rgba(255,194,34,0.2)]"
  >
    {/* Elegant Sliding Background Layer (Yellow) */}
    <div className="absolute inset-0 bg-[#ffc222] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
    
    {/* Button Text and Icon Content */}
    <span className="relative z-10 flex items-center justify-center gap-3 font-bold text-sm text-[#12823b] group-hover/btn:text-[#0a1a0f] transition-colors duration-300 uppercase tracking-wide">
      {service.btnText}
      <FaArrowRight className="text-[#12823b] group-hover/btn:text-[#0a1a0f] transform group-hover/btn:translate-x-1 transition-all duration-300" />
    </span>
  </button>
</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= SUPERIOR DONATION / SERVICE POPUP MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 font-sans">
            {/* Backdrop */}
            <motion.div 
              variants={modalOverlay}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={closeModal}
              className="absolute inset-0 bg-[#0a1a0f]/70"
            ></motion.div>

            {/* Modal Box */}
            <motion.div 
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-xl bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-[#12823b] to-[#0a1a0f] p-10 relative shrink-0">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
                
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/30 hover:rotate-90 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 backdrop-blur-sm"
                >
                  <FaTimes size={18} />
                </button>
                
                <div className="relative z-10 flex items-center gap-5">
                  <div className="w-16 h-16 bg-[#ffc222] rounded-2xl flex items-center justify-center text-[#0a1a0f] shadow-lg shrink-0 transform -rotate-6">
                    <FaWhatsapp size={32} />
                  </div>
                  <div>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full mb-2 inline-block">
                      Connect Direct
                    </span>
                    <h3 className="text-3xl font-serif text-white font-bold leading-tight">
                      {selectedService}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-10 overflow-y-auto">
                <p className="text-gray-500 mb-8 text-base">
                  Please fill out the form below. Once submitted, you will be securely redirected to our WhatsApp to finalize your request.
                </p>
                
                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0a1a0f] mb-2 pl-2">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., John Doe"
                      className="w-full bg-[#f8faf9] border border-gray-200 text-[#0a1a0f] rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#12823b] focus:border-transparent transition-all placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[#0a1a0f] mb-2 pl-2">WhatsApp Number <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full bg-[#f8faf9] border border-gray-200 text-[#0a1a0f] rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#12823b] focus:border-transparent transition-all placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0a1a0f] mb-2 pl-2">Special Requirements (Optional)</label>
                    <textarea 
                      name="note"
                      rows={3}
                      value={formData.note}
                      onChange={handleInputChange}
                      placeholder="Specific weight, date, or delivery instructions..."
                      className="w-full bg-[#f8faf9] border border-gray-200 text-[#0a1a0f] rounded-[24px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#12823b] focus:border-transparent transition-all resize-none placeholder-gray-400"
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 bg-[#12823b] text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-[#0a1a0f] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <FaWhatsapp className="text-2xl text-[#25D366] group-hover:scale-110 transition-transform" />
                      Proceed to WhatsApp
                    </button>
                    <p className="text-center text-sm text-gray-400 mt-5 flex items-center justify-center gap-2 font-medium">
                      <FaHeart className="text-[#12823b]" /> Encrypted & Direct to Al-Barbari
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}