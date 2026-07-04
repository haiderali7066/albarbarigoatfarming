"use client";

import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaSearch, FaLeaf } from 'react-icons/fa';

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock Data: Replace with your actual CMS data
  const blogPosts = [
    {
      id: 1,
      category: "Sunnah & Tradition",
      title: "The Spiritual Significance of Aqeeqah",
      excerpt: "Understanding the wisdom behind the tradition and why it holds such a special place in the early life of a child.",
      date: "July 04, 2026",
      readTime: "5 min read",
      author: "Admin"
    },
    {
      id: 2,
      category: "Farm Life",
      title: "How We Ensure Organic Quality",
      excerpt: "A deep dive into our feeding practices and why natural, organic grazing results in healthier, purer livestock.",
      date: "June 28, 2026",
      readTime: "7 min read",
      author: "Farm Manager"
    },
    {
      id: 3,
      category: "Charity",
      title: "The Power of Sadqah in Hard Times",
      excerpt: "Reflecting on the Hadith regarding charity and how your simple acts of kindness create ripples of change in our community.",
      date: "June 20, 2026",
      readTime: "4 min read",
      author: "Admin"
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />

      <main className="bg-[#f8faf9] min-h-screen pt-[100px] pb-24">
        
        {/* ================= BLOG HERO ================= */}
        <section className="relative w-full py-20 bg-gradient-to-br from-[#0a1a0f] via-[#12823b] to-[#0a1a0f] rounded-b-[40px] mb-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffc222_2px,transparent_2px)] [background-size:30px_30px]"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 animate-fade-in">Insights & <span className="text-[#ffc222]">Reflections</span></h1>
            <p className="text-gray-200 max-w-xl mx-auto text-lg animate-fade-in delay-100">
              Exploring traditions, farm wisdom, and the impact of charity.
            </p>
          </div>
        </section>

        {/* ================= BLOG GRID ================= */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className={`bg-white rounded-[30px] shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-500 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-48 bg-gradient-to-r from-[#12823b] to-[#1a9c4a] relative">
                  <div className="absolute top-4 left-4 bg-[#ffc222] text-[#0a1a0f] text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {post.date}</span>
                    <span className="flex items-center gap-1"><FaClock /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-[#0a1a0f] mb-4 leading-tight hover:text-[#12823b] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <a href="#" className="inline-flex items-center gap-2 text-[#12823b] font-bold text-sm hover:gap-3 transition-all">
                    Read More <FaArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= NEWSLETTER/CTA ================= */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <div className="bg-[#12823b] rounded-[30px] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc222] rounded-full blur-[100px] opacity-20"></div>
            <FaLeaf className="text-4xl text-[#ffc222] mx-auto mb-6" />
            <h3 className="text-3xl font-serif mb-4">Stay Connected</h3>
            <p className="text-green-100 mb-8 max-w-lg mx-auto">Get notified about new posts, seasonal farm updates, and special charity initiatives.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-full text-[#0a1a0f] outline-none w-full sm:w-80"
              />
              <button className="bg-[#ffc222] text-[#0a1a0f] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}