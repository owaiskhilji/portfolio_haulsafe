"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Zap,
  CheckCircle2,
  FileText,
  Shield,
  User,
  Bell,
  Award,
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

const features = [
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Get a Free Quote for LLC Formation",
    description:
      "Name check, Articles of Organization, EIN from IRS, operating agreement.",
  },
    {
    icon: <Shield className="w-7 h-7" />,
    title: "USDOT & MC Filing",
    description:
      "USDOT & MC Filing active within 48 hours after insurance is authorized for property. MC active in 5-10 business days. BOC-3 active in 1-2 hours",
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    title: "50% Payment + EMI",
    description:
      "Pay 50% upfront. Rest over 6 months. Never empty your savings again. Your policy becomes active immediately.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Policy Active in 3-4 Days",
    description:
      "Not weeks. We submit same day. You get certificate fast. You are on the road earning.",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7" />,
    title: "One Document Checklist, Not 10",
    description:
      "Complete checklist once. No back and forth. No asking for same document 5 times. You provide it once. We handle the rest.",
  },
  
  {
    icon: <User className="w-7 h-7" />,
    title: "Dedicated Compliance Expert",
    description:
      "One person who knows your name and your file. You never explain your situation multiple times. Personal attention, always.",
  },
  {
    icon: <Bell className="w-7 h-7" />,
    title: "Renewal Reminders",
    description:
      "Never miss a deadline again. Annual report, UCR, insurance, MC authority - we track everything and remind you.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "No-Fine Guarantee",
    description:
      "If we make an error that results in a fine, we fix it for free AND we pay the fine. You never pay for our mistake.",
  },
];

export default function RoadmapSection() {
  return (
    <section id="solution" className="py-20 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            The HaulSafe Solution
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We Handle Everything. You Drive With Peace of Mind.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <div className="text-secondary">{feature.icon}</div>
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why We're Different Box */}
        <motion.div
          className="bg-secondary rounded-2xl p-8 lg:p-12 mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-extrabold text-primary mb-6 text-center">
              Why We&apos;re Different
            </h3>
            <p className="text-primary/90 text-lg leading-relaxed text-center">
              We only cover trucking and commercial auto. We are specialists. We
              know the trucking industry better than anyone. With 100% legal
              authority, you can work in any state, take loads from any broker,
              and expand your fleet without fear.
            </p>
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
          <h3 className="text-3xl font-extrabold text-white mb-4">
            Stop Stressing. Start Driving.
          </h3>
          <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto">
            Get fully legal in 7 business days with our complete solution.
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
                GET YOUR FREE QUOTE NOW
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.button

              className="inline-flex items-center gap-3 bg-transparent border-2 border-secondary text-secondary font-bold py-4 px-10 rounded-xl text-lg hover:bg-secondary/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
              href="#7days"
              >
                LEARN ABOUT 7-DAY PROCESS
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
