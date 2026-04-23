"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#063B29] ">
      {/* Desktop: Split Layout - Text 40%, Image 60% */}
      <div className="hidden lg:flex w-full">
        {/* Left: Text Content (40%) */}
        <div className="w-[40%] flex items-center justify-center relative z-10 pl-16 pr-8">
          <div className="max-w-lg">
            {/* Trust Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full">
                US-Based • FMCSA Compliant • Trusted by 500+ Truckers
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.15] mb-5">
              <div className="block text-[#D4AF37]">
                Global Reach of U.S.
              </div>
              <div className="block mt-1 text-white">
                Trucking Insurance
              </div>
              <div className="block mt-1 text-white">
                <span className="mr-2">&</span>
                Compliance
              </div>
            </h1>

            {/* Sub-text */}
            <div className="max-w-md mb-8">
              <p className="text-white/90 text-base leading-relaxed mb-2">
                HaulSafe Insurance Services is your American solution for trucking
                insurance and FMCSA compliance.
              </p>
              <p className="text-white/75 text-base leading-relaxed">
                Get fully legal in{" "}
                <span className="text-[#D4AF37] font-bold">
                  7 business days
                </span>{" "}
                with our done-for-you process.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-6">
              <Link
                href="/quote"
                className="inline-block bg-[#D4AF37] text-[#063B29] font-bold py-3.5 px-8 rounded-xl text-base shadow-xl hover:bg-[#E5C95A] transition-all hover:scale-105 active:scale-95"
              >
                GET YOUR FREE QUOTE NOW →
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-white/90">
                  GEICO Partner
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-xs font-semibold text-white/90">
                  Progressive Partner
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-semibold text-white/90">
                  No-Fine Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image (60%) */}
        <div className="w-[60%] relative z-0">
          <div className="relative w-full h-full min-h-screen">
            <Image
              src="/images/hero-trucks.png"
              alt="HaulSafe Insurance - Trucking"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Gradient overlay from left edge */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #063B29 0%, rgba(6, 59, 41, 0.8) 15%, transparent 40%)",
            }}
          />
        </div>
      </div>

      {/* Mobile: Full background image with dark overlay */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src="/images/hero-trucks.png"
          alt="HaulSafe Insurance - Trucking"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Mobile: Content */}
      <div className="lg:hidden relative z-10 max-w-lg mx-auto px-6 text-center py-20">
        {/* Trust Badge */}
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full">
            US-Based • FMCSA Compliant
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-[1.15] mb-5 ">
          <div className="block text-[#D4AF37]">
            Global Reach of U.S.
          </div>
          <div className="block mt-1 text-white">
            Trucking Insurance
          </div>
          <div className="block mt-1 text-white">
            <span className="mr-2">&</span>
            Compliance
          </div>
        </h1>

        {/* Sub-text */}
        <div className="max-w-sm mx-auto mb-8">
          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-2">
            HaulSafe Insurance Services is your American solution for trucking
            insurance and FMCSA compliance.
          </p>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed">
            Get fully legal in{" "}
            <span className="text-[#D4AF37] font-bold">
              7 business days
            </span>{" "}
            with our done-for-you process.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-6 ">
          <Link
            href="/quote"
            className="inline-block bg-[#D4AF37] text-[#063B29] font-bold py-3.5 px-8 rounded-xl text-base shadow-xl hover:bg-[#E5C95A] transition-all hover:scale-105 active:scale-95"
          >
            GET YOUR FREE QUOTE NOW →
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold text-white/90">
              GEICO Partner
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 ">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-xs font-semibold text-white/90">
              Progressive Partner
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold text-white/90">
              No-Fine Guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Animated Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
        >
          <Link href="#arrow">
            <ChevronDown className="w-10 h-10 text-white/70 hover:text-[#D4AF37] transition-colors" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-20"
        style={{
          background: "linear-gradient(to top, #FDFCF0, transparent)",
        }}
      />
    </section>
  );
}
