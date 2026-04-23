"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronLeft, Send, CheckCircle2 } from "lucide-react";
import ServicesModal from "./ServicesModal";

export default function FormStep3({ 
  register, 
  errors, 
  submitStatus, 
  onPrev, 
  variants, 
  direction,
  watch,
  setValue
}) {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const selectedServices = watch("services") || [];

  return (
    <motion.div
      key="step3"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="space-y-8"
    >
      <ServicesModal 
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        selectedServices={selectedServices}
        onApply={(services) => setValue("services", services, { shouldValidate: true })}
      />

      <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
        <CheckCircle className="w-6 h-6 text-secondary" />
        Services & Finalize
      </h2>

      {/* Services Selection Trigger */}
      <div>
        <label className="block text-lg font-bold text-primary mb-1">
          Services Needed <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-gray-600 mb-4">
          Click to select all services you need help with:
        </p>
        
        <button
          type="button"
          onClick={() => setIsServicesModalOpen(true)}
          className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
            selectedServices.length > 0
              ? "bg-white border-secondary shadow-md"
              : "bg-white border-gray-200 hover:border-secondary/50"
          }`}
        >
          {selectedServices.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedServices.slice(0, 2).map(service => (
                <span key={service} className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-bold border border-secondary/30">
                  {service}
                </span>
              ))}
              {selectedServices.length > 2 && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  +{selectedServices.length - 2} more
                </span>
              )}
            </div>
          ) : (
            <span className="text-gray-400 font-bold">Select Services...</span>
          )}
        </button>
        
        {errors.services && (
          <p className="text-red-500 text-xs font-bold mt-2">
            {errors.services.message}
          </p>
        )}
      </div>

      {/* Referral & Additional Message */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
        <div>
          <label className="block text-sm font-bold text-primary mb-2">
            Who referred you? (Optional)
          </label>
          <input
            type="text"
            {...register("referral")}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all placeholder:text-gray-400"
            placeholder="Friend or colleague's name"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">
            Additional Message (Optional)
          </label>
          <textarea
            {...register("message")}
            rows="1"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all resize-none placeholder:text-gray-400"
            placeholder="Any additional details..."
          />
        </div>
      </div>

      {/* Back & Submit Buttons */}
      <div className="flex flex-col-reverse md:flex-row gap-4 pt-6">
        <motion.button
          type="button"
          onClick={onPrev}
          disabled={submitStatus === "sending"}
          className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </motion.button>
        <motion.button
          type="submit"
          disabled={submitStatus === "sending" || submitStatus === "success"}
          className={`flex-1 font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2 shadow-xl ${
            submitStatus === "sending"
              ? "bg-gray-400 cursor-not-allowed"
              : submitStatus === "success"
              ? "bg-green-500 text-white"
              : submitStatus === "error"
              ? "bg-red-500 text-white"
              : "bg-secondary text-primary hover:bg-opacity-90"
          }`}
          whileHover={submitStatus === "idle" ? { scale: 1.01 } : {}}
          whileTap={submitStatus === "idle" ? { scale: 0.99 } : {}}
        >
          {submitStatus === "sending" ? (
            "SUBMITTING..."
          ) : submitStatus === "success" ? (
            <>
              <CheckCircle2 className="w-6 h-6" />
              SUBMITTED
            </>
          ) : submitStatus === "error" ? (
            "TRY AGAIN"
          ) : (
            <>
              <Send className="w-5 h-5" />
              GET MY FREE QUOTE
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
