import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FadeInUp } from '@/components/AnimatedSection';
import { 
  FaArrowLeft, FaCalendar, FaUser, FaBookOpen, 
  FaShareAlt, FaHashtag, FaChevronRight, FaClock, FaBookmark 
} from 'react-icons/fa';

// ✅ Markdown parser to convert editor output (e.g. **Pros:**) to structured HTML
import { marked } from 'marked';

// ✅ DB and Model imports
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

// Direct MongoDB query
async function getBlog(slug: string): Promise<Blog | null> {
  try {
    await connectDB();
    const blog = await BlogModel.findOne({ slug, status: "published" }).lean();
    if (!blog) return null;
    return JSON.parse(JSON.stringify(blog));
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Estimate read time (strips raw markdown/HTML tags for accurate word count)
const getReadTime = (content: string = "") => {
  const cleanText = content.replace(/<\/?[^>]+(>|$)/g, "").replace(/[*_#>`]/g, "");
  const words = cleanText.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200)); 
  return `${minutes} min read`;
};

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT
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

  // Convert Markdown into styled HTML elements
  const parsedContent = await marked.parse(blog.content);

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", { 
    month: "long", 
    day: "numeric", 
    year: "numeric" 
  });

  return (
    <main className="min-h-screen bg-[#f8faf9] font-sans selection:bg-[#12823b]/30 overflow-x-hidden pt-[80px] lg:pt-[100px]">
      
      {/* ════════ HERO SECTION: TOP-RIGHT IMAGE ON DESKTOP ════════ */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 bg-[#0a1a0f] rounded-b-[35px] md:rounded-b-[60px] overflow-hidden">
        {/* Decorative Background Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] bg-[#12823b]/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1a0f]/80 to-[#0a1a0f] z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp>
            {/* Back Link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ffc222] mb-6 md:mb-8 transition-colors duration-300 text-xs md:text-sm font-bold tracking-widest uppercase"
            >
              <FaArrowLeft className="w-3 h-3 md:w-3.5 md:h-3.5" />
              Back to Journal
            </Link>

            {/* Top Layout Grid: Content Left, Image Top-Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Title & Header Info */}
              <div className="lg:col-span-7">
                {/* Category & Read Time */}
                <div className="flex flex-wrap items-center gap-3 mb-6 text-xs md:text-sm font-medium text-gray-300">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#12823b]/30 border border-[#12823b]/60 text-xs font-bold tracking-[0.18em] text-[#ffc222] uppercase backdrop-blur-md">
                    {blog.category}
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="flex items-center gap-1.5 opacity-90 font-semibold tracking-wide text-gray-300">
                    <FaBookOpen className="w-3.5 h-3.5 text-[#12823b]" />
                    {getReadTime(blog.content)}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-[1.15] mb-6 drop-shadow-md">
                  {blog.title}
                </h1>

                {/* Excerpt */}
                {blog.excerpt && (
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-medium mb-8 border-l-4 border-[#ffc222] pl-4 sm:pl-6 py-1 bg-gradient-to-r from-[#12823b]/15 to-transparent rounded-r-lg">
                    {blog.excerpt}
                  </p>
                )}

                {/* Compact Author & Date Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#12823b]/30">
                  <div className="w-10 h-10 rounded-full bg-[#12823b]/30 flex items-center justify-center border border-[#12823b]/60">
                    <FaUser className="w-4 h-4 text-[#ffc222]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Al-Barbari Caretakers</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
                      <FaCalendar className="w-3 h-3 text-[#12823b]" /> 
                      {formattedDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Image (Top Right on Desktop) */}
              <div className="lg:col-span-5">
                {blog.image ? (
                  <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[420px] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/10 group">
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill
                      priority
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f]/60 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="w-full h-[250px] lg:h-[350px] rounded-3xl bg-[#12823b]/10 border border-[#12823b]/30 flex items-center justify-center text-gray-500">
                    <FaBookmark className="w-12 h-12 text-[#12823b]/40" />
                  </div>
                )}
              </div>

            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ ARTICLE SECTION: 2-COLUMN DESKTOP GRID ════════ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Main Article Body (8 Columns on Desktop) */}
            <article className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100">
              <div 
                className="prose prose-base sm:prose-lg md:prose-xl max-w-none text-[#233529] font-medium leading-[1.85]
                           prose-headings:font-serif prose-headings:text-[#0a1a0f] prose-headings:leading-tight
                           prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-[#12823b]/20 prose-h2:pb-4
                           prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-[#12823b]
                           prose-p:mb-6 prose-p:text-[#2c3e33]
                           prose-a:text-[#12823b] prose-a:font-bold prose-a:underline hover:prose-a:text-[#ffc222] prose-a:transition-colors
                           prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
                           prose-blockquote:border-l-4 prose-blockquote:border-[#ffc222] prose-blockquote:bg-[#12823b]/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl prose-blockquote:text-[#12823b] prose-blockquote:font-serif prose-blockquote:italic
                           prose-strong:text-[#0a1a0f] prose-strong:font-extrabold prose-strong:bg-[#ffc222]/20 prose-strong:px-1.5 prose-strong:py-0.5 prose-strong:rounded
                           prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-ul:space-y-2
                           prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8 prose-ol:space-y-2
                           prose-li:text-[#233529] prose-li:marker:text-[#12823b] prose-li:marker:font-bold"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />

              {/* Mobile Tags Section */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-100 block lg:hidden">
                  <p className="text-xs font-bold text-[#12823b] mb-4 uppercase tracking-[0.2em]">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-[#0a1a0f] text-xs font-bold"
                      >
                        <FaHashtag className="w-2.5 h-2.5 text-[#12823b]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Desktop Sticky Sidebar (4 Columns) */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-28 space-y-8">
                
                {/* Sidebar Card 1: Article Quick Overview */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xs font-bold text-[#12823b] uppercase tracking-[0.2em] mb-4">
                    Article Highlights
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-gray-600">
                      <span className="flex items-center gap-2">
                        <FaClock className="w-3.5 h-3.5 text-[#12823b]" /> Reading Time
                      </span>
                      <span className="font-bold text-[#0a1a0f]">{getReadTime(blog.content)}</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-gray-600">
                      <span className="flex items-center gap-2">
                        <FaCalendar className="w-3.5 h-3.5 text-[#12823b]" /> Published
                      </span>
                      <span className="font-bold text-[#0a1a0f]">{formattedDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span className="flex items-center gap-2">
                        <FaUser className="w-3.5 h-3.5 text-[#12823b]" /> Author
                      </span>
                      <span className="font-bold text-[#0a1a0f]">Al-Barbari</span>
                    </div>
                  </div>

                  {/* Share Action Button */}
                  <button className="w-full mt-6 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0a1a0f] text-white hover:bg-[#12823b] transition-colors text-xs font-bold uppercase tracking-wider">
                    <FaShareAlt className="w-3.5 h-3.5 text-[#ffc222]" />
                    Share Article
                  </button>
                </div>

                {/* Sidebar Card 2: Related Topics / Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hidden lg:block">
                    <h3 className="text-xs font-bold text-[#12823b] uppercase tracking-[0.2em] mb-4">
                      Related Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f8faf9] border border-gray-200 text-[#0a1a0f] text-xs font-bold hover:border-[#12823b] hover:bg-[#12823b] hover:text-white transition-all cursor-pointer"
                        >
                          <FaHashtag className="w-3 h-3 text-gray-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </aside>

          </div>
        </FadeInUp>
      </section>

      {/* ════════ FOOTER CTA ════════ */}
      <section className="py-20 px-4 sm:px-6 bg-[#0a1a0f] border-t-4 border-[#12823b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(18,130,59,0.4)_0%,transparent_100%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-[#ffc222] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            Continue Reading
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif text-white mb-6 leading-tight">
            Discover more stories from the pastures.
          </h3>
          <p className="text-gray-300 mb-8 font-medium text-sm sm:text-base max-w-xl mx-auto">
            Return to the journal to explore further guides on ethical rearing, sunnah practices, and organic farming methods.
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#ffc222] text-[#0a1a0f] font-bold rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm"
          >
            Explore More Articles
            <FaChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </main>
  );
}