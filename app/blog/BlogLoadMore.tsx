"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaArrowRight,
  FaBookOpen,
  FaCalendar,
  FaUser,
} from "react-icons/fa";

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

interface BlogLoadMoreProps {
  initialBlogs: Blog[];
}

export default function BlogLoadMore({
  initialBlogs,
}: BlogLoadMoreProps) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMoreBlogs = async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);

      const nextPage = page + 1;

      const response = await fetch(
        `/api/blogs?page=${nextPage}&limit=10`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to load more blogs");
      }

      const data = await response.json();

      setBlogs((previousBlogs) => [
        ...previousBlogs,
        ...(data.blogs || []),
      ]);

      setPage(nextPage);
      setHasMore(data.hasMore);

    } catch (error) {
      console.error("Error loading more blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ========================================= */}
      {/* BLOG GRID */}
      {/* ========================================= */}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        {blogs.map((article) => (
          <article
            key={article._id}
            className="group flex h-full"
          >

            <Link
              href={`/blog/${article.slug}`}
              className="
                flex
                h-full
                w-full
                flex-col
                overflow-hidden
                rounded-[2rem]
                border
                border-gray-100
                bg-white
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#12823b]/30
                hover:shadow-[0_20px_40px_rgba(18,130,59,0.08)]
              "
            >

              {/* IMAGE */}

              <div className="relative h-56 overflow-hidden bg-[#f8faf9]">

                <div className="absolute inset-0 z-10 bg-[#0a1a0f]/10 transition-colors duration-500 group-hover:bg-transparent" />

                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <FaBookOpen size={40} />
                  </div>
                )}

                {/* Category */}

                {article.category && (
                  <div className="absolute left-4 top-4 z-20">

                    <span className="rounded-md border border-gray-100 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#12823b] shadow-sm backdrop-blur">
                      {article.category}
                    </span>

                  </div>
                )}

              </div>


              {/* CONTENT */}

              <div className="flex flex-grow flex-col p-7 sm:p-8">

                {/* Date */}

                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">

                  <FaCalendar className="h-3.5 w-3.5" />

                  {new Date(article.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}

                </div>


                {/* Title */}

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
                  {article.title}
                </h3>


                {/* Excerpt */}

                <p
                  className="
                    mb-8
                    line-clamp-3
                    flex-grow
                    text-sm
                    leading-relaxed
                    text-gray-500
                    sm:text-[15px]
                  "
                >
                  {article.excerpt}
                </p>


                {/* FOOTER */}

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">

                  <p className="flex items-center gap-2 text-sm font-medium text-gray-500">

                    <FaUser className="h-4 w-4 text-gray-300" />

                    Farm Team

                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#12823b] transition-colors group-hover:text-[#ffc222]">

                    Read

                    <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />

                  </div>

                </div>

              </div>

            </Link>

          </article>
        ))}

      </div>


      {/* ========================================= */}
      {/* LOAD MORE */}
      {/* ========================================= */}

      {hasMore && (
        <div className="mt-12 flex justify-center sm:mt-16">

          <button
            type="button"
            onClick={loadMoreBlogs}
            disabled={loading}
            className="
              inline-flex
              min-w-[180px]
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#0a1a0f]
              px-8
              py-4
              text-sm
              font-bold
              uppercase
              tracking-wider
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#12823b]
              hover:shadow-[0_15px_30px_rgba(18,130,59,0.2)]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >

            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Loading...
              </>
            ) : (
              <>
                Load More

                <FaArrowRight className="h-3.5 w-3.5" />
              </>
            )}

          </button>

        </div>
      )}


      {/* ========================================= */}
      {/* ALL LOADED */}
      {/* ========================================= */}

      {!hasMore && blogs.length > 0 && (
        <div className="mt-12 text-center sm:mt-16">

          <div className="mx-auto mb-3 h-px max-w-xs bg-gray-200" />

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            You&apos;ve reached the end
          </p>

        </div>
      )}

    </>
  );
}
