import Link from "next/link";
import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";
import {
  FileText,
  CheckCircle2,
  PenTool,
  Plus,
  ArrowRight,
  AlertCircle,
  LayoutDashboard,
  Settings,
  ExternalLink,
} from "lucide-react";

// Define the Blog interface for strict typing
interface IBlog {
  _id: string;
  title: string;
  category: string;
  status: "published" | "draft";
  createdAt: Date;
}

async function getStats() {
  try {
    await connectDB();

    // Run queries in parallel for better performance
    const [total, published, drafts, recentBlogsRaw] = await Promise.all([
      Blog.countDocuments(),
      Blog.countDocuments({ status: "published" }),
      Blog.countDocuments({ status: "draft" }),
      Blog.find().sort({ createdAt: -1 }).limit(5).lean(),
    ]);

    // Serialize ObjectIds to standard strings to prevent Next.js hydration warnings
    const recentBlogs = recentBlogsRaw.map((blog) => ({
      ...blog,
      _id: blog._id.toString(),
    })) as IBlog[];

    return {
      total,
      published,
      drafts,
      recentBlogs,
      error: null,
    };
  } catch (error) {
    console.error("Dashboard DB Error:", error);
    // Return safe fallback values if the database fails
    return {
      total: 0,
      published: 0,
      drafts: 0,
      recentBlogs: [],
      error: "Failed to connect to the database. Please try again later.",
    };
  }
}

export default async function DashboardPage() {
  const { total, published, drafts, recentBlogs, error } = await getStats();

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-12 pt-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Error Banner */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-start sm:items-center gap-3 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <AlertCircle size={20} className="mt-0.5 sm:mt-0 flex-shrink-0" />
            <p className="font-medium text-sm sm:text-base">{error}</p>
          </div>
        )}

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Overview
            </h1>
            <p className="text-slate-500 mt-1.5 text-sm sm:text-base">
              Monitor your content performance and manage your latest posts.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin/blogs"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm font-medium text-sm"
            >
              <Settings size={16} />
              Manage Blogs
            </Link>

            <Link
              href="/admin/blogs/create"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-xl hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5 transition-all shadow-sm font-medium text-sm active:translate-y-0"
            >
              <Plus size={18} strokeWidth={2.5} />
              New Post
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Total Blogs Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:border-slate-200 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Posts</p>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">{total}</h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 ring-4 ring-blue-50/50">
                <FileText size={24} />
              </div>
            </div>
          </div>

          {/* Published Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:border-slate-200 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Published</p>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">{published}</h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 ring-4 ring-emerald-50/50">
                <CheckCircle2 size={24} />
              </div>
            </div>
          </div>

          {/* Drafts Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:border-slate-200 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Drafts</p>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">{drafts}</h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 ring-4 ring-amber-50/50">
                <PenTool size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content Area: Recent Blogs (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
                  <p className="text-slate-500 text-sm mt-0.5">Your latest written content.</p>
                </div>
                <Link
                  href="/admin/blogs"
                  className="group flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  View All
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {recentBlogs.length > 0 ? (
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-sm text-left whitespace-nowrap">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50/80 border-b border-slate-100">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Title</th>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold text-right">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {recentBlogs.map((blog: IBlog) => (
                        <tr key={blog._id} className="hover:bg-slate-50/80 transition-colors group">
                          <td className="px-6 py-4">
                            <span className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {blog.title}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-600">
                            {blog.category}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${
                                blog.status === "published"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200/60"
                                  : "bg-amber-50 text-amber-700 border-amber-200/60"
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${blog.status === "published" ? "bg-emerald-500" : "bg-amber-500"}`}></span>
                              {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-500 text-right">
                            {new Date(blog.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center flex-1">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 border border-dashed border-slate-200">
                    <FileText size={32} className="text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">No posts found</h3>
                  <p className="text-slate-500 mb-6 max-w-sm">
                    You haven't written any blogs yet. Start creating your first post to see it here.
                  </p>
                  <Link
                    href="/admin/blogs/create"
                    className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-900 px-5 py-2.5 rounded-xl shadow-sm hover:bg-slate-50 transition-colors font-medium text-sm"
                  >
                    <Plus size={18} />
                    Create First Post
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar: Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 h-full">
              <h2 className="text-lg font-semibold text-slate-900 mb-5">Quick Actions</h2>
              <div className="flex flex-col gap-3">
                <Link
                  href="/admin/blogs/create"
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-indigo-200 hover:bg-indigo-50/30 hover:shadow-sm transition-all group"
                >
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-100 transition-colors">
                    <PenTool size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors">
                      Write an Article
                    </h3>
                    <p className="text-xs text-slate-500">
                      Draft, format, and publish new content.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/admin/blogs"
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-sm transition-all group"
                >
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <LayoutDashboard size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                      Manage Library
                    </h3>
                    <p className="text-xs text-slate-500">
                      Edit, delete, or update existing posts.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/"
                  target="_blank"
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm transition-all group mt-2"
                >
                  <div className="p-2 bg-slate-100 text-slate-600 rounded-lg group-hover:bg-slate-200 transition-colors">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-900 mb-1 group-hover:text-black transition-colors">
                      View Live Website
                    </h3>
                    <p className="text-xs text-slate-500">
                      See how your blogs appear to visitors.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}