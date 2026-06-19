
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Leaf, Baby, HandHeart, Award } from "lucide-react";

const services = [
  {
    title: "Aqiqa",
    subtitle: "( Sunnah for Child )",
    image: "https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?q=80&w=1074&auto=format&fit=crop",
    badge: "عقيقة",
  },
  {
    title: "Sadqa & Charity",
    subtitle: "( Giving Alms )",
    image: "https://images.unsplash.com/photo-1529864539815-de90220aedfb?q=80&w=1469&auto=format&fit=crop",
    badge: "صدقة",
  },
  {
    title: "Eid Qurbani",
    subtitle: "( Annual Sacrifice )",
    image: "https://images.unsplash.com/photo-1622837699015-9a4cb8b7a94b?q=80&w=1470&auto=format&fit=crop",
    badge: "أضحية",
  },
  {
    title: "Albarbari Selection",
    subtitle: "( Premium Stock )",
    image: "https://images.unsplash.com/photo-1557431177-d277c24390e5?q=80&w=687&auto=format&fit=crop",
    badge: "أفضل",
  },
  {
    title: "Delivery & Slaughter",
    subtitle: "( Complete Service )",
    image: "https://images.unsplash.com/photo-1604076150017-48b528308aa3?q=80&w=735&auto=format&fit=crop",
    badge: "توصيل",
  },
];

const stats = [
  { count: "1000+", label: "Active Herd Count", icon: Leaf },
  { count: "150+", label: "Aqiqa Completed", icon: Baby },
  { count: "5k+", label: "Sadqa Served", icon: HandHeart },
  { count: "12+", label: "Master Shepherds", icon: Award },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden">
      {/* Keep the rest of your component exactly the same */}
    </section>
  );
}
