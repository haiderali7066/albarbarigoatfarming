"use client";

import React from 'react';
import { 
  FaUniversity, 
  FaCreditCard, 
  FaMobileAlt, 
  FaMoneyBillWave, 
  FaShieldAlt, 
  FaCheckCircle 
} from 'react-icons/fa';

export default function PaymentSection() {
  const paymentMethods = [
    {
      id: 1,
      title: "Bank Transfer",
      desc: "Direct online transfer to our official business bank accounts (Meezan / HBL).",
      icon: <FaUniversity className="text-4xl text-[#1a5a1f] group-hover:text-[#ffc222] transition-colors duration-300" />
    },
    {
      id: 2,
      title: "Credit / Debit Card",
      desc: "We accept all major Visa and Mastercard payments for seamless online checkout.",
      icon: <FaCreditCard className="text-4xl text-[#1a5a1f] group-hover:text-[#ffc222] transition-colors duration-300" />
    },
    {
      id: 3,
      title: "Easypaisa",
      desc: "Quick, local, and secure mobile wallet transfers via the Easypaisa app.",
      icon: <FaMobileAlt className="text-4xl text-[#1a5a1f] group-hover:text-[#ffc222] transition-colors duration-300" />
    },
    {
      id: 4,
      title: "JazzCash",
      desc: "Instant digital payments directly to our official JazzCash merchant number.",
      icon: <FaMobileAlt className="text-4xl text-[#1a5a1f] group-hover:text-[#ffc222] transition-colors duration-300" />
    },
    {
      id: 5,
      title: "Cash Payment",
      desc: "Pay securely in cash upon doorstep delivery or when picking up from our farm.",
      icon: <FaMoneyBillWave className="text-4xl text-[#1a5a1f] group-hover:text-[#ffc222] transition-colors duration-300" />
    },
    {
      id: 6,
      title: "100% Secure",
      desc: "Every transaction is verified and backed by an official Al-Barbari receipt.",
      icon: <FaShieldAlt className="text-4xl text-[#1a5a1f] group-hover:text-[#ffc222] transition-colors duration-300" />
    }
  ];

  return (
    <section className="bg-gray-50 py-24 font-sans text-[#096b28]">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Centered Minimal Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#1a5a1f] font-bold tracking-[0.2em] uppercase text-sm mb-3 flex items-center gap-2">
            <FaShieldAlt className="text-[#ffc222]" /> Safe & Transparent
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Payment Options
          </h2>
          {/* Minimalist Golden Divider */}
          <div className="w-16 h-[3px] bg-[#ffc222]"></div>
          
          <p className="text-gray-600 mt-6 max-w-xl text-lg">
            We offer multiple secure and highly flexible payment methods to make your livestock purchase as smooth as possible.
          </p>
        </div>

        {/* Payment Methods Grid (Boxy, No Rounded Corners) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentMethods.map((method) => (
            <div 
              key={method.id} 
              className="group bg-white border border-gray-200 p-8 flex flex-col items-start hover:border-[#1a5a1f] transition-colors duration-300 shadow-sm hover:shadow-md cursor-default"
            >
              {/* Icon Container */}
              <div className="mb-6 bg-gray-50 p-4 border border-gray-100 group-hover:bg-[#0a1a0f] transition-colors duration-300">
                {method.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">
                {method.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {method.desc}
              </p>

              {/* Status Badge */}
              <div className="mt-6 flex items-center gap-2 text-[#1a5a1f] text-xs font-bold uppercase tracking-wider">
                <FaCheckCircle className="text-[#ffc222]" />
                Accepted Here
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}