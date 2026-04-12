"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Truck,
  AlertCircle,
  Package,
  AlertTriangle,
  CheckCircle2,
  Zap,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const springTransition = {
  type: "spring",
  stiffness: 50,
  damping: 15,
};

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: springTransition,
};

const coverageTypes = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Physical Damage",
    description:
      "Covers collision, fire, theft, vandalism, weather damage. Your truck is protected in all situations.",
    details: [
      "Collision damage",
      "Fire & theft protection",
      "Weather & natural disaster",
      "Vandalism coverage",
    ],
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Trailer Interchange",
    description:
      "Covers trailer damage while pulling someone else's trailer. Never worry about liability.",
    details: [
      "Third-party trailer damage",
      "Interchange liability",
      "Peace of mind while working",
    ],
  },
  {
    icon: <AlertCircle className="w-7 h-7" />,
    title: "Non-Trucking Liability (Bobtail)",
    description:
      "Covers personal use of truck, not on dispatch. Protection for off-duty driving.",
    details: [
      "Personal truck use",
      "Off-dispatch driving",
      "Family vehicle use",
    ],
  },
  {
    icon: <Package className="w-7 h-7" />,
    title: "Cargo Insurance",
    description:
      "Covers freight from damage, theft, or loss. Protect your cargo and your income.",
    details: [
      "Cargo theft protection",
      "Freight damage coverage",
      "Loss of goods protection",
    ],
  },
];

const planTypes = [
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    label: "State Minimum",
    title: "Liability Only",
    description:
      "State minimum coverage. Covers damage you cause to others. Basic legal requirement.",
    bestFor: "Budget-conscious operators",
    isHighlighted: false,
    isPopular: false,
    bgClass: "bg-gray-50 border-gray-200",
    iconBg: "bg-gray-200",
    iconColor: "text-gray-600",
    titleColor: "text-[#063B29]",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7" />,
    label: "MOST POPULAR",
    title: "Full Coverage",
    description:
      "Liability + Physical Damage. Complete protection for your truck and peace of mind.",
    bestFor: "Owner-operators & small fleets",
    isHighlighted: true,
    isPopular: true,
    bgClass: "bg-secondary/10 border-secondary",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    titleColor: "text-primary",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    label: "Custom",
    title: "Specialty Plans",
    description:
      "Custom plan tailored to your specific needs. Work with our experts to build your perfect coverage.",
    bestFor: "Unique business requirements",
    isHighlighted: false,
    isPopular: false,
    bgClass: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    titleColor: "text-[#063B29]",
  },
];

const freeFeatures = [
  "LLC Formation (complete setup)",
  "USDOT Number Filing (active in 48 hours)",
  "MC Number Filing (active in 5-10 days)",
  "BOC-3 Filing (active in 1-2 hours)",
  "FMCSA Compliance Kit",
  "Renewal Management (lifetime reminders)",
  "Dedicated Compliance Expert",
  "No-Fine Guarantee",
];

export default function VehicleInsuranceSection() {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Complete Vehicle Insurance Coverage
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive Protection for Your Trucking Business
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <span className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              GEICO Partner
            </span>
            <span className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              Progressive Partner
            </span>
          </div>
        </motion.div>

        {/* SUBSECTION 1 - Coverage Types */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-primary mb-8 text-center"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={fadeInUp.transition}
          >
            Coverage Types
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageTypes.map((coverage, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="text-secondary">{coverage.icon}</div>
                </div>

                {/* Title & Description */}
                <h4 className="text-xl font-bold text-[#063B29] mb-3">
                  {coverage.title}
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {coverage.description}
                </p>

                {/* Details */}
                <ul className="space-y-3">
                  {coverage.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 2 - Plan Types */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-primary mb-8 text-center"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={fadeInUp.transition}
          >
            Plan Types
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planTypes.map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl shadow-lg border p-8 hover:shadow-xl transition-all duration-300 relative ${plan.bgClass}`}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      {plan.label}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 ${plan.iconBg} rounded-full flex items-center justify-center mb-6`}>
                  <div className={plan.iconColor}>{plan.icon}</div>
                </div>

                {/* Label */}
                {!plan.isPopular && (
                  <span className="inline-block text-xs font-semibold text-gray-500 mb-2">
                    {plan.label}
                  </span>
                )}

                {/* Title */}
                <h4 className={`text-xl font-bold mb-3 ${plan.titleColor}`}>
                  {plan.title}
                </h4>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {plan.description}
                </p>

                {/* Best For */}
                <div className={`pt-4 border-t ${plan.isHighlighted ? "border-secondary/30" : "border-gray-200"}`}>
                  <p className="text-sm text-gray-600">
                    Best for: <span className="font-semibold">{plan.bestFor}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 3 - What You Get For Free */}
        <motion.div
          className="bg-secondary rounded-2xl p-8 lg:p-12 mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-extrabold text-primary mb-8 text-center">
              Everything Included — At No Extra Cost
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {freeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white/50 rounded-xl p-5 hover:bg-white/70 transition-all"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...fadeInUp.transition, delay: index * 0.05 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-primary font-medium leading-snug">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Need Help Choosing Your Plan?
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
            Talk to our insurance experts. They'll help you find the perfect coverage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(210, 189, 105, 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 bg-secondary text-primary font-bold py-4 px-10 rounded-xl text-lg shadow-xl hover:bg-opacity-90 transition-all"
              >
                TALK TO AN EXPERT
                <MessageSquare className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.button
              className="inline-flex items-center gap-3 bg-transparent border-2 border-primary text-primary font-bold py-4 px-10 rounded-xl text-lg hover:bg-primary/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              GET FREE QUOTE
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
