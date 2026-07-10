"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  FaWhatsapp, 
  FaHeadset, 
  FaCheck, 
  FaChevronDown,
  FaCalendarAlt,
  FaWeightHanging,
  FaUserAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClipboardList
} from "react-icons/fa";

// ============================================================================
// CUSTOM DROPDOWN COMPONENT (For Better UI/UX)
// ============================================================================
interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
}

const CustomDropdown: React.FC<DropdownProps> = ({ label, options, value, onChange, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col relative" ref={dropdownRef}>
      <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
        {label}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-gray-50 border ${isOpen ? 'border-[#12823b] ring-2 ring-[#12823b]/20' : 'border-gray-200'} rounded-lg p-3.5 flex items-center justify-between cursor-pointer transition-all duration-300 hover:border-[#12823b]/50`}
      >
        <div className="flex items-center gap-3 text-[#0a1a0f] font-medium text-sm md:text-base">
          <span className="text-[#12823b]">{icon}</span>
          {value}
        </div>
        <FaChevronDown className={`text-gray-400 text-sm transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#12823b]' : ''}`} />
      </div>

      {/* Dropdown Menu */}
      <div className={`absolute top-full left-0 w-full bg-white border border-gray-100 rounded-lg shadow-xl mt-2 z-50 overflow-hidden transition-all duration-200 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        {options.map((option, idx) => (
          <div 
            key={idx}
            onClick={() => {
              onChange(option);
              setIsOpen(false);
            }}
            className={`p-3.5 text-sm md:text-base cursor-pointer transition-colors hover:bg-[#12823b]/5 ${value === option ? 'bg-[#12823b]/10 text-[#12823b] font-bold border-l-4 border-[#12823b]' : 'text-gray-700 font-medium border-l-4 border-transparent'}`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// MAIN SECTION COMPONENT
// ============================================================================
export default function SupportOrderSection() {
  const WHATSAPP_NUMBER = "923280425087";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    notes: "",
    animal: "Barbari Goat",
    weight: "15kg - 20kg",
    slaughterMethod: "Live Animal Delivery",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
🐐 *New Custom Order Request* 🐐

👤 *Customer Details*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Delivery Date: ${formData.date || "Not Specified"}
• Address: ${formData.address}

🏷️ *Order Specifications*
• Selected Animal: ${formData.animal}
• Target Weight: ${formData.weight}
• Preparation: ${formData.slaughterMethod}

📝 *Additional Notes:*
${formData.notes || "None"}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-[#fafafa] py-20 md:py-32 font-sans text-[#0a1a0f] relative z-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col xl:flex-row overflow-hidden border border-gray-100">
          
          {/* ========================================= */}
          {/* LEFT SIDE: Branding & Information         */}
          {/* ========================================= */}
          <div className="bg-[#12823b] text-white p-10 md:p-16 xl:w-[45%] flex flex-col justify-between relative overflow-hidden shrink-0">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="#ffffff" strokeWidth="2" fill="none"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
              </svg>
            </div>
            
            {/* Soft Glow Overlay */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc222] rounded-full mix-blend-overlay filter blur-[100px] opacity-30"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <FaHeadset className="text-[#ffc222] text-xl" />
                <span className="text-white font-bold tracking-[0.15em] uppercase text-xs">
                  24/7 Priority Booking
                </span>
              </div>

              <h2 className="text-4xl md:text-[50px] font-black uppercase tracking-tight mb-6 leading-[1.1]">
                Custom Order <br />
                <span className="text-[#ffc222]">Request</span>
              </h2>

              <p className="text-white/90 text-lg mb-10 leading-relaxed font-medium max-w-md">
                Looking for a specific Bakra for Sadqah, Aqeeqah, or an upcoming event? Provide your exact requirements and we will match you with the perfect animal.
              </p>

              <div className="mt-auto bg-black/20 p-6 rounded-2xl border border-white/10">
                <ul className="space-y-5 text-sm md:text-[15px] font-bold uppercase tracking-wider text-white">
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0 shadow-md">
                      <FaCheck className="text-[#12823b] text-sm" />
                    </div>
                    100% Shariah Compliant Process
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0 shadow-md">
                      <FaCheck className="text-[#12823b] text-sm" />
                    </div>
                    Free Doorstep Delivery in Lahore
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0 shadow-md">
                      <FaCheck className="text-[#12823b] text-sm" />
                    </div>
                    Live Video Proof for Sadqah
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE: Interactive Form              */}
          {/* ========================================= */}
          <div className="p-8 md:p-14 xl:p-16 xl:w-[55%] flex flex-col justify-center bg-white">
            
            <div className="flex items-center justify-between mb-10 border-b-2 border-gray-100 pb-5">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a1a0f]">
                Order Details
              </h3>
              <div className="hidden sm:flex items-center gap-2 text-gray-400">
                <FaClipboardList className="text-xl" />
              </div>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6 md:space-y-8">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col relative group">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name / Organization</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#12823b] transition-colors">
                      <FaUserAlt />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ali Ahmed"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-[#0a1a0f] font-medium placeholder-gray-400 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col relative group">
                  <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">WhatsApp Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#12823b] transition-colors">
                      <FaPhoneAlt />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="03XX XXXXXXX"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-[#0a1a0f] font-medium placeholder-gray-400 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Address & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col relative group">
                  <label htmlFor="address" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Delivery / Donation Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#12823b] transition-colors">
                      <FaMapMarkerAlt />
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House, Street, Area, Lahore"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-[#0a1a0f] font-medium placeholder-gray-400 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col relative group">
                  <label htmlFor="date" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Required Date (Optional)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#12823b] transition-colors">
                      <FaCalendarAlt />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-[#0a1a0f] font-medium placeholder-gray-400 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Custom Dropdowns (Animal & Weight) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CustomDropdown 
                  label="Select Livestock"
                  value={formData.animal}
                  onChange={(val) => handleDropdownChange("animal", val)}
                  icon={<FaCheck />}
                  options={[
                    "Barbari Goat (Purebred)",
                    "Desi Bakra",
                    "Rajanpuri Goat",
                    "Sheep / Dumba",
                    "Cow / Bull (For Qurbani/General)"
                  ]}
                />
                
                <CustomDropdown 
                  label="Target Weight"
                  value={formData.weight}
                  onChange={(val) => handleDropdownChange("weight", val)}
                  icon={<FaWeightHanging />}
                  options={[
                    "10kg - 15kg (Small)",
                    "15kg - 20kg (Medium)",
                    "20kg - 25kg (Standard)",
                    "25kg - 35kg (Large)",
                    "35kg+ (Premium/Breeder)"
                  ]}
                />
              </div>

              {/* Row 4: Slaughter Method (Full Width Custom Dropdown) */}
              <CustomDropdown 
                label="Preparation / Slaughter Requirements"
                value={formData.slaughterMethod}
                onChange={(val) => handleDropdownChange("slaughterMethod", val)}
                icon={<FaClipboardList />}
                options={[
                  "Live Animal Delivery (Farm Pickup/Delivery)",
                  "Sadqah (Fully Distributed to Needy with Video)",
                  "Aqeeqah Cut (Distributed + Home Delivery)",
                  "Normal Cut (Cleaned, Portioned & Packed)",
                  "Qurbani Cut (3 Standard Portions)"
                ]}
              />

              {/* Row 5: Notes */}
              <div className="flex flex-col">
                <label htmlFor="notes" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Additional Instructions</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any specific requests regarding color, age, or meat cuts..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-[#0a1a0f] font-medium placeholder-gray-400 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-3 bg-[#12823b] text-white py-4 px-6 rounded-xl font-black uppercase tracking-widest hover:bg-[#ffc222] hover:text-[#0a1a0f] hover:shadow-[0_10px_20px_rgba(255,194,34,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                  Send Request via WhatsApp
                </button>
                <p className="text-center text-xs text-gray-400 mt-4 uppercase tracking-wider font-bold">
                  🔒 Fast, Secure, & Direct Communication
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}