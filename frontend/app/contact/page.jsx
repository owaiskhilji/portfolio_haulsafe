"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Phone, Mail, Clock, Send, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  businessName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const springTransition = {
  type: "spring",
  stiffness: 50,
  damping: 15,
};

const fadeInUp = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: springTransition,
};

const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: springTransition,
};

const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: springTransition,
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    alert("Thank you! Your message has been sent. We'll get back to you soon.");
    reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "haulsafeinsurance@gmail.com",
      link: "mailto:haulsafeinsurance@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+923100000000",
      link: "tel:+923100000000",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "abc",
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon-Fri, 9AM-6PM EST",
      link: null,
    },
  ];

  const subjects = [
    { value: "", label: "Select a Subject" },
    { value: "insurance-quote", label: "Insurance Quote" },
    { value: "fmcsa-compliance", label: "FMCSA Compliance" },
    { value: "business-formation", label: "Business Formation / LLC" },
    { value: "existing-policy", label: "Existing Policy Inquiry" },
    { value: "claims", label: "Claims Support" },
    { value: "referral", label: "Referral Program" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.section
        className="bg-primary py-20 px-4"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={fadeInUp.transition}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-200 text-lg">
            We're here to help with all your trucking insurance needs.
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Direct Info */}
          <motion.div
            initial={slideInLeft.initial}
            animate={slideInLeft.animate}
            transition={slideInLeft.transition}
          >
            <h2 className="text-3xl font-bold text-[#063B29] mb-8">
              Get in Touch with Our Experts
            </h2>
            <p className="text-gray-700 leading-relaxed mb-10">
              Have questions about trucking insurance, FMCSA compliance, or need
              help with your policy? Our team is ready to assist you. Reach out
              using any of the methods below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-5"
                  whileHover={{ scale: 1.02 }}
                  transition={springTransition}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-[#D4AF37]">{item.icon}</div>
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-lg font-bold text-[#063B29] mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-700 hover:text-[#D4AF37] transition-colors"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.details}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-12 p-6 bg-accent rounded-xl border border-secondary/20"
              whileHover={{ scale: 1.02 }}
              transition={springTransition}
            >
              <h3 className="text-lg font-bold text-[#063B29] mb-2">
                Why Contact HaulSafe?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">✓</span>
                  <span>50% upfront payment facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">✓</span>
                  <span>7-day complete legal setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">✓</span>
                  <span>Expert FMCSA compliance support</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-10"
            initial={slideInRight.initial}
            animate={slideInRight.animate}
            transition={slideInRight.transition}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-bold text-[#063B29] mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  {...register("businessName")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  placeholder="Your Trucking Business LLC"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#D4AF37]"
                    } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#D4AF37]"
                    } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("subject")}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all`}
                >
                  {subjects.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("message")}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-primary font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  "SENDING..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
