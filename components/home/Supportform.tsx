
"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaHeadset, FaCheck } from "react-icons/fa";

export default function SupportOrderSection() {
  const WHATSAPP_NUMBER = "923001234567"; // Replace with your WhatsApp number

  const [formData, setFormData] = useState({
    toWhom: "",
    address: "",
    animal: "Barbari Goat",
    slaughterMethod: "Live Animal Delivery",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const message = `
*New Goat Order Request*

*Name / To Whom:* ${formData.toWhom}

*Address:* ${formData.address}

*Selected Animal:* ${formData.animal}

*Preparation / Slaughter:* ${formData.slaughterMethod}
    `;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white py-24 font-sans text-[#0a1a0f]">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 border border-gray-200">

        {/* Left Side */}
        <div className="bg-[#036e25] rounded-2xl text-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffc222_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <FaHeadset className="text-[#ffc222] text-3xl" />
              <span className="text-[#ffc222] font-bold tracking-[0.2em] uppercase text-sm">
                24/7 Priority Support
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Custom Order <br />
              <span className="text-gray-300">& Delivery</span>
            </h2>

            <div className="w-16 h-[3px] bg-[#ffc222] mb-8"></div>

            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-md">
              Need a specific animal for Sadqah, Aqeeqah, or general
              consumption? Fill out the details, and we will instantly connect
              with you on WhatsApp to finalize your request.
            </p>

            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-gray-300">
              <li className="flex items-center gap-3">
                <FaCheck className="text-[#ffc222]" />
                100% Shariah Compliant Slaughter
              </li>

              <li className="flex items-center gap-3">
                <FaCheck className="text-[#ffc222]" />
                Free Doorstep Delivery in Lahore
              </li>

              <li className="flex items-center gap-3">
                <FaCheck className="text-[#ffc222]" />
                Live Video Proof for Sadqah
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-gray-50 p-10 md:p-16 flex flex-col justify-center border-l-0 lg:border-l border-gray-200">
          <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 border-b-2 border-gray-200 pb-4">
            Order Details
          </h3>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">

            {/* Name */}
            <div className="flex flex-col">
              <label
                htmlFor="toWhom"
                className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2"
              >
                Name / To Whom
              </label>

              <input
                type="text"
                id="toWhom"
                name="toWhom"
                required
                value={formData.toWhom}
                onChange={handleChange}
                placeholder="Enter Name or Organization"
                className="w-full bg-white border border-gray-300 p-4 text-[#0a1a0f] outline-none focus:border-[#1a5a1f] focus:ring-1 focus:ring-[#1a5a1f] transition-all"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2"
              >
                Delivery / Donation Address
              </label>

              <textarea
                id="address"
                name="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                className="w-full bg-white border border-gray-300 p-4 text-[#0a1a0f] outline-none focus:border-[#1a5a1f] focus:ring-1 focus:ring-[#1a5a1f] transition-all resize-none"
              />
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col">
                <label
                  htmlFor="animal"
                  className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2"
                >
                  Select Livestock
                </label>

                <select
                  id="animal"
                  name="animal"
                  value={formData.animal}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 p-4"
                >
                  <option value="Barbari Goat">Barbari Goat</option>
                  <option value="Desi Bakra">Desi Bakra</option>
                  <option value="Cow / Bull">Cow / Bull</option>
                  <option value="Sheep / Dumba">Sheep / Dumba</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="slaughterMethod"
                  className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2"
                >
                  Preparation / Slaughter
                </label>

                <select
                  id="slaughterMethod"
                  name="slaughterMethod"
                  value={formData.slaughterMethod}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 p-4"
                >
                  <option value="Live Animal Delivery">
                    Live Animal Delivery
                  </option>

                  <option value="Normal Cut (Cleaned & Packed)">
                    Normal Cut (Cleaned & Packed)
                  </option>

                  <option value="Sadqah / Aqeeqah (Fully Distributed)">
                    Sadqah / Aqeeqah (Distributed)
                  </option>

                  <option value="Qurbani Cut (3 Portions)">
                    Qurbani Cut (3 Portions)
                  </option>
                </select>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#098b14] text-white py-4 px-6 font-bold uppercase tracking-widest hover:bg-[#ffc222] hover:text-black transition-all rounded-full"
            >
              <FaWhatsapp className="text-xl" />
              Send via WhatsApp
            </button>

            <p className="text-center text-xs text-gray-400 mt-3 uppercase tracking-wide">
              You will be redirected to WhatsApp to confirm details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
```
