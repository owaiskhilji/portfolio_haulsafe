"use client";

import { motion } from "framer-motion";
import { User, ChevronRight } from "lucide-react";

export default function FormStep1({ register, errors, isStepValid, onNext, variants, direction }) {
  return (
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
      <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
        <User className="w-6 h-6 text-secondary" />
        Personal Information
      </h2>

      {/* Full Legal Name */}
      <div>
        <label className="block text-sm font-bold text-primary mb-2">
          Full Legal Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register("fullName")}
          className={`w-full px-4 py-3 rounded-xl border-2 ${
            errors.fullName
              ? "border-red-500"
              : "border-gray-200 focus:border-secondary"
          } focus:outline-none transition-all placeholder:text-gray-400`}
          placeholder="John A. Doe"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs font-medium mt-1">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-primary mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className={`w-full px-4 py-3 rounded-xl border-2 ${
              errors.email
                ? "border-red-500"
                : "border-gray-200 focus:border-secondary"
            } focus:outline-none transition-all placeholder:text-gray-400`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs font-medium mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("phone")}
            className={`w-full px-4 py-3 rounded-xl border-2 ${
              errors.phone
                ? "border-red-500"
                : "border-gray-200 focus:border-secondary"
            } focus:outline-none transition-all placeholder:text-gray-400`}
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs font-medium mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <motion.button
        type="button"
        onClick={onNext}
        disabled={!isStepValid}
        className="w-full bg-secondary text-primary font-bold py-4 px-8 rounded-xl text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={isStepValid ? { scale: 1.01 } : {}}
        whileTap={isStepValid ? { scale: 0.99 } : {}}
      >
        Next Step
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}
