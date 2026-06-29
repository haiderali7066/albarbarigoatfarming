"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaCheckCircle, 
  FaArrowLeft, 
  FaWeightHanging, 
  FaRegCalendarAlt, 
  FaLeaf, 
  FaTooth,
  FaShieldAlt,
  FaTruck
} from 'react-icons/fa';

// --- MOCK DATABASE ---
// In a real app, you would fetch this from an API or CMS based on the slug.
const GOAT_DATABASE: Record<string, any> = {
  "barbari-bakra": { name: "Barbari Bakra", image: "/goats/1.jpeg", tag: "Premium Stock", weight: "35 - 40 kg", age: "12-14 Months", teeth: "2 Teeth (Do Danda)", diet: "Organic Grains & Fodder", desc: "The Barbari breed is highly prized for its beautiful appearance and premium meat quality. Raised on a 100% natural diet, this goat is perfect for Aqeeqah or Eid Qurbani." },
  "beetal-bakra": { name: "Beetal Bakra", image: "/goats/2.jpeg", tag: "Top Breeder", weight: "60 - 70 kg", age: "18 Months", teeth: "4 Teeth (Chaugga)", diet: "Premium Farm Feed", desc: "Known as the 'Poor Man's Cow', the Beetal is a large, majestic breed. It boasts heavy bone structure and excellent meat yield." },
  "boer-bakra": { name: "Boer Bakra", image: "/goats/3.jpeg", tag: "Heavy Weight", weight: "80 - 90 kg", age: "24 Months", teeth: "4 Teeth (Chaugga)", diet: "High-Protein Diet", desc: "The Boer goat is the ultimate meat breed. Originating from South Africa, our locally raised Boers offer massive size and extraordinary health." },
  "rajanpuri-bakra": { name: "Rajanpuri Bakra", image: "/goats/4.jpeg", tag: "Eid Special", weight: "45 - 55 kg", age: "16 Months", teeth: "2 Teeth (Do Danda)", diet: "Natural Pasture", desc: "A flawless pure white coat and long ears make the Rajanpuri a customer favorite for Eid. Highly active and impeccably healthy." },
  "makhi-cheeni-bakra": { name: "Makhi Cheeni Bakra", image: "/goats/5.jpeg", tag: "Spotted Beauty", weight: "40 - 50 kg", age: "14 Months", teeth: "2 Teeth (Do Danda)", diet: "Organic Fodder", desc: "Famous for its beautiful speckled 'Makhi Cheeni' coat, this breed is beautiful to look at and yields exceptionally tender meat." },
  "nuqri-bakra": { name: "Nuqri Bakra", image: "/goats/6.jpeg", tag: "Pure White", weight: "40 - 45 kg", age: "12 Months", teeth: "2 Teeth (Do Danda)", diet: "Natural Fodder", desc: "Nuqri goats are prized for their stunning pure white skin and pinkish noses. A premium choice that stands out in any herd." },
  "teddy-bakra": { name: "Teddy Bakra", image: "/goats/1.jpeg", tag: "Compact Size", weight: "25 - 30 kg", age: "10 Months", teeth: "Milk Teeth (Kheera)", diet: "Soft Greens", desc: "Compact, highly active, and quick to mature. The Teddy breed is an excellent, budget-friendly option without compromising on meat quality." },
  "nagri-bakra": { name: "Nagri Bakra", image: "/goats/2.jpeg", tag: "Long Ears", weight: "50 - 60 kg", age: "16 Months", teeth: "2 Teeth (Do Danda)", diet: "Farm Grains", desc: "Recognizable by their distinctive long ears and robust build, Nagri goats offer great weight and excellent health." },
  "desi-bakra": { name: "Desi Bakra", image: "/goats/3.jpeg", tag: "Organic Fed", weight: "30 - 35 kg", age: "12 Months", teeth: "2 Teeth (Do Danda)", diet: "Free-Range Grazing", desc: "The traditional Desi goat, raised free-range. Known for the most authentic, rich-tasting meat due to their highly active lifestyle." },
  "gulabi-bakra": { name: "Gulabi Bakra", image: "/goats/4.jpeg", tag: "Rare Breed", weight: "60 - 75 kg", age: "18 Months", teeth: "2 Teeth (Do Danda)", diet: "Premium Feed", desc: "A highly sought-after breed known for its distinctive pinkish skin and large size. The Gulabi is the absolute pinnacle of luxury livestock." },
  "rahim-yar-khan-ablak": { name: "Rahim Yar Khan Ablak", image: "/goats/5.jpeg", tag: "Ablak Pattern", weight: "55 - 65 kg", age: "16 Months", teeth: "2 Teeth (Do Danda)", diet: "Organic Grains", desc: "Featuring the stunning Ablak (two-tone) pattern, these goats from Rahim Yar Khan are incredibly healthy and visually striking." },
};

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const WHATSAPP_NUMBER = "923280425087";

  useEffect(() => {
    // Simulate fetching data based on the dynamic slug
    const slug = params?.slug as string;
    if (slug && GOAT_DATABASE[slug]) {
      setProduct(GOAT_DATABASE[slug]);
    }
    setLoading(false);
  }, [params]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#fafafa]"><div className="w-10 h-10 border-4 border-[#12823b] border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] text-center px-4">
        <h1 className="text-4xl font-bold text-[#0a1a0f] mb-4">Goat Not Found</h1>
        <p className="text-gray-500 mb-8">The livestock you are looking for is either sold out or doesn't exist.</p>
        <Link href="/bakray" className="bg-[#12823b] text-white px-8 py-3 rounded-full font-bold hover:bg-[#ffc222] hover:text-[#0a1a0f] transition-colors">
          Back to All Bakray
        </Link>
      </div>
    );
  }

  const waMessage = encodeURIComponent(`Hello Al-Barbari Farm! I am interested in booking the "${product.name}". Please share the price and delivery details.`);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  return (
    <main className="bg-[#fafafa] min-h-screen font-sans pb-24 md:pb-0">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
        
        {/* Breadcrumb Navigation */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/bakray')}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#12823b] transition-colors mb-8 md:mb-12 group w-max"
        >
          <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </motion.button>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
          
          {/* ========================================= */}
          {/* LEFT: IMAGE GALLERY / SHOWCASE            */}
          {/* ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2 flex flex-col gap-4"
          >
            {/* Main Image */}
            <div className="relative w-full aspect-[4/5] md:aspect-square bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="absolute top-6 left-6 z-20 bg-[#ffc222] text-[#0a1a0f] text-xs font-black uppercase tracking-widest py-2 px-4 rounded-full shadow-lg">
                {product.tag}
              </div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f]/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Guarantees Box (Desktop under image) */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3 shadow-sm">
                <FaShieldAlt className="text-2xl text-[#12823b]" />
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Guarantee</p>
                  <p className="text-sm font-bold text-[#0a1a0f]">100% Healthy</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3 shadow-sm">
                <FaTruck className="text-2xl text-[#12823b]" />
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Transport</p>
                  <p className="text-sm font-bold text-[#0a1a0f]">Safe Delivery</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* RIGHT: PRODUCT DETAILS                    */}
          {/* ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-[#12823b] text-lg" />
              <span className="text-[#12823b] font-bold tracking-[0.1em] uppercase text-xs">
                Verified Pure Breed
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1a0f] font-serif mb-6 leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              {product.desc}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
              {[
                { icon: FaWeightHanging, label: "Live Weight", value: product.weight },
                { icon: FaRegCalendarAlt, label: "Age", value: product.age },
                { icon: FaTooth, label: "Teeth", value: product.teeth },
                { icon: FaLeaf, label: "Diet", value: product.diet },
              ].map((spec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 flex flex-col gap-3 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:border-[#12823b]/30 transition-colors">
                  <spec.icon className="text-2xl text-[#ffc222]" />
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{spec.label}</p>
                    <p className="text-sm md:text-base font-bold text-[#0a1a0f]">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing / Booking CTA Area */}
            <div className="bg-[#0a1a0f] rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl mt-auto hidden md:block">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#12823b] rounded-full blur-2xl opacity-50"></div>
              
              <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-[#ffc222] font-bold uppercase tracking-widest text-xs mb-1">Pricing & Availability</p>
                  <p className="text-white text-lg font-medium">Contact for current market rates.</p>
                </div>
                <a 
                  href={waLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full xl:w-auto flex items-center justify-center gap-3 bg-[#12823b] text-white py-4 px-8 rounded-xl font-bold uppercase tracking-widest hover:bg-[#ffc222] hover:text-[#0a1a0f] transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="text-2xl" />
                  Book Now
                </a>
              </div>
            </div>

            {/* Mobile Guarantees Box (Visible only on mobile) */}
            <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
              <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center gap-2 shadow-sm">
                <FaShieldAlt className="text-xl text-[#12823b]" />
                <p className="text-xs font-bold text-[#0a1a0f]">100% Healthy</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center gap-2 shadow-sm">
                <FaTruck className="text-xl text-[#12823b]" />
                <p className="text-xs font-bold text-[#0a1a0f]">Safe Delivery</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ========================================= */}
      {/* MOBILE STICKY BOTTOM CTA                  */}
      {/* ========================================= */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 pb-safe z-50 md:hidden shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a 
          href={waLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#12823b] text-white py-3.5 px-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-md active:scale-95 transition-transform"
        >
          <FaWhatsapp className="text-xl" />
          Book on WhatsApp
        </a>
      </div>

    </main>
  );
}