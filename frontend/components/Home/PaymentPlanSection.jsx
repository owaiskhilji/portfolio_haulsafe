"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Wallet,
  TrendingUp,
  Percent,
  Calendar,
  ShieldCheck,
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

export default function PaymentPlanSection() {
  const [quoteAmount, setQuoteAmount] = useState(1000);

  const upfrontPayment = quoteAmount * 0.5;
  const oneTimeFee = upfrontPayment * 0.05;
  const totalOwed = upfrontPayment + oneTimeFee;
  const monthlyPayment = totalOwed / 6;

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

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
            Our Payment Plan — 50% Upfront, Rest Later
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            No Need to Empty Your Savings
          </p>
        </motion.div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 - How It Works */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Wallet className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-5">
              How It Works
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <p className="text-gray-700">
                  You pay <span className="font-bold text-primary">50%</span>{" "}
                  upfront
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <p className="text-gray-700">
                  We pay 50% to the insurance company
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <p className="text-gray-700">
                  You repay your 50% over{" "}
                  <span className="font-bold text-primary">6 months</span>
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Card 2 - Example Breakdown */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border-2 border-secondary p-8 hover:shadow-xl transition-shadow"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Calculator className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-5">
              Example Breakdown
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">Quote Amount</span>
                <span className="font-bold text-primary text-lg">
                  {formatCurrency(quoteAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">You Pay Now</span>
                <span className="font-bold text-primary text-lg">
                  {formatCurrency(upfrontPayment)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">You Owe</span>
                <span className="font-bold text-secondary text-lg">
                  {formatCurrency(totalOwed)}
                  <span className="text-xs text-gray-500 ml-1 font-normal">
                    (incl. 5% fee)
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center py-3 bg-primary/5 rounded-lg px-3 mt-4">
                <span className="text-gray-800 font-semibold">
                  Monthly Payment
                </span>
                <span className="font-extrabold text-primary text-xl">
                  {formatCurrency(monthlyPayment)}
                  <span className="text-sm text-gray-600 font-normal">
                    /mo × 6
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Flexible & Easy */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-5">
              Flexible & Easy
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Percent className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">
                    Referral Discount
                  </p>
                  <p className="text-gray-700 text-sm">
                    Existing client ={" "}
                    <span className="font-bold text-secondary">0% fee</span>
                  </p>
                  <p className="text-gray-700 text-sm">
                    Non-client ={" "}
                    <span className="font-bold text-secondary">
                      2.5% fee
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">
                    Cancel Anytime
                  </p>
                  <p className="text-gray-700 text-sm">
                    1 month notice required
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">
                    No Hidden Fees
                  </p>
                  <p className="text-gray-700 text-sm">
                    Transparent pricing always
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Payment Calculator Slider */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-10"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Payment Calculator
          </h3>

          {/* Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700 font-semibold">
                Adjust Quote Amount
              </span>
              <span className="text-2xl font-extrabold text-primary">
                {formatCurrency(quoteAmount)}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={quoteAmount}
              onChange={(e) => setQuoteAmount(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
              style={{
                background: `linear-gradient(to right, #D2BD69 ${
                  ((quoteAmount - 500) / 4500) * 100
                }%, #e5e7eb ${((quoteAmount - 500) / 4500) * 100}%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>$500</span>
              <span>$5,000</span>
            </div>
          </div>

          {/* Real-time Calculation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-accent rounded-xl p-6 border border-secondary/20 text-center">
              <p className="text-gray-700 text-sm mb-2">You Pay Now</p>
              <p className="text-3xl font-extrabold text-primary">
                {formatCurrency(upfrontPayment)}
              </p>
            </div>
            <div className="bg-accent rounded-xl p-6 border border-secondary/20 text-center">
              <p className="text-gray-700 text-sm mb-2">Monthly Payment</p>
              <p className="text-3xl font-extrabold text-secondary">
                {formatCurrency(monthlyPayment)}
              </p>
              <p className="text-xs text-gray-500 mt-1">for 6 months</p>
            </div>
            <div className="bg-accent rounded-xl p-6 border border-secondary/20 text-center">
              <p className="text-gray-700 text-sm mb-2">Total You Owe</p>
              <p className="text-3xl font-extrabold text-primary">
                {formatCurrency(totalOwed)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                incl. {formatCurrency(oneTimeFee)} one-time fee
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
