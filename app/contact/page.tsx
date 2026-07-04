"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaChevronDown
} from 'react-icons/fa';

export default function ContactPage() {
  const WHATSAPP_NUMBER = "923280425087";

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: "Can I visit the farm to select my animal?",
      answer: "Absolutely! We welcome customers to visit our farm to personally inspect and select their desired animals. Please contact us via WhatsApp to schedule your visit."
    },
    {
      question: "Do you offer home delivery in Lahore?",
      answer: "Yes, we provide safe and secure home delivery across all areas of Lahore right to your doorstep."
    },
    {
      question: "Can overseas Pakistanis order Sadqah/Qurbani?",
      answer: "Yes, we specialize in assisting overseas Pakistanis. We offer full video proof of the animal selection, Shariah-compliant slaughter, and meat distribution."
    }
  ];

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const textMessage = `*New Website Inquiry* 🐐\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    const encodedMessage = encodeURIComponent(textMessage);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(waLink, '_blank');
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* Custom Animations matching Brand feel */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-fade-in { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />

      <main className="bg-[#f8faf9] min-h-screen font-sans text-[#0a1a0f] overflow-hidden pt-[100px]">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full min-h-[55vh] flex items-center justify-center pt-10 pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shadow-sm z-10">
          {/* Background Image & Brand Gradients */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594903102373-c60317e08f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f]/95 via-[#12823b]/85 to-[#0a1a0f]/95 z-0"></div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffc222_2px,transparent_2px)] [background-size:30px_30px] z-0"></div>

          {/* Watermark Logo/Text */}
          <div className="absolute -left-20 top-20 opacity-5 select-none pointer-events-none z-0">
            <span className="text-[200px] font-serif font-bold text-white leading-none">البربری</span>
          </div>

          <div className={`relative z-10 text-center flex flex-col items-center px-6 max-w-3xl mx-auto mt-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="bg-[#ffc222] text-[#0a1a0f] font-bold tracking-widest uppercase text-xs px-5 py-2 rounded-full mb-6 inline-flex items-center gap-2 shadow-lg cursor-default">
              We Are Here To Help
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
              Get in <span className="text-[#ffc222]">Touch</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium max-w-2xl text-opacity-90">
              Reach out to Al Barbari Goat Farming for orders, Sadqah requests, or farm visits. Our team is available 24/7 to assist you.
            </p>
          </div>
        </section>

        {/* ================= OVERLAPPING QUICK INFO CARDS ================= */}
        <section className="max-w-[1440px] mx-auto px-6 relative z-20 -mt-24 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: WhatsApp */}
            <div className={`bg-white p-8 rounded-[30px] shadow-lg hover:shadow-[0_20px_40px_rgba(18,130,59,0.12)] border border-transparent hover:border-[#12823b]/20 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 ${isVisible ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#12823b]/5 rounded-bl-[80px] transition-transform duration-500 group-hover:scale-110"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-[#12823b] rounded-2xl flex items-center justify-center mb-6 text-white shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                  <FaWhatsapp className="text-3xl" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-[#0a1a0f]">WhatsApp Us</h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">Fastest way to get a response.</p>
                <p className="font-bold text-[#12823b] text-xl">+92 328 0425087</p>
              </div>
            </div>

            {/* Card 2: Call */}
            <div className={`bg-[#12823b] p-8 rounded-[30px] shadow-lg hover:shadow-[0_20px_40px_rgba(18,130,59,0.2)] transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-[#ffc222]"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#12823b] shadow-md transform group-hover:-rotate-6 transition-transform duration-300">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-white">Call Direct</h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">Available 24 Hours / 7 Days.</p>
                <p className="font-bold text-[#ffc222] text-xl">+92 313 6550556</p>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className={`bg-white p-8 rounded-[30px] shadow-lg hover:shadow-[0_20px_40px_rgba(255,194,34,0.15)] border border-transparent hover:border-[#ffc222]/50 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffc222]/10 rounded-bl-[80px] transition-transform duration-500 group-hover:scale-110"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-[#ffc222] rounded-2xl flex items-center justify-center mb-6 text-[#0a1a0f] shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-[#0a1a0f]">Head Office</h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">Tariq Block, New Garden Town.</p>
                <p className="font-bold text-[#12823b] text-xl">Lahore, Pakistan</p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= MAIN CONTENT: FORM & SOCIALS ================= */}
        <section className={`max-w-[1440px] mx-auto px-6 py-10 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
          
          {/* === LEFT COLUMN: Form === */}
          <div className="lg:col-span-7 bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 md:p-14 border border-gray-100 relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#0a1a0f]">Send a Message</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Fill out your details below and we will instantly connect with you on WhatsApp.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col group">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1 group-focus-within:text-[#12823b] transition-colors">Full Name</label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe"
                    className="w-full bg-[#f8faf9] border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all text-[#0a1a0f] font-medium"
                  />
                </div>
                <div className="flex flex-col group">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1 group-focus-within:text-[#12823b] transition-colors">Phone Number</label>
                  <input 
                    type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+92 300 0000000"
                    className="w-full bg-[#f8faf9] border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all text-[#0a1a0f] font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col group">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1 group-focus-within:text-[#12823b] transition-colors">Subject</label>
                <div className="relative">
                  <select 
                    name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full bg-[#f8faf9] border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all appearance-none cursor-pointer text-[#0a1a0f] font-medium"
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="Buy Livestock">Buy Livestock</option>
                    <option value="Sadqah / Aqeeqah">Sadqah / Aqeeqah</option>
                    <option value="Farm Visit">Farm Visit</option>
                    <option value="Overseas Query">Overseas Query</option>
                  </select>
                  <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col group">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1 group-focus-within:text-[#12823b] transition-colors">Message</label>
                <textarea 
                  name="message" required rows="5" value={formData.message} onChange={handleChange} placeholder="How can we help you today?"
                  className="w-full bg-[#f8faf9] border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all resize-none text-[#0a1a0f] font-medium"
                />
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-3 bg-[#ffc222] text-[#0a1a0f] py-4 px-8 rounded-full font-bold text-lg hover:bg-[#12823b] hover:text-white transition-all duration-300 shadow-[0_10px_20px_rgba(255,194,34,0.2)] hover:shadow-[0_15px_30px_rgba(18,130,59,0.3)] hover:-translate-y-1 group"
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" /> Send via WhatsApp
              </button>
            </form>
          </div>

          {/* === RIGHT COLUMN: Socials & Email === */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            {/* Email Info */}
            <div className="bg-[#0a1a0f] text-white rounded-[40px] p-10 md:p-12 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#12823b] rounded-bl-full opacity-40 transition-transform duration-700 group-hover:scale-125"></div>
              
              <div className="relative z-10">
                <span className="bg-[#12823b] text-white font-bold tracking-widest uppercase text-[10px] px-3 py-1 rounded-full mb-6 inline-block">
                  Electronic Mail
                </span>
                <h3 className="text-3xl font-serif mb-4">Email Us</h3>
                <p className="text-gray-300 mb-8 text-sm leading-relaxed opacity-90">
                  Prefer writing an email? Drop us a line and our support team will get back to you within 24 hours.
                </p>
                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#ffc222]/50 transition-colors">
                  <div className="w-12 h-12 bg-[#ffc222] text-[#0a1a0f] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <a href="mailto:albarbarigoatfarming@gmail.com" className="font-bold hover:text-[#ffc222] transition-colors truncate">
                    albarbarigoatfarming@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Grid */}
            <div className="bg-white rounded-[40px] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex-grow flex flex-col justify-center">
              <h3 className="text-3xl font-serif mb-4 text-[#0a1a0f]">Connect With Us</h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                Follow us on social media to see our latest livestock, farm updates, and happy customers.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.facebook.com/people/ALBarbari-Goat-Farming-Pakistan/61551449519975/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-[#f8faf9] border border-gray-100 hover:border-[#1877f2]/30 hover:bg-[#1877f2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 group">
                  <FaFacebookF className="text-[#1877f2] group-hover:text-white text-xl" />
                  <span className="font-bold text-sm">Facebook</span>
                </a>
                <a href="https://www.instagram.com/albarbarigoat_lahore" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-[#f8faf9] border border-gray-100 hover:border-transparent hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 group">
                  <FaInstagram className="text-[#c13584] group-hover:text-white text-xl" />
                  <span className="font-bold text-sm">Instagram</span>
                </a>
                <a href="https://www.youtube.com/@albarbarigoatfarimg" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-[#f8faf9] border border-gray-100 hover:border-[#ff0000]/30 hover:bg-[#ff0000] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 group">
                  <FaYoutube className="text-[#ff0000] group-hover:text-white text-xl" />
                  <span className="font-bold text-sm">YouTube</span>
                </a>
                <a href="https://www.linkedin.com/in/s-sz-536686157/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-[#f8faf9] border border-gray-100 hover:border-[#0a66c2]/30 hover:bg-[#0a66c2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 group">
                  <FaLinkedinIn className="text-[#0a66c2] group-hover:text-white text-xl" />
                  <span className="font-bold text-sm">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className={`max-w-4xl mx-auto px-6 py-10 mb-20 ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-[#12823b] uppercase tracking-[0.2em] mb-2">Got Questions?</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#0a1a0f]">Frequently Asked</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 hover:border-[#12823b]/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`font-bold text-lg transition-colors ${activeFaq === index ? 'text-[#12823b]' : 'text-[#0a1a0f] group-hover:text-[#12823b]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${activeFaq === index ? 'rotate-180 bg-[#ffc222] text-[#0a1a0f]' : 'bg-[#f8faf9] text-gray-400 group-hover:bg-[#12823b]/10 group-hover:text-[#12823b]'}`}>
                    <FaChevronDown />
                  </div>
                </button>
                <div 
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-40 pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MAP SECTION ================= */}
        <section className={`max-w-[1440px] mx-auto px-6 pb-32 ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
          <div className="w-full h-[500px] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative border-8 border-white group">
            <div className="absolute inset-0 bg-[#12823b]/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.565860475471!2d74.31682709999999!3d31.50654165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919046c82ff19c1%3A0xf63aef851a7b64bc!2sTariq%20Block%20Garden%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Barbari Goat Farming Location"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </section>

      </main>
    </>
  );
}