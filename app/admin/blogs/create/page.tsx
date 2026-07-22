"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Upload,
  Tag,
  FolderOpen,
  Eye,
  Save,
  Loader2,
  AlertCircle,
  Image as ImageIcon,
  Link as LinkIcon,
  AlignLeft,
  Type
} from "lucide-react";

export default function CreateBlogPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    category: "",
    tags: "",
    status: "draft",
  });

  const generateSlug = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setForm((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const uploadImage = async (file: File) => {
    try {
      setUploading(true);
      setError("");

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setForm((prev) => ({
          ...prev,
          image: data.imageUrl,
        }));
      } else {
        setError("Image upload failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("A network error occurred while uploading the image.");
    } finally {
      setUploading(false);
    }
  };

  const createBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.title || !form.content) {
      setError("Title and Content are required fields.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          tags: form.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Failed to create blog. Please check your inputs.");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      router.push("/admin/blogs");
      router.refresh(); 
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please check your connection and try again.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  // Refined input styles with better focus states and background transitions
  const inputStyles = "w-full border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 hover:bg-white focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200";

  return (
    <div className="min-h-screen bg-[#F8FAFC] mt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Create Blog Post
          </h1>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Draft, edit, and publish a new article to your platform.
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-start sm:items-center gap-3 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <AlertCircle size={20} className="mt-0.5 sm:mt-0 flex-shrink-0" />
            <p className="font-medium text-sm sm:text-base">{error}</p>
          </div>
        )}

        <form onSubmit={createBlog}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Title Section */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                  <Type size={16} className="text-slate-400" />
                  Blog Title
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={handleTitleChange}
                  placeholder="e.g., The Future of Artificial Intelligence"
                  className={inputStyles}
                  required
                />
                {form.slug && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-600 bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg">
                    <LinkIcon size={14} className="text-slate-400" />
                    <span className="font-medium">URL Slug:</span> 
                    <span className="text-indigo-600">/{form.slug}</span>
                  </div>
                )}
              </div>

              {/* Excerpt Section */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-end mb-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <AlignLeft size={16} className="text-slate-400" />
                    Excerpt
                  </label>
                  <span className={`text-xs font-medium transition-colors ${form.excerpt.length > 300 ? "text-red-500" : "text-slate-400"}`}>
                    {form.excerpt.length} / 300
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="Write a short, catchy summary for the blog card..."
                  className={`${inputStyles} resize-y`}
                  maxLength={300}
                />
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col h-[600px] lg:h-[700px]">
                <div className="flex justify-between items-center mb-4">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <FileText size={16} className="text-slate-400" />
                    Main Content
                  </label>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                    Markdown Supported
                  </span>
                </div>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Write your amazing article here..."
                  className={`${inputStyles} flex-1 resize-none font-mono text-sm leading-relaxed`}
                  required
                />
                <div className="mt-3 flex justify-end">
                  <p className="text-xs text-slate-400 font-medium">
                    {form.content.length} characters
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar Actions */}
            <div className="space-y-6">
              
              {/* Publish Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24">
                <h3 className="font-semibold text-slate-900 mb-4 pb-4 border-b border-slate-100">Publishing</h3>
                
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-semibold text-slate-900">Status</label>
                  <div className="relative">
                    <select
                      value={form.status}
                      onChange={(e) => setForm({ ...form, status: e.target.value as "draft" | "published" })}
                      className={`${inputStyles} appearance-none pr-10`}
                    >
                      <option value="draft">Draft (Hidden)</option>
                      <option value="published">Published (Live)</option>
                    </select>
                    {/* Custom Select Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || uploading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5 text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Save size={18} />
                  )}
                  {loading ? "Saving Draft..." : "Save Blog Post"}
                </button>
              </div>

              {/* Metadata Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4 pb-4 border-b border-slate-100">Metadata</h3>
                
                <div className="space-y-5">
                  <div>
                    <label className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-900">
                      <FolderOpen size={16} className="text-slate-400" />
                      Category
                    </label>
                    <input
                      type="text"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      placeholder="e.g., Technology"
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-900">
                      <Tag size={16} className="text-slate-400" />
                      Tags
                    </label>
                    <input
                      type="text"
                      placeholder="react, nextjs, web"
                      value={form.tags}
                      onChange={(e) => setForm({ ...form, tags: e.target.value })}
                      className={inputStyles}
                    />
                    <p className="text-xs text-slate-400 mt-2">Separate tags with commas</p>
                  </div>
                </div>
              </div>

              {/* Image Upload Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <label className="flex items-center gap-2 mb-4 text-sm font-semibold text-slate-900 pb-4 border-b border-slate-100">
                  <Upload size={16} className="text-slate-400" />
                  Featured Image
                </label>

                <label className="block w-full border-2 border-dashed border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 transition-colors rounded-xl p-8 text-center cursor-pointer mb-4 group">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        uploadImage(e.target.files[0]);
                      }
                    }}
                  />
                  {uploading ? (
                    <div className="flex flex-col items-center gap-3 text-indigo-600">
                      <Loader2 size={28} className="animate-spin" />
                      <span className="font-medium text-sm">Uploading file...</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-slate-500 group-hover:text-indigo-600 transition-colors">
                      <div className="p-3 bg-slate-50 rounded-full group-hover:bg-indigo-100 transition-colors">
                        <ImageIcon size={24} />
                      </div>
                      <span className="font-medium text-sm">Click to upload image</span>
                      <span className="text-xs text-slate-400">PNG, JPG, WEBP up to 5MB</span>
                    </div>
                  )}
                </label>

                {form.image && (
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                    <Image
                      src={form.image}
                      alt="Featured image preview"
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Live Preview Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <label className="flex items-center gap-2 mb-4 text-sm font-semibold text-slate-900 pb-4 border-b border-slate-100">
                  <Eye size={16} className="text-slate-400" />
                  Card Preview
                </label>
                
                <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-md group cursor-default">
                  {form.image ? (
                     <div className="w-full h-36 bg-slate-100 relative overflow-hidden">
                       <Image src={form.image} alt="Preview" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                  ) : (
                    <div className="w-full h-36 bg-slate-50 border-b border-slate-100 flex flex-col items-center justify-center text-slate-400 gap-2">
                      <ImageIcon size={28} />
                      <span className="text-xs font-medium">No image</span>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                        {form.category || "Category"}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 leading-tight mb-2 line-clamp-2">
                      {form.title || "Your Blog Title Goes Here"}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {form.excerpt || "Your blog excerpt will appear here as a short summary on the blog cards index."}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Needed to fix a missing import error internally for the Content icon
function FileText(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>;
}