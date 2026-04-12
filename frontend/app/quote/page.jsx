"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Building2, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import SuccessModal from "@/components/Shared/SuccessModal";
import { servicesData } from "@/constants/servicesData";

const formSchema = z.object({
  fullName: z.string().min(2, "Full Legal Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  businessName: z.string().optional(),
  numberOfTrucks: z.string().optional(),
  hasLLC: z.boolean().optional(),
  hasUSDOT: z.boolean().optional(),
  hasMC: z.boolean().optional(),
  services: z.array(z.string()).min(1, "Select at least one service"),
  referral: z.string().optional(),
  message: z.string().optional(),
});

const services = servicesData.map((service) => service.title);

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasLLC: false,
      hasUSDOT: false,
      hasMC: false,
      services: [],
    },
  });

  const selectedServices = watch("services");

  const toggleService = (service) => {
    const current = selectedServices || [];
    if (current.includes(service)) {
      setValue(
        "services",
        current.filter((s) => s !== service)
      );
    } else {
      setValue("services", [...current, service]);
    }
  };

  const nextStep = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger(["fullName", "email", "phone"]);
    } else if (currentStep === 2) {
      isValid = await trigger(["businessName", "numberOfTrucks"]);
    }

    if (isValid) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (data) => {
    console.log("Quote submitted:", data);
    setShowModal(true);
    reset();
    setCurrentStep(1);
  };

  const ToggleField = ({ name, label }) => {
    const value = watch(name);
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {label}
        </label>
        <div className="flex gap-3">
          <motion.button
            type="button"
            className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
              value === true
                ? "bg-secondary border-secondary text-primary"
                : "bg-white border-gray-300 text-gray-600 hover:border-secondary"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setValue(name, true)}
          >
            Yes
          </motion.button>
          <motion.button
            type="button"
            className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
              value === false
                ? "bg-gray-200 border-gray-400 text-gray-700"
                : "bg-white border-gray-300 text-gray-600 hover:border-secondary"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setValue(name, false)}
          >
            No
          </motion.button>
        </div>
      </div>
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-accent">
      {/* Header */}
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

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700">
                Step {currentStep} of 3
              </span>
              <span className="text-sm font-semibold text-gray-700">
                {Math.round((currentStep / 3) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-secondary h-2 rounded-full"
                initial={{ width: "33.33%" }}
                animate={{ width: `${(currentStep / 3) * 100}%` }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence custom={direction} mode="wait">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-[#063B29] mb-6 flex items-center gap-3">
                    <User className="w-6 h-6 text-secondary" />
                    Personal Information
                  </h2>

                  {/* Full Legal Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Legal Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.fullName
                          ? "border-red-500"
                          : "border-gray-300 focus:border-secondary"
                      } focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all`}
                      placeholder="John A. Doe"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            : "border-gray-300 focus:border-secondary"
                        } focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

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
                            : "border-gray-300 focus:border-secondary"
                        } focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Next Button */}
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-secondary text-primary font-bold py-4 px-8 rounded-xl text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Business & Setup */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-[#063B29] mb-6 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-secondary" />
                    Business & Setup
                  </h2>

                  {/* Business Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        {...register("businessName")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                        placeholder="Your Trucking LLC"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Number of Trucks
                      </label>
                      <input
                        type="number"
                        {...register("numberOfTrucks")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                        placeholder="1"
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Quick Toggles */}
                  <div>
                    <h3 className="text-lg font-bold text-[#063B29] mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      Quick Setup
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <ToggleField name="hasLLC" label="Do you have LLC?" />
                      <ToggleField name="hasUSDOT" label="Do you have USDOT?" />
                      <ToggleField name="hasMC" label="Do you have MC Authority?" />
                    </div>
                  </div>

                  {/* Back & Next Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-secondary text-primary font-bold py-4 px-8 rounded-xl text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Services & Finalize */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-[#063B29] mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                    Services & Finalize
                  </h2>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Services Needed <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-600 mb-4">
                      Select all services you need help with:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {services.map((service) => {
                        const isSelected = selectedServices?.includes(service);
                        return (
                          <motion.button
                            key={service}
                            type="button"
                            className={`p-4 rounded-lg border-2 text-sm font-semibold transition-all ${
                              isSelected
                                ? "bg-secondary border-secondary text-primary"
                                : "bg-white border-gray-300 text-gray-700 hover:border-secondary"
                            }`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => toggleService(service)}
                          >
                            {service}
                          </motion.button>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.services.message}
                      </p>
                    )}
                  </div>

                  {/* Referral */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Who referred you? (Optional)
                    </label>
                    <input
                      type="text"
                      {...register("referral")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                      placeholder="Friend or colleague's name"
                    />
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      {...register("message")}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                      placeholder="Any additional details..."
                    />
                  </div>

                  {/* Back & Submit Buttons */}
                  <div className="flex flex-col-reverse md:flex-row gap-4">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-secondary text-primary font-bold py-4 px-8 rounded-xl text-sm md:text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        "SUBMITTING..."
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          SUBMIT FREE QUOTE REQUEST
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Quote Request Submitted!"
        message="Thank you for your interest! Our team will contact you within 12 hours to discuss your quote. No obligation, no pressure."
      />
    </div>
  );
}
