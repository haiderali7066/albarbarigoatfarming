"use client"
import React, { FC } from 'react';
import Link from 'next/link';
// 1. Font Awesome 5 Icons (Supports your Alt names)
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaFacebookF, 
  FaTwitter, 
  FaPinterestP, 
  FaInstagram 
} from 'react-icons/fa';

// 2. Font Awesome 6 Icons (For the unique wheat animation)
import { FaWheatAwn } from 'react-icons/fa6';

// 3. Feather Icons
import { FiArrowUp } from 'react-icons/fi';

const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0d2614] text-white overflow-hidden font-sans select-none">
      {/* Subtle Background Pattern Layer */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-cover bg-bottom bg-no-repeat transition-opacity duration-500" 
        style={{ backgroundImage: "url('/farm-sketch-bg.png')" }}
      />

      {/* Main Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Animated Logo & About */}
          <div className="flex flex-col gap-6 group/logo-sec">
            {/* Logo Wrapper with Interactive Hover State */}
            <div className="relative w-[150px] h-[150px] bg-[#091d0e] rounded-full flex items-center justify-center p-1.5 border border-[#1e4a27] shadow-2xl transition-all duration-500 hover:border-[#ffc222]/40 hover:shadow-[#ffc222]/5">
              
              {/* Rotating SVG Text Ring */}
              <div className="absolute inset-0 w-full h-full p-1 animate-[spin_25s_linear_infinite] group-hover/logo-sec:[animation-duration:15s] transition-all duration-700">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path 
                    id="textPathCurve" 
                    d="M 12 50 A 38 38 0 1 1 88 50 A 38 38 0 1 1 12 50" 
                    fill="transparent" 
                  />
                  <text className="text-[7.5px] font-extrabold fill-white/80 tracking-[0.22em] uppercase uppercase-words">
                    <textPath href="#textPathCurve" startOffset="0%">
                      • AL-BARBARI GOAT FARM • AL-BARBARI GOAT FARM
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Inner Center Circle with Wheat Icon */}
              <div className="w-full h-full bg-[#0d2614] rounded-full border-2 border-dashed border-[#2a7d2e]/60 flex flex-col items-center justify-center relative z-10 transition-transform duration-500 group-hover/logo-sec:scale-95">
                <div className="flex items-end justify-center gap-0.5 text-[#ffc222] text-3xl animate-pulse">
                  <FaWheatAwn className="-rotate-12 transition-transform duration-500 group-hover/logo-sec:-rotate-45" />
                  <FaWheatAwn className="rotate-12 transition-transform duration-500 group-hover/logo-sec:rotate-45" />
                </div>
                <span className="absolute bottom-4 text-[8px] font-bold text-white/50 tracking-[0.3em] uppercase">
                  ABG
                </span>
              </div>
            </div>
            
            <p className="text-[#a4b4a9] text-[16px] font-medium leading-relaxed max-w-[290px]">
              Welcome to our Agriculture Farming. Lorem simply text amet cing elit.
            </p>
          </div>

          {/* Column 2: Explore Navigation */}
          <div>
            <h3 className="text-white text-[22px] font-bold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-[#ffc222]">
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              {['About', 'Our Farmers', 'New Project', 'Services', 'Contact'].map((item) => (
                <li key={item} className="overflow-hidden">
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-[#a4b4a9] hover:text-white hover:translate-x-1 transition-all duration-300 text-[16px] font-medium inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1.5px] bg-[#ffc222] transition-all duration-300 group-hover:w-3"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent News Cards */}
          <div>
            <h3 className="text-white text-[22px] font-bold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-[#ffc222]">
              News
            </h3>
            <div className="flex flex-col gap-6">
              {/* News Item 1 */}
              <div className="flex gap-4 items-center group cursor-pointer">
                <div className="w-[75px] h-[75px] rounded-xl overflow-hidden shrink-0 bg-[#091d0e]">
                  <img 
                    src="https://images.unsplash.com/photo-1592982537447-6f296d0547ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                    alt="Tractor" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#ffc222] font-bold text-[13px] tracking-wide">23 Jan, 23</span>
                  <Link href="#" className="text-white font-bold text-[15px] leading-snug hover:text-[#ffc222] transition-colors line-clamp-2">
                    Why Agriculture for the Environment
                  </Link>
                </div>
              </div>
              
              {/* News Item 2 */}
              <div className="flex gap-4 items-center group cursor-pointer">
                <div className="w-[75px] h-[75px] rounded-xl overflow-hidden shrink-0 bg-[#091d0e]">
                  <img 
                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                    alt="Haystacks" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#ffc222] font-bold text-[13px] tracking-wide">23 Jan, 23</span>
                  <Link href="#" className="text-white font-bold text-[15px] leading-snug hover:text-[#ffc222] transition-colors line-clamp-2">
                    Praesent varius elit nisl, in maximus augue
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Newsletter Input */}
          <div>
            <h3 className="text-white text-[22px] font-bold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-[#ffc222]">
              Contact
            </h3>
            <div className="flex flex-col gap-4 mb-6">
              <a href="tel:+9200886823" className="flex items-center gap-3 text-[#a4b4a9] hover:text-[#ffc222] transition-colors text-[16px] group">
                <span className="w-8 h-8 rounded-full bg-[#14331c] flex items-center justify-center text-[#ffc222] transition-colors group-hover:bg-[#ffc222] group-hover:text-[#0d2614]">
                  <FaPhoneAlt className="text-xs" />
                </span>
                <span>+92 (0088) 6823</span>
              </a>
              <a href="mailto:needhelp@company.com" className="flex items-center gap-3 text-[#a4b4a9] hover:text-[#ffc222] transition-colors text-[16px] group">
                <span className="w-8 h-8 rounded-full bg-[#14331c] flex items-center justify-center text-[#ffc222] transition-colors group-hover:bg-[#ffc222] group-hover:text-[#0d2614]">
                  <FaEnvelope className="text-xs" />
                </span>
                <span className="break-all">needhelp@company.com</span>
              </a>
              <div className="flex items-center gap-3 text-[#a4b4a9] text-[16px] group">
                <span className="w-8 h-8 rounded-full bg-[#14331c] flex items-center justify-center text-[#ffc222]">
                  <FaMapMarkerAlt className="text-xs" />
                </span>
                <span>80 Broklyn Golden Street. USA</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-full p-1.5 flex items-center mt-4 shadow-xl border border-transparent focus-within:border-[#ffc222]/60 transition-all duration-300">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 py-2 text-gray-800 outline-none placeholder:text-gray-400 font-medium text-[15px] w-full"
                required
              />
              <button 
                type="submit" 
                aria-label="Subscribe"
                className="w-[42px] h-[42px] rounded-full bg-[#ffc222] flex items-center justify-center hover:bg-[#e5ae1e] transition-all duration-300 group shrink-0"
              >
                <FaArrowRight className="w-4 h-4 text-[#0d2614] transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Copyright and Socials Row */}
      <div className="bg-[#08180d] border-t border-white/[0.03]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16">
          
          {/* Left Block: Smooth Back to Top + Copyright Text */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
            {/* Extended Height Scroll To Top Button */}
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-full md:w-[85px] h-[55px] md:h-[90px] bg-[#246927] flex items-center justify-center hover:bg-[#1d541f] transition-all duration-300 group shrink-0 rounded-b-none md:rounded-t-none"
            >
              <FiArrowUp className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-y-1.5 stroke-[2.5]" />
            </button>
            
            <p className="text-[#a4b4a9] text-[14px] font-medium py-6 md:py-0 md:ml-8 text-center md:text-left tracking-wide">
              © All Copyright 2026 <span className="text-white font-semibold">Al-Barbari Goat Farming</span> - Developed by <span className="text-white hover:text-[#ffc222] transition-colors cursor-pointer">Devntom Solutions</span>
            </p>
          </div>

          {/* Right Block: Connected Social Ecosystem */}
          <div className="flex items-center gap-3 pb-6 md:pb-0">
            {[
              { icon: <FaFacebookF />, url: '#' },
              { icon: <FaTwitter />, url: '#' },
              { icon: <FaPinterestP />, url: '#' },
              { icon: <FaInstagram />, url: '#' }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.url} 
                className="w-[38px] h-[38px] rounded-full bg-[#14331c] flex items-center justify-center text-white/90 hover:bg-[#ffc222] hover:text-[#0d2614] hover:-translate-y-0.5 shadow-md transition-all duration-300 text-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;