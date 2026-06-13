"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaPinterestP, 
  FaInstagram, 
  FaArrowRight 
} from 'react-icons/fa';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to trigger the sticky styling changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white lg:bg-transparent lg:pt-8 lg:pb-8 shadow-md lg:shadow-none'
      }`}
    >
      {/* Main Container */}
      <div className="relative max-w-[1300px] mx-auto px-4 flex items-center justify-between lg:justify-start py-3 lg:py-0">
        
        {/* Logo wrapper (Responsive positioning & Shrinks on scroll) */}
        <div className={`relative lg:absolute left-0 lg:left-4 z-50 transition-all duration-300 ${
          isScrolled ? 'top-0 lg:top-1/2 lg:-translate-y-1/2 scale-90' : 'top-0 lg:top-1/2 lg:-translate-y-1/2 scale-100'
        }`}>
          <Link href="/">
            <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[140px] lg:h-[140px] bg-white rounded-full flex items-center justify-center lg:shadow-lg border-2 lg:border-4 border-transparent overflow-hidden shrink-0">
               <img 
                 src="/temp.PNG" 
                 alt="Agrion Farm Logo" 
                 className="w-full h-full object-contain"
               />
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden text-3xl text-[#12310f] z-50 focus:outline-none transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* ========================================= */}
        {/* DESKTOP NAVIGATION (Hidden on mobile) */}
        {/* ========================================= */}
        <div className="hidden lg:flex w-full ml-[95px] flex-col rounded-r-2xl shadow-xl bg-white">
          
          {/* Top Bar (Dark Green) - Hides on Scroll to save space */}
          <div className={`bg-[#12310f] text-white flex justify-between items-center pr-8 pl-[120px] rounded-tr-2xl overflow-hidden transition-all duration-300 ${
            isScrolled ? 'h-0 opacity-0 py-0' : 'h-auto opacity-100 py-3'
          }`}>
            {/* Contact Information */}
            <div className="flex items-center gap-8 text-[13px] font-medium tracking-wide">
              <a href="mailto:needhelp@company.com" className="flex items-center gap-2 hover:text-[#f2b810] transition-colors">
                <FaEnvelope className="text-[#f2b810] text-sm"/> 
                needhelp@company.com
              </a>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#f2b810] text-sm"/> 
                80 Broklyn Golden Street USA
              </span>
              <a href="tel:+9200886823" className="flex items-center gap-2 hover:text-[#f2b810] transition-colors">
                <FaPhoneAlt className="text-[#f2b810] text-sm"/> 
                +92 (0088) 6823
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-sm">
              <a href="#" className="hover:text-[#f2b810] transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#f2b810] transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-[#f2b810] transition-colors"><FaPinterestP /></a>
              <a href="#" className="hover:text-[#f2b810] transition-colors"><FaInstagram /></a>
            </div>
          </div>

          {/* Bottom Bar (White) */}
          <div className={`bg-white flex justify-between items-center pr-4 pl-[120px] transition-all duration-300 ${
            isScrolled ? 'py-2 rounded-2xl' : 'py-3 rounded-br-2xl'
          }`}>
            
            {/* Navigation Links */}
            <nav className="flex items-center gap-8 text-[#666666] font-semibold text-[15px]">
              <Link href="/" className="hover:text-[#2d6b16] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#2d6b16] transition-colors">About</Link>
              <Link href="/services" className="hover:text-[#2d6b16] transition-colors">Services</Link>
              <Link href="/projects" className="hover:text-[#2d6b16] transition-colors">Projects</Link>
              <Link href="/pages" className="hover:text-[#2d6b16] transition-colors">Pages</Link>
              <Link href="/blog" className="hover:text-[#2d6b16] transition-colors">Blog</Link>
              <Link href="/shop" className="hover:text-[#2d6b16] transition-colors">Shop</Link>
              <Link href="/contact" className="hover:text-[#2d6b16] transition-colors">Contact</Link>
            </nav>

            {/* Actions (Search, Cart, Button) */}
            <div className="flex items-center gap-6">
              
              <div className="h-8 w-[1px] bg-gray-200 ml-2"></div>
              
              <button className="text-gray-800 hover:text-[#2d6b16] transition-colors">
                <FiSearch className="text-xl stroke-[2.5]" />
              </button>
              <button className="text-gray-800 hover:text-[#2d6b16] transition-colors">
                <FiShoppingCart className="text-xl stroke-[2.5]" />
              </button>

              <Link 
                href="/quote" 
                className="group flex items-center gap-4 bg-[#215a13] hover:bg-[#18420e] transition-colors text-white font-bold py-2 pl-7 pr-2 rounded-full text-[15px]"
              >
                Get Free Quote
                <span className="bg-[#f2b810] flex items-center justify-center w-[34px] h-[34px] rounded-full group-hover:scale-105 transition-transform">
                  <FaArrowRight className="text-[#12310f] text-sm" />
                </span>
              </Link>

            </div>
          </div>
          
        </div>

        {/* ========================================= */}
        {/* MOBILE NAVIGATION SIDEBAR                 */}
        {/* ========================================= */}
        
        {/* Background Overlay */}
        <div 
          className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sliding Menu Panel */}
        <div 
          className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Links */}
          <nav className="flex flex-col px-6 pt-24 pb-8 gap-5 text-[#12310f] font-semibold text-lg">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <div className="w-full h-px bg-gray-100"></div>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <div className="w-full h-px bg-gray-100"></div>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <div className="w-full h-px bg-gray-100"></div>
            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
            <div className="w-full h-px bg-gray-100"></div>
            <Link href="/pages" onClick={() => setIsMobileMenuOpen(false)}>Pages</Link>
            <div className="w-full h-px bg-gray-100"></div>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <div className="w-full h-px bg-gray-100"></div>
            <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <div className="w-full h-px bg-gray-100"></div>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

            {/* Mobile Actions */}
            <div className="flex items-center gap-6 mt-4">
              <button className="text-gray-800 hover:text-[#2d6b16] transition-colors">
                <FiSearch className="text-2xl stroke-[2.5]" />
              </button>
              <button className="text-gray-800 hover:text-[#2d6b16] transition-colors">
                <FiShoppingCart className="text-2xl stroke-[2.5]" />
              </button>
            </div>

            <Link 
              href="/quote" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-between bg-[#215a13] text-white font-bold py-3 pl-6 pr-3 rounded-full text-[15px]"
            >
              Get Free Quote
              <span className="bg-[#f2b810] flex items-center justify-center w-[34px] h-[34px] rounded-full">
                <FaArrowRight className="text-[#12310f] text-sm" />
              </span>
            </Link>

            {/* Mobile Contact Info Block */}
            <div className="mt-8 flex flex-col gap-4 text-sm text-gray-600 font-medium bg-gray-50 p-4 rounded-xl">
              <a href="mailto:needhelp@company.com" className="flex items-center gap-3">
                <FaEnvelope className="text-[#215a13] text-lg shrink-0"/> 
                needhelp@company.com
              </a>
              <a href="tel:+9200886823" className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#215a13] text-lg shrink-0"/> 
                +92 (0088) 6823
              </a>
            </div>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;