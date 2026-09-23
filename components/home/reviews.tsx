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
    <footer className="bg-[#12823b] text-white font-sans relative overflow-hidden">
      {/* Optional: Subtle background glow/overlay for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/5 to-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 relative z-10">
        {/* ========================================= */}
        {/* Top Section                               */}
        {/* ========================================= */}
        <div className="grid lg:grid-cols-3 gap-12 pb-14 border-b border-white/20">
          {/* 1. Logo & About */}
          <div>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 bg-white/10 rounded-full p-2 backdrop-blur-sm border border-white/20 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Al Barbari"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white drop-shadow-md">
                  AL Barbari
                </h2>
                <p className="text-[#ffc222] tracking-[3px] uppercase text-sm font-bold mt-1 drop-shadow-sm">
                  Goat Farming
                </p>
              </div>
            </div>

            <p className="mt-6 text-white/90 leading-relaxed max-w-md font-medium">
              Delivering healthy, vaccinated, premium quality goats for Qurbani,
              Aqiqah, Sadqah, breeding, milk production and farm requirements
              throughout Pakistan.
            </p>

            {/* Trust Indicators */}
            <div className="flex gap-8 mt-8">
              <div>
                <h4 className="text-[#ffc222] text-2xl font-bold drop-shadow-sm">10+</h4>
                <p className="text-sm text-white/80 font-medium">Years Experience</p>
              </div>

              <div>
                <h4 className="text-[#ffc222] text-2xl font-bold drop-shadow-sm">5000+</h4>
                <p className="text-sm text-white/80 font-medium">Happy Customers</p>
              </div>

              <div>
                <h4 className="text-[#ffc222] text-2xl font-bold drop-shadow-sm">100%</h4>
                <p className="text-sm text-white/80 font-medium">Healthy Livestock</p>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-sm">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
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
                  className="flex items-center gap-2 text-white/90 hover:text-[#ffc222] transition-all duration-300 group font-medium"
                >
                  <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform text-[#ffc222]" />
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Newsletter */}
          <div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 shadow-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Join Our Newsletter
              </h3>

              <p className="text-white/80 text-sm mb-6 font-medium">
                Get updates about available goats, special offers, livestock
                tips and seasonal announcements.
              </p>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-5 rounded-full bg-black/20 border border-white/20 outline-none focus:border-[#ffc222] focus:bg-black/30 text-white placeholder-white/60 transition-all shadow-inner"
                />

                <button className="w-full h-12 rounded-full bg-[#ffc222] hover:bg-[#eab01b] text-[#022417] font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* Middle Section: Contact Info              */}
        {/* ========================================= */}
        <div className="grid md:grid-cols-3 gap-10 py-12 border-b border-white/20">
          {/* Phone */}
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-[#ffc222] border border-white/20 group-hover:border-[#ffc222] flex items-center justify-center shrink-0 shadow-md transition-all duration-300">
              <FaPhoneAlt className="text-white group-hover:text-[#022417] text-lg transition-colors duration-300" />
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-white text-lg">Call Us</h4>
              <p className="text-white/90 font-medium">+92 328 0425087</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-[#ffc222] border border-white/20 group-hover:border-[#ffc222] flex items-center justify-center shrink-0 shadow-md transition-all duration-300">
              <FaEnvelope className="text-white group-hover:text-[#022417] text-lg transition-colors duration-300" />
            </div>

            <div className="w-full overflow-hidden">
              <h4 className="font-semibold mb-2 text-white text-lg">Email</h4>
              <div className="space-y-1.5 flex flex-col">
                <a
                  href="mailto:info@albarbarigoatfarming.com"
                  className="text-white/90 font-medium text-sm hover:text-[#ffc222] transition-colors truncate"
                >
                  info@albarbarigoatfarming.com
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-[#ffc222] border border-white/20 group-hover:border-[#ffc222] flex items-center justify-center shrink-0 shadow-md transition-all duration-300">
              <FaMapMarkerAlt className="text-white group-hover:text-[#022417] text-lg transition-colors duration-300" />
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-white text-lg">
                Location
              </h4>
              <p className="text-white/90 font-medium leading-relaxed">
                Trade Center JT Lahore
              </p>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* Bottom Section                            */}
        {/* ========================================= */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-white/80 text-sm font-medium">
              © {new Date().getFullYear()} Al Barbari Farm. All Rights Reserved.
            </p>
            <p className="text-white/80 text-sm font-medium">
              Developed by{" "}
              <a
                href="http://devntomsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ffc222] transition-colors font-semibold"
              >
                Devntom Solutions
              </a>
            </p>
            <p className="text-white/80 text-sm font-medium">
              A Project By{" "}
              <a
                href="https://shahzamangroups.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffc222] hover:text-white transition-colors font-bold tracking-wide"
              >
                Shah Zaman Groups
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-11 h-11 rounded-full border border-white/30 bg-black/10 flex items-center justify-center hover:bg-[#ffc222] hover:border-[#ffc222] hover:text-[#022417] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="flex gap-6 text-sm font-medium">
            <Link
              href="/privacy-policy"
              className="text-white/80 hover:text-[#ffc222] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/80 hover:text-[#ffc222] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}