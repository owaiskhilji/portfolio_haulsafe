"use client";

import { motion } from "framer-motion";

export default function QuoteFormHeader() {
  return (
    <motion.section
      className="bg-primary py-16 px-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get a Free Quote
        </h1>
        <p className="text-gray-200 text-lg">
          Fill out the form below. We will contact you within 12 hours. No obligation.
        </p>
      </div>
    </motion.section>
  );
}
