import mongoose, { Schema, Model, models } from "mongoose";

export interface IBlog {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt?: string;        // NEW: SEO image alt text
  metaTitle?: string;       // NEW: Search engine title tag
  metaDescription?: string; // NEW: Search engine description tag
  author: string;
  category: string;
  tags: string[];
  status: "draft" | "published";
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },

    slug: {
      type: String,
      required: [true, "Blog slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // Speeds up single-post queries by slug
    },

    excerpt: {
      type: String,
      default: "",
      trim: true,
    },

    content: {
      type: String,
      required: [true, "Blog content is required"],
    },

    image: {
      type: String,
      default: "",
    },

    imageAlt: {
      type: String,
      default: "",
      trim: true,
    },

    metaTitle: {
      type: String,
      default: "",
      trim: true,
    },

    metaDescription: {
      type: String,
      default: "",
      trim: true,
    },

    author: {
      type: String,
      default: "Admin",
      trim: true,
    },

    category: {
      type: String,
      default: "General",
      trim: true,
      index: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true, // Speeds up filtering for public vs draft posts
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for fast queries when fetching public published posts sorted by date
BlogSchema.index({ status: 1, createdAt: -1 });

const Blog: Model<IBlog> =
  models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;