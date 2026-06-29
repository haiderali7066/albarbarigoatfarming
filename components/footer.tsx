
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
  FaChevronUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/goats/9.jpeg"
          alt="Al Barbari Farm"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#022417]/95" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#022417]/70 via-[#03311f]/95 to-[#01140d]" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ffc222]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ffc222]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        {/* Top Section */}
        <div className="grid lg:grid-cols-3 gap-10 pb-14 border-b border-white/10">
          {/* Logo */}
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
                <h2 className="text-3xl font-bold">
                  Al Barbari
                </h2>

                <p className="text-[#ffc222] tracking-[3px] uppercase text-sm">
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

          {/* Quick Links */}
          <div className="lg:mx-auto">
            <h3 className="text-2xl font-semibold mb-6">
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
                  <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-none p-7">
              <h3 className="text-2xl font-semibold mb-3">
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
                  className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-[#ffc222]"
                />

                <button className="w-full h-12 rounded-xl bg-[#ffc222] hover:bg-[#eab01b] text-black font-semibold transition">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-3 gap-10 py-14 border-b border-white/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0">
              <FaPhoneAlt className="text-black" />
            </div>

            <div>
              <h4 className="font-semibold mb-1">Call Us</h4>
              <p className="text-gray-300">
                +92 328 0425087
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0">
              <FaEnvelope className="text-black" />
            </div>

            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-gray-300">
                info@albarbari.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffc222] flex items-center justify-center shrink-0">
              <FaMapMarkerAlt className="text-black" />
            </div>

            <div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-gray-300">
                New Garden Town, Tariq Block,
Lahore, Punjab, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Al Barbari Farm. All Rights Reserved.   Developed by Devntom solutions
          </p>

          {/* Social */}
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#ffc222] hover:text-black transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="flex gap-5 text-sm">
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Back To Top */}
        
      </div>
    </footer>
  );
}