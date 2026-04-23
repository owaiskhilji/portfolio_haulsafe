"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  Zap,
  ChevronRight,
  Percent,
  Calendar,
  ShieldCheck,
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

export default function PaymentPlanSection() {
  return (
    <section className="py-20 px-4 bg-accent ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <h2 id="arrow" className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Our Payment Plan — 50% Upfront, Rest Later
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            No Need to Empty Your Savings
          </p>
        </motion.div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - How It Works */}
          <motion.div
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              How It Works
            </h3>
            <ul className="space-y-5 flex-grow">
              {[
                "You pay 50% upfront",
                "We pay 50% to the insurance company",
                "A 5% service fee will apply",
                "50% balance in monthly installments",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-xs">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{step}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 - Example Breakdown (Featured) */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl border-4 border-secondary p-8 flex flex-col transform md:scale-105 relative z-10"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Calculator className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Example Breakdown
            </h3>
            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Quote Amount</span>
                <span className="font-bold text-primary text-xl">$3,400</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">You Pay Now</span>
                <span className="font-extrabold text-secondary text-2xl">
                  $1,700
                  {/* <span className="text-xs text-gray-500 ml-1 font-normal">
                    (50%)
                  </span> */}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">
                  Monthly Installment
                </span>
                <span className="font-bold text-primary text-lg">
                  $298/mo
                  {/* <span className="text-xs text-gray-500 ml-1 font-normal">
                    for 6 mo
                  </span> */}
                </span>
              </div>
              <div className="mt-6 p-4 bg-accent rounded-xl border border-secondary/20">
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">Total You Owe</span>
                  <div className="text-right">
                    <p className="font-extrabold text-primary text-2xl">
                      $1,785
                    </p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                      Includes 5% fee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Flexible & Easy */}
          <motion.div
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Flexible & Easy
            </h3>
            <ul className="space-y-6 flex-grow">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Percent className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-primary leading-tight">
                    Referral Discount
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Existing client = <span className="font-bold">10% </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Non-client = <span className="font-bold">5%</span>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-primary leading-tight">
                    Cancel Anytime
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    1 month notice required
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-primary leading-tight">
                    No Hidden Fees
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Transparent pricing always
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <Link
            href="/quote"
              className="inline-flex items-center gap-3 bg-secondary text-primary font-bold py-4 px-10 rounded-xl text-lg shadow-xl hover:bg-opacity-90 transition-all"
          >
            GET YOUR FREE QUOTE NOW
            <ChevronRight className="w-6 h-6" />
          </Link>
          <p className="text-gray-500 text-sm mt-6 font-medium">
            * Users can adjust their quote in the form itself
          </p>
        </motion.div>
      </div>
    </section>
  );
}
