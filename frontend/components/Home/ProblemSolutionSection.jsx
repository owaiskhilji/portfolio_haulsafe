"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  DollarSign,
  Clock,
  AlertTriangle,
  XCircle,
  Truck,
  ArrowDown,
} from "lucide-react";

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

const problems = [
  {
    icon: <DollarSign className="w-10 h-10" />,
    title: "Can't Pay Full Amount Upfront",
    description:
      "Most quotes are $1,000+. You have fuel to buy, maintenance to pay for, family to support. Paying full amount before policy starts is impossible.",
    accentColor: "bg-red-50 border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    headingColor: "text-red-700",
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Slow & Frustrating Process",
    description:
      "Agents waste your time for weeks. Ask for same documents 5+ times. Add hidden charges at last minute. You sit waiting while time passes.",
    accentColor: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    headingColor: "text-orange-700",
  },
  {
    icon: <AlertTriangle className="w-10 h-10" />,
    title: "Fake MC & DIY Filing Mistakes",
    description:
      "Fake MC providers sell incomplete authority. DIY filings cause $14,000+ FMCSA fines for one small mistake. Your truck gets parked.",
    accentColor: "bg-red-50 border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    headingColor: "text-red-700",
  },
  {
    icon: <XCircle className="w-10 h-10" />,
    title: "Missed Renewals = Business Shutdown",
    description:
      "Missed renewal = LLC dissolved, authority suspended, lost customers. One small filing mistake = audit, fines, or business completely shut down.",
    accentColor: "bg-red-50 border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    headingColor: "text-red-700",
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Truck Sits Parked = No Income",
    description:
      "No insurance, no authority, no loads, no income. Your truck sits idle. Bills keep coming. Lost time, lost money, unnecessary stress.",
    accentColor: "bg-red-100 border-red-300",
    iconBg: "bg-red-200",
    iconColor: "text-red-700",
    headingColor: "text-red-800",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-4 bg-accent border-4 border-white">
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
            The Real Problem
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Why Most Owner-Operators Operate Without Insurance
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl shadow-lg border p-8 hover:shadow-xl transition-all duration-300 ${problem.accentColor}`}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${problem.iconBg} rounded-full flex items-center justify-center mb-6`}
              >
                <div className={problem.iconColor}>{problem.icon}</div>
              </div>

              {/* Heading */}
              <h3
                className={`text-xl font-bold mb-4 ${problem.headingColor}`}
              >
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <p className="text-2xl font-bold text-primary mb-6">
            Stop Worrying. Get HaulSafe.
          </p>
          <motion.div
            className="inline-flex items-center gap-2"
            whileHover={{ y: 5 }}
            transition={springTransition}
          >
            <Link
              href="#solution"
              className="inline-flex items-center gap-3 bg-secondary text-primary font-bold py-4 px-10 rounded-xl text-lg shadow-xl hover:bg-opacity-90 transition-all"
            >
              DISCOVER OUR SOLUTION
              <ArrowDown className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
