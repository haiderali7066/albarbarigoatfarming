import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#01472c] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        
        {/* ========================================= */}
        {/* Top Section                               */}
        {/* ========================================= */}
        <div className="grid lg:grid-cols-3 gap-12 pb-14 border-b border-white/10">
          
          {/* 1. Logo & About */}
          <div>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo.png"
                  alt="Al Barbari"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Al Barbari
                </h2>
                <p className="text-[#ffc222] tracking-[3px] uppercase text-sm font-semibold mt-1">
                  Premium Goat Farm
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-300 leading-relaxed max-w-md">
              Delivering healthy, vaccinated, premium quality goats for
              Qurbani, Aqiqah, Sadqah, breeding, milk production and farm
              requirements throughout Pakistan.
            </p>

            {/* Trust Indicators */}
            <div className="flex gap-8 mt-8">
              <div>
                <h4 className="text-[#ffc222] text-2xl font-bold">10+</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>

              <div>
                <h4 className="text-[#ffc222] text-2xl font-bold">5000+</h4>
                <p className="text-sm text-gray-400">Happy Customers</p>
              </div>

              <div>
                <h4 className="text-[#ffc222] text-2xl font-bold">100%</h4>
                <p className="text-sm text-gray-400">Healthy Livestock</p>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Home", "/"],
                ["Bakray", "/bakray"],
                ["Haqeeqah", "/sadqah"],
                ["CEO Message", "/ceo"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#ffc222] transition-all duration-300 group"
                >
                  <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform text-[#ffc222]" />
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Newsletter */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Join Our Newsletter
              </h3>

              <p className="text-gray-300 text-sm mb-6">
                Get updates about available goats, special offers,
                livestock tips and seasonal announcements.
              </p>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-5 rounded-full bg-white/10 border border-white/20 outline-none focus:border-[#ffc222] text-white placeholder-gray-400 transition-colors"
                />

                <button className="w-full h-12 rounded-full bg-[#ffc222] hover:bg-[#eab01b] text-black font-bold transition-colors shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* Middle Section: Contact Info              */}
        {/* ========================================= */}
        <div className="grid md:grid-cols-3 gap-10 py-12 border-b border-white/10">
          
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0 shadow-md">
              <FaPhoneAlt className="text-[#022417] text-lg" />
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-white text-lg">Call Us</h4>
              <p className="text-gray-300 mb-1">
                +92 328 0425087
              </p>
              
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0 shadow-md">
              <FaEnvelope className="text-[#022417] text-lg" />
            </div>

            <div className="w-full overflow-hidden">
              <h4 className="font-semibold mb-2 text-white text-lg">Email</h4>
              <div className="space-y-1.5 flex flex-col">
                <a href="mailto:info@albarbarigoatfarming.com" className="text-gray-300 text-sm hover:text-[#ffc222] transition-colors truncate">
                  info@albarbarigoatfarming.com
                </a>
                
                
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0 shadow-md">
              <FaMapMarkerAlt className="text-[#022417] text-lg" />
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-white text-lg">Location</h4>
              <p className="text-gray-300 leading-relaxed">
                Trade Center JT Lahore
              </p>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* Bottom Section                            */}
        {/* ========================================= */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Al Barbari Farm. All Rights Reserved. <br className="md:hidden" /> <a href="http://devntomsolutions.com" target="_blank" rel="noopener noreferrer">Developed by Devntom Solutions </a>
          </p>

          {/* Social */}
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-[#ffc222] hover:border-[#ffc222] hover:text-[#022417] transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="flex gap-5 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}