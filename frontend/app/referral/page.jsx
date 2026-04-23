"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  UserPlus, 
  Gift, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  UserCheck,
  BarChart3,
  Percent,
  PhoneCall
} from "lucide-react";
import Link from "next/link";

const springTransition = {
  type: "spring",
  stiffness: 50,
  damping: 15,
};

export default function ReferralProgram() {
  const tiers = [
    {
      id: "tier-1",
      title: "Existing Clients",
      badge: "10% Discount",
      description: "If YOU are already a HaulSafe client and refer someone to our services.",
      benefit: "Your referral gets 10% off their first payment.",
      example: "Example: Ali (client) referred Zaid → Zaid gets 10% discount",
      icon: <Users className="w-8 h-8" />,
      highlight: true
    },
    {
      id: "tier-2",
      title: "New Referrals",
      badge: "5% Discount",
      description: "If YOU are NOT a HaulSafe client but want to share our services with others.",
      benefit: "Your referral gets 5% off their first payment.",
      example: "Example: Owais (non-client) referred Zaid → Zaid gets 5% discount",
      icon: <UserPlus className="w-8 h-8" />,
      highlight: false
    }
  ];

  const steps = [
    {
      title: "Connect with Us",
      description: "Contact our experts to let us know you're referring someone.",
      icon: <PhoneCall className="w-6 h-6" />
    },
    {
      title: "Share Details",
      description: "Give your name or business details to your network.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Mention Referral",
      description: "They provide your name as a reference during the quote process.",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Everyone Wins",
      description: "They get an instant discount, and you earn referral credit.",
      icon: <Gift className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF0]">
      {/* Hero Section */}
      <section className="bg-[#063B29] py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#D2BD69] blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#D2BD69] blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D2BD69]/20 text-[#D2BD69] text-sm font-bold mb-6 border border-[#D2BD69]/30">
              HAULSAFE REWARDS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Referral Program - <span className="text-[#D2BD69]">Earn Rewards</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Share HaulSafe with your network and help others secure premium trucking insurance 
              and FMCSA compliance while earning exclusive benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Referral Tiers */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 pb-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: index * 0.2 }}
              className={`rounded-3xl p-8 shadow-2xl border-2 flex flex-col ${
                tier.highlight 
                ? "bg-white border-[#D2BD69]" 
                : "bg-white border-gray-100"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${tier.highlight ? "bg-[#D2BD69]/10 text-[#D2BD69]" : "bg-[#063B29]/10 text-[#063B29]"}`}>
                  {tier.icon}
                </div>
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                  tier.highlight ? "bg-[#D2BD69] text-[#063B29]" : "bg-[#063B29] text-white"
                }`}>
                  {tier.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#063B29] mb-4">{tier.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{tier.description}</p>
              
              <div className="bg-[#FDFCF0] rounded-2xl p-6 border border-[#D2BD69]/20 mb-6">
                <div className="flex items-center gap-3 mb-2 text-[#063B29] font-bold">
                  <Percent className="w-5 h-5 text-[#D2BD69]" />
                  What they get:
                </div>
                <p className="text-gray-700 font-medium">{tier.benefit}</p>
              </div>

              <p className="text-sm text-gray-500 italic flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D2BD69]" />
                {tier.example}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#063B29] mb-4">How It Works</h2>
            <div className="w-20 h-1.5 bg-[#D2BD69] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-100 z-0"></div>
                )}
                
                <div className="relative z-10 mb-6">
                  <div className="w-24 h-24 rounded-full bg-[#063B29] text-[#D2BD69] mx-auto flex items-center justify-center border-4 border-[#FDFCF0] shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 right-1/2 translate-x-12 w-8 h-8 rounded-full bg-[#D2BD69] text-[#063B29] flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-[#063B29] mb-2">{step.title}</h4>
                <p className="text-gray-600 px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracker Section (Future) */}
      <section className="py-20 bg-[#FDFCF0]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#063B29] rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl overflow-hidden relative"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <BarChart3 className="w-40 h-40 text-white" />
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#D2BD69] text-sm font-bold mb-6">
              COMING SOON
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Referral Tracker Dashboard
            </h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              We are building a personalized dashboard where you'll be able to login, 
              track your referrals in real-time, see your conversions, and manage your total discounts earned.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                "Unique ID",
                "Referral Count",
                "Conversion Rate",
                "Total Credits"
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <p className="text-white font-medium text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#063B29] mb-8">
              Start Building Your Network Today
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#D2BD69] text-[#063B29] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#D2BD69]/90 transition-all shadow-xl hover:shadow-[#D2BD69]/20 group"
            >
              Contact Us to Start
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-6 text-gray-500 font-medium">
              Join dozens of truckers who are already saving with HaulSafe.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
