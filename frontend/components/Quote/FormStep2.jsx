"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import ToggleField from "./ToggleField";
import usStates from "@/constants/usStates.json";

export default function FormStep2({ 
  register, 
  errors, 
  isStepValid, 
  onNext, 
  onPrev, 
  variants, 
  direction,
  watch,
  setValue
}) {
  const hasLLC = watch("hasLLC");
  const hasUSDOT = watch("hasUSDOT");

  return (
    <motion.div
      key="step2"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
        <Building2 className="w-6 h-6 text-secondary" />
        Business & Setup
      </h2>

      {/* Main Questions */}
      <div className="space-y-6 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
        <div>
          <label className="block text-sm font-bold text-primary mb-2">
            Number of Trucks
          </label>
          <input
            type="number"
            {...register("numberOfTrucks")}
            className="w-full md:w-1/3 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all"
            placeholder="1"
            min="1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ToggleField 
            name="hasLLC" 
            label="Do you have LLC?" 
            value={hasLLC} 
            setValue={setValue} 
          />
          <ToggleField 
            name="hasUSDOT" 
            label="Do you have USDOT?" 
            value={hasUSDOT} 
            setValue={setValue} 
          />
        </div>
      </div>

      {/* Conditional LLC Field */}
      <AnimatePresence>
        {hasLLC && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/20 space-y-4">
              <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("businessName")}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.businessName ? 'border-red-500' : 'border-gray-200 focus:border-secondary'} focus:outline-none transition-all`}
                    placeholder="Your Business Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    LLC State <span className="text-red-500">*</span>
                  </label>
                  <select 
                    {...register("llcState")} 
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.llcState ? 'border-red-500' : 'border-gray-200 focus:border-secondary'} focus:outline-none transition-all bg-white`}
                  >
                    <option value="">Select State</option>
                    {usStates.states.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conditional USDOT Fields */}
      <AnimatePresence>
        {hasUSDOT && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 space-y-6">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider">USDOT & Vehicle Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">USDOT Number</label>
                  <input type="text" {...register("usdotNumber")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="Enter USDOT Number" />
                </div> 
                
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">VIN Number</label>
                  <input type="text" {...register("vinNumber")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="Enter VIN" />
                </div>
                
              </div>
              


              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Make</label>
                  <input type="text" {...register("vehicleMake")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="e.g., Freightliner, Volvo" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Model</label>
                  <input type="text" {...register("vehicleModel")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="e.g., Cascadia" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Year</label>
                  <input type="number" {...register("vehicleYear")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="2020" />
                </div>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Date of Birth</label>
                  <input type="date" {...register("dob")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">SSN</label>
                  <input type="text" {...register("ssn")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="XXX-XX-XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">EIN Number</label>
                  <input type="text" {...register("ein")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="XX-XXXXXXX" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back & Next Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <motion.button
          type="button"
          onClick={onPrev}
          className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </motion.button>
        <motion.button
          type="button"
          onClick={onNext}
          disabled={!isStepValid}
          className="flex-1 bg-secondary text-primary font-bold py-4 px-8 rounded-xl text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={isStepValid ? { scale: 1.01 } : {}}
          whileTap={isStepValid ? { scale: 0.99 } : {}}
        >
          Next Step
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
