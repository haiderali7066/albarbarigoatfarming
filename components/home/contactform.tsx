"use client";

import React, { useState } from 'react';
import { FaWhatsapp, FaUser, FaPen, FaCommentDots, FaArrowRight } from 'react-icons/fa';

export default function WhatsAppContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: 'General Inquiry',
    message: ''
  });

  const phoneNumber = "923280425087"; // Your WhatsApp number

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the message
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Topic:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#0a1a0f] font-bold mb-4">Chat With Us</h2>
          <p className="text-gray-600">Send us a message on WhatsApp and we'll get back to you shortly.</p>
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#12823b]/5 rounded-bl-full -mr-16 -mt-16"></div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6 relative z-10">
            
            {/* Name Input */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-[#12823b]" />
              <input 
                type="text" 
                placeholder="Your Name" 
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#12823b] focus:ring-1 focus:ring-[#12823b] transition-all"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Service Select */}
            <div className="relative">
              <FaPen className="absolute left-4 top-4 text-[#12823b]" />
              <select 
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#12823b] focus:ring-1 focus:ring-[#12823b] transition-all bg-white"
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option>General Inquiry</option>
                <option>Buy Bakray</option>
                <option>Aqeeqah / Sadqah Services</option>
                <option>Farm Visit</option>
              </select>
            </div>

            {/* Message Area */}
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-[#12823b]" />
              <textarea 
                placeholder="How can we help you?" 
                rows={4} 
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#12823b] focus:ring-1 focus:ring-[#12823b] transition-all"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-[#12823b] hover:bg-[#ffc222] text-white hover:text-[#0a1a0f] font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Send to WhatsApp <FaWhatsapp size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}