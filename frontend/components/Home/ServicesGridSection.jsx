"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  FileText,
  CheckCircle2,
  Award,
  ChevronRight,
  MessageSquare,
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

const fadeInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: springTransition,
};

const timelineSteps = [

  {
    icon: <FileText className="w-7 h-7" />,
    day: "1",
    label: "Day 1",
    title: "USDOT & MC Application Filed",
    isHighlighted: false,
    tasks: [
      "USDOT active within 48 hours",
      "We file MC application",
    ],
  },  {
    icon: <FileCheck className="w-7 h-7" />,
    day: "2",
    label: "Day 2",
    title: "Share Your Details & We Get Started",
    isHighlighted: false,
    tasks: [
      "You share business details",
      "We assign your dedicated compliance expert",
      "We file BOC-3 (active in 1-2 hours)",
    ],
  },
  {
    icon: <CheckCircle2 className="w-7 h-7" />,
    day: "3-4",
    label: "Days 3-4",
    title: "Insurance Approved & Policy Active",
    isHighlighted: true,
    tasks: [
      "Insurance approved by GEICO, Progressive, and 10+ other",
      "We submit insurance application",
      "You pay 50% (rest over 6 months)",
      "Your policy becomes ACTIVE",
      "Certificate issued to you",
    ],
  },
  {
    icon: <Award className="w-7 h-7" />,
    day: "5-7",
    label: "Days 5-7",
    title: "MC & Full Legal Authority",
    isHighlighted: false,
    tasks: [
      "MC approved",
      "MC Authority Letter issued",
      "UCR filed",
      "You are 100% LEGAL & READY",
    ],
  },
];

export default function ServicesGridSection() {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-4xl mx-auto ">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <h2 id="7days" className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Get Fully Legal in 7 Business Days
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our Step-by-Step Roadmap to Your Complete Setup
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2" />

          {/* Timeline Steps */}
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...fadeInLeft.transition, delay: index * 0.15 }}
            >
              {/* Icon Circle */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                    step.isHighlighted
                      ? "bg-secondary border-secondary/30"
                      : "bg-primary border-primary/20"
                  }`}
                >
                  <div className={step.isHighlighted ? "text-primary" : "text-white"}>
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? "md:pr-16" : "md:pl-16"
              }`}>
                <motion.div
                  className={`rounded-2xl shadow-lg border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl ${
                    step.isHighlighted
                      ? "bg-secondary/10 border-secondary"
                      : "bg-white border-gray-200"
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {/* Day Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold ${
                        step.isHighlighted
                          ? "bg-secondary text-primary"
                          : "bg-primary text-white"
                      }`}
                    >
                      {step.day}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        step.isHighlighted ? "text-secondary" : "text-primary/70"
                      }`}
                    >
                      {step.label} ✓
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      step.isHighlighted ? "text-primary" : "text-[#063B29]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Tasks */}
                  <ul className="space-y-3">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            step.isHighlighted
                              ? "text-primary"
                              : "text-secondary"
                          }`}
                        />
                        <span className="text-gray-700 leading-snug">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <h3 className="text-3xl font-extrabold text-primary mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Your 7-day journey to legal trucking authority starts now.
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
            {/* <motion.button
              className="inline-flex items-center gap-3 bg-transparent border-2 border-primary text-primary font-bold py-4 px-10 rounded-xl text-lg hover:bg-primary/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageSquare className="w-5 h-5" />
              TALK TO AN EXPERT
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
