
"use client";

import Link from "next/link";
import { Mail, Phone, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#03261b] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="HaulSafe Logo"
                className="h-14 w-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  HAULSAFE INSURANCE
                </span>
                <span className="text-xs text-secondary">
                  Protection You Can Trust
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium trucking insurance and FMCSA compliance services with
              50% upfront payment and 7-day complete setup.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/insurance"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Trucking Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/compliance"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  FMCSA Authority
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-formation"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Business Setup / LLC
                </Link>
              </li>
              <li>
                <Link
                  href="/services/compliance"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  BOC-3 & UCR Filing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/referral"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Referral Program
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:haulsafeinsurance@gmail.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                  <span className="text-sm">
                    haulsafeinsurance@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+923100000000"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm">+923100000000</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm">
                    Mon-Fri, 9AM - 6PM EST
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-sm text-gray-400 font-medium">
              Authorized Partners:
            </span>
            <div className="flex items-center gap-6">
              {/* GEICO */}
              <div className="bg-white/10 rounded-lg px-6 py-3 grayscale hover:grayscale-0 transition-all">
                <span className="text-lg font-bold text-gray-300">
                  GEICO
                </span>
              </div>
              {/* Progressive */}
              <div className="bg-white/10 rounded-lg px-6 py-3 grayscale hover:grayscale-0 transition-all">
                <span className="text-lg font-bold text-gray-300">
                  PROGRESSIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} HaulSafe Insurance Services. All
              Rights Reserved.
            </p>
            <p className="flex items-center gap-1">
              Powered by{" "}
              <span className="text-secondary font-semibold">
                Owais Khilji
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
