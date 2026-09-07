import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FadeInUp,
} from "@/components/AnimatedSection";

import {
  FaLeaf,
  FaArrowRight,
  FaCalendar,
  FaUser,
  FaBookOpen,
  FaChevronRight,
  FaEnvelope,
  FaHashtag,
} from "react-icons/fa";

import { connectDB } from "@/lib/mongodb";
import BlogModel from "@/models/Blog";

import BlogLoadMore from "./BlogLoadMore";

export const dynamic = "force-dynamic";

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

const FALLBACK_TOPICS = [
  "Organic Nutrition",
  "Sunnah Breeding",
  "Livestock Care",
  "Farm Management",
  "Sadqah Guides",
  "Herd Health",
  "Ethical Rearing",
];

const getReadTime = (content: string = "") => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
};

async function getInitialBlogs(): Promise<Blog[]> {
  try {
    await connectDB();

    const blogs = await BlogModel.find({
      status: "published",
    })
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function InsightsPage() {
  const initialBlogs = await getInitialBlogs();

  const featuredArticle = initialBlogs[0];
  const articlesData = initialBlogs.slice(1);

  /*
   * Topics are generated from the blogs we already loaded.
   * We don't make another query for the entire collection.
   */
  const dynamicTopics = Array.from(
    new Set(
      initialBlogs.flatMap((blog) => [
        blog.category,
        ...(blog.tags || []),
      ])
    )
  )
    .filter(Boolean)
    .slice(0, 12);

  const displayTopics =
    dynamicTopics.length > 3
      ? dynamicTopics
      : FALLBACK_TOPICS;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8faf9] font-sans text-[#0a1a0f] selection:bg-[#12823b]/30 pt-[100px]">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[55vh]
          w-full
          flex-col
          justify-center
          overflow-hidden
          rounded-b-[40px]
          px-5
          pb-40
          pt-20
          shadow-sm
          sm:px-6
          md:min-h-[60vh]
          md:rounded-b-[80px]
          md:px-10
          md:pb-48
          md:pt-24
          lg:px-12
        "
      >

        {/* Main gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#07150b] via-[#12823b] to-[#07150b]" />

        {/* Green glow */}
        <div
          className="
            absolute
            -right-32
            -top-32
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#ffc222]/10
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-20
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#12823b]/40
            blur-[100px]
          "
        />

        {/* Dot pattern */}
        <div
          className="
            absolute
            inset-0
            z-0
            opacity-[0.08]
            pointer-events-none
            bg-[radial-gradient(#ffc222_2px,transparent_2px)]
            [background-size:30px_30px]
          "
        />

        {/* Watermark */}
        <div className="pointer-events-none absolute -left-10 top-20 z-0 select-none opacity-[0.035] sm:-left-20">
          <span className="font-serif text-[120px] font-bold leading-none text-white sm:text-[180px] md:text-[240px]">
            البربری
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] text-center">

          <FadeInUp className="mx-auto flex max-w-4xl flex-col items-center">

            {/* Label */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#ffc222]
                px-4
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#0a1a0f]
                shadow-lg
                sm:px-5
                sm:text-xs
              "
            >
              <FaLeaf className="text-[#12823b]" />
              Knowledge & Guides
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-4xl
                font-serif
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
                drop-shadow-xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              The{" "}
              <span className="text-[#ffc222]">
                Barbari
              </span>{" "}
              Journal
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                font-medium
                leading-relaxed
                text-gray-200
                sm:mt-7
                sm:text-base
                md:text-lg
              "
            >
              Stories, expert guides, and insights rooted in
              the prophetic tradition of ethical livestock
              rearing and organic farming.
            </p>

          </FadeInUp>

        </div>
      </section>


      {/* ===================================================== */}
      {/* FEATURED ARTICLE */}
      {/* ===================================================== */}

      {featuredArticle && (
        <section className="relative z-20 mx-auto -mt-24 w-full max-w-[1400px] px-5 pb-16 sm:-mt-28 sm:px-6 md:-mt-32 md:px-10 lg:px-12">

          <FadeInUp>

            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block"
            >

              <div
                className="
                  relative
                  grid
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#12823b]/30
                  bg-[#0a1a0f]
                  shadow-[0_20px_50px_rgba(0,0,0,0.2)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#ffc222]/50
                  md:rounded-[2.5rem]
                  lg:grid-cols-2
                "
              >

                {/* IMAGE */}

                <div className="relative h-[250px] overflow-hidden sm:h-[320px] lg:h-full lg:min-h-[480px]">

                  <div className="absolute inset-0 z-10 bg-[#12823b]/20 mix-blend-overlay transition-colors duration-700 group-hover:bg-transparent" />

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a1a0f] to-transparent lg:bg-gradient-to-r" />

                  {featuredArticle.image ? (
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                      <FaBookOpen size={48} />
                    </div>
                  )}

                  {/* Featured badge */}
                  <div className="absolute left-5 top-5 z-20 sm:left-6 sm:top-6">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#12823b] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-lg sm:text-xs">
                      <FaLeaf className="text-[#ffc222]" />
                      Featured Story
                    </span>
                  </div>

                </div>


                {/* CONTENT */}

                <div
                  className="
                    relative
                    flex
                    flex-col
                    justify-center
                    bg-[#0a1a0f]
                    p-7
                    sm:p-10
                    md:p-12
                    lg:p-16
                  "
                >

                  <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-medium text-gray-400 sm:text-sm">

                    <span className="font-bold uppercase tracking-[0.15em] text-[#ffc222]">
                      {featuredArticle.category}
                    </span>

                    <span>•</span>

                    <span>
                      {getReadTime(
                        featuredArticle.content ||
                        featuredArticle.excerpt
                      )}
                    </span>

                  </div>

                  <h2
                    className="
                      mb-5
                      line-clamp-3
                      font-serif
                      text-2xl
                      font-bold
                      leading-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#ffc222]
                      sm:text-3xl
                      md:text-4xl
                    "
                  >
                    {featuredArticle.title}
                  </h2>

                  <p
                    className="
                      mb-8
                      line-clamp-3
                      text-sm
                      leading-relaxed
                      text-gray-300
                      sm:text-base
                      md:text-lg
                    "
                  >
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-col gap-5 border-t border-[#12823b]/30 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#12823b]/50 bg-[#12823b]/20">
                        <FaUser className="h-4 w-4 text-[#ffc222]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Al-Barbari Caretakers
                        </p>

                        <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-400">
                          <FaCalendar className="h-3 w-3" />

                          {new Date(
                            featuredArticle.createdAt
                          ).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                    </div>

                    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffc222] px-6 py-3 text-sm font-bold text-[#0a1a0f] transition-all duration-300 group-hover:bg-white">

                      Read Full Story

                      <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                    </div>

                  </div>

                </div>

              </div>

            </Link>

          </FadeInUp>

        </section>
      )}


      {/* ===================================================== */}
      {/* ARTICLES */}
      {/* ===================================================== */}

      {articlesData.length > 0 && (
        <section
          id="archive"
          className="mx-auto w-full max-w-[1400px] px-5 pb-20 sm:px-6 md:px-10 md:pb-24 lg:px-12"
        >

          {/* Header */}

          <div className="mb-10 flex flex-col gap-5 border-b border-gray-200 pb-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#12823b]">
                Recent Publications
              </h2>

              <h3 className="font-serif text-3xl font-bold text-[#0a1a0f] sm:text-4xl">
                More from the Farm
              </h3>

            </div>

            <Link
              href="/blog"
              className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12823b] transition-colors hover:text-[#0a1a0f] sm:flex"
            >
              All Articles
              <FaChevronRight className="h-3 w-3" />
            </Link>

          </div>


          {/* Initial 9 articles + Load More */}

          <BlogLoadMore initialBlogs={articlesData} />

        </section>
      )}


      {/* ===================================================== */}
      {/* TOPICS */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden border-y-4 border-[#12823b] bg-[#0a1a0f] px-5 py-20 sm:px-6 md:px-10 md:py-28">

        <div className="absolute inset-0 opacity-[0.035] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,130,59,0.3)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <FadeInUp>

            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#ffc222]">
              Knowledge Directory
            </span>

            <h2 className="mb-10 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Explore by Topic & Tradition
            </h2>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">

              {displayTopics.map((topic) => (
                <button
                  key={topic}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#12823b]/30
                    bg-[#12823b]/10
                    px-5
                    py-3
                    text-xs
                    font-bold
                    tracking-wide
                    text-gray-300
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-[#ffc222]
                    hover:bg-[#ffc222]/10
                    hover:text-[#ffc222]
                    sm:px-6
                    sm:text-sm
                  "
                >
                  <FaHashtag className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />

                  {topic}
                </button>
              ))}

            </div>

          </FadeInUp>

        </div>

      </section>


      {/* ===================================================== */}
      {/* NEWSLETTER */}
      {/* ===================================================== */}

      <section className="bg-[#f8faf9] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12">

        <FadeInUp
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[2rem]
            border
            border-[#12823b]
            bg-[#12823b]
            p-8
            text-center
            shadow-[0_20px_60px_rgba(18,130,59,0.2)]
            sm:rounded-[40px]
            sm:p-12
            md:p-16
            lg:p-20
          "
        >

          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] translate-x-1/3 -translate-y-1/3 rounded-full border-2 border-[#ffc222]/20" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] -translate-x-1/3 translate-y-1/3 rounded-full border-2 border-white/10" />

          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]" />

          <div className="relative z-10 mx-auto max-w-2xl">

            <span className="mb-7 inline-flex h-14 w-14 rotate-3 items-center justify-center rounded-2xl bg-[#ffc222] text-[#0a1a0f] shadow-lg sm:h-16 sm:w-16">

              <FaEnvelope className="h-7 w-7 sm:h-8 sm:w-8" />

            </span>

            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Join Our Community.
            </h2>

            <p className="mb-8 text-sm font-medium leading-relaxed text-gray-200 sm:mb-10 sm:text-base md:text-lg">
              Subscribe to receive our latest guides on organic livestock
              care, farm updates, and exclusive priority booking for Sadqah
              and Aqiqah.
            </p>

            <form
              className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
              action="/api/subscribe"
              method="POST"
            >

              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="
                  min-w-0
                  flex-1
                  rounded-full
                  border
                  border-white/20
                  bg-black/20
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-white
                  placeholder-white/60
                  backdrop-blur-sm
                  transition-all
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#ffc222]
                "
              />

              <button
                type="submit"
                className="
                  rounded-full
                  bg-[#ffc222]
                  px-8
                  py-4
                  text-sm
                  font-bold
                  text-[#0a1a0f]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)]
                "
              >
                Subscribe
              </button>

            </form>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.1em] text-white/60 sm:mt-6 sm:text-xs">
              We respect your privacy. No spam, ever.
            </p>

          </div>

        </FadeInUp>

      </section>

    </main>
  );
}
