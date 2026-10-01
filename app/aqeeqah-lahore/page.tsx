"use client";

import React, { useEffect, useState } from "react";
import {
  FaLeaf,
  FaQuoteLeft,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
  FaHeart,
  FaMosque,
  FaTruck,
  FaUsers,
  FaShieldAlt,
  FaCalendarCheck,
  FaHandsHelping,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function AqeeqahLahorePage() {
  const WHATSAPP_NUMBER = "923280425087";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = (
    e: React.MouseEvent<HTMLButtonElement>,
    message?: string
  ) => {
    e.preventDefault();

    const textMessage =
      message ||
      "Hello Al-Barbari Team, I would like to know more about your Aqeeqah services in Lahore.";

    const encodedMessage = encodeURIComponent(textMessage);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes float {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0px);
              }
            }

            @keyframes slowFloat {
              0% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-15px) rotate(2deg);
              }
              100% {
                transform: translateY(0px) rotate(0deg);
              }
            }

            .animate-fade-in {
              opacity: 0;
              animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }

            .delay-100 {
              animation-delay: 100ms;
            }

            .delay-200 {
              animation-delay: 200ms;
            }

            .delay-300 {
              animation-delay: 300ms;
            }

            .delay-400 {
              animation-delay: 400ms;
            }

            .animate-float {
              animation: float 6s ease-in-out infinite;
            }

            .animate-slow-float {
              animation: slowFloat 8s ease-in-out infinite;
            }
          `,
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f8faf9] font-sans text-[#0a1a0f] pt-[100px]">

        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden rounded-b-[40px] shadow-sm md:rounded-b-[80px]">

          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#07140b] via-[#12823b] to-[#0a1a0f]" />

          <div className="pointer-events-none absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffc222_2px,transparent_2px)] [background-size:30px_30px]" />

          <div className="pointer-events-none absolute -right-20 top-10 z-0 select-none opacity-[0.06]">
            <span className="font-serif text-[180px] font-bold leading-none text-white md:text-[260px]">
              عقیقہ
            </span>
          </div>

          <div className="pointer-events-none absolute -bottom-20 -left-20 z-0 h-80 w-80 rounded-full border border-[#ffc222]/20" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 z-0 h-60 w-60 rounded-full border border-[#ffc222]/10" />

          <div
            className={`relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center lg:py-28 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#ffc222] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0a1a0f] shadow-lg">
              <FaMosque className="text-[#12823b]" />
              Aqeeqah Services in Lahore
            </div>

            <h1 className="mb-7 font-serif text-5xl leading-tight text-white drop-shadow-xl md:text-7xl">
              Aqeeqah in{" "}
              <span className="text-[#ffc222]">Lahore</span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-gray-200 md:text-xl">
              Arrange your Aqeeqah with healthy, carefully raised goats from
              Al-Barbari Goat Farming. From selecting an appropriate goat to
              slaughter and meat distribution, our team helps make the process
              simple and organized for families in Lahore.
            </p>

            <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
              <button
                onClick={(e) =>
                  handleWhatsApp(
                    e,
                    "Hello Al-Barbari Team, I want to book an Aqeeqah goat in Lahore. Please share the available options and details."
                  )
                }
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ffc222] px-8 py-4 text-lg font-bold text-[#0a1a0f] shadow-[0_10px_30px_rgba(255,194,34,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto"
              >
                Book Aqeeqah
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={(e) =>
                  handleWhatsApp(
                    e,
                    "Hello Al-Barbari Team, I would like to know the current Aqeeqah goat options and prices in Lahore."
                  )
                }
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#0a1a0f] sm:w-auto"
              >
                Ask About Options
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO CARD
        ========================================================== */}
        <section
          className={`relative z-20 mx-auto -mt-12 mb-20 max-w-5xl px-6 ${
            isVisible ? "animate-fade-in delay-100" : "opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-12">
            <div className="absolute left-0 top-0 h-full w-2 bg-[#ffc222]" />

            <FaQuoteLeft className="absolute right-8 top-8 text-5xl text-[#12823b]/10" />

            <div className="relative z-10 text-center">
              <p className="mb-5 font-serif text-xl italic leading-relaxed text-[#0a1a0f] md:text-2xl">
                "A meaningful family occasion deserves thoughtful preparation,
                healthy livestock, and a service you can trust."
              </p>

              <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-500 md:text-base">
                At Al-Barbari, we help families arrange Aqeeqah in Lahore with
                a straightforward process focused on livestock quality,
                responsible care, and clear communication.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT WE OFFER
        ========================================================== */}
        <section className="mx-auto mb-24 max-w-[1440px] px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#12823b]">
              Our Aqeeqah Service
            </h2>

            <h3 className="font-serif text-4xl text-[#0a1a0f] md:text-5xl">
              Everything in One Place
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">
              Whether you are arranging Aqeeqah for your newborn or looking
              for an Aqeeqah goat in Lahore, our team can guide you through the
              available options and service process.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-[30px] border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#12823b]/20 hover:shadow-[0_20px_40px_rgba(18,130,59,0.12)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[100px] bg-[#12823b]/5 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12823b] text-white shadow-md transition-transform duration-300 group-hover:rotate-6">
                <FaHeart className="text-3xl" />
              </div>

              <h4 className="mb-4 font-serif text-2xl font-bold text-[#0a1a0f]">
                Aqeeqah Goats
              </h4>

              <p className="leading-relaxed text-gray-500">
                Choose from goats raised with attention to cleanliness,
                nutrition, health, and responsible livestock care.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-[30px] bg-[#12823b] p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(18,130,59,0.2)]">
              <div className="absolute right-0 top-0 h-20 w-20 border-l-[60px] border-t-[60px] border-l-transparent border-t-[#ffc222]" />

              <div className="relative z-10 mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#12823b] shadow-md transition-transform duration-300 group-hover:-rotate-6">
                <FaShieldAlt className="text-3xl" />
              </div>

              <h4 className="relative z-10 mb-4 font-serif text-2xl font-bold text-white">
                Quality & Care
              </h4>

              <p className="relative z-10 leading-relaxed text-gray-200">
                We focus on proper animal care and transparent communication
                so families can make informed choices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-[30px] border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#ffc222]/50 hover:shadow-[0_20px_40px_rgba(255,194,34,0.15)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[100px] bg-[#ffc222]/10 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffc222] text-[#0a1a0f] shadow-md transition-transform duration-300 group-hover:rotate-6">
                <FaCalendarCheck className="text-3xl" />
              </div>

              <h4 className="mb-4 font-serif text-2xl font-bold text-[#0a1a0f]">
                Easy Booking
              </h4>

              <p className="leading-relaxed text-gray-500">
                Contact our team through WhatsApp to discuss your Aqeeqah
                requirements, available goats, pricing, and arrangements.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-[30px] border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#12823b]/20 hover:shadow-[0_20px_40px_rgba(18,130,59,0.12)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[100px] bg-[#12823b]/5 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12823b] text-white shadow-md transition-transform duration-300 group-hover:rotate-6">
                <FaHandsHelping className="text-3xl" />
              </div>

              <h4 className="mb-4 font-serif text-2xl font-bold text-[#0a1a0f]">
                Meat Distribution
              </h4>

              <p className="leading-relaxed text-gray-500">
                Discuss slaughter and meat distribution arrangements with our
                team according to the service option you select.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            AQEEQAH PROCESS
        ========================================================== */}
        <section className="relative mb-24 overflow-hidden border-y-4 border-[#12823b] bg-[#0a1a0f] py-24 text-white">

          <div className="pointer-events-none absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#ffc222]">
                Simple Process
              </h2>

              <h3 className="font-serif text-4xl md:text-5xl">
                How Aqeeqah Booking Works
              </h3>

              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
                Our team keeps the process straightforward, from your first
                enquiry to the final arrangements.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

              {/* Step 1 */}
              <div className="group relative text-center">
                <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#12823b] bg-[#0a1a0f] text-[#ffc222] shadow-[0_0_30px_rgba(18,130,59,0.3)] transition-all duration-500 group-hover:bg-[#12823b] group-hover:text-white">
                  <FaWhatsapp className="text-3xl" />
                </div>

                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#ffc222]">
                  Step 01
                </span>

                <h4 className="mb-3 font-serif text-2xl font-bold">
                  Contact Our Team
                </h4>

                <p className="text-sm leading-relaxed text-gray-400">
                  Message us on WhatsApp and tell us that you are looking to
                  arrange Aqeeqah in Lahore.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group relative text-center">
                <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#12823b] bg-[#0a1a0f] text-[#ffc222] shadow-[0_0_30px_rgba(18,130,59,0.3)] transition-all duration-500 group-hover:bg-[#12823b] group-hover:text-white">
                  <FaCheckCircle className="text-3xl" />
                </div>

                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#ffc222]">
                  Step 02
                </span>

                <h4 className="mb-3 font-serif text-2xl font-bold">
                  Select Your Goat
                </h4>

                <p className="text-sm leading-relaxed text-gray-400">
                  Our team can explain the available Aqeeqah goat options,
                  pricing, and relevant arrangements.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group relative text-center">
                <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#12823b] bg-[#0a1a0f] text-[#ffc222] shadow-[0_0_30px_rgba(18,130,59,0.3)] transition-all duration-500 group-hover:bg-[#12823b] group-hover:text-white">
                  <FaHandsHelping className="text-3xl" />
                </div>

                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#ffc222]">
                  Step 03
                </span>

                <h4 className="mb-3 font-serif text-2xl font-bold">
                  Complete the Arrangement
                </h4>

                <p className="text-sm leading-relaxed text-gray-400">
                  Once the details are confirmed, our team coordinates the
                  agreed Aqeeqah service and distribution arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY AL BARBARI
        ========================================================== */}
        <section className="mx-auto mb-24 max-w-[1400px] px-6">

          <div className="flex flex-col items-center gap-14 lg:flex-row">

            {/* Left */}
            <div
              className={`relative w-full lg:w-1/2 ${
                isVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
            >
              <div className="relative aspect-square overflow-hidden rounded-[40px] bg-[#0a1a0f] shadow-2xl">

                <div className="absolute inset-0 bg-gradient-to-tr from-[#12823b] via-[#0a1a0f] to-[#12823b]" />

                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffc222_2px,transparent_2px)] [background-size:28px_28px]" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center p-10 text-center">

                  <div className="mb-7 flex h-24 w-24 animate-slow-float items-center justify-center rounded-full border-4 border-[#ffc222]">
                    <FaLeaf className="text-4xl text-[#ffc222]" />
                  </div>

                  <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                    Raised With
                    <br />
                    <span className="text-[#ffc222]">Care & Responsibility</span>
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-300">
                    Our approach to livestock farming is built around
                    cleanliness, responsible animal care, and attention to
                    quality.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-5 flex animate-float items-center gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.1)] md:-right-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffc222]/20 text-[#12823b]">
                  <FaUsers className="text-xl" />
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-[#0a1a0f]">
                    Family Focused
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Service & Support
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div
              className={`w-full lg:w-1/2 ${
                isVisible ? "animate-fade-in delay-300" : "opacity-0"
              }`}
            >
              <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#12823b]">
                Why Al-Barbari
              </h2>

              <h3 className="mb-6 font-serif text-4xl text-[#0a1a0f] md:text-5xl">
                A Thoughtful Way to Arrange Your Aqeeqah
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600">
                Choosing an Aqeeqah goat is an important decision for many
                families. At Al-Barbari Goat Farming, we provide access to
                carefully raised livestock and a team that can help you
                understand the available service options.
              </p>

              <p className="mb-8 leading-relaxed text-gray-600">
                If you are looking for an{" "}
                <strong>aqeeqah goat in Lahore</strong>, you can contact us
                directly to discuss goat availability, current pricing,
                booking, slaughter, and meat distribution arrangements.
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {[
                  "Healthy and carefully raised livestock",
                  "Clear service and pricing discussions",
                  "Lahore-based farm and service",
                  "WhatsApp support for enquiries",
                  "Aqeeqah booking assistance",
                  "Slaughter and distribution arrangements",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <FaCheckCircle className="mt-0.5 shrink-0 text-lg text-[#12823b]" />

                    <span className="text-sm font-semibold leading-relaxed text-[#0a1a0f]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICE FEATURES
        ========================================================== */}
        <section className="mx-auto mb-24 max-w-[1400px] px-6">

          <div className="mb-14 text-center">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#12823b]">
              Built Around Your Needs
            </h2>

            <h3 className="font-serif text-4xl text-[#0a1a0f] md:text-5xl">
              Aqeeqah Service in Lahore
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            <div className="rounded-[30px] border border-gray-100 bg-white p-9 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12823b] text-white">
                <FaHeart className="text-3xl" />
              </div>

              <h4 className="mb-4 font-serif text-2xl font-bold">
                Healthy Livestock
              </h4>

              <p className="leading-relaxed text-gray-500">
                We give attention to animal nutrition, cleanliness, living
                conditions, and routine care as part of our farming practices.
              </p>
            </div>

            <div className="rounded-[30px] bg-[#12823b] p-9 text-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#12823b]">
                <FaTruck className="text-3xl" />
              </div>

              <h4 className="mb-4 font-serif text-2xl font-bold">
                Lahore Service
              </h4>

              <p className="leading-relaxed text-gray-200">
                Our Lahore-based team can discuss delivery, slaughter, and
                distribution options available for your Aqeeqah arrangement.
              </p>
            </div>

            <div className="rounded-[30px] border border-gray-100 bg-white p-9 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffc222] text-[#0a1a0f]">
                <FaHandsHelping className="text-3xl" />
              </div>

              <h4 className="mb-4 font-serif text-2xl font-bold">
                Personal Assistance
              </h4>

              <p className="leading-relaxed text-gray-500">
                Speak directly with our team about your requirements instead
                of navigating a complicated online ordering process.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section className="mx-auto mb-24 max-w-5xl px-6">

          <div className="mb-14 text-center">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#12823b]">
              Common Questions
            </h2>

            <h3 className="font-serif text-4xl text-[#0a1a0f] md:text-5xl">
              Aqeeqah in Lahore FAQs
            </h3>
          </div>

          <div className="space-y-5">

            <details className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-bold text-[#0a1a0f]">
                Where can I get an Aqeeqah goat in Lahore?
              </summary>

              <p className="mt-4 leading-relaxed text-gray-500">
                Al-Barbari Goat Farming provides Aqeeqah goat options in
                Lahore. Contact our team through WhatsApp to ask about current
                availability, pricing, and the service arrangements available
                for your requirements.
              </p>
            </details>

            <details className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-bold text-[#0a1a0f]">
                How much does an Aqeeqah goat cost in Lahore?
              </summary>

              <p className="mt-4 leading-relaxed text-gray-500">
                Aqeeqah goat prices can vary depending on the animal and
                current farm pricing. For the latest Aqeeqah goat price in
                Lahore, contact our team directly for the available options.
              </p>
            </details>

            <details className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-bold text-[#0a1a0f]">
                Can I book an Aqeeqah goat through WhatsApp?
              </summary>

              <p className="mt-4 leading-relaxed text-gray-500">
                Yes. You can contact Al-Barbari through WhatsApp to discuss
                your Aqeeqah requirements, available goats, pricing, and
                arrangements.
              </p>
            </details>

            <details className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-bold text-[#0a1a0f]">
                Do you provide meat distribution arrangements?
              </summary>

              <p className="mt-4 leading-relaxed text-gray-500">
                Meat distribution arrangements can be discussed with our team
                when you book your Aqeeqah service. Contact us to confirm the
                current options.
              </p>
            </details>

            <details className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-bold text-[#0a1a0f]">
                What are the Islamic requirements for Aqeeqah?
              </summary>

              <p className="mt-4 leading-relaxed text-gray-500">
                Aqeeqah has specific Islamic guidance concerning the animal,
                timing, and sacrifice. For religious questions or
                circumstances specific to your family, it is best to consult a
                qualified Islamic scholar.
              </p>
            </details>
          </div>
        </section>

        {/* =========================================================
            LOCATION
        ========================================================== */}
        <section className="mx-auto mb-24 max-w-6xl px-6">

          <div className="relative overflow-hidden rounded-[40px] bg-[#0a1a0f] p-10 shadow-2xl md:p-14">

            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffc222_2px,transparent_2px)] [background-size:22px_22px]" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row">

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <FaMapMarkerAlt className="text-2xl text-[#ffc222]" />

                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffc222]">
                    Serving Lahore
                  </span>
                </div>

                <h3 className="mb-4 font-serif text-3xl text-white md:text-4xl">
                  Aqeeqah Services in Lahore, Punjab
                </h3>

                <p className="max-w-2xl leading-relaxed text-gray-400">
                  Looking for an Aqeeqah goat in Lahore? Contact Al-Barbari
                  Goat Farming to discuss current goat availability, pricing,
                  booking, and service arrangements.
                </p>
              </div>

              <button
                onClick={(e) =>
                  handleWhatsApp(
                    e,
                    "Hello Al-Barbari Team, I would like to arrange Aqeeqah in Lahore. Please guide me through the available options."
                  )
                }
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#ffc222] px-8 py-4 font-bold text-[#0a1a0f] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Contact Us
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="mx-auto max-w-[1200px] px-6 pb-32">

          <div className="relative overflow-hidden rounded-[40px] bg-[#12823b] shadow-[0_20px_60px_rgba(18,130,59,0.18)]">

            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]" />

            <div className="relative z-10 px-8 py-14 text-center md:px-16 md:py-20">

              <div className="mx-auto mb-7 flex h-20 w-20 animate-float items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
                <FaWhatsapp className="text-4xl" />
              </div>

              <h2 className="mb-5 font-serif text-3xl text-white md:text-5xl">
                Planning an Aqeeqah in Lahore?
              </h2>

              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-gray-200">
                Speak with the Al-Barbari team about Aqeeqah goats, current
                prices, booking, and available service arrangements.
              </p>

              <button
                onClick={(e) =>
                  handleWhatsApp(
                    e,
                    "Hello Al-Barbari Team, I am interested in your Aqeeqah services in Lahore. Please guide me about goats, prices, and booking."
                  )
                }
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ffc222] px-9 py-4 text-lg font-bold text-[#0a1a0f] shadow-[0_10px_30px_rgba(255,194,34,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Talk to Our Team
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}