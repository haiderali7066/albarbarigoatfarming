"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to trigger the sticky styling changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Custom CSS for seamless Marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-seamless {
          display: flex;
          white-space: nowrap;
          animation: scroll 25s linear infinite;
        }
        .animate-marquee-seamless:hover {
          animation-play-state: paused;
        }
      `}} />

      <header className="fixed top-0 left-0 w-full z-[100] flex flex-col">
        
        {/* ========================================= */}
        {/* 1. MARQUEE TOP BAR (Hides on scroll)      */}
        {/* ========================================= */}
        <div className={`bg-[#0A3B28] text-[#D4AF37] text-sm font-medium overflow-hidden transition-all duration-300 ${
          isScrolled ? 'h-0 py-0 opacity-0' : 'h-[36px] py-2 opacity-100'
        }`}>
          <div className="animate-marquee-seamless w-max">
            {/* Duplicated content for seamless infinite loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="mx-6">🐐 Welcome to Al-Barbari Goat Farming</span>
                <span className="mx-2">•</span>
                <span className="mx-6">Book your premium purebred Bakray today</span>
                <span className="mx-2">•</span>
                <span className="mx-6">Special arrangements for Aqeeqah & Sadqah</span>
                <span className="mx-2">•</span>
                <span className="mx-6">100% Pure Bloodline & Healthy Livestock</span>
                <span className="mx-2">•</span>
                <span className="mx-6">Delivery Available</span>
                <span className="mx-2">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* 2. MAIN NAVIGATION NAVBAR                 */}
        {/* ========================================= */}
        <div className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white py-4 shadow-sm'
        }`}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
            
            {/* Left Side: Logo & Farm Name */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden border-2 border-[#D4AF37] group-hover:scale-105 transition-transform bg-white shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Al-Barbari Logo" 
                  className="w-full h-full object-cover"
                  
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-[#0A3B28] leading-tight font-serif tracking-wide">
                 البربری
                </span>
                <span className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-widest">
                  گوٹ فارمنگ
                </span>
              </div>
            </Link>

            {/* Middle: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'بکرے', path: '/bakray' },
                { name: 'CEO Msg', path: '/ceo-message' },
                { name: 'Aqeeqah / Sadqa', path: '/aqeeqah-sadqa' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className="text-[#333333] font-semibold text-[15px] hover:text-[#D4AF37] relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#D4AF37] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side: Contact CTA (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-3 text-right pr-4 border-r border-gray-200">
                <div className="w-[40px] h-[40px] rounded-full bg-[#0A3B28]/10 flex items-center justify-center text-[#0A3B28]">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">WhatsApp Us</p>
                  <a href="https://wa.me/923000000000" className="text-[#0A3B28] font-bold hover:text-[#D4AF37] transition-colors">
                    +92 328 0425087
                  </a>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="bg-[#0A3B28] hover:bg-[#D4AF37] text-white hover:text-[#0A3B28] transition-all duration-300 font-bold py-2.5 px-6 rounded-full text-[15px] flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="lg:hidden text-3xl text-[#0A3B28] z-50 focus:outline-none transition-transform hover:text-[#D4AF37]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* 3. MOBILE NAVIGATION SIDEBAR              */}
        {/* ========================================= */}
        
        {/* Background Overlay */}
        <div 
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sliding Menu Panel */}
        <div 
          className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex-1 overflow-y-auto pt-24 pb-8 px-6">
            <nav className="flex flex-col gap-4 text-[#0A3B28] font-bold text-lg">
              {[
                { name: 'Home', path: '/' },
                { name: 'بکرے', path: '/bakray' },
                { name: 'CEO Msg', path: '/ceo-message' },
                { name: 'Aqeeqah / Sadqa', path: '/aqeeqah-sadqa' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <React.Fragment key={link.name}>
                  <Link 
                    href={link.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-[#D4AF37] transition-colors py-2 flex items-center justify-between group"
                  >
                    {link.name}
                    <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all text-[#D4AF37]"/>
                  </Link>
                  <div className="w-full h-px bg-gray-100 last:hidden"></div>
                </React.Fragment>
              ))}
            </nav>

            {/* Mobile Contact Info Block */}
            <div className="mt-10 p-5 rounded-2xl bg-[#0A3B28]/5 border border-[#0A3B28]/10 flex flex-col gap-4">
              <h4 className="text-[#0A3B28] font-bold border-b border-[#0A3B28]/10 pb-2 mb-2">Get in Touch</h4>
              
              <a href="https://wa.me/923280425087" className="flex items-center gap-3 text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">
                <div className="w-[36px] h-[36px] bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0">
                  <FaWhatsapp className="text-xl"/> 
                </div>
                +92 328 0425087
              </a>
              
              <a href="tel:+923280425087" className="flex items-center gap-3 text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">
                <div className="w-[36px] h-[36px] bg-[#0A3B28] text-white rounded-full flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-sm"/> 
                </div>
                Call Us Directly
              </a>
              
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-[36px] h-[36px] bg-[#D4AF37] text-white rounded-full flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-sm"/> 
                </div>
                <span>New Garden Town, Tariq Block,
Lahore, Punjab, Pakistan</span>
              </div>

              {/* Mobile Socials */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#0A3B28]/10">
                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0A3B28] hover:bg-[#D4AF37] hover:text-white transition-colors"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0A3B28] hover:bg-[#D4AF37] hover:text-white transition-colors"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;