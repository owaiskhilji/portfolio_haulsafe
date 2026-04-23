"use client";

import { CheckCircle2, Clock, DollarSign, ArrowRight, Zap } from 'lucide-react';
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

  const getCardContent = (category, slug) => {
    if (category === 'Business') {
      const businessMap = {
        'llc-formation': "Start your journey on the right legal footing. Build a solid foundation for your trucking legacy today.",
        'ein-tax-id': "Unlock your business banking and hiring power. Get your official IRS tax ID processed with lightning speed.",
        'boi-report': "Stay ahead of federal regulations and avoid heavy fines. Secure your business transparency compliance now.",
        'annual-report-filing': "Never miss a deadline or lose your good standing. Let us handle the paperwork while you focus on the road.",
        'llc-amendment': "Business evolving? Keep your legal records accurate and up-to-date with seamless state-level amendments.",
        'operating-agreement': "Protect your assets and define your rules. Get a custom-drafted agreement that secures your business future.",
        'dba-filing': "Expand your brand and trade with confidence. Register your business name and start operating under your new identity.",
      };
      return businessMap[slug] || `Launch your trucking company today. Get a fast-track setup for ${service.title} with our expert team.`;
    }

    if (category === 'Authority') {
      const authorityMap = {
        'usdot-number': "Get your USDOT number active and ready. Don't let paperwork stall your engine—we handle the FMCSA for you.",
        'mc-number': "Ready to go for-hire? Secure your interstate operating authority and start booking high-paying loads.",
        'boc3-filing': "Instant process agent designation in all 50 states. We file your BOC-3 in minutes so your authority can go live.",
        'ucr-registration': "Stay compliant and avoid roadside fines. We manage your annual Unified Carrier Registration with zero hassle.",
        'mc-authority-letter': "Get the official proof of your power. Secure your FMCSA authority letter and start signing broker contracts today.",
      };
      return authorityMap[slug] || `Secure your operating authority today. Get expert assistance with ${service.title} for a smooth activation.`;
    }

    if (category === 'Insurance') {
      const insuranceMap = {
        'vehicle-insurance': "Protect your heavy-duty assets with the industry's best. Secure 50% upfront coverage and keep your fleet moving with confidence.",
        'truck-general-liability': "Shield your business from the unexpected. Get robust liability protection for only 50% upfront and drive with total peace of mind.",
        'professional-liability': "Expert protection for logistics professionals. Safeguard your career against errors with our flexible 50% upfront payment plan.",
        'commercial-auto': "Stay FMCSA compliant and fully protected on the open road. Get custom insurance solutions for just 50% upfront today.",
      };
      return insuranceMap[slug] || `Get a personalized quote for ${service.title} with our 50% upfront payment plan.`;
    }

    return `Get a personalized quote for ${service.title} with our 50% upfront payment plan.`;
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
                {getCardContent(service.category, service.slug)}
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
                    {service.category === 'Business' || service.category === 'Authority' ? (
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    ) : (
                      <DollarSign className="w-6 h-6 text-secondary" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {service.category === 'Business' ? 'Expert Compliance' : 
                       service.category === 'Authority' ? 'Fast Activation' : 
                       '50% Upfront'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {service.category === 'Business' ? '100% accurate filings ensuring your business stays in good standing' :
                       service.category === 'Authority' ? 'Rapid processing to get your operating authority active as quickly as possible' :
                       'Pay only half upfront with flexible payment plans'}
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
