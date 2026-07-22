import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FadeInUp } from '@/components/AnimatedSection';
import { 
  FaArrowLeft, FaCalendar, FaUser, FaBookOpen, 
  FaShare, FaHashtag, FaChevronRight 
} from 'react-icons/fa';

// ✅ Added DB and Model imports for direct querying
import { connectDB } from "@/lib/mongodb";
import BlogModel from "@/models/Blog";

/* ══════════════════════════════════════
   TYPES & DATA FETCHING
══════════════════════════════════════ */
interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; 
  image: string;
  category: string;
  tags?: string[];
  status: string;
  createdAt: string;
}

// ✅ Replaced fetch with direct MongoDB query
async function getBlog(slug: string): Promise<Blog | null> {
  try {
    await connectDB();
    
    // Only fetch if it's published
    const blog = await BlogModel.findOne({ slug, status: "published" }).lean();
    
    if (!blog) return null;
    
    return JSON.parse(JSON.stringify(blog));
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Utility to estimate read time
const getReadTime = (content: string = "") => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200)); 
  return `${minutes} min read`;
};

/* ══════════════════════════════════════
   MAIN ASYNC SLUG PAGE COMPONENT
══════════════════════════════════════ */
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8faf9] font-sans selection:bg-[#12823b]/30 overflow-x-hidden pt-[100px]">
      
      {/* ════════ SECTION 1: HERO & METADATA (DARK HERITAGE MOOD) ════════ */}
      <section className="relative pt-24 pb-48 md:pt-32 md:pb-64 px-6 overflow-hidden bg-[#0a1a0f] rounded-b-[40px] md:rounded-b-[80px]">
        {/* Subtle Background Glow & Texture */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#12823b]/30 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] z-0 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#0a1a0f]/80 to-[#0a1a0f]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInUp>
            {/* Back Navigation */}
            <Link 
              href="/insights" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ffc222] mb-10 transition-colors duration-300 text-sm font-bold tracking-widest uppercase"
            >
              <FaArrowLeft className="w-3.5 h-3.5" />
              Back to Journal
            </Link>

            {/* Category & Read Time */}
            <div className="flex items-center gap-3 mb-8 text-sm font-medium text-gray-300">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#12823b]/20 border border-[#12823b]/50 text-xs font-bold tracking-[0.2em] text-[#ffc222] uppercase backdrop-blur-md">
                {blog.category}
              </span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-2 opacity-90 font-bold tracking-wide">
                <FaBookOpen className="w-3.5 h-3.5 text-[#12823b]" />
                {getReadTime(blog.content)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-[1.15] mb-8 drop-shadow-lg">
              {blog.title}
            </h1>

            {/* Excerpt/Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium mb-12 border-l-4 border-[#ffc222] pl-6 py-2 bg-gradient-to-r from-[#12823b]/10 to-transparent">
              {blog.excerpt}
            </p>

            {/* Author & Date Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-[#12823b]/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#12823b]/20 flex items-center justify-center border border-[#12823b]/50 shadow-inner">
                  <FaUser className="w-5 h-5 text-[#ffc222]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Al-Barbari Caretakers</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-1 font-medium">
                    <FaCalendar className="w-3 h-3 text-[#12823b]" /> 
                    {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </div>

              {/* Share Button */}
              <button className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-[#0a1a0f] hover:bg-[#ffc222] transition-all duration-300 px-5 py-2.5 rounded-full border border-[#12823b]/50 uppercase tracking-widest shadow-lg">
                <FaShare className="w-3.5 h-3.5" />
                Share Story
              </button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 2: CONTENT & IMAGE (LIGHT MOOD) ════════ */}
      <section className="relative px-6 z-20 -mt-32 pb-24 max-w-4xl mx-auto">
        <FadeInUp>
          {/* Featured Image Banner */}
          {blog.image && (
            <div className="relative w-full h-64 md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white mb-16 bg-[#0a1a0f] group">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                fill
                priority
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f]/40 to-transparent pointer-events-none" />
            </div>
          )}

          {/* Blog Content body */}
          <article 
            className="prose prose-lg md:prose-xl max-w-none text-[#0a1a0f]/80 font-medium leading-relaxed 
                       prose-headings:font-serif prose-headings:text-[#0a1a0f] prose-headings:leading-tight
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-[#12823b]/20 prose-h2:pb-4
                       prose-a:text-[#12823b] prose-a:font-bold hover:prose-a:text-[#ffc222] prose-a:transition-colors
                       prose-img:rounded-[2rem] prose-img:shadow-xl
                       prose-blockquote:border-l-[#ffc222] prose-blockquote:bg-[#12823b]/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl prose-blockquote:text-[#12823b] prose-blockquote:font-serif prose-blockquote:italic
                       prose-strong:text-[#0a1a0f] prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags Section */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-20 pt-10 border-t border-gray-200">
              <p className="text-xs font-bold text-[#12823b] mb-5 uppercase tracking-[0.2em]">
                Explore Related Topics
              </p>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="group flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[#0a1a0f] text-sm font-bold shadow-sm hover:border-[#12823b] hover:bg-[#12823b] hover:text-white transition-all cursor-pointer"
                  >
                    <FaHashtag className="w-3 h-3 text-gray-400 group-hover:text-[#ffc222] transition-colors" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </FadeInUp>
      </section>

      {/* ════════ SECTION 3: FOOTER CTA (DARK GREEN MOOD) ════════ */}
      <section className="py-24 px-6 bg-[#0a1a0f] border-t-4 border-[#12823b] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(18,130,59,0.4)_0%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] z-0 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-[#ffc222] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Continue Reading
          </span>
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Discover more stories from the pastures.
          </h3>
          <p className="text-gray-300 mb-10 font-medium text-lg max-w-xl mx-auto">
            Return to the journal to explore further guides on ethical rearing, sunnah practices, and organic farming methods.
          </p>
          <Link 
            href="/insights" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ffc222] text-[#0a1a0f] font-bold rounded-full hover:bg-white hover:shadow-[0_10px_30px_rgba(255,194,34,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide text-sm"
          >
            Explore More Articles
            <FaChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </main>
  );
}