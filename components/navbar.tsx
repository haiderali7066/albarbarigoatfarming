"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp,
  FaArrowRight,
  FaTwitter,
  FaGlobe
} from 'react-icons/fa';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to trigger the sticky styling changes & hide marquee
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

  // New Brand Colors based on the SadqahBanner reference
  const primaryGreen = "#12823b";
  const accentYellow = "#ffc222";
  const darkContrast = "#0a1a0f";

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

      <header className="fixed top-0 left-0 w-full z-[100] flex flex-col font-sans">
        
        {/* ========================================= */}
        {/* 1. MARQUEE TOP BAR (Hides on scroll)      */}
        {/* ========================================= */}
        <div className={`bg-[#12823b] text-[#ffc222] text-sm font-medium overflow-hidden transition-all duration-300 shadow-md ${
          isScrolled ? 'h-0 py-0 opacity-0' : 'h-[36px] py-2 opacity-100'
        }`}>
          <div className="animate-marquee-seamless w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center tracking-wide">
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
        {/* 2. FLOATING GEOMETRIC NAVBAR (Desktop)    */}
        {/* ========================================= */}
        <div className={`w-full transition-all duration-500 ease-in-out hidden lg:block ${
          isScrolled ? 'pt-4 px-4 lg:px-8' : 'pt-6 px-4 lg:px-8'
        }`}>
          
          <div className="max-w-[1400px] mx-auto h-[100px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden flex border border-gray-100/50 relative">
            
            {/* Left Section: Logo & Name (White BG) */}
            <div className="w-[280px] xl:w-[320px] h-full flex items-center pl-6 xl:pl-8 bg-white z-10">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-[#ffc222] group-hover:scale-105 transition-transform bg-white shrink-0 shadow-sm">
                  <img 
                    src="/logo.png" 
                    alt="Al-Barbari Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#12823b] leading-tight font-serif tracking-wide group-hover:text-[#e5ae1e] transition-colors">
                    البربری
                  </span>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.15em]">
                    گوٹ فارمنگ
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Section Container (Two Rows) */}
            <div className="flex-1 flex flex-col h-full bg-white relative">
              
              {/* Row 1: Top Green Bar with Slant */}
              <div className="h-[46px] flex w-full relative">
                
                {/* SVG Slant Cap */}
                <div className="w-[45px] h-[46px] absolute left-0 top-0 z-20">
                  <svg viewBox="0 0 45 46" preserveAspectRatio="none" className="w-full h-full">
                    {/* Green Polygon */}
                    <polygon points="45,0 45,46 0,46" fill={primaryGreen} />
                    {/* Bottom Yellow line matching the 3px border-bottom */}
                    <rect x="0" y="43" width="45" height="3" fill={accentYellow} />
                    {/* Slanted Yellow Line framing the left edge */}
                    <polygon points="0,46 45,0 45,5 6,46" fill={accentYellow} />
                  </svg>
                </div>

                {/* Main Green Bar */}
                <div 
                  className="ml-[44px] flex-1 flex items-center justify-end pr-8 text-white z-10"
                  style={{ backgroundColor: primaryGreen, borderBottom: `3px solid ${accentYellow}` }}
                >
                  {/* Social Icons */}
                  <div className="flex items-center gap-2">
                    {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp].map((Icon, idx) => (
                      <a key={idx} href="#" className="w-[26px] h-[26px] rounded-full border border-white/30 flex items-center justify-center hover:bg-[#ffc222] hover:border-[#ffc222] transition-all duration-300 group">
                        <Icon size={11} className="group-hover:text-[#0a1a0f]" />
                      </a>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] h-[20px] bg-white/30 mx-6"></div>

                  {/* Phone Info */}
                  <a href="tel:+923280425087" className="flex items-center gap-3 hover:text-[#ffc222] transition-colors group">
                    <FaPhoneAlt size={16} color={accentYellow} />
                    <div className="flex flex-col leading-tight">
                      <span className="text-[9px] text-gray-200 font-bold tracking-widest group-hover:text-white transition-colors">CALL US</span>
                      <span className="font-bold text-[13px] tracking-wide">+92 328 0425087</span>
                    </div>
                  </a>

                  {/* Divider */}
                  <div className="w-[1px] h-[20px] bg-white/30 mx-6"></div>

                  {/* Address Info */}
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt size={18} color={accentYellow} />
                    <div className="flex flex-col leading-tight">
                      <span className="text-[9px] text-gray-200 font-bold tracking-widest">LOCATION</span>
                      <span className="text-[12px] font-semibold text-white">144 TARIQ B N G TOWN LHR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Main Nav Links (White Bar) */}
              <div className="flex-1 w-full bg-white flex items-center justify-end pr-8 rounded-br-2xl relative z-10">
                <nav className="flex items-center gap-7 xl:gap-9 mr-8">
                  {[
                    { name: 'HOME', path: '/' },
                    { name: 'بکرے', path: '/bakray' },
                    { name: 'CEO MSG', path: '/ceo-message' },
                    { name: 'AQEEQAH / SADQA', path: '/aqeeqah-sadqa' },
                    { name: 'BLOG', path: '/blog' },
                    { name: 'CONTACT US', path: '/contact' },
                  ].map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.path} 
                      className="text-[#0a1a0f] font-bold text-[13px] uppercase hover:text-[#12823b] transition-all tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#ffc222] after:left-0 after:-bottom-1.5 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Right Edge Actions */}
                <div className="flex items-center gap-5 pl-5 border-l border-gray-200">
                  <button className="text-gray-500 hover:text-[#12823b] transition-colors transform hover:scale-110">
                    <FiSearch size={20} strokeWidth={2.5} />
                  </button>
                  <Link 
                    href="/contact" 
                    className="flex items-center gap-2 bg-[#ffc222] hover:bg-[#e5ae1e] text-[#0a1a0f] font-bold py-2 px-5 rounded-full text-[12px] uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <FaGlobe size={14} className="text-[#0a1a0f]" /> 
                    Book Now
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* 3. MOBILE NAVIGATION HEADER                 */}
        {/* ========================================= */}
        <div className={`w-full transition-all duration-300 lg:hidden ${
          isScrolled ? 'pt-2 px-2' : 'pt-4 px-3'
        }`}>
          <div className="bg-white rounded-xl shadow-lg h-[75px] flex items-center justify-between px-4 border border-gray-100">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-[45px] h-[45px] rounded-full overflow-hidden border-2 border-[#ffc222] bg-white shrink-0">
                <img src="/logo.png" alt="Al-Barbari Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#12823b] leading-tight font-serif tracking-wide">
                  البربری
                </span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.1em]">
                  گوٹ فارمنگ
                </span>
              </div>
            </Link>

            <button 
              className="text-2xl text-[#12823b] p-2 focus:outline-none hover:text-[#e5ae1e] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* 4. MOBILE SLIDING SIDEBAR                   */}
        {/* ========================================= */}
        <div 
          className={`fixed inset-0 bg-[#061118]/85 z-40 transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div 
          className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex-1 overflow-y-auto pt-20 pb-8 px-6">
            
            {/* Close Button Inside Sidebar */}
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-[#12823b] transition-colors bg-gray-50 rounded-full p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiX size={24} />
            </button>

            <nav className="flex flex-col gap-4 text-[#0a1a0f] font-bold text-lg mt-4">
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
                    className="hover:text-[#12823b] transition-colors py-2 flex items-center justify-between group"
                  >
                    {link.name}
                    <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all text-[#ffc222]"/>
                  </Link>
                  <div className="w-full h-px bg-gray-100 last:hidden"></div>
                </React.Fragment>
              ))}
            </nav>

            {/* Mobile Contact Info Block */}
            <div className="mt-10 p-5 rounded-2xl bg-[#12823b]/5 border border-[#12823b]/10 flex flex-col gap-4">
              <h4 className="text-[#12823b] font-bold border-b border-[#12823b]/10 pb-2 mb-2">Get in Touch</h4>
              
              <a href="https://wa.me/923280425087" className="flex items-center gap-3 text-gray-700 hover:text-[#12823b] transition-colors font-medium">
                <div className="w-[36px] h-[36px] bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <FaWhatsapp className="text-xl"/> 
                </div>
                <span className="text-sm">+92 328 0425087</span>
              </a>
              
              <a href="tel:+923280425087" className="flex items-center gap-3 text-gray-700 hover:text-[#12823b] transition-colors font-medium">
                <div className="w-[36px] h-[36px] bg-[#12823b] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <FaPhoneAlt className="text-sm"/> 
                </div>
                <span className="text-sm">Call Us Directly</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-[36px] h-[36px] bg-[#ffc222] text-[#0a1a0f] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <FaMapMarkerAlt className="text-sm"/> 
                </div>
                <span className="text-xs leading-snug">144 Tariq B N G Town LHR</span>
              </div>

              {/* Mobile Socials */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#12823b]/10">
                {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                   <a key={idx} href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#12823b] hover:bg-[#ffc222] hover:text-[#0a1a0f] transition-colors">
                     <Icon size={14} />
                   </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;