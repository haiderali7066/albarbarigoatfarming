import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { 
  FaLeaf, FaArrowRight, FaCalendar, FaUser, 
  FaBookOpen, FaChevronRight, FaEnvelope, FaHashtag 
} from 'react-icons/fa';

// ✅ Added DB and Model imports
import { connectDB } from "@/lib/mongodb";
import BlogModel from "@/models/Blog";

// ✅ Forces dynamic rendering, replacing the need for fetch cache: "no-store"
export const dynamic = "force-dynamic";

/* ══════════════════════════════════════
   TYPES & DATA FETCHING
══════════════════════════════════════ */
interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  tags?: string[];
  status: string;
  createdAt: string;
}

// ✅ Replaced fetch with direct MongoDB query
async function getBlogs(): Promise<Blog[]> {
  try {
    await connectDB();

    const blogs = await BlogModel.find({})
      .sort({ createdAt: -1 })
      .lean();

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

// Utility to estimate read time
const getReadTime = (content: string = "") => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200)); // Avg reading speed: 200 wpm
  return `${minutes} min read`;
};

// Fallback topics specific to Al-Barbari Goat Farming
const FALLBACK_TOPICS = [
  'Organic Nutrition', 'Sunnah Breeding', 'Livestock Care', 
  'Farm Management', 'Sadqah Guides', 'Herd Health', 'Ethical Rearing'
];

/* ══════════════════════════════════════
   MAIN ASYNC PAGE COMPONENT
══════════════════════════════════════ */
export default async function InsightsPage() {
  const allBlogs = await getBlogs();
  const publishedBlogs = allBlogs.filter((blog) => blog.status === "published");

  // Separate the most recent blog as the featured article
  const featuredArticle = publishedBlogs[0];
  const articlesData = publishedBlogs.slice(1);

  // Dynamically extract unique categories/tags for the topics section
  const dynamicTopics = Array.from(
    new Set(
      publishedBlogs.flatMap(blog => [blog.category, ...(blog.tags || [])])
    )
  ).filter(Boolean).slice(0, 12);
  
  const displayTopics = dynamicTopics.length > 3 ? dynamicTopics : FALLBACK_TOPICS;

  return (
    <main className="min-h-screen bg-[#f8faf9] font-sans text-[#0a1a0f] selection:bg-[#12823b]/30 overflow-x-hidden pt-[100px]">

      {/* ════════ SECTION 1: HERO (DARK HERITAGE MOOD) ════════ */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center pt-24 pb-48 px-6 overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shadow-sm z-10">
        {/* Deep Green Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#12823b] to-[#0a1a0f] z-0"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffc222_2px,transparent_2px)] [background-size:30px_30px] z-0"></div>
        
        {/* Watermark Logo/Text */}
        <div className="absolute -left-20 top-20 opacity-5 select-none pointer-events-none z-0">
          <span className="text-[200px] font-serif font-bold text-white leading-none">البربری</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
          <FadeInUp className="space-y-8">
            <div className="bg-[#ffc222] text-[#0a1a0f] font-bold tracking-[0.2em] uppercase text-xs px-5 py-2 rounded-full mb-4 inline-flex items-center gap-2 shadow-lg">
              <FaLeaf className="text-[#12823b]" /> Knowledge & Guides
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-[1.05] mx-auto max-w-4xl drop-shadow-xl">
              The <span className="text-[#ffc222]">Barbari</span> Journal
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium max-w-2xl mx-auto text-opacity-90">
              Stories, expert guides, and insights rooted in the prophetic tradition of ethical livestock rearing and organic farming.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 2: FEATURED ARTICLE (FLOATING OVERLAP) ════════ */}
      {featuredArticle && (
        <section className="relative px-6 max-w-7xl mx-auto z-20 -mt-32 pb-24">
          <FadeInUp>
            <Link href={`/blog/${featuredArticle.slug}`} className="block group">
              <div className="relative bg-[#0a1a0f] rounded-[2.5rem] overflow-hidden border border-[#12823b]/30 shadow-[0_20px_50px_rgba(0,0,0,0.2)] grid grid-cols-1 lg:grid-cols-2 hover:border-[#ffc222]/50 transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Image Side */}
                <div className="relative h-64 lg:h-full w-full overflow-hidden bg-[#12823b]/10">
                  <div className="absolute inset-0 bg-[#12823b]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f] to-transparent z-10 lg:bg-gradient-to-r" />
                  {featuredArticle.image ? (
                    <Image 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title} 
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                      <FaBookOpen size={48} />
                    </div>
                  )}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12823b] backdrop-blur-md text-xs font-bold tracking-[0.2em] text-white uppercase shadow-lg">
                      <FaLeaf className="w-3.5 h-3.5 text-[#ffc222]" />
                      Featured Story
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] before:absolute before:inset-0 before:bg-[#0a1a0f]/90 before:-z-10">
                  <div className="flex items-center gap-3 mb-6 text-sm font-medium text-gray-400">
                    <span className="text-[#ffc222] font-bold uppercase tracking-[0.2em]">{featuredArticle.category}</span>
                    <span>•</span>
                    <span>{getReadTime(featuredArticle.content || featuredArticle.excerpt)}</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6 leading-tight group-hover:text-[#ffc222] transition-colors duration-300 line-clamp-3">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-10 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#12823b]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#12823b]/20 flex items-center justify-center border border-[#12823b]/50">
                        <FaUser className="w-4 h-4 text-[#ffc222]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Al-Barbari Caretakers</p>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                          <FaCalendar className="w-3 h-3" /> 
                          {new Date(featuredArticle.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ffc222] text-[#0a1a0f] font-bold rounded-full hover:bg-white hover:shadow-[0_10px_20px_rgba(255,194,34,0.2)] transition-all duration-300">
                      Read Full Story
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeInUp>
        </section>
      )}

      {/* ════════ SECTION 3: ARTICLES GRID (CLEAN LIGHT MOOD) ════════ */}
      {articlesData.length > 0 && (
        <section className="py-12 px-6 max-w-7xl mx-auto pb-24">
          <div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-sm font-bold text-[#12823b] uppercase tracking-[0.2em] mb-2">Recent Publications</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-[#0a1a0f]">More from the Farm</h3>
            </div>
            <Link href="#archive" className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#12823b] hover:text-[#0a1a0f] transition-colors tracking-widest uppercase">
              View Archive <FaChevronRight className="w-3 h-3" />
            </Link>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map((article) => (
              <StaggerItem key={article._id} className="h-full">
                <Link href={`/blog/${article.slug}`} className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:border-[#12823b]/30 shadow-lg hover:shadow-[0_20px_40px_rgba(18,130,59,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                  
                  {/* Card Image Header */}
                  <div className="relative h-56 overflow-hidden bg-[#f8faf9]">
                    <div className="absolute inset-0 bg-[#0a1a0f]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    {article.image ? (
                      <Image 
                        src={article.image} 
                        alt={article.title} 
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        <FaBookOpen size={40} />
                      </div>
                    )}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 rounded-md bg-white/95 backdrop-blur text-[10px] font-bold tracking-[0.2em] text-[#12823b] uppercase shadow-sm border border-gray-100">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-grow relative">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                      <FaCalendar className="w-3.5 h-3.5" />
                      {new Date(article.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </div>
                    
                    <h3 className="text-2xl font-serif text-[#0a1a0f] mb-4 group-hover:text-[#12823b] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                      <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
                        <FaUser className="w-4 h-4 text-gray-300" />
                        Farm Team
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-sm font-bold text-[#12823b] group-hover:text-[#ffc222] transition-colors tracking-widest uppercase">
                        Read
                        <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* ════════ SECTION 4: TOPICS EXPLORATION (DARK GREEN MOOD) ════════ */}
      <section className="relative py-24 md:py-32 px-6 bg-[#0a1a0f] border-y-4 border-[#12823b] overflow-hidden">
        {/* Arabesque subtle pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] z-0"></div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(18,130,59,0.3)_0%,transparent_100%)]" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <FadeInUp>
            <span className="text-xs font-bold tracking-[0.2em] text-[#ffc222] uppercase mb-4 block">
              Knowledge Directory
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-12 leading-tight">
              Explore by Topic & Tradition
            </h2>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {displayTopics.map((topic) => (
                <button
                  key={topic}
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#12823b]/10 border border-[#12823b]/30 text-gray-300 hover:border-[#ffc222] hover:bg-[#ffc222]/10 hover:text-[#ffc222] transition-all duration-300 text-sm font-bold tracking-wide backdrop-blur-sm"
                >
                  <FaHashtag className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  {topic}
                </button>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 5: NEWSLETTER CTA (DEEP GREEN & GOLD MOOD) ════════ */}
      <section className="py-24 px-6 bg-[#f8faf9]">
        <FadeInUp className="max-w-5xl mx-auto relative bg-[#12823b] rounded-[40px] p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-[0_20px_60px_rgba(18,130,59,0.2)] border border-[#12823b]">
          
          {/* Decorative geometric patterns */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[2px] border-[#ffc222]/20 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[2px] border-white/10 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#ffc222] text-[#0a1a0f] mb-8 shadow-lg transform rotate-3">
              <FaEnvelope className="w-8 h-8" />
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Join Our Community.
            </h2>
            <p className="text-gray-200 text-lg mb-10 leading-relaxed font-medium">
              Subscribe to receive our latest guides on organic livestock care, farm updates, and exclusive priority booking for Sadqah and Aqiqah.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" action="/api/subscribe" method="POST">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full bg-black/20 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ffc222] backdrop-blur-sm transition-all font-medium"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-[#ffc222] text-[#0a1a0f] font-bold rounded-full hover:bg-white hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/60 mt-6 font-bold tracking-[0.1em] uppercase">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </FadeInUp>
      </section>

    </main>
  );
}