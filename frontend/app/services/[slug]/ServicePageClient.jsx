"use client";

import { CheckCircle2, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: 'spring', stiffness: 50, damping: 15 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function ServicePageClient({ service }) {
  const IconComponent = LucideIcons[service.iconName] || LucideIcons.Shield;

  const categoryColors = {
    Insurance: 'bg-blue-500',
    Authority: 'bg-purple-500',
    Business: 'bg-green-500',
    Tax: 'bg-orange-500',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Half-height dark green banner */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] bg-[#063B29] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <IconComponent className="w-64 h-64 text-white" />
          </div>
          <div className="absolute bottom-10 right-10">
            <IconComponent className="w-48 h-48 text-white" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <span
              className={`inline-block ${categoryColors[service.category] || 'bg-secondary'} text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6`}
            >
              {service.category}
            </span>

            {/* Service Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {service.title}
            </h1>

            {/* Short Description */}
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
              {service.description.substring(0, 120)}...
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave/Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-accent" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </section>

      {/* Main Content - Two Columns */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Column - Main Content (70%) */}
          <motion.div variants={fadeInUp} className="space-y-10">
            {/* Large Icon & Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <IconComponent className="w-10 h-10 text-secondary" />
              </div>

              <h2 className="text-3xl font-bold text-[#063B29] mb-4">
                About {service.title}
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>

            {/* What's Included Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-[#063B29] mb-8 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-secondary" />
                What's Included
              </h2>

              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Action Sidebar (30%) */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {/* Get a Quote Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-secondary sticky top-24">
              <h3 className="text-2xl font-bold text-[#063B29] mb-4">
                Ready to Get Started?
              </h3>

              <p className="text-gray-600 mb-6">
                Get a personalized quote for {service.title} with our 50% upfront payment plan.
              </p>

              <Link
                href="/quote"
                className="w-full bg-secondary text-primary font-bold py-4 px-6 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 text-lg shadow-md"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-sm text-gray-500 text-center mt-3">
                Free • No obligation
              </p>
            </div>

            {/* Why Choose HaulSafe? Trust Box */}
            <div className="bg-[#063B29] text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-secondary">
                Why Choose HaulSafe?
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">7-Day Setup</h4>
                    <p className="text-gray-300 text-sm">
                      Complete legal and compliance setup in just 7 days
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">50% Upfront</h4>
                    <p className="text-gray-300 text-sm">
                      Pay only half upfront with flexible payment plans
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-accent rounded-2xl p-6 shadow-lg border border-secondary/20">
              <h3 className="text-lg font-bold text-[#063B29] mb-3">
                Have Questions?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our experts are ready to help you with {service.title}.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-primary text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
