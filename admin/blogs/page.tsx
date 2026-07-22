"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Plus, 
  Pencil, 
  Trash2, 
  ExternalLink, 
  Image as ImageIcon, 
  Loader2, 
  AlertCircle 
} from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  status: "draft" | "published";
  createdAt: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState("");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/blogs", {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setBlogs(data.blogs);
      } else {
        setError("Failed to load blogs.");
      }
    } catch (err) {
      console.error(err);
      setError("A network error occurred while fetching blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete this blog? This action cannot be undone."
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      } else {
        alert("Failed to delete blog. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Check your connection.");
    } finally {
      setDeletingId("");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8   mt-15">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section (Mobile First: Stacked -> Desktop: Row) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Blog Management
            </h1>
            <p className="text-black/60 mt-2">
              Create, edit, and remove your articles.
            </p>
          </div>

          <Link
            href="/admin/blogs/create"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors w-full md:w-auto"
          >
            <Plus size={20} />
            Create Blog
          </Link>
        </div>

        {/* Global Error State */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
            <AlertCircle size={20} />
            <p className="font-medium">{error}</p>
            <button 
              onClick={fetchBlogs} 
              className="ml-auto underline hover:no-underline"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 border border-black/10 rounded-2xl">
            <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
            <p className="font-medium text-black/60">Loading your content...</p>
          </div>
        ) : blogs.length === 0 && !error ? (
          
          /* Empty State */
          <div className="text-center py-20 border border-black/10 rounded-2xl bg-black/5">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-black/10">
              <Plus size={32} className="text-black/40" />
            </div>
            <h3 className="text-xl font-bold">No Blogs Found</h3>
            <p className="text-black/60 mt-2 mb-6 max-w-sm mx-auto">
              You haven't written any blogs yet. Start creating your first post to see it here.
            </p>
            <Link
              href="/admin/blogs/create"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-black/80 transition-colors"
            >
              Write First Blog
            </Link>
          </div>
        ) : (
          
          /* Content State */
          <div className="space-y-4 md:space-y-0 md:bg-white md:border md:border-black/10 md:rounded-2xl md:overflow-hidden">
            
            {/* DESKTOP VIEW: Table (Hidden on Mobile) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/5 border-b border-black/10">
                    <th className="p-4 font-semibold">Image</th>
                    <th className="p-4 font-semibold">Title</th>
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold">Date</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="hover:bg-black/5 transition-colors">
                      <td className="p-4">
                        {blog.image ? (
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            width={80}
                            height={56}
                            className="rounded-lg object-cover w-20 h-14 border border-black/10"
                          />
                        ) : (
                          <div className="w-20 h-14 bg-black/5 border border-black/10 rounded-lg flex items-center justify-center text-black/40">
                            <ImageIcon size={20} />
                          </div>
                        )}
                      </td>
                      <td className="p-4 max-w-[250px]">
                        <h3 className="font-bold truncate" title={blog.title}>
                          {blog.title}
                        </h3>
                        <p className="text-sm text-black/60 truncate" title={blog.slug}>
                          /{blog.slug}
                        </p>
                      </td>
                      <td className="p-4 text-black/80">{blog.category}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${
                            blog.status === "published"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          {blog.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-4 text-black/80">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/blogs/edit/${blog._id}`}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200"
                            title="Edit"
                          >
                            <Pencil size={18} />
                          </Link>
                          <Link
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            className="p-2 text-black hover:bg-black/5 rounded-lg transition-colors border border-transparent hover:border-black/10"
                            title="View Live"
                          >
                            <ExternalLink size={18} />
                          </Link>
                          <button
                            onClick={() => deleteBlog(blog._id)}
                            disabled={deletingId === blog._id}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-200 disabled:opacity-50"
                            title="Delete"
                          >
                            {deletingId === blog._id ? (
                              <Loader2 size={18} className="animate-spin" />
                            ) : (
                              <Trash2 size={18} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE VIEW: Cards (Hidden on Desktop) */}
            <div className="md:hidden space-y-4">
              {blogs.map((blog) => (
                <div key={blog._id} className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col">
                  {/* Card Header (Image + Title) */}
                  <div className="p-4 border-b border-black/5 flex gap-4">
                    {blog.image ? (
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={80}
                        height={80}
                        className="rounded-xl object-cover w-20 h-20 border border-black/10 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-black/5 border border-black/10 rounded-xl flex items-center justify-center text-black/40 flex-shrink-0">
                        <ImageIcon size={24} />
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg leading-tight truncate-2-lines mb-1">
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap mt-2">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-bold border ${
                            blog.status === "published"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          {blog.status.toUpperCase()}
                        </span>
                        <span className="text-xs text-black/60">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="grid grid-cols-3 divide-x divide-black/10 bg-black/5">
                    <Link
                      href={`/admin/blogs/edit/${blog._id}`}
                      className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      <Pencil size={16} /> Edit
                    </Link>
                    <Link
                      href={`/blog/${blog.slug}`}
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-black hover:bg-black/10 transition-colors"
                    >
                      <ExternalLink size={16} /> View
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      disabled={deletingId === blog._id}
                      className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-red-700 hover:bg-red-50 transition-colors disabled:opacity-50"
                    >
                      {deletingId === blog._id ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          <Trash2 size={16} /> Delete
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}