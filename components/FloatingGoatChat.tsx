"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaTimes,
  FaChevronRight,
  FaCircle,
} from "react-icons/fa";

const PHONE = "923280425087";

const QUICK_OPTIONS = [
  {
    emoji: "🐐",
    title: "Son Aqeeqah",
    subtitle: "Need 2 Barbari Goats",
    message: "Assalam o Alaikum. I need 2 Barbari Bakra for my son's Aqeeqah.",
  },
  {
    emoji: "🐐",
    title: "Daughter Aqeeqah",
    subtitle: "Need 1 Barbari Goat",
    message:
      "Assalam o Alaikum. I need 1 Barbari Bakra for my daughter's Aqeeqah.",
  },
  {
    emoji: "🤲",
    title: "Sadqah",
    subtitle: "Healthy Goat Required",
    message: "Assalam o Alaikum. I need a Barbari goat for Sadqah.",
  },
  {
    emoji: "🍖",
    title: "Family Meal",
    subtitle: "Fresh Farm Goat",
    message: "Assalam o Alaikum. I need a Barbari goat for family meals.",
  },
  {
    emoji: "❤️",
    title: "Donation",
    subtitle: "Goat for Charity",
    message: "Assalam o Alaikum. I need a Barbari goat for donation.",
  },
];

export default function FloatingGoatChat() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!open) setShowBubble((prev) => !prev);
    }, 4500);

    return () => clearInterval(timer);
  }, [open]);

  const whatsappLink = (text: string) =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

  const defaultMessage = useMemo(
    () =>
      "Assalam o Alaikum. I would like to know more about your Barbari goats.",
    []
  );

  return (
    <>
      {/* Floating Chat */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
        {/* Bubble */}
        {!open && showBubble && (
          <div className="relative mb-5 animate-bounce rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-2xl">
            <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-green-100 bg-white"></div>

            <p className="text-sm font-bold text-green-700">
              🐐 Need a Goat?
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-600">
              Chat with our farm expert.
              <br />
              We'll help you choose the perfect goat.
            </p>
          </div>
        )}

        {/* Chat Card */}
        {open && (
          <div className="mb-5 w-[360px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_25px_60px_rgba(0,0,0,.18)]">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-700 to-green-600 p-5 text-white">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white bg-white">
                    <Image
                      src="/logo.png"
                      alt="Goat"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="font-bold text-lg">
                      AL Barbari Goat Farming
                    </h2>

                    <div className="mt-1 flex items-center gap-2 text-sm">
                      <FaCircle className="text-[9px] text-green-300" />
                      Farm Expert Online
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="mt-4 rounded-2xl bg-white/10 p-3 text-sm leading-6">
                👋 Welcome!
                <br />
                Select an option below or start chatting with us on WhatsApp.
              </div>
            </div>

            {/* Options */}
            <div className="max-h-[420px] space-y-3 overflow-y-auto p-4">
              {QUICK_OPTIONS.map((item) => (
                <a
                  key={item.title}
                  href={whatsappLink(item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                    {item.emoji}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.subtitle}
                    </p>
                  </div>

                  <FaChevronRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-green-600" />
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t bg-gray-50 p-4">
              <a
                href={whatsappLink(defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1ebe5d]"
              >
                <FaWhatsapp size={24} />
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        )}

        {/* Floating Button */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="group relative"
          >
            {/* Ripple */}
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-25 animate-ping"></span>

            <span className="absolute inset-0 rounded-full border-4 border-green-300 animate-pulse"></span>

            {/* Notification */}
            <span className="absolute -right-1 -top-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg">
              !
            </span>

            {/* Button */}
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_20px_50px_rgba(34,197,94,.35)] transition duration-300 group-hover:scale-110 animate-[float_3s_ease-in-out_infinite]">
              <Image
                src="/logo.png"
                alt="Goat"
                fill
                className="object-cover"
              />
            </div>
          </button>
        )}
      </div>

      
    </>
  );
}