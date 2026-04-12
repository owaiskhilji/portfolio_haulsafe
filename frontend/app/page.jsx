"use client";

import Link from "next/link";
import {
  Shield,
  Clock,
  DollarSign,
  Phone,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  FileText,
  Truck,
  Building,
  Receipt,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "../constants/servicesData";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 50, damping: 15 },
};

const fadeInLeft = {
  initial: { x: -40, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 50, damping: 15 },
};

const fadeInRight = {
  initial: { x: 40, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 50, damping: 15 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  const serviceCategories = [
    {
      category: "Insurance",
      icon: Truck,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      services: servicesData.filter((s) => s.category === "Insurance"),
    },
    {
      category: "Authority & Compliance",
      icon: FileText,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      services: servicesData.filter((s) => s.category === "Authority"),
    },
    {
      category: "Business Formation",
      icon: Building,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      services: servicesData.filter((s) => s.category === "Business"),
    },
    {
      category: "Tax Services",
      icon: Receipt,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      services: servicesData.filter((s) => s.category === "Tax"),
    },
  ];

  const roadmapSteps = [
    {
      day: "Day 1",
      title: "Details & BOC-3",
      description:
        "We collect your business information and file your BOC-3 process agent designation. Active within 1-2 hours.",
      icon: FileText,
    },
    {
      day: "Day 2",
      title: "USDOT & Insurance Filing",
      description:
        "Your USDOT number is submitted to FMCSA. We file your insurance policy and ensure all documents are aligned.",
      icon: Truck,
    },
    {
      day: "Day 3-4",
      title: "Policy Active",
      description:
        "Your insurance policy goes live. You receive all documentation including proof of coverage and ID cards.",
      icon: CheckCircle2,
    },
    {
      day: "Day 5-7",
      title: "MC Approved & Authority Issued",
      description:
        "Your MC Authority is approved and issued. You are now fully legal and ready to haul freight across all states.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Centered, Clean, Beautiful */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-Width Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-trucks.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Subtle American Flag - Top Left */}
        <motion.div
          className="absolute top-6 left-6 md:top-10 md:left-10 z-20 opacity-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="flex flex-col gap-1">
            {/* Stripes */}
            <div className="w-16 h-1 bg-red-600" />
            <div className="w-16 h-1 bg-white" />
            <div className="w-16 h-1 bg-red-600" />
            <div className="w-16 h-1 bg-white" />
            <div className="w-16 h-1 bg-red-600" />
            {/* Blue Canton */}
            <div className="absolute top-0 left-0 w-8 h-4 bg-blue-800 flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-0.5 bg-white rounded-full" />
                <div className="w-0.5 h-0.5 bg-white rounded-full" />
                <div className="w-0.5 h-0.5 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Centered Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          {/* Trust Badge */}
          <motion.div
            className="mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-6 py-2.5 rounded-full">
              <span className="text-lg">🇺🇸</span>
              US-Based • FMCSA Compliant • Trusted by 500+ Truckers
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-white">Global Reach of U.S.</span>
            <br />
            <span className="text-[#D4AF37]">Trucking Insurance</span>
            <br />
            <span className="text-white">&</span>{" "}
            <span className="text-[#D4AF37]">Compliance</span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            HaulSafe Insurance Services is your American solution for trucking
            insurance and FMCSA compliance.
          </motion.p>
          <motion.p
            className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Get fully legal in{" "}
            <span className="text-[#D4AF37] font-bold">7 business days</span>{" "}
            with our done-for-you process.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(212, 175, 55, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mb-12"
          >
            <Link
              href="/quote"
              className="inline-block bg-[#D4AF37] text-[#063B29] font-extrabold py-5 px-14 rounded-xl text-lg md:text-xl shadow-2xl hover:bg-[#E5C95A] transition-all"
            >
              GET YOUR FREE QUOTE NOW →
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-sm font-semibold text-white/90">
                GEICO Partner
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-sm font-semibold text-white/90">
                Progressive Partner
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="text-sm font-semibold text-white/90">
                No-Fine Guarantee
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-20"
          style={{
            background: "linear-gradient(to top, #FDFCF0, transparent)",
          }}
        />
      </section>

      {/* Problem & Solution Block */}
      <section className="bg-accent py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-[#063B29] text-center mb-16"
          >
            The Struggle vs. The HaulSafe Way
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: The Struggle */}
            <motion.div
              variants={fadeInLeft}
              className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-700">
                  The Struggle
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      $14,000+ FMCSA Penalties
                    </p>
                    <p className="text-gray-600 text-sm">
                      Late filings and non-compliance lead to massive fines
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Trucks Getting Parked
                    </p>
                    <p className="text-gray-600 text-sm">
                      Out-of-service orders cost you thousands in lost revenue
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Confusing Paperwork
                    </p>
                    <p className="text-gray-600 text-sm">
                      USDOT, MC, BOC-3, UCR—it's overwhelming and time-consuming
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      100% Upfront Costs
                    </p>
                    <p className="text-gray-600 text-sm">
                      Traditional insurers demand full payment before starting
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Right: The HaulSafe Way */}
            <motion.div
              variants={fadeInRight}
              className="bg-[#063B29]/5 border-2 border-secondary rounded-2xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-[#063B29]">
                  The HaulSafe Way
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      No-Fine Guarantee
                    </p>
                    <p className="text-gray-600 text-sm">
                      We handle all filings on time. Zero penalties, zero stress
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Trucks Stay Rolling
                    </p>
                    <p className="text-gray-600 text-sm">
                      7-day setup means your trucks never sit idle
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Done-For-You Process
                    </p>
                    <p className="text-gray-600 text-sm">
                      We handle every document, filing, and deadline
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      50% Upfront Payment
                    </p>
                    <p className="text-gray-600 text-sm">
                      Pay half to start, spread the rest over 6 months
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The 50/50 Payment Plan */}
      <section className="bg-white py-20 px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-[#063B29] text-center mb-6"
          >
            The 50/50 Payment Plan
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto"
          >
            We know cash flow matters. Pay half upfront and spread the rest
            over 6 months with zero interest.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-accent border-2 border-secondary rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto shadow-xl"
          >
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-full mb-4">
                <DollarSign className="w-5 h-5" />
                Example: $1,000 Quote
              </div>
            </div>

            {/* Calculation Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Step 1: Upfront */}
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-sm text-gray-500 font-semibold mb-2">
                  Upfront Payment
                </p>
                <p className="text-4xl font-bold text-[#063B29]">$500</p>
                <p className="text-xs text-gray-500 mt-2">50% to get started</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-secondary hidden md:block" />
                <ChevronRight className="w-8 h-8 text-secondary md:hidden" />
              </div>

              {/* Step 2: Monthly */}
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="w-14 h-14 bg-[#063B29]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-[#063B29]" />
                </div>
                <p className="text-sm text-gray-500 font-semibold mb-2">
                  Monthly Payment
                </p>
                <p className="text-4xl font-bold text-[#063B29]">$87.50</p>
                <p className="text-xs text-gray-500 mt-2">for 6 months</p>
              </div>
            </div>

            {/* Total Box */}
            <div className="bg-[#063B29] text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-300 mb-1">Total Repayable</p>
                <p className="text-3xl font-bold">$525</p>
                <p className="text-xs text-gray-400">($87.50 × 6 months)</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-300 mb-1">Total Cost</p>
                <p className="text-3xl font-bold text-secondary">$1,025</p>
                <p className="text-xs text-gray-400">
                  ($500 upfront + $525 repayable)
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-secondary text-[#063B29] font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-md"
              >
                Get Your Personalized Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The 7-Day Roadmap */}
      <section className="bg-accent py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-[#063B29] text-center mb-6"
          >
            Your 7-Day Roadmap to Full Compliance
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-center text-lg mb-16 max-w-2xl mx-auto"
          >
            From day one to fully legal, we handle everything. Here's your
            timeline:
          </motion.p>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30" />

            <div className="space-y-12">
              {roadmapSteps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative flex items-start ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    } flex-row`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-4 border-accent shadow-lg">
                        <Icon className="w-6 h-6 text-[#063B29]" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`ml-20 md:ml-0 md:w-1/2 ${
                        isLeft ? "md:pr-16" : "md:pl-16"
                      }`}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                        <span className="inline-block bg-secondary/20 text-[#063B29] text-xs font-bold px-3 py-1 rounded-full mb-3">
                          {step.day}
                        </span>
                        <h3 className="text-xl font-bold text-[#063B29] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[#063B29] text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Start Your 7-Day Journey Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Service Preview Grid */}
      <section className="bg-white py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-[#063B29] text-center mb-6"
          >
            Our Complete Service Catalog
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-center text-lg mb-16 max-w-2xl mx-auto"
          >
            Everything you need to start and maintain a compliant trucking
            business—all under one roof.
          </motion.p>

          <div className="space-y-12">
            {serviceCategories.map((category, catIndex) => {
              const CategoryIcon = category.icon;

              return (
                <motion.div key={catIndex} variants={fadeInUp}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}
                    >
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#063B29]">
                      {category.category}
                    </h3>
                  </div>

                  {/* Service Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.services.map((service, svcIndex) => {
                      const ServiceIcon =
                        require("lucide-react")[service.iconName] || Shield;

                      return (
                        <Link
                          key={svcIndex}
                          href={`/services/${service.slug}`}
                          className={`${category.bgColor} ${category.borderColor} border rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all group block`}
                        >
                          <div className="flex items-start gap-3 mb-4">
                            <div
                              className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                            >
                              <ServiceIcon className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="font-bold text-[#063B29] group-hover:text-secondary transition-colors text-sm leading-tight">
                              {service.title}
                            </h4>
                          </div>

                          <p className="text-gray-600 text-xs line-clamp-2 mb-4">
                            {service.description}
                          </p>

                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary group-hover:underline">
                            Learn More
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#063B29] text-white py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20">
            <Phone className="w-48 h-48 text-white" />
          </div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Phone className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Join 500+ truckers who chose HaulSafe for compliant, affordable
              insurance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="bg-secondary text-[#063B29] font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-[#063B29] transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us Now
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
