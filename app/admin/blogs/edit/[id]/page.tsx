"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Upload,
  Tag,
  FolderOpen,
  Eye,
  Save,
  Loader2,
  AlertCircle,
  Image as ImageIcon,
  ArrowLeft
} from "lucide-react";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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

  // Fetch the existing blog data
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();

        if (data.success) {
          const blog = data.blog;
          setForm({
            title: blog.title || "",
            slug: blog.slug || "",
            excerpt: blog.excerpt || "",
            content: blog.content || "",
            image: blog.image || "",
            category: blog.category || "",
            // Convert tags array back to comma-separated string for the input
            tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : (blog.tags || ""),
            status: blog.status || "draft",
          });
        } else {
          setError("Failed to load the blog post.");
        }
      } catch (err) {
        console.error(err);
        setError("A network error occurred while fetching the blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

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

  const updateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.title || !form.content) {
      setError("Title and Content are required fields.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      setSaving(true);

      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT", // or PATCH depending on your API
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
        setError(data.message || "Failed to update blog. Please check your inputs.");
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
      setSaving(false);
    }
  };

  const inputStyles = "w-full border border-black/20 rounded-xl p-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-white";

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
        <p className="font-medium text-black/60">Loading blog details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8   mt-15">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 border-b border-black/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link 
              href="/admin/blogs" 
              className="inline-flex items-center gap-2 text-sm font-bold text-black/60 hover:text-blue-600 transition-colors mb-2"
            >
              <ArrowLeft size={16} /> Back to Blogs
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Edit Blog
            </h1>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <AlertCircle size={20} className="flex-shrink-0" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={updateBlog}>
          {/* Mobile First: Stacked layout, Desktop: 2-1 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Title Section */}
              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <label className="font-bold block mb-2">Blog Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={handleTitleChange}
                  placeholder="e.g., The Future of Artificial Intelligence"
                  className={inputStyles}
                  required
                />
                {form.slug && (
                  <p className="text-sm text-blue-600 mt-3 font-medium bg-blue-50 inline-block px-3 py-1 rounded-md border border-blue-100">
                    URL Slug: /{form.slug}
                  </p>
                )}
              </div>

              {/* Excerpt Section */}
              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <div className="flex justify-between items-end mb-2">
                  <label className="font-bold block">Excerpt</label>
                  <span className={`text-xs font-medium ${form.excerpt.length > 300 ? "text-red-600" : "text-black/40"}`}>
                    {form.excerpt.length} / 300
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="A short, catchy summary for the blog card..."
                  className={inputStyles}
                  maxLength={300}
                />
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm flex flex-col">
                <label className="font-bold block mb-2">Main Content</label>
                <textarea
                  rows={20}
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Write your amazing article here..."
                  className={`${inputStyles} flex-1 resize-y font-mono text-sm leading-relaxed`}
                  required
                />
                <p className="text-xs text-black/40 mt-3 font-medium text-right">
                  {form.content.length} characters
                </p>
              </div>
            </div>

            {/* Right Column: Sidebar Actions */}
            <div className="space-y-6">
              
              {/* Publish Card */}
              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm sticky top-6">
                <h3 className="font-bold text-lg mb-4 border-b border-black/10 pb-2">Update</h3>
                
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-sm">Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value as "draft" | "published" })}
                    className={inputStyles}
                  >
                    <option value="draft">Draft (Hidden)</option>
                    <option value="published">Published (Live)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Save size={20} />
                  )}
                  {saving ? "Saving Changes..." : "Update Blog Post"}
                </button>
              </div>

              {/* Metadata Card */}
              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-black border-b border-black/10 pb-2">
                    <FolderOpen size={18} />
                    <span className="font-bold">Category</span>
                  </div>
                  <input
                    type="text"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    placeholder="e.g., Technology"
                    className={`${inputStyles} py-3`}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 text-black border-b border-black/10 pb-2">
                    <Tag size={18} />
                    <span className="font-bold">Tags</span>
                  </div>
                  <input
                    type="text"
                    placeholder="react, nextjs, web (comma separated)"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    className={`${inputStyles} py-3`}
                  />
                </div>
              </div>

              {/* Image Upload Card */}
              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-black border-b border-black/10 pb-2">
                  <Upload size={18} />
                  <span className="font-bold">Featured Image</span>
                </div>

                <label className="block w-full border-2 border-dashed border-black/20 hover:border-blue-600 hover:bg-blue-50 transition-colors rounded-xl p-6 text-center cursor-pointer mb-4">
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
                    <div className="flex flex-col items-center gap-2 text-blue-600">
                      <Loader2 size={24} className="animate-spin" />
                      <span className="font-medium text-sm">Uploading...</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-black/60">
                      <ImageIcon size={24} />
                      <span className="font-medium text-sm">Click to replace image</span>
                    </div>
                  )}
                </label>

                {form.image && (
                  <div className="relative rounded-xl overflow-hidden border border-black/10 group">
                    <Image
                      src={form.image}
                      alt="Preview"
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Live Preview Card */}
              <div className="bg-black/5 rounded-2xl border border-black/10 p-6">
                <div className="flex items-center gap-2 mb-4 text-black border-b border-black/10 pb-2">
                  <Eye size={18} />
                  <span className="font-bold">Card Preview</span>
                </div>
                <div className="bg-white rounded-xl overflow-hidden border border-black/10 shadow-sm">
                  {form.image ? (
                     <div className="w-full h-32 bg-black/5 relative">
                       <Image src={form.image} alt="Preview" fill className="object-cover" />
                     </div>
                  ) : (
                    <div className="w-full h-32 bg-black/5 flex items-center justify-center text-black/20">
                      <ImageIcon size={32} />
                    </div>
                  )}
                  <div className="p-4">
                    <h4 className="font-bold text-lg leading-tight mb-1 truncate">
                      {form.title || "Your Blog Title"}
                    </h4>
                    <p className="text-xs text-black/60 line-clamp-2">
                      {form.excerpt || "Your blog excerpt will appear here as a short summary."}
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