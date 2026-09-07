"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  status: string;
  createdAt: string;
}

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs/latest");

        if (!response.ok) {
          throw new Error("Failed to fetch latest blogs");
        }

        const data = await response.json();

        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Don't render the section if there are no published blogs
  // after loading has finished.
  if (!loading && blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="w-full overflow-hidden bg-white py-16 font-sans text-[#0a1a0f] sm:py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-10 lg:px-12">

        {/* ========================================= */}
        {/* SECTION HEADER */}
        {/* ========================================= */}

        <div className="mb-12 flex flex-col items-center text-center sm:mb-16 md:mb-20">

          {/* Decorative Icon */}
          <div className="mb-4 text-[#ffc222] sm:mb-5">
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M20 0L26 8V32H14V8L20 0Z" />
              <path d="M6 10L12 16V32H0V16L6 10Z" />
              <path d="M34 10L40 16V32H28V16L34 10Z" />
            </svg>
          </div>

          <span className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500 sm:text-xs md:text-sm">
            Articles & Updates
          </span>

          <h2 className="font-serif text-4xl font-bold leading-[1.1] text-[#0a1a0f] sm:text-5xl md:text-[54px]">
            Latest News
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Discover stories, farming insights, livestock care guides, and
            updates from Al-Barbari.
          </p>
        </div>

        {/* ========================================= */}
        {/* LOADING STATE */}
        {/* ========================================= */}

        {loading ? (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse"
              >
                <div className="mb-6 h-[240px] rounded-tl-2xl rounded-tr-[100px] rounded-b-2xl bg-gray-100 sm:h-[260px] md:h-[280px]" />

                <div className="h-7 w-4/5 rounded bg-gray-100" />

                <div className="mt-4 h-4 w-full rounded bg-gray-100" />
                <div className="mt-2 h-4 w-5/6 rounded bg-gray-100" />

                <div className="mt-7 h-12 w-32 rounded-full bg-gray-100" />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ========================================= */}
            {/* BLOG GRID */}
            {/* ========================================= */}

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">

              {blogPosts.map((post) => (
                <article
                  key={post._id}
                  className="group flex h-full flex-col"
                >

                  {/* ========================================= */}
                  {/* IMAGE */}
                  {/* ========================================= */}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative mb-6 block"
                  >
                    <div
                      className="
                        relative
                        h-[240px]
                        w-full
                        overflow-hidden
                        rounded-tl-2xl
                        rounded-tr-[100px]
                        rounded-b-2xl
                        border
                        border-gray-100
                        bg-gray-100
                        sm:h-[260px]
                        md:h-[280px]
                        lg:h-[270px]
                      "
                    >

                      {post.image ? (
                        <>
                          {/* Image overlay */}
                          <div className="absolute inset-0 z-10 bg-[#0a1a0f]/5 transition-all duration-500 group-hover:bg-transparent" />

                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="
                              (max-width: 768px) 100vw,
                              (max-width: 1024px) 50vw,
                              33vw
                            "
                            className="
                              object-cover
                              transition-transform
                              duration-700
                              ease-out
                              group-hover:scale-105
                            "
                          />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                          <FaBookOpen size={42} />
                        </div>
                      )}

                      {/* Category Badge */}
                      {post.category && (
                        <div className="absolute bottom-4 left-4 z-20">
                          <span
                            className="
                              rounded-full
                              bg-white/95
                              px-4
                              py-2
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[0.15em]
                              text-[#12823b]
                              shadow-sm
                              backdrop-blur-sm
                            "
                          >
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* ========================================= */}
                  {/* CONTENT */}
                  {/* ========================================= */}

                  <div className="flex flex-grow flex-col pr-0 sm:pr-4">

                    <Link href={`/blog/${post.slug}`}>
                      <h3
                        className="
                          mb-4
                          line-clamp-2
                          font-serif
                          text-2xl
                          font-bold
                          leading-snug
                          text-[#0a1a0f]
                          transition-colors
                          duration-300
                          group-hover:text-[#12823b]
                        "
                      >
                        {post.title}
                      </h3>
                    </Link>

                    <p
                      className="
                        mb-7
                        line-clamp-3
                        text-[15px]
                        leading-relaxed
                        text-gray-500
                      "
                    >
                      {post.excerpt}
                    </p>

                    {/* ========================================= */}
                    {/* READ MORE */}
                    {/* ========================================= */}

                    <div className="mt-auto">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-[#ffc222]
                          px-7
                          py-3.5
                          text-sm
                          font-bold
                          text-[#0a1a0f]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-[#12823b]
                          hover:text-white
                          hover:shadow-lg
                        "
                      >
                        Read More

                        <FaArrowRight
                          className="
                            h-3
                            w-3
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </Link>
                    </div>

                  </div>
                </article>
              ))}

            </div>

            {/* ========================================= */}
            {/* VIEW ALL ARTICLES */}
            {/* ========================================= */}

            <div className="mt-12 flex justify-center sm:mt-16">
              <Link
                href="/blog"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#0a1a0f]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#0a1a0f]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0a1a0f]
                  hover:text-white
                "
              >
                View All Articles

                <FaArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
