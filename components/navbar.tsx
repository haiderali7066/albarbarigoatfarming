"use client";

import React, { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
  FaTwitter,
  FaGlobe,
  FaPlaneDeparture,
} from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavLink {
  name: string;
  path: string;
  urdu?: boolean;
  highlight?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { name: 'HOME', path: '/' },
  { name: 'بکرے', path: '/bakray', urdu: true },
  { name: 'CEO MSG', path: '/ceo' },
  { name: 'AQEEQAH / SADQA', path: '/aqeeqah-sadqa', highlight: true },
  { name: 'BLOG', path: '/blog' },
  { name: 'ABOUT US', path: '/about' },
];

const MOBILE_NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'بکرے', path: '/bakray', urdu: true },
  { name: 'CEO Msg', path: '/ceo' },
  { name: 'Aqeeqah / Sadqa', path: '/aqeeqah-sadqa', highlight: true },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Detect scroll to trigger the sticky styling changes & hide marquee
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Brand Colors
  const primaryGreen = '#12823b';
  const accentYellow = '#ffc222';

  return (
    <>
      {/* Custom CSS: fonts + seamless Marquee animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400..700&display=swap');

        /* Nastaliq applies ONLY to Urdu text (brand name, nav link, Urdu dua translation).
           Arabic (the dua marquee) and English keep their existing fonts. */
        .font-nastaliq {
          font-family: "Noto Nastaliq Urdu", serif;
          font-optical-sizing: auto;
          font-weight: 700;
          font-style: normal;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-seamless {
          display: flex;
          white-space: nowrap;
          animation: scroll 28s linear infinite;
        }
        .animate-marquee-seamless:hover {
          animation-play-state: paused;
        }
        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-dua {
          display: flex;
          white-space: nowrap;
          animation: scrollReverse 26s linear infinite;
        }
        .animate-marquee-dua:hover {
          animation-play-state: paused;
        }
        @keyframes pulseBadge {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 194, 34, 0.55); }
          50% { box-shadow: 0 0 0 6px rgba(255, 194, 34, 0); }
        }
        .pulse-badge {
          animation: pulseBadge 2.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-seamless,
          .animate-marquee-dua,
          .pulse-badge {
            animation: none !important;
          }
        }
      `,
        }}
      />

      <header className="fixed top-0 left-0 w-full z-[100] flex flex-col font-sans">
        {/* ========================================= */}
        {/* 1. MARQUEE TOP BAR (Hides on scroll)      */}
        {/* ========================================= */}
        <div
          className={`bg-[#12823b] text-white text-[11px] sm:text-xs md:text-sm font-medium overflow-hidden transition-all duration-300 shadow-md ${
            isScrolled ? 'h-0 py-0 opacity-0' : 'h-[30px] sm:h-[34px] py-1.5 sm:py-2 opacity-100'
          }`}
        >
          <div className="animate-marquee-seamless w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center tracking-wide">
                <span className="mx-4 sm:mx-6">🐐 Welcome to Al-Barbari Goat Farming</span>
                <span className="mx-2">•</span>
                <span className="mx-4 sm:mx-6">Book your premium purebred Bakray today</span>
                <span className="mx-2">•</span>
                <span className="mx-4 sm:mx-6">Special arrangements for Aqeeqah &amp; Sadqah</span>
                <span className="mx-2">•</span>
                <span className="mx-4 sm:mx-6">100% Pure Bloodline &amp; Healthy Livestock</span>
                <span className="mx-2">•</span>
                <span className="mx-4 sm:mx-6 flex items-center gap-1.5" style={{ color: accentYellow }}>
                  <FaPlaneDeparture size={11} /> Overseas Orders &amp; Payments: 0327-7666764
                </span>
                <span className="mx-2">•</span>
                <span className="mx-4 sm:mx-6">Delivery Available Nationwide</span>
                <span className="mx-2">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* 2. FIXED NAVBAR (Desktop / Tablet)         */}
        {/* full-width, edge-to-edge                   */}
        {/* ========================================= */}
        <div className="w-full hidden lg:block">
          <div
            className={`w-full h-[92px] xl:h-[100px] bg-white overflow-hidden flex border-b border-gray-100 relative transition-shadow duration-300 ${
              isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.1)]' : 'shadow-sm'
            }`}
          >
            {/* Left Section: Logo & Name (White BG) */}
            <div className="w-[260px] xl:w-[340px] h-full flex items-center pl-4 xl:pl-8 bg-white z-10 shrink-0">
              <Link href="/" className="flex items-center gap-2.5 xl:gap-3 group w-full">
                <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] rounded-full overflow-hidden border-2 border-[#ffc222] group-hover:scale-105 transition-transform bg-white shrink-0 shadow-sm">
                  <img
                    src="/logo.png"
                    alt="Al-Barbari Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-base xl:text-2xl font-bold text-[#12823b] leading-tight font-nastaliq tracking-wide group-hover:text-[#e5ae1e] transition-colors whitespace-nowrap">
                    البربری گوٹ فارمنگ
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Section Container (Two Rows) */}
            <div className="flex-1 flex flex-col h-full bg-white relative min-w-0">
              {/* Row 1: Top Green Bar with Slant */}
              <div className="h-[44px] xl:h-[46px] flex w-full relative">
                {/* SVG Slant Cap */}
                <div className="w-[40px] xl:w-[45px] h-[44px] xl:h-[46px] absolute left-0 top-0 z-20">
                  <svg viewBox="0 0 45 46" preserveAspectRatio="none" className="w-full h-full">
                    <polygon points="45,0 45,46 0,46" fill={primaryGreen} />
                    <rect x="0" y="43" width="45" height="3" fill={accentYellow} />
                    <polygon points="0,46 45,0 45,5 6,46" fill={accentYellow} />
                  </svg>
                </div>

                {/* Main Green Bar */}
                <div
                  className="ml-[39px] xl:ml-[44px] flex-1 flex items-center gap-3 xl:gap-6 pr-4 xl:pr-8 text-white z-10 min-w-0"
                  style={{ backgroundColor: primaryGreen, borderBottom: `3px solid ${accentYellow}` }}
                >
                  {/* Dua Marquee — Arabic + Urdu translation, own fonts */}
                  <div className="flex-1 min-w-0 h-full overflow-hidden flex items-center">
                    <div className="animate-marquee-dua w-max">
                      {[...Array(2)].map((_, i) => (
                        <span key={i} className="mx-6 xl:mx-10 inline-flex items-baseline gap-3">
                          <span
                            dir="rtl"
                            className="font-serif text-[13px] xl:text-[16px] tracking-wide"
                            style={{ color: accentYellow }}
                          >
                            رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ
                          </span>
                          <span className="text-white/40 text-xs">|</span>
                          <span
                            dir="rtl"
                            className="font-nastaliq text-[13px] xl:text-[15px] tracking-wide text-white/90"
                          >
                            اے میرے رب، جو بھلائی بھی تو مجھ پر نازل کرے میں اس کا محتاج ہوں
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] h-[18px] bg-white/30 shrink-0 hidden xl:block"></div>

                  {/* Phone Info */}
                  <a
                    href="tel:+923280425087"
                    className="flex items-center gap-2 xl:gap-3 hover:text-[#ffc222] transition-colors group shrink-0"
                  >
                    <FaPhoneAlt size={14} color={accentYellow} />
                    <div className="hidden xl:flex flex-col leading-tight">
                      <span className="text-[9px] text-gray-200 font-bold tracking-widest group-hover:text-white transition-colors">
                        CALL US
                      </span>
                      <span className="font-bold text-[13px] tracking-wide">+92 328 0425087</span>
                    </div>
                  </a>

                  {/* Divider */}
                  <div className="w-[1px] h-[18px] bg-white/30 shrink-0 hidden xl:block"></div>

                  {/* Address Info */}
                  <div className="items-center gap-3 shrink-0 hidden xl:flex">
                    <FaMapMarkerAlt size={18} color={accentYellow} />
                    <div className="flex flex-col leading-tight">
                      <span className="text-[9px] text-gray-200 font-bold tracking-widest">LOCATION</span>
                      <span className="text-[12px] font-semibold text-white">Trade Center JT Lahore</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Main Nav Links (White Bar) */}
              <div className="flex-1 w-full bg-white flex items-center justify-end pr-4 xl:pr-8 relative z-10">
                <nav className="flex items-center gap-4 xl:gap-8 mr-4 xl:mr-8">
                  {NAV_LINKS.map((link) =>
                    link.highlight ? (
                      <Link
                        key={link.name}
                        href={link.path}
                        className="pulse-badge flex items-center gap-1.5 bg-[#ffc222] hover:bg-[#e5ae1e] text-[#0a1a0f] font-extrabold text-[11px] xl:text-[12px] uppercase tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-[#0a1a0f]/5 whitespace-nowrap"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        key={link.name}
                        href={link.path}
                        className={`text-[#0a1a0f] font-bold text-[12px] xl:text-[13px] uppercase hover:text-[#12823b] transition-all tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#ffc222] after:left-0 after:-bottom-1.5 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap ${
                          link.urdu ? 'font-nastaliq normal-case text-[15px]' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </nav>

                {/* Right Edge Actions */}
                <div className="flex items-center gap-4 xl:gap-5 pl-4 xl:pl-5 border-l border-gray-200">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 bg-[#0a1a0f] hover:bg-[#12823b] text-white font-bold py-2 px-4 xl:px-5 rounded-full text-[11px] xl:text-[12px] uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    <FaGlobe size={13} />
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* 3. MOBILE / TABLET NAVIGATION HEADER       */}
        {/* full-width, edge-to-edge                    */}
        {/* ========================================= */}
        <div className="w-full lg:hidden">
          <div
            className={`w-full bg-white h-[68px] sm:h-[75px] flex items-center justify-between px-3 sm:px-4 border-b border-gray-100 transition-shadow duration-300 ${
              isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.1)]' : 'shadow-sm'
            }`}
          >
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] rounded-full overflow-hidden border-2 border-[#ffc222] bg-white shrink-0">
                <img src="/logo.png" alt="Al-Barbari Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-xl font-bold text-[#12823b] leading-tight font-nastaliq tracking-wide whitespace-nowrap">
                  البربری گوٹ فارمنگ
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="tel:+923277666764"
                aria-label="Overseas Orders"
                className="hidden sm:flex items-center gap-1.5 bg-[#12823b] text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1.5 rounded-full"
              >
                <FaPlaneDeparture size={11} color={accentYellow} />
                <span className="hidden md:inline">Overseas</span>
              </a>
              <button
                className="text-2xl text-[#12823b] p-2 focus:outline-none hover:text-[#e5ae1e] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation"
              >
                {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </div>
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
          className={`fixed top-0 right-0 h-full w-[88%] sm:w-[85%] max-w-[360px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex-1 overflow-y-auto pt-16 sm:pt-20 pb-8 px-5 sm:px-6">
            {/* Close Button Inside Sidebar */}
            <button
              className="absolute top-5 sm:top-6 right-5 sm:right-6 text-gray-400 hover:text-[#12823b] transition-colors bg-gray-50 rounded-full p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiX size={22} />
            </button>

            {/* Dua strip inside mobile sidebar — Arabic + Urdu translation */}
            <div
              className="mb-6 mt-2 py-3 px-3 rounded-xl overflow-hidden flex flex-col gap-1.5"
              style={{ backgroundColor: primaryGreen }}
            >
              <span
                dir="rtl"
                className="font-serif text-[13px] tracking-wide leading-relaxed block text-center"
                style={{ color: accentYellow }}
              >
                رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ
              </span>
              <span
                dir="rtl"
                className="font-nastaliq text-[12px] tracking-wide leading-relaxed block text-center text-white/85"
              >
                اے میرے رب، جو بھلائی بھی تو مجھ پر نازل کرے میں اس کا محتاج ہوں
              </span>
            </div>

            <nav className="flex flex-col gap-3 sm:gap-4 text-[#0a1a0f] font-bold text-base sm:text-lg mt-4">
              {MOBILE_NAV_LINKS.map((link) =>
                link.highlight ? (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="pulse-badge flex items-center justify-between gap-2 bg-[#ffc222] hover:bg-[#e5ae1e] text-[#0a1a0f] font-extrabold py-3 px-4 rounded-xl transition-all group"
                  >
                    {link.name}
                    <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-all" />
                  </Link>
                ) : (
                  <React.Fragment key={link.name}>
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`hover:text-[#12823b] transition-colors py-2 flex items-center justify-between group ${
                        link.urdu ? 'font-nastaliq' : ''
                      }`}
                    >
                      {link.name}
                      <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all text-[#ffc222]" />
                    </Link>
                    <div className="w-full h-px bg-gray-100 last:hidden"></div>
                  </React.Fragment>
                )
              )}
            </nav>

            {/* Mobile Contact Info Block */}
            <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-[#12823b]/5 border border-[#12823b]/10 flex flex-col gap-4">
              <h4 className="text-[#12823b] font-bold border-b border-[#12823b]/10 pb-2 mb-1">Get in Touch</h4>

              <a
                href="https://wa.me/923280425087"
                className="flex items-center gap-3 text-gray-700 hover:text-[#12823b] transition-colors font-medium"
              >
                <div className="w-[36px] h-[36px] bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <FaWhatsapp className="text-xl" />
                </div>
                <span className="text-sm">+92 328 0425087</span>
              </a>

              <a
                href="tel:+923280425087"
                className="flex items-center gap-3 text-gray-700 hover:text-[#12823b] transition-colors font-medium"
              >
                <div className="w-[36px] h-[36px] bg-[#12823b] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <span className="text-sm">Call Us Directly</span>
              </a>

              {/* Overseas Orders & Payments */}
              <a
                href="tel:+923277666764"
                className="flex items-center gap-3 text-gray-700 hover:text-[#12823b] transition-colors font-medium"
              >
                <div className="w-[36px] h-[36px] bg-[#ffc222] text-[#0a1a0f] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <FaPlaneDeparture className="text-sm" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm">Overseas Orders &amp; Payments</span>
                  <span className="text-xs text-gray-500">0327-7666764</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-[36px] h-[36px] bg-[#0a1a0f] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <span className="text-xs leading-snug">Trade Center JT Lahore</span>
              </div>

              {/* Mobile Socials */}
              <div className="flex items-center gap-3 mt-2 pt-4 border-t border-[#12823b]/10">
                {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#12823b] hover:bg-[#ffc222] hover:text-[#0a1a0f] transition-colors"
                  >
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