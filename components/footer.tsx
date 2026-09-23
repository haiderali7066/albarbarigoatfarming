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
    <footer className="bg-[#12823b] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        {/* ========================================= */}
        {/* Top Section */}
        {/* ========================================= */}
        <div className="grid lg:grid-cols-3 gap-12 pb-14 border-b border-white/20">
          {/* 1. Logo & About */}
          <div>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Al Barbari"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  AL Barbari
                </h2>

                <p className="text-[#ffc222] tracking-[3px] uppercase text-sm font-semibold mt-1">
                  Goat Farming
                </p>
              </div>
            </div>

            <p className="mt-6 text-white/80 leading-relaxed max-w-md">
              Delivering healthy, vaccinated, premium quality goats for
              Qurbani, Aqiqah, Sadqah, breeding, milk production and farm
              requirements throughout Pakistan.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <h4 className="text-[#ffc222] text-2xl font-bold">10+</h4>
                <p className="text-sm text-white/65">Years Experience</p>
              </div>

              <div>
                <h4 className="text-[#ffc222] text-2xl font-bold">5000+</h4>
                <p className="text-sm text-white/65">Happy Customers</p>
              </div>

              <div>
                <h4 className="text-[#ffc222] text-2xl font-bold">100%</h4>
                <p className="text-sm text-white/65">Healthy Livestock</p>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-white">
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
                  className="flex items-center gap-2 text-white/80 hover:text-[#ffc222] transition-all duration-300 group"
                >
                  <FaChevronRight className="text-xs text-[#ffc222] group-hover:translate-x-1 transition-transform" />
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Newsletter */}
          <div>
            <div className="bg-black/10 border border-white/15 rounded-2xl p-7 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Join Our Newsletter
              </h3>

              <p className="text-white/75 text-sm mb-6 leading-relaxed">
                Get updates about available goats, special offers,
                livestock tips and seasonal announcements.
              </p>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-5 rounded-full bg-white/10 border border-white/25 outline-none focus:border-[#ffc222] text-white placeholder-white/55 transition-colors"
                />

                <button className="w-full h-12 rounded-full bg-[#ffc222] hover:bg-[#eab01b] text-black font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* Middle Section: Contact Info */}
        {/* ========================================= */}
        <div className="grid md:grid-cols-3 gap-10 py-12 border-b border-white/20">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0 shadow-md">
              <FaPhoneAlt className="text-[#022417] text-lg" />
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-white text-lg">
                Call Us
              </h4>

              <p className="text-white/80">+92 328 0425087</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0 shadow-md">
              <FaEnvelope className="text-[#022417] text-lg" />
            </div>

            <div className="w-full overflow-hidden">
              <h4 className="font-semibold mb-2 text-white text-lg">
                Email
              </h4>

              <a
                href="mailto:info@albarbarigoatfarming.com"
                className="text-white/80 text-sm hover:text-[#ffc222] transition-colors break-all"
              >
                info@albarbarigoatfarming.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0 shadow-md">
              <FaMapMarkerAlt className="text-[#022417] text-lg" />
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-white text-lg">
                Location
              </h4>

              <p className="text-white/80 leading-relaxed">
                Trade Center JT Lahore
              </p>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* Bottom Section */}
        {/* ========================================= */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-white/65 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Al Barbari Farm. All Rights
              Reserved.
              <br className="md:hidden" />{" "}
              <a
                href="https://devntomsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffc222] transition-colors"
              >
                Developed by Devntom Solutions
              </a>
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-[#ffc222] hover:border-[#ffc222] hover:text-[#022417] transition-all duration-300 shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-5 text-sm">
              <Link
                href="/privacy-policy"
                className="text-white/65 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-white/65 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Project By */}
          <div className="mt-7 pt-5 border-t border-white/15 text-center">
            <p className="text-sm text-white/65">
               A Project By{" "}
              <a
                href="https://shahzamangroups.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffc222] font-semibold hover:text-white transition-colors"
              >
                Shah Zaman Groups
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}