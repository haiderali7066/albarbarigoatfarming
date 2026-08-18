"use client";

import { useEffect, useState, useRef } from "react";
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
  Link as LinkIcon,
  AlignLeft,
  Type,
  ArrowLeft,
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  Quote,
  Code,
  Sparkles,
} from "lucide-react";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // Default to true on edit page so changing title doesn't break existing post URLs
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(true);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    summary: "", // Dual purpose: Excerpt & Meta Description
    content: "",
    image: "",
    imageAlt: "",
    category: "",
    tags: "",
    status: "draft",
  });

  // Fetch the existing blog post
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
            summary: blog.excerpt || blog.metaDescription || "",
            content: blog.content || "",
            image: blog.image || "",
            imageAlt: blog.imageAlt || blog.title || "",
            category: blog.category || "",
            tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : blog.tags || "",
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
      ...(!isSlugManuallyEdited && { slug: generateSlug(title) }),
      ...(!prev.imageAlt && { imageAlt: title }),
    }));
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSlugManuallyEdited(true);
    setForm((prev) => ({ ...prev, slug: generateSlug(e.target.value) }));
  };

  // Editor Formatting Helper
  const insertFormatting = (prefix: string, suffix: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    const replacement = `${prefix}${selectedText || "text"}${suffix}`;
    const newContent =
      textarea.value.substring(0, start) +
      replacement +
      textarea.value.substring(end);

    setForm((prev) => ({ ...prev, content: newContent }));

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        end + prefix.length
      );
    }, 0);
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
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: form.title,
          slug: form.slug,
          content: form.content,
          excerpt: form.summary,
          metaTitle: form.title, // Auto SEO payload
          metaDescription: form.summary,
          image: form.image,
          imageAlt: form.imageAlt || form.title,
          category: form.category,
          tags: form.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          status: form.status,
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

  const inputStyles = "w-full border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 hover:bg-white focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200";

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4">
        <Loader2 className="w-9 h-9 text-indigo-600 animate-spin mb-3" />
        <p className="text-sm font-medium text-slate-500">Loading blog details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] mt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link 
              href="/admin/blogs" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors mb-2"
            >
              <ArrowLeft size={14} /> Back to Blogs
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Edit Blog Post
            </h1>
          </div>
          <span className="self-start sm:self-auto flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
            <Sparkles size={14} /> Auto SEO Active
          </span>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center gap-3 shadow-sm">
            <AlertCircle size={20} className="flex-shrink-0" />
            <p className="font-medium text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={updateBlog}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Main Editor */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Title & Editable Slug */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                  <Type size={16} className="text-slate-400" />
                  Blog Title
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={handleTitleChange}
                  placeholder="e.g., 10 Tips for Better Web Performance"
                  className={inputStyles}
                  required
                />
                
                {/* Inline URL Slug */}
                <div className="mt-3 flex items-center gap-2 text-sm bg-slate-50 border border-slate-200/60 px-3 py-2 rounded-lg focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
                  <LinkIcon size={14} className="text-slate-400 flex-shrink-0" />
                  <span className="font-medium text-slate-400 text-xs">URL: /blog/</span> 
                  <input
                    type="text"
                    value={form.slug}
                    onChange={handleSlugChange}
                    className="bg-transparent border-none outline-none text-indigo-600 text-xs font-mono w-full"
                    placeholder="post-url-slug"
                  />
                </div>
              </div>

              {/* Combined Excerpt & Meta Description Field */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-end mb-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <AlignLeft size={16} className="text-slate-400" />
                    Summary & Search Snippet
                  </label>
                  <span className={`text-xs font-medium ${form.summary.length > 160 ? "text-amber-500 font-semibold" : "text-slate-400"}`}>
                    {form.summary.length} / 160 target
                  </span>
                </div>
                <textarea
                  rows={2}
                  value={form.summary}
                  onChange={(e) => setForm({ ...form, summary: e.target.value })}
                  placeholder="Summarize your post. This powers both your blog card preview AND Google search results."
                  className={`${inputStyles} resize-y`}
                />
              </div>

              {/* Rich Text Editor Content */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[650px]">
                {/* Formatting Toolbar */}
                <div className="border-b border-slate-200 bg-slate-50/80 p-2.5 flex items-center gap-1 flex-wrap">
                  <button
                    type="button"
                    onClick={() => insertFormatting("## ")}
                    className="p-2 hover:bg-white rounded-lg text-slate-600 transition-colors border border-transparent hover:border-slate-200"
                    title="Heading 2"
                  >
                    <Heading2 size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting("### ")}
                    className="p-2 hover:bg-white rounded-lg text-slate-600 transition-colors border border-transparent hover:border-slate-200"
                    title="Heading 3"
                  >
                    <Heading3 size={16} />
                  </button>
                  <div className="h-4 w-px bg-slate-200 mx-1" />
                  <button
                    type="button"
                    onClick={() => insertFormatting("**", "**")}
                    className="p-2 hover:bg-white rounded-lg text-slate-600 transition-colors border border-transparent hover:border-slate-200"
                    title="Bold"
                  >
                    <Bold size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting("*", "*")}
                    className="p-2 hover:bg-white rounded-lg text-slate-600 transition-colors border border-transparent hover:border-slate-200"
                    title="Italic"
                  >
                    <Italic size={16} />
                  </button>
                  <div className="h-4 w-px bg-slate-200 mx-1" />
                  <button
                    type="button"
                    onClick={() => insertFormatting("- ")}
                    className="p-2 hover:bg-white rounded-lg text-slate-600 transition-colors border border-transparent hover:border-slate-200"
                    title="Bullet List"
                  >
                    <List size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting("> ")}
                    className="p-2 hover:bg-white rounded-lg text-slate-600 transition-colors border border-transparent hover:border-slate-200"
                    title="Quote"
                  >
                    <Quote size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting("```\n", "\n```")}
                    className="p-2 hover:bg-white rounded-lg text-slate-600 transition-colors border border-transparent hover:border-slate-200"
                    title="Code Block"
                  >
                    <Code size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting("[", "](https://)")}
                    className="p-2 hover:bg-white rounded-lg text-slate-600 transition-colors border border-transparent hover:border-slate-200"
                    title="Add Link"
                  >
                    <LinkIcon size={16} />
                  </button>
                </div>

                {/* Editor Text Area */}
                <textarea
                  ref={textareaRef}
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Write your article content here..."
                  className="w-full flex-1 p-5 outline-none font-sans text-slate-900 leading-relaxed resize-none text-base"
                  required
                />
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-6">
              
              {/* Publish Actions */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24">
                <h3 className="font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100 text-sm">Update Post</h3>
                
                <div className="mb-5">
                  <label className="block mb-2 text-xs font-semibold text-slate-700">Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className={inputStyles}
                  >
                    <option value="draft">Draft (Hidden)</option>
                    <option value="published">Published (Live)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                  {saving ? "Updating..." : "Update Blog Post"}
                </button>
              </div>

              {/* Taxonomy (Category & Tags) */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <h3 className="font-semibold text-slate-900 pb-3 border-b border-slate-100 text-sm">Organization</h3>
                <div>
                  <label className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-slate-700">
                    <FolderOpen size={14} className="text-slate-400" /> Category
                  </label>
                  <input
                    type="text"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    placeholder="e.g., Engineering"
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-slate-700">
                    <Tag size={14} className="text-slate-400" /> Tags
                  </label>
                  <input
                    type="text"
                    placeholder="nextjs, react, seo"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    className={inputStyles}
                  />
                </div>
              </div>

              {/* Featured Image */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <h3 className="font-semibold text-slate-900 pb-3 border-b border-slate-100 text-sm">Featured Image</h3>

                <label className="block w-full border-2 border-dashed border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 transition-colors rounded-xl p-6 text-center cursor-pointer group">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) uploadImage(e.target.files[0]);
                    }}
                  />
                  {uploading ? (
                    <div className="flex flex-col items-center gap-2 text-indigo-600">
                      <Loader2 size={24} className="animate-spin" />
                      <span className="font-medium text-xs">Uploading...</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-indigo-600">
                      <ImageIcon size={22} />
                      <span className="font-medium text-xs">Replace Cover Image</span>
                    </div>
                  )}
                </label>

                {form.image && (
                  <div className="space-y-2 pt-2">
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                      <Image
                        src={form.image}
                        alt="Preview"
                        width={400}
                        height={200}
                        className="w-full h-36 object-cover"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Image Alt Text (SEO)
                      </label>
                      <input
                        type="text"
                        value={form.imageAlt}
                        onChange={(e) => setForm({ ...form, imageAlt: e.target.value })}
                        placeholder="Image description..."
                        className={`${inputStyles} py-2 text-xs`}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Preview */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <label className="flex items-center gap-2 mb-3 text-xs font-semibold text-slate-700">
                  <Eye size={14} className="text-slate-400" /> Blog Card Preview
                </label>
                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
                  {form.image && (
                    <div className="w-full h-28 relative">
                      <Image src={form.image} alt="Preview" fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                      {form.category || "Category"}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight mt-1 line-clamp-2">
                      {form.title || "Your Post Title"}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {form.summary || "Summary snippet preview..."}
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