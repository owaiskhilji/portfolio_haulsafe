"use client";

import {
  FileText,
  Zap,
  Shield,
  Users,
  Clock,
  CheckCircle2,
  Lock,
  Mail,
  Building2,
  Eye,
  Share2,
  Trash2,
  Edit,
  EyeOff,
  Printer,
  Home,
  Grid,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 50, damping: 15 },
};

export default function Privacy() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary py-24 px-4 relative overflow-hidden">
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
          <Lock className="w-4 h-4 text-secondary" />
          <span className="text-xs text-white font-medium">Secure</span>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-8">
            <Link href="/" className="hover:text-secondary transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" />
              Home
            </Link>
            <span>/</span>
            <span className="text-secondary">Privacy Policy</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Data Protected
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Your Trust is Our <span className="text-secondary">Priority</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            How We Protect Your Information
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              <Lock className="w-3 h-3 text-secondary" />
              256-bit Encrypted
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              <Shield className="w-3 h-3 text-secondary" />
              SSL Secured
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              <EyeOff className="w-3 h-3 text-secondary" />
              Never Sold
            </span>
          </div>
        </div>

        {/* Bottom Fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 z-20"
          style={{
            background: "linear-gradient(to top, #FDFCF0, transparent)",
          }}
        />
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 mb-12">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm font-medium"
          >
            <Printer className="w-4 h-4" />
            Print Policy
          </button>
        </div>

        {/* SECTION 1: Information We Collect */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
              <FileText className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Information We Collect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Personal Info
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Full name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Email address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Phone number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Driver's license</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Social Security Number</span>
                </li>
              </ul>
            </div>

            {/* Business Info */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Business Info
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Business name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Business address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>EIN</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>LLC documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Vehicle VIN</span>
                </li>
              </ul>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Preferences
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Insurance preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Tax information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Beneficial ownership info</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2: How We Use Your Information */}
        <div className="mb-16 bg-accent rounded-2xl p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
              <Zap className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              How We Use Your Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Insurance Quotes",
                description:
                  "Get the best quotes from GEICO & Progressive for your trucking needs",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "FMCSA Filings",
                description:
                  "File USDOT, MC, BOC-3, UCR documents with the FMCSA",
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Business Setup",
                description: "Form LLCs and obtain EINs from the IRS",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Compliance",
                description:
                  "File BOI reports, tax returns, communicate & process payments",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 hover:shadow-lg transition-all ${
                  index % 2 === 0
                    ? "bg-white border border-gray-200"
                    : "bg-secondary/5 border border-secondary/10"
                }`}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <div className="text-secondary">{card.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Information Protection */}
        <div className="mb-16 bg-secondary rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Your Data is Fort Knox
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Encrypted, secure servers",
                "Restricted access (authorized team only)",
                "SSL encryption on website",
                "We never sell or rent your data",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/50 rounded-xl p-5"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4: Information Sharing */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Who We Share With (And Who We Don't)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* We Share With */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-700">
                  We Share With
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Only when required for your services:
              </p>
              <ul className="space-y-3">
                {[
                  "GEICO & Progressive",
                  "FMCSA, IRS, FinCEN",
                  "State agencies & process agents",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* We NEVER Share With */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <EyeOff className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-700">
                  We NEVER Share With
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Your data is always protected from:
              </p>
              <ul className="space-y-3">
                {[
                  "Marketing companies",
                  "Third-party vendors",
                  "Data brokers or advertisers",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-xs">✕</span>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 5: Data Retention */}
        <div className="mb-16 bg-accent rounded-2xl p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
              <Clock className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              How Long We Keep Your Data
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-2xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-secondary/30" />

            {/* Active Client */}
            <div className="relative flex items-start gap-6 mb-12">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1 shadow-md">
                <h3 className="text-lg font-bold text-primary mb-2">
                  Active Client
                </h3>
                <p className="text-gray-700">
                  We keep your data securely as long as you are an active client.
                  Full access to all your information anytime.
                </p>
              </div>
            </div>

            {/* After You Leave */}
            <div className="relative flex items-start gap-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1 shadow-md">
                <h3 className="text-lg font-bold text-primary mb-2">
                  After You Leave
                </h3>
                <p className="text-gray-700">
                  We retain records for{" "}
                  <span className="font-bold text-secondary">7 years</span> as
                  required by law. After that, data is securely destroyed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6: Your Rights */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Your Data Rights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              {
                icon: <Eye className="w-7 h-7" />,
                title: "Access Your Data",
                description: "View all information we have about you",
              },
              {
                icon: <Edit className="w-7 h-7" />,
                title: "Correct Information",
                description: "Update or fix your details anytime",
              },
              {
                icon: <Trash2 className="w-7 h-7" />,
                title: "Delete Your Data",
                description: "Remove your information from our systems",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow hover:border-secondary/30"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-secondary">{card.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600">
            You also have the right to{" "}
            <span className="font-semibold text-secondary">
              opt out of marketing communications
            </span>{" "}
            anytime.
          </p>
        </div>

        {/* SECTION 7: Your Agreement */}
        <div className="mb-20">
          <div className="bg-accent border-2 border-secondary/20 rounded-2xl p-8 lg:p-12 text-center">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Your Agreement
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
              By using our <strong>website and services</strong>, you agree to
              this <strong>Privacy Policy</strong>.
            </p>
            <button className="inline-flex items-center gap-3 bg-secondary text-primary font-bold py-4 px-10 rounded-xl text-lg shadow-xl hover:bg-opacity-90 transition-all">
              I Agree & Continue
            </button>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-secondary rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  Questions About Your Privacy?
                </h2>
                <p className="text-primary/70 text-sm">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Info */}
              <div className="bg-white/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-bold text-primary">
                      HaulSafe Insurance Services
                    </h3>
                    <p className="text-sm text-primary/70">
                      Premium Trucking Insurance & FMCSA Compliance
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-primary/70">
                    Email
                  </span>
                </div>
                <a
                  href="mailto:haulsafeinsurance@gmail.com"
                  className="text-primary font-bold text-lg hover:text-primary/80 transition-colors break-all"
                >
                  haulsafeinsurance@gmail.com
                </a>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-8 pt-6 border-t border-primary/20 text-center">
              <p className="text-sm text-primary/60">
                Last updated: January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-secondary" />
                <div>
                  <h3 className="font-bold text-lg">HaulSafe Insurance</h3>
                  <p className="text-xs text-gray-400">
                    Premium Trucking Insurance & FMCSA Compliance
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-secondary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                  >
                    <Home className="w-3 h-3" />
                    Home
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
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-secondary mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  <a
                    href="mailto:haulsafeinsurance@gmail.com"
                    className="hover:text-secondary transition-colors"
                  >
                    haulsafeinsurance@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>Mon-Fri, 9AM-6PM EST</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} HaulSafe Insurance Services. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
