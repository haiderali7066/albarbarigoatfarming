"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaLeaf, 
  FaQuoteLeft, 
  FaHandshake, 
  FaHeartbeat, 
  FaAward, 
  FaTractor, 
  FaUsers, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa';

export default function AboutPage() {
  const WHATSAPP_NUMBER = "923280425087";
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

 const handleWhatsApp = (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  e.preventDefault();

  const textMessage =
    "Hello Al-Barbari Team, I would like to know more about your farm and services.";

  const encodedMessage = encodeURIComponent(textMessage);

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
    "_blank"
  );
};

  return (
    <>
      {/* Custom Animations */}
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
          
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffc222_2px,transparent_2px)] [background-size:30px_30px] z-0"></div>
          
          {/* Watermark Logo/Text */}
          <div className="absolute -left-20 top-20 opacity-5 select-none pointer-events-none z-0">
            <span className="text-[200px] font-serif font-bold text-white leading-none">البربری</span>
          </div>

          <div className={`relative z-10 text-center flex flex-col items-center px-6 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-[#ffc222] text-[#0a1a0f] font-bold tracking-[0.2em] uppercase text-xs px-5 py-2 rounded-full mb-8 inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-transform cursor-default">
              <FaLeaf className="text-[#12823b]" /> Rooted in Tradition
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
              Our <span className="text-[#ffc222]">Heritage</span> & Story
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium max-w-2xl text-opacity-90">
              More than just a farm. We are a family of passionate caretakers dedicated to reviving the prophetic tradition of ethical livestock rearing in Lahore.
            </p>
          </div>
        </section>

        {/* ================= MISSION / VISION QUOTE ================= */}
        <section className={`max-w-4xl mx-auto px-6 relative z-20 -mt-12 mb-20 ${isVisible ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-gray-100 relative overflow-hidden group hover:border-[#12823b]/30 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ffc222]"></div>
            <FaQuoteLeft className="text-5xl text-[#12823b]/10 absolute right-8 top-8 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl text-[#0a1a0f] font-serif leading-relaxed mb-4 italic">
                "To provide our community with the purest, healthiest livestock, nurtured with compassion and strict adherence to Islamic principles."
              </p>
              <span className="text-[#12823b] font-bold tracking-widest uppercase text-sm">— The Al-Barbari Mission</span>
            </div>
          </div>
        </section>

        {/* ================= OUR STORY SECTION ================= */}
        <section className="max-w-[1440px] mx-auto px-6 mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className={`lg:w-1/2 relative ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
              <div className="aspect-square bg-[#0a1a0f] rounded-[40px] overflow-hidden relative shadow-2xl">
                {/* Decorative background instead of an image to keep it self-contained, or replace with an actual farm img */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#12823b] to-[#0a1a0f] opacity-90"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] z-0"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-10 z-10">
                  <div className="w-24 h-24 border-4 border-[#ffc222] rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl font-serif text-[#ffc222] font-bold">est.</span>
                  </div>
                  <h3 className="text-white text-3xl font-serif">Building Trust<br/>Day by Day</h3>
                </div>
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 bg-[#ffc222]/20 rounded-full flex items-center justify-center text-[#ffc222]">
                  <FaUsers className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-[#0a1a0f]">1000+</h4>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Happy Families</p>
                </div>
              </div>
            </div>

            <div className={`lg:w-1/2 ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
              <h2 className="text-sm font-bold text-[#12823b] uppercase tracking-[0.2em] mb-2">Our Roots</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-[#0a1a0f] mb-6">Born from a Passion for Purity</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Al-Barbari started with a simple observation: finding genuinely healthy, organically fed, and Shariah-compliant livestock in the city was becoming increasingly difficult. We set out to change that.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Located in the heart of Punjab, our farm is a sanctuary where animals are treated with the respect they deserve. From selecting the finest breeds to ensuring they have vast open spaces to roam, every detail is managed with care and devotion.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  "100% Organic Diet",
                  "Ethical Treatment",
                  "Verified Pure Breeds",
                  "Expert Vet Care"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#12823b] text-xl shrink-0" />
                    <span className="font-bold text-[#0a1a0f] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES GRID ================= */}
        <section className="max-w-[1440px] mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#12823b] uppercase tracking-[0.2em] mb-2">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#0a1a0f]">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-[30px] shadow-lg hover:shadow-[0_20px_40px_rgba(18,130,59,0.12)] border border-transparent hover:border-[#12823b]/20 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#12823b]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-[#12823b] rounded-2xl flex items-center justify-center mb-8 text-white shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                <FaAward className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold text-[#0a1a0f] mb-4 font-serif">Uncompromised Quality</h4>
              <p className="text-gray-500 leading-relaxed">
                We never cut corners. Our animals undergo strict health checks and are raised in stress-free environments, guaranteeing premium meat and healthy livestock for your needs.
              </p>
            </div>

            {/* Value 2 - Distinct Styling */}
            <div className="bg-[#12823b] p-10 rounded-[30px] shadow-lg hover:shadow-[0_20px_40px_rgba(18,130,59,0.2)] transition-all duration-500 group relative overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-[#ffc222]"></div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#12823b] shadow-md transform group-hover:-rotate-6 transition-transform duration-300 relative z-10">
                <FaHandshake className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 font-serif relative z-10">Absolute Transparency</h4>
              <p className="text-gray-200 leading-relaxed relative z-10">
                Trust is our currency. From live video selections for Sadqah to open-door farm visits, you will always know exactly what you are getting with zero hidden conditions.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-10 rounded-[30px] shadow-lg hover:shadow-[0_20px_40px_rgba(255,194,34,0.15)] border border-transparent hover:border-[#ffc222]/50 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc222]/10 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-[#ffc222] rounded-2xl flex items-center justify-center mb-8 text-[#0a1a0f] shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                <FaHeartbeat className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold text-[#0a1a0f] mb-4 font-serif">Compassionate Care</h4>
              <p className="text-gray-500 leading-relaxed">
                Following the Sunnah, our caretakers are trained to treat every animal with gentleness. A happy, well-cared-for animal reflects in its health and purity.
              </p>
            </div>

          </div>
        </section>

        {/* ================= THE FARM EXPERIENCE (DARK SECTION) ================= */}
        <section className="bg-[#0a1a0f] text-white py-24 mb-24 relative overflow-hidden border-y-4 border-[#12823b]">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] z-0"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold text-[#ffc222] uppercase tracking-[0.2em] mb-2">Inside Al-Barbari</h2>
               <h3 className="text-4xl md:text-5xl font-serif text-white">Life at the Farm</h3>
               <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We’ve built a modern sanctuary that honors traditional farming methods.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#12823b] to-transparent z-0"></div>

              {[
                { icon: FaLeaf, title: "Natural Nutrition", desc: "Our animals graze on pesticide-free fields and are supplemented with a proprietary blend of grains and organic minerals." },
                { icon: FaHeartbeat, title: "24/7 Health Monitoring", desc: "Resident veterinarians conduct regular checkups, ensuring every animal is vaccination-compliant and completely disease-free." },
                { icon: FaTractor, title: "Hygienic Environment", desc: "Spacious, well-ventilated pens cleaned daily to prevent stress and disease, mirroring their natural habitats." }
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

        {/* ================= CTA / CONTACT BLOCK ================= */}
        <section className="max-w-[1200px] mx-auto px-6 pb-32">
          <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row relative">
            
            {/* Left Info Panel */}
            <div className="lg:w-1/2 p-10 md:p-14 bg-white flex flex-col justify-center">
              <h2 className="text-sm font-bold text-[#12823b] uppercase tracking-[0.2em] mb-2">Let's Connect</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-[#0a1a0f] mb-6 leading-tight">Come See the Difference Yourself.</h3>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                Whether you're looking to book a service, purchase an animal, or simply want to tour our facilities to ensure peace of mind, our doors are always open. Reach out to our team today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f8faf9] rounded-2xl flex items-center justify-center text-[#12823b]">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Location</p>
                    <p className="font-bold text-[#0a1a0f]">Lahore, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Panel (Deep Green) */}
            <div className="lg:w-1/2 bg-[#12823b] p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white mx-auto mb-8 animate-float">
                  <FaWhatsapp className="text-4xl" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">We are online 24/7</h3>
                <p className="text-gray-200 mb-8 text-sm opacity-90 max-w-sm mx-auto">
                  Click the button below to instantly connect with our farm managers via WhatsApp.
                </p>
                
                <button 
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ffc222] text-[#0a1a0f] py-4 px-8 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_10px_20px_rgba(255,194,34,0.2)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 group"
                >
                  Message Us <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}