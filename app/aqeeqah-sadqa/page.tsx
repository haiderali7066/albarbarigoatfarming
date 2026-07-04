"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaHandHoldingHeart, 
  FaBaby, 
  FaVideo, 
  FaCheckCircle, 
  FaWhatsapp, 
  FaTruck,
  FaShieldAlt,
  FaChevronDown,
  FaQuoteLeft,
  FaArrowRight,
  FaLeaf
} from 'react-icons/fa';

export default function SadqahAqeeqahPage() {
  const WHATSAPP_NUMBER = "923280425087";

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    animalPreference: '',
    distributionMethod: '',
    specialInstructions: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const textMessage = `*New Spiritual Service Request* 🐐

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.serviceType}
*Distribution:* ${formData.distributionMethod}

*Instructions:*
${formData.specialInstructions || "None"}

_Please confirm availability and share options._`;

  const encodedMessage = encodeURIComponent(textMessage);

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
    "_blank"
  );
};
  return (
    <>
      {/* Custom Animations matching Navbar smooth feel */}
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
        <section className="relative w-full min-h-[60vh] flex items-center justify-center py-20 lg:py-32 overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shadow-sm z-10">
          {/* Deep Green Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#12823b] to-[#0a1a0f] z-0"></div>
          
          {/* Geometric Pattern Overlay (Matches Navbar Vibe) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffc222_2px,transparent_2px)] [background-size:30px_30px] z-0"></div>
          
          {/* Watermark Logo/Text */}
          <div className="absolute -right-20 top-10 opacity-5 select-none pointer-events-none z-0">
            <span className="text-[200px] font-serif font-bold text-white leading-none">البربری</span>
          </div>

          <div className={`relative z-10 text-center flex flex-col items-center px-6 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-[#ffc222] text-[#0a1a0f] font-bold tracking-[0.2em] uppercase text-xs px-5 py-2 rounded-full mb-8 inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-transform cursor-default">
              <FaLeaf className="text-[#12823b]" /> Shariah Compliant Services
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
              Aqeeqah & <span className="text-[#ffc222]">Sadqah</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium max-w-2xl text-opacity-90">
              Fulfill your spiritual duties with absolute peace of mind. We provide 100% healthy animals, transparent video proof, and reliable distribution across Lahore.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#booking" className="bg-[#ffc222] hover:bg-[#e5ae1e] text-[#0a1a0f] font-bold py-4 px-8 rounded-full tracking-wide transition-all duration-300 shadow-[0_10px_30px_rgba(255,194,34,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,194,34,0.4)] flex items-center gap-3 group">
                Book Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#process" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold py-4 px-8 rounded-full tracking-wide transition-all duration-300 hover:-translate-y-1">
                View Process
              </a>
            </div>
          </div>
        </section>

        {/* ================= SPIRITUAL SIGNIFICANCE QUOTE ================= */}
        <section className={`max-w-4xl mx-auto px-6 relative z-20 -mt-12 mb-20 ${isVisible ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-gray-100 relative overflow-hidden group hover:border-[#12823b]/30 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ffc222]"></div>
            <FaQuoteLeft className="text-5xl text-[#12823b]/10 absolute right-8 top-8 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl text-[#0a1a0f] font-serif leading-relaxed mb-4 italic">
                "Charity (Sadqah) extinguishes sin, just as water extinguishes fire."
              </p>
              <span className="text-[#12823b] font-bold tracking-widest uppercase text-sm">— Tirmidhi</span>
            </div>
          </div>
        </section>

        {/* ================= CORE SERVICES ================= */}
        <section className="max-w-[1440px] mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#12823b] uppercase tracking-[0.2em] mb-2">Our Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#0a1a0f]">Choose Your Service</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Sadqah Card */}
            <div className={`bg-white p-10 rounded-[30px] shadow-lg hover:shadow-[0_20px_40px_rgba(18,130,59,0.12)] border border-transparent hover:border-[#12823b]/20 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 ${isVisible ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#12823b]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-[#12823b] rounded-2xl flex items-center justify-center mb-8 text-white shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                <FaHandHoldingHeart className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold text-[#0a1a0f] mb-4 font-serif">General Sadqah</h4>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Ward off evil and express gratitude. We offer healthy goats for immediate sacrifice with options for full distribution to Madrasas.
              </p>
              <ul className="space-y-4">
                {['24/7 Emergency Sacrifice', 'Full Meat Distribution', 'Live Video Proof'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#0a1a0f]">
                    <FaCheckCircle className="text-[#ffc222] text-lg shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Aqeeqah Boy Card */}
            <div className={`bg-[#12823b] p-10 rounded-[30px] shadow-lg hover:shadow-[0_20px_40px_rgba(18,130,59,0.2)] transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
              {/* Slanted Yellow Accent like Navbar */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-[#ffc222]"></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#12823b] shadow-md transform group-hover:-rotate-6 transition-transform duration-300 relative z-10">
                <FaBaby className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 font-serif relative z-10">Aqeeqah (Baby Boy)</h4>
              <p className="text-gray-200 mb-8 leading-relaxed relative z-10">
                Celebrate the birth of a baby boy according to Sunnah. We provide <strong>Two (2)</strong> premium, unblemished goats of the required age.
              </p>
              <ul className="space-y-4 relative z-10">
                {['2 Premium Goats', 'Shariah-Compliant Age', 'Custom Meat Cuts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-white">
                    <FaCheckCircle className="text-[#ffc222] text-lg shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Aqeeqah Girl Card */}
            <div className={`bg-white p-10 rounded-[30px] shadow-lg hover:shadow-[0_20px_40px_rgba(255,194,34,0.15)] border border-transparent hover:border-[#ffc222]/50 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc222]/10 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-[#ffc222] rounded-2xl flex items-center justify-center mb-8 text-[#0a1a0f] shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                <FaBaby className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold text-[#0a1a0f] mb-4 font-serif">Aqeeqah (Baby Girl)</h4>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Bless your newborn daughter's arrival. We provide <strong>One (1)</strong> healthy, beautiful goat sacrificed while reciting her name.
              </p>
              <ul className="space-y-4">
                {['1 Premium Goat', 'Name Recitation on Video', 'Home Delivery Option'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#0a1a0f]">
                    <FaCheckCircle className="text-[#12823b] text-lg shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ================= TRANSPARENT PROCESS ================= */}
        <section id="process" className="bg-[#0a1a0f] text-white py-24 mb-24 relative overflow-hidden border-y-4 border-[#12823b]">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] z-0"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold text-[#ffc222] uppercase tracking-[0.2em] mb-2">How It Works</h2>
               <h3 className="text-4xl md:text-5xl font-serif text-white">The Trust Process</h3>
               <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Designed for complete transparency, specially favored by our Overseas Pakistani clients and busy professionals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#12823b] to-transparent z-0"></div>

              {/* Steps */}
              {[
                { icon: FaVideo, title: "1. Select via Video", desc: "We WhatsApp you live videos of our purebred flock so you can personally choose your goat." },
                { icon: FaShieldAlt, title: "2. Intent & Sacrifice", desc: "We record a video reciting the specific intention and name prior to the Shariah-compliant sacrifice." },
                { icon: FaTruck, title: "3. Deliver or Distribute", desc: "Meat is hygienically packed for your home, or fully distributed to verified deserving families/madrasas." }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-[#0a1a0f] border-2 border-[#12823b] rounded-full flex items-center justify-center mb-6 text-[#ffc222] group-hover:bg-[#12823b] group-hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(18,130,59,0.3)] group-hover:shadow-[0_0_40px_rgba(255,194,34,0.4)]">
                    <step.icon className="text-3xl animate-float" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 font-serif group-hover:text-[#ffc222] transition-colors">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed px-4 group-hover:text-gray-200 transition-colors">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SMART BOOKING FORM ================= */}
        <section id="booking" className="max-w-[1200px] mx-auto px-6 pb-32">
          <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row relative">
            
            {/* Left Info Panel (Deep Green) */}
            <div className="lg:w-2/5 bg-[#12823b] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]"></div>
              
              <div className="relative z-10">
                <span className="bg-[#ffc222] text-[#0a1a0f] font-bold tracking-widest uppercase text-[10px] px-3 py-1 rounded-full mb-6 inline-block">
                  Fast Response
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">Book Your Offering Today</h3>
                <p className="text-gray-100 mb-10 leading-relaxed text-sm opacity-90">
                  Fill out the details. Our team is available 24/7. Once submitted, you will instantly connect with our team on WhatsApp to finalize pricing and share details.
                </p>
              </div>
              
              <div className="relative z-10 space-y-6">
                 <div className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white shrink-0">
                      <FaWhatsapp className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">WhatsApp Direct</p>
                      <p className="font-bold text-white text-lg">+92 328 0425087</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white">
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
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1 group-focus-within:text-[#12823b] transition-colors">WhatsApp Number</label>
                    <input 
                      type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+92 300 0000000"
                      className="w-full bg-[#f8faf9] border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all text-[#0a1a0f] font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col group">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1 group-focus-within:text-[#12823b] transition-colors">Service Type</label>
                    <div className="relative">
                      <select 
                        name="serviceType" value={formData.serviceType} onChange={handleChange} required
                        className="w-full bg-[#f8faf9] border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all appearance-none cursor-pointer text-[#0a1a0f] font-medium"
                      >
                        <option value="" disabled>Select Service...</option>
                        <option value="Sadqah (General)">Sadqah (General)</option>
                        <option value="Aqeeqah (Baby Boy - 2 Goats)">Aqeeqah (Baby Boy - 2 Goats)</option>
                        <option value="Aqeeqah (Baby Girl - 1 Goat)">Aqeeqah (Baby Girl - 1 Goat)</option>
                      </select>
                      <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col group">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1 group-focus-within:text-[#12823b] transition-colors">Distribution Method</label>
                    <div className="relative">
                      <select 
                        name="distributionMethod" value={formData.distributionMethod} onChange={handleChange} required
                        className="w-full bg-[#f8faf9] border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all appearance-none cursor-pointer text-[#0a1a0f] font-medium"
                      >
                        <option value="" disabled>Select Method...</option>
                        <option value="100% Distribute to Needy">100% Distribute to Needy</option>
                        <option value="100% Deliver to My Home">100% Deliver to My Home</option>
                        <option value="50% Distribute / 50% Deliver">50% Distribute / 50% Deliver</option>
                        <option value="Just Buy Live Animal">Just Buy Live Animal</option>
                      </select>
                      <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col group">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1 group-focus-within:text-[#12823b] transition-colors">Special Instructions / Name to Recite</label>
                  <textarea 
                    name="specialInstructions" rows="3" value={formData.specialInstructions} onChange={handleChange} 
                    placeholder="E.g., Name of the child for Aqeeqah, or specific cut requirements..."
                    className="w-full bg-[#f8faf9] border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#12823b] focus:ring-2 focus:ring-[#12823b]/20 transition-all resize-none text-[#0a1a0f] font-medium"
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-3 bg-[#ffc222] text-[#0a1a0f] py-4 px-8 rounded-full font-bold text-lg hover:bg-[#12823b] hover:text-white transition-all duration-300 shadow-[0_10px_20px_rgba(255,194,34,0.2)] hover:shadow-[0_15px_30px_rgba(18,130,59,0.3)] hover:-translate-y-1 group"
                  >
                    <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" /> Connect on WhatsApp
                  </button>
                </div>

              </form>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}