"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaGlobe,
  FaPhoneAlt,
} from "react-icons/fa";

// 1. Move static data OUTSIDE the component to prevent re-initialization on every render
const paymentMethods = [
  {
    id: 1,
    title: "Bank Transfer",
    desc: "Direct online transfer to our official Meezan / HBL business accounts.",
    logoUrl: "https://img.icons8.com/color/96/bank-building.png",
    tag: "Preferred",
  },
  {
    id: 2,
    title: "Credit / Debit Card",
    desc: "We accept Visa and Mastercard for seamless online checkout.",
    logoUrl: "https://cdn.simpleicons.org/visa/1434CB",
    logoUrl2: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
    tag: "Global",
  },
  {
    id: 3,
    title: "Easypaisa",
    desc: "Quick, local, and secure mobile wallet transfers via the Easypaisa app.",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMk7W6ne09A91fWqZG62MBQKGkwSd8z_ofOBBOjYxTA&s=10",
    tag: "Instant",
  },
  {
    id: 4,
    title: "JazzCash",
    desc: "Instant digital payments directly to our official JazzCash merchant number.",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw--utIGcp34Q3aJEALUoV5KT-0u_IQEjOvh0IUv7WaA&s=10",
    tag: "Instant",
  },
  {
    id: 5,
    title: "Cash on Delivery",
    desc: "Pay securely in cash upon doorstep delivery or farm pickup.",
    logoUrl: "https://img.icons8.com/color/96/cash-in-hand.png",
    tag: "Local Only",
  },
  {
    id: 6,
    title: "100% Secure",
    desc: "Every transaction is verified and backed by an official Al-Barbari receipt.",
    logoUrl: "https://img.icons8.com/color/96/shield.png",
    tag: "Verified",
  },
];

// 2. Move Variants OUTSIDE to keep references stable for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PaymentSection() {
  return (
    <section className="bg-[#f8faf9] py-24 font-sans relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#12823b] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ffc222] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#12823b]/20 shadow-sm text-[#12823b] font-bold tracking-widest uppercase text-xs px-5 py-2.5 rounded-full mb-6 flex items-center gap-2"
          >
            <FaShieldAlt className="text-[#ffc222] text-sm" /> Safe & Transparent
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0a1a0f] mb-6"
          >
            Flexible <span className="text-[#12823b]">Payment</span> Options
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-2xl text-lg leading-relaxed"
          >
            We offer multiple secure and highly flexible payment methods to make
            your livestock purchase as smooth as possible.
          </motion.p>
        </div>

        {/* Payment Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {paymentMethods.map((method) => (
            <motion.div
              key={method.id}
              variants={itemVariants}
              className="group bg-[#12823b] rounded-3xl p-8 border border-green-700/50 shadow-lg hover:shadow-2xl hover:bg-[#0f6f32] transition-all duration-300 flex flex-col items-start relative overflow-hidden"
            >
              {/* Top Right Tag - Yellow for contrast against Green */}
              <div className="absolute top-6 right-6 bg-[#ffc222] text-[#0a1a0f] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm z-10">
                {method.tag}
              </div>

              {/* Logo / Image Container */}
              <div className="h-16 flex items-center gap-3 mb-6 relative z-10">
                <div className="bg-white p-2.5 rounded-xl h-full flex items-center justify-center shadow-inner group-hover:-translate-y-1 transition-transform duration-300">
                  <Image
                    src={method.logoUrl}
                    alt={method.title}
                    width={80}
                    height={64}
                    unoptimized // Bypasses the need for next.config.js remote pattern setup
                    className="h-full w-auto object-contain max-w-[80px]"
                  />
                </div>
                {/* Secondary Logo (for Visa/Mastercard combo) */}
                {method.logoUrl2 && (
                  <div className="bg-white p-2.5 rounded-xl h-full flex items-center justify-center shadow-inner group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    <Image
                      src={method.logoUrl2}
                      alt="Secondary Payment Logo"
                      width={80}
                      height={64}
                      unoptimized
                      className="h-full w-auto object-contain max-w-[80px]"
                    />
                  </div>
                )}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffc222] transition-colors relative z-10">
                {method.title}
              </h3>
              <p className="text-green-50 leading-relaxed text-sm mb-6 flex-grow opacity-90 relative z-10">
                {method.desc}
              </p>

              {/* Status Indicator */}
              <div className="mt-auto flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider bg-black/15 px-4 py-2.5 rounded-full w-full relative z-10">
                <FaCheckCircle className="text-[#ffc222] text-sm" />
                <span>Accepted Here</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overseas Orders Call-to-Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-[#ffc222] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden border border-yellow-400"
        >
          {/* Decorative Pattern inside Banner */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            <div className="w-16 h-16 bg-[#12823b] rounded-2xl flex items-center justify-center text-white shadow-md shrink-0">
              <FaGlobe size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-serif font-bold text-[#0a1a0f] mb-2">
                Overseas / International Orders
              </h4>
              <p className="text-[#0a1a0f]/80 text-sm md:text-base max-w-xl font-medium">
                Purchasing from abroad? We have dedicated payment channels for
                overseas clients. Contact us directly for special assistance.
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <a
            href="tel:+923277666764"
            className="relative z-10 whitespace-nowrap flex items-center gap-3 bg-[#12823b] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-[#12823b] transition-all duration-300 shadow-md group"
          >
            <FaPhoneAlt className="text-white group-hover:text-[#12823b] transition-colors" />
            0327 7666764
          </a>
        </motion.div>
      </div>
    </section>
  );
}