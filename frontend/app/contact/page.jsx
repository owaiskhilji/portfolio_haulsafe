"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SuccessModal from "@/components/Shared/SuccessModal";
import { servicesData } from "@/constants/servicesData";

const formSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
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
  const [showModal, setShowModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle, sending, success, error
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    // Initialize EmailJS with Public Key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== "your_public_key_here") {
      emailjs.init(publicKey);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
  });

  const onSubmit = async (data) => {
    setSubmitStatus("sending");
    setStatusMessage("");

    const templateParams = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      business_name: data.businessName || "N/A",
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toLocaleString(),
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId || serviceId === "your_service_id_here") {
        throw new Error("EmailJS configuration missing");
      }

      await emailjs.send(serviceId, templateId, templateParams);

      setSubmitStatus("success");
      setStatusMessage("Thank you! We'll contact you soon.");
      setShowModal(true);
      reset();

      // Reset button state after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);

      // Hide status message after 5 seconds
      setTimeout(() => {
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setStatusMessage("Error sending message. Please try again.");
      
      // Reset button state after 3 seconds to allow retry
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "haulsafeinsurance@gmail.com",
      link: "mailto:haulsafeinsurance@gmail.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM, Sat-Sun: 9AM-3PM EST",
      link: null,
    },
  ];

  const subjects = [
    { value: "", label: "Select a Subject" },
    ...servicesData.map((service) => ({
      value: service.slug,
      label: service.title,
    })),
    { value: "other", label: "Other" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.section
        className="bg-[#063B29] py-20 px-4"
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
                      <Link
                        href={item.link}
                        className="text-gray-700 hover:text-[#D4AF37] transition-colors"
                      >
                        {item.details}
                      </Link>
                    ) : (
                      <p className="text-gray-700">{item.details}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-12 p-6 bg-[#FDFCF0] rounded-xl border border-[#D4AF37]/20"
              whileHover={{ scale: 1.02 }}
              transition={springTransition}
            >
              <h3 className="text-lg font-bold text-[#063B29] mb-2">
                Why Contact HaulSafe?
              </h3>
              <ul className="space-y-2 text-gray-700">
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
          >
            <h2 className="text-2xl font-bold text-[#063B29] mb-6">
              Send Us a Message
            </h2>

            {/* Status Messages */}
            <AnimatePresence>
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{statusMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label 
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  {...register("fullName")}
                  aria-invalid={errors.fullName ? "true" : "false"}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Business Name */}
              <div>
                <label 
                  htmlFor="businessName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Business Name
                </label>
                <input
                  id="businessName"
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
                  <label 
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#D4AF37]"
                    } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label 
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#D4AF37]"
                    } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label 
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  {...register("subject")}
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all bg-white`}
                >
                  {subjects.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p id="subject-error" className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitStatus === "sending" || submitStatus === "success"}
                className={`w-full font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 ${
                  submitStatus === "sending"
                    ? "bg-gray-400 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-green-500 text-white"
                    : submitStatus === "error"
                    ? "bg-red-500 text-white"
                    : "bg-[#D4AF37] text-[#063B29] hover:bg-opacity-90"
                }`}
                whileHover={submitStatus === "idle" ? { scale: 1.02 } : {}}
                whileTap={submitStatus === "idle" ? { scale: 0.98 } : {}}
              >
                {submitStatus === "sending" ? (
                  "SENDING..."
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    SENT SUCCESSFULLY
                  </>
                ) : submitStatus === "error" ? (
                  "TRY AGAIN"
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

      {/* Success Modal */}
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Message Sent Successfully!"
        message="Thank you for contacting us! Our team will get back to you within 24 hours. We appreciate your interest in HaulSafe Insurance."
      />
    </div>
  );
}
