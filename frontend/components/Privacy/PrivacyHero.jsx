"use client";

import { Shield, Lock, Home, EyeOff } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyHero() {
  return (
    <section className="bg-[#063B29] py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 4) * 33}%`,
              top: `${Math.floor(i / 4) * 33}%`,
            }}
          >
            <Shield className="w-20 h-20 text-white" />
          </div>
        ))}
      </div>

      {/* Security Seal Badge */}
      <div className="absolute top-6 right-6 flex flex-col items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
        <Lock className="w-4 h-4 text-[#D2BD69]" />
        <span className="text-xs text-white font-medium">Secure</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-8">
          <Link href="/" className="hover:text-[#D2BD69] transition-colors flex items-center gap-1">
            <Home className="w-3 h-3" />
            Home
          </Link>
          <span>/</span>
          <span className="text-[#D2BD69]">Privacy Policy</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#D2BD69]/10 border border-[#D2BD69]/30 text-[#D2BD69] text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Data Protected
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Your Trust is Our <span className="text-[#D2BD69]">Priority</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            How We Protect Your Information
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              <Lock className="w-3 h-3 text-[#D2BD69]" />
              256-bit Encrypted
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              <Shield className="w-3 h-3 text-[#D2BD69]" />
              SSL Secured
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              <EyeOff className="w-3 h-3 text-[#D2BD69]" />
              Never Sold
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 z-20"
        style={{
          background: "linear-gradient(to top, #FDFCF0, transparent)",
        }}
      />
    </section>
  );
}
