"use client";

import { motion } from "framer-motion";
import {
  Shield,
  AlertCircle,
  Package,
  Info,
  CheckCircle2,
  AlertTriangle,
  Zap,
  MessageSquare,
  ChevronRight,
  Check,
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
    icon: <Shield className="w-12 h-12" />,
    title: "Physical Damage",
    description:
      "Covers collision, fire, theft, vandalism, weather damage. Your truck is protected in all situations.",
    details: [
      "Collision damage",
      "Fire & theft protection",
      "Weather & natural disaster",
    ],
  },
  {
    icon: <AlertCircle className="w-12 h-12" />,
    title: "Liability Insurance",
    description:
      "Covers damage you cause to others. State minimum coverage to protect your business legally. Essential protection for every truck.",
    details: [
      "Third-party bodily injury",
      "Property damage liability",
      "Legal compliance coverage",
    ],
  },
  {
    icon: <Info className="w-12 h-12" />,
    title: "Non-Trucking Liability",
    description:
      "Covers personal use of truck, not on dispatch. Protection for off-duty driving.",
    details: [
      "Personal truck use",
      "Off-dispatch driving",
      "Family vehicle use",
    ],
  },
  {
    icon: <Package className="w-12 h-12" />,
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
    titleColor: "text-primary",
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
    titleColor: "text-primary",
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Complete Vehicle Insurance Coverage
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Comprehensive Protection for Your Trucking Business
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <span className="inline-flex items-center gap-2 bg-white border border-primary/10 text-primary text-sm font-bold px-5 py-2.5 rounded-full shadow-sm">
              <Shield className="w-4 h-4 text-secondary" />
              GEICO Partner
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-primary/10 text-primary text-sm font-bold px-5 py-2.5 rounded-full shadow-sm">
              <Shield className="w-4 h-4 text-secondary" />
              Progressive Partner
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-primary/10 text-primary text-sm font-bold px-5 py-2.5 rounded-full shadow-sm">
              <Shield className="w-4 h-4 text-secondary" />
              More 10+ 
            </span>
          </div>
        </motion.div>

        {/* SUBSECTION 1 - Coverage Types */}
        <div className="mb-24">
          <motion.h3
            className="text-3xl font-extrabold text-primary mb-12 text-center"
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
                className="bg-white rounded-2xl shadow-md border-t-4 border-t-secondary border-x border-b border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="mb-6 text-secondary">
                  {coverage.icon}
                </div>

                {/* Title & Description */}
                <h4 className="text-2xl font-bold text-primary mb-3">
                  {coverage.title}
                </h4>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                  {coverage.description}
                </p>

                {/* Details */}
                <ul className="space-y-4">
                  {coverage.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-semibold">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 2 - Plan Types */}
        <div className="mb-24">
          <motion.h3
            className="text-3xl font-extrabold text-primary mb-12 text-center"
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
                className={`rounded-2xl shadow-lg border p-8 hover:shadow-xl transition-all duration-300 relative flex flex-col ${plan.bgClass}`}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-primary text-xs font-black px-5 py-2 rounded-full shadow-lg tracking-wider">
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
                  <span className="inline-block text-xs font-black text-gray-400 mb-2 tracking-widest uppercase">
                    {plan.label}
                  </span>
                )}

                {/* Title */}
                <h4 className="text-2xl font-bold mb-3 text-primary">
                  {plan.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow font-medium">
                  {plan.description}
                </p>

                {/* Best For */}
                <div className={`pt-6 border-t ${plan.isHighlighted ? "border-secondary/30" : "border-gray-200"}`}>
                  <p className="text-sm text-gray-500 font-medium">
                    Best for: <span className="text-primary font-bold">{plan.bestFor}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 3 - What You Get For Free */}
        <motion.div
          className="bg-secondary rounded-3xl p-8 lg:p-16 mb-24 shadow-2xl relative overflow-hidden"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-3xl lg:text-4xl font-black text-primary mb-12 text-center">
              Extra Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {freeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white/40 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/60 transition-all border border-white/20"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...fadeInUp.transition, delay: index * 0.05 }}
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={4} />
                  </div>
                  <span className="text-primary font-bold text-lg leading-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-white rounded-3xl p-12 border border-gray-100 shadow-xl"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <h3 className="text-3xl font-extrabold text-primary mb-4">
            Need Help Choosing Your Plan?
          </h3>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Talk to our insurance experts. They'll help you find the perfect coverage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary Button */}
            <Link
              href="/quote"
              className="inline-flex items-center gap-3 bg-secondary text-primary font-bold py-4 px-10 rounded-xl text-lg shadow-xl hover:bg-opacity-90 transition-all"
            >
              TALK TO AN EXPERT
              <MessageSquare className="w-6 h-6" />
            </Link>

            {/* Secondary Button */}
            {/* <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-4 border-primary text-primary font-black py-4.5 px-12 rounded-2xl text-xl hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              GET FREE QUOTE
              <ChevronRight className="w-6 h-6" />
            </Link> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
