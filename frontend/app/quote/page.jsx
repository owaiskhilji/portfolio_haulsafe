"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, User, Building2, Phone, Mail, Truck, CheckCircle } from "lucide-react";

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
});

const services = [
  "Trucking Insurance",
  "USDOT Registration",
  "MC Authority",
  "BOC-3 Filing",
  "UCR Registration",
  "EIN / Tax ID",
  "LLC Formation",
  "BOI Report",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } },
};

export default function Quote() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
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

  const onSubmit = async (data) => {
    console.log("Quote submitted:", data);
    alert("Thank you! Your quote request has been submitted. We'll contact you within 12 hours.");
    reset();
  };

  const ToggleField = ({ name, label, register }) => {
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Info */}
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-[#063B29] mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-secondary" />
                  Personal Information
                </h2>

                {/* Full Legal Name */}
                <div className="mb-6">
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
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        {...register("email")}
                        className={`w-full pl-11 pr-4 py-3 rounded-lg border ${
                          errors.email
                            ? "border-red-500"
                            : "border-gray-300 focus:border-secondary"
                        } focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all`}
                        placeholder="john@example.com"
                      />
                    </div>
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
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        {...register("phone")}
                        className={`w-full pl-11 pr-4 py-3 rounded-lg border ${
                          errors.phone
                            ? "border-red-500"
                            : "border-gray-300 focus:border-secondary"
                        } focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all`}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Business Info */}
              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-[#063B29] mb-6 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-secondary" />
                  Business Information
                </h2>

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
                    <div className="relative">
                      <Truck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        {...register("numberOfTrucks")}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                        placeholder="1"
                        min="1"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Toggles */}
              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-[#063B29] mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  Quick Setup
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ToggleField
                    name="hasLLC"
                    label="Do you have LLC?"
                    register={register}
                  />
                  <ToggleField
                    name="hasUSDOT"
                    label="Do you have USDOT?"
                    register={register}
                  />
                  <ToggleField
                    name="hasMC"
                    label="Do you have MC Authority?"
                    register={register}
                  />
                </div>
              </motion.div>

              {/* Services Needed */}
              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-[#063B29] mb-6">
                  Services Needed
                </h2>
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
              </motion.div>

              {/* Referral */}
              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-[#063B29] mb-6">
                  Referral (Optional)
                </h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Who referred you?
                  </label>
                  <input
                    type="text"
                    {...register("referral")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="Friend or colleague's name"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={item}
                className="pt-6"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-primary font-bold py-5 px-8 rounded-xl text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    "SUBMITTING..."
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      SUBMIT FREE QUOTE REQUEST
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
