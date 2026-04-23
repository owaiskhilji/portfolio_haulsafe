"use client";

import { motion } from "framer-motion";
import {
  Share2,
  User,
  DollarSign,
  Zap,
  TrendingUp,
  ChevronRight,
  Info,
  Heart,
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

const fadeInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: springTransition,
};

const referralSteps = [
  {
    icon: <Share2 className="w-7 h-7" />,
    step: "1",
    title: "Share Your Link",
    description:
      "Get your unique referral link after submitting free quote request",
  },
  {
    icon: <User className="w-7 h-7" />,
    step: "2",
    title: "They Sign Up",
    description:
      "Your friend signs up and gets their insurance with HaulSafe",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    step: "3",
    title: "You Earn",
    description:
      "You earn 5% of their monthly premium every month",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    step: "4",
    title: "Lifetime Earnings",
    description:
      "As long as they stay with us, you keep earning. No limits. No expiration.",
  },
];

const earningScenarios = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    premium: "$1,000/month Premium",
    monthly: "$50/month",
    annual: "$600/year",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    premium: "$2,000/month Premium",
    monthly: "$100/month",
    annual: "$1,200/year",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    premium: "10 Referrals @ $1,500/month avg",
    monthly: "$750/month",
    annual: "$9,000/year",
  },
];

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Passive Income Opportunity
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Earn Money By Referring Truckers
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Help Your Fellow Truckers & Get Rewarded
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-gray-300 text-xs md:text-sm">
            <Heart className="w-4 h-4 text-secondary" />
            Trusted by 500+ truckers earning passive income
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-12 md:mb-16">
          {/* LEFT - How It Works */}
          <motion.div
            initial={fadeInLeft.initial}
            whileInView={fadeInLeft.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={fadeInLeft.transition}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
              How It Works
            </h3>

            <div className="relative space-y-6 md:space-y-8">
              {/* Vertical Connecting Line */}
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-secondary/30" />

              {referralSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-4 md:gap-6"
                  initial={fadeInLeft.initial}
                  whileInView={fadeInLeft.animate}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...fadeInLeft.transition, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {/* Icon Circle */}
                  <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <div className="text-secondary">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 hover:bg-white/10 hover:border-secondary/30 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary text-sm font-bold">
                        {step.step}
                      </span>
                      <h4 className="text-base md:text-lg font-bold text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Earning Examples */}
          <motion.div
            initial={fadeInRight.initial}
            whileInView={fadeInRight.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={fadeInRight.transition}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
              Earning Examples
            </h3>

            <div className="space-y-4 md:space-y-6">
              {earningScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 hover:bg-white/10 hover:border-secondary/30 transition-all"
                  initial={fadeInRight.initial}
                  whileInView={fadeInRight.animate}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...fadeInRight.transition, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon & Premium */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <div className="text-secondary">{scenario.icon}</div>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-white">
                      {scenario.premium}
                    </h4>
                  </div>

                  {/* Earnings */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-secondary/10 rounded-lg p-3 md:p-4 text-center">
                      <p className="text-gray-300 text-xs md:text-sm mb-1">Monthly</p>
                      <p className="text-xl md:text-2xl font-extrabold text-secondary">
                        {scenario.monthly}
                      </p>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-3 md:p-4 text-center">
                      <p className="text-gray-300 text-xs md:text-sm mb-1">Annual</p>
                      <p className="text-xl md:text-2xl font-extrabold text-secondary">
                        {scenario.annual}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Existing Client Bonus Box */}
        <motion.div
          className="bg-secondary rounded-2xl p-6 md:p-8 lg:p-12 mb-12 md:mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUp.transition}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs md:text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              Existing Clients Get Extra Benefits!
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-primary mb-6">
              Existing Clients Get Extra Benefits!
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white/50 rounded-xl p-4 md:p-6">
                <p className="text-primary font-bold text-sm md:text-base mb-2">
                  Refer Someone
                </p>
                <p className="text-primary/80 text-xs md:text-sm">
                  Get 10% discount on your own monthly bill
                </p>
              </div>
              <div className="bg-white/50 rounded-xl p-4 md:p-6">
                <p className="text-primary font-bold text-sm md:text-base mb-2">
                  No Limits
                </p>
                <p className="text-primary/80 text-xs md:text-sm">
                  Unlimited referrals allowed
                </p>
              </div>
              <div className="bg-white/50 rounded-xl p-4 md:p-6 border-2 border-primary/20">
                <p className="text-primary font-bold text-sm md:text-base mb-2">
                  Win-Win
                </p>
                <p className="text-primary/80 text-xs md:text-sm">
                  Discount + 5% earnings = double benefits
                </p>
              </div>
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
          <h3 className="text-3xl font-extrabold text-white mb-4">
            Ready to Start Earning?
          </h3>
          <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto">
            Get your unique referral link in less than 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Primary Button */}
            {/* <motion.div
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
                GET YOUR REFERRAL LINK
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div> */}

            {/* Secondary Button */}
            {/* <motion.button
              className="inline-flex items-center gap-3 bg-transparent border-2 border-secondary text-secondary font-bold py-4 px-10 rounded-xl text-lg hover:bg-secondary/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Info className="w-5 h-5" />
              LEARN MORE
            </motion.button> */}
          </div>

          <p className="text-gray-400 text-sm">
            No credit card required. Free to join.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
