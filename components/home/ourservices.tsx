"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Leaf, Baby, HandHeart, Award } from "lucide-react";

const services = [
  {
    title: "Aqiqa",
    subtitle: "( Sunnah for Child )",
    image:
      "https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?q=80&w=1074&auto=format&fit=crop",
    badge: "عقيقة",
  },
  {
    title: "Sadqa & Charity",
    subtitle: "( Giving Alms )",
    image:
      "https://images.unsplash.com/photo-1529864539815-de90220aedfb?q=80&w=1469&auto=format&fit=crop",
    badge: "صدقة",
  },
  {
    title: "Eid Qurbani",
    subtitle: "( Annual Sacrifice )",
    image:
      "https://images.unsplash.com/photo-1622837699015-9a4cb8b7a94b?q=80&w=1470&auto=format&fit=crop",
    badge: "أضحية",
  },
  {
    title: "Albarbari Selection",
    subtitle: "( Premium Stock )",
    image:
      "https://images.unsplash.com/photo-1557431177-d277c24390e5?q=80&w=687&auto=format&fit=crop",
    badge: "أفضل",
  },
  {
    title: "Delivery & Slaughter",
    subtitle: "( Complete Service )",
    image:
      "https://images.unsplash.com/photo-1604076150017-48b528308aa3?q=80&w=735&auto=format&fit=crop",
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="mb-4 text-[#fbbc04]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M17 5v17M7 5v17M2 22h20M12 2l-5 5h10z" />
            </svg>
          </div>

          <p className="text-[11px] md:text-xs tracking-[0.25em] text-gray-500 uppercase font-semibold mb-3">
            Islamic Animal Sacrifice
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">
            Albarbari Goat Farm Services
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              className="relative group flex flex-col h-full"
            >
              <div className="absolute -top-3 -left-3 z-20 w-[60px] h-[60px] bg-[#fbbc04] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-gray-900 font-bold text-lg">
                  {service.badge}
                </span>
              </div>

              <div className="relative w-full aspect-[4/5] rounded-t-[10rem] overflow-hidden z-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="bg-white border-x border-b border-gray-100 p-6 pt-5 rounded-bl-[1.5rem] rounded-br-[4rem] flex-grow flex flex-col">
                <h3 className="text-[1.35rem] font-serif text-gray-900 mb-1">
                  {service.title}
                </h3>

                <p className="text-[13px] font-medium text-[#2eb85c]">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-white rounded-b-[4rem] overflow-hidden shadow-xl"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUpItem}
                className="bg-[#0f8a45] pt-14 pb-16 px-6 flex flex-col items-center text-center rounded-b-[5rem]"
              >
                <h4 className="text-5xl md:text-6xl font-bold text-[#fbbc04] mb-3">
                  {stat.count}
                </h4>

                <p className="text-white text-[15px] font-medium mb-8">
                  {stat.label}
                </p>

                <Icon size={34} strokeWidth={1.5} className="text-white" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
